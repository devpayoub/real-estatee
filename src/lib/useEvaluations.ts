import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface PropertyEvaluation {
  id: number;
  address: string;
  apt?: string;
  property_type: string;
  construction_year?: number;
  living_area?: string;
  property_photo_url?: string;
  bedrooms: string;
  bathrooms: string;
  parking_spaces: string;
  garages: string;
  sale_reason: string;
  renovations?: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  created_at: string;
}

export const useEvaluations = () => {
  const [evaluations, setEvaluations] = useState<PropertyEvaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvaluations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await supabase
        .from('property_evaluations')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setEvaluations(data || []);
    } catch (err) {
      console.error('Error fetching evaluations:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const deleteEvaluation = async (id: number) => {
    try {
      const { error: deleteError } = await supabase
        .from('property_evaluations')
        .delete()
        .eq('id', id);

      if (deleteError) {
        throw deleteError;
      }

      setEvaluations(prev => prev.filter(evaluation => evaluation.id !== id));
      return { success: true };
    } catch (err) {
      console.error('Error deleting evaluation:', err);
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'An error occurred' 
      };
    }
  };

  const getEvaluationById = (id: number) => {
    return evaluations.find(evaluation => evaluation.id === id);
  };

  const getEvaluationsByType = (type: string) => {
    return evaluations.filter(evaluation => evaluation.property_type === type);
  };

  const getRecentEvaluations = (days: number = 7) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return evaluations.filter(evaluation => {
      const evalDate = new Date(evaluation.created_at);
      return evalDate >= cutoffDate;
    });
  };

  const searchEvaluations = (searchTerm: string) => {
    const term = searchTerm.toLowerCase();
    return evaluations.filter(evaluation =>
      evaluation.first_name.toLowerCase().includes(term) ||
      evaluation.last_name.toLowerCase().includes(term) ||
      evaluation.email.toLowerCase().includes(term) ||
      evaluation.address.toLowerCase().includes(term) ||
      evaluation.phone.includes(term)
    );
  };

  const getStatistics = () => {
    const total = evaluations.length;
    const thisWeek = getRecentEvaluations(7).length;
    const thisMonth = getRecentEvaluations(30).length;
    
    const byType = evaluations.reduce((acc, evaluation) => {
      acc[evaluation.property_type] = (acc[evaluation.property_type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      thisWeek,
      thisMonth,
      byType
    };
  };

  // Set up real-time subscription
  useEffect(() => {
    fetchEvaluations();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('property_evaluations_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'property_evaluations'
        },
        (payload) => {
          console.log('Real-time change received:', payload);
          fetchEvaluations(); // Refetch data when changes occur
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    evaluations,
    loading,
    error,
    fetchEvaluations,
    deleteEvaluation,
    getEvaluationById,
    getEvaluationsByType,
    getRecentEvaluations,
    searchEvaluations,
    getStatistics
  };
};

