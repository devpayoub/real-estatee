import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface Alert {
  id: number;
  location: string;
  property_type: string;
  min_price?: number;
  max_price?: number;
  min_bedrooms?: number;
  email: string;
  frequency: string;
  new_listings: boolean;
  price_changes: boolean;
  open_houses: boolean;
  created_at: string;
  is_active?: boolean;
}

export const useAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await supabase
        .from('alerts')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setAlerts(data || []);
    } catch (err) {
      console.error('Error fetching alerts:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const deleteAlert = async (id: number) => {
    try {
      const { error: deleteError } = await supabase
        .from('alerts')
        .delete()
        .eq('id', id);

      if (deleteError) {
        throw deleteError;
      }

      setAlerts(prev => prev.filter(alert => alert.id !== id));
      return { success: true };
    } catch (err) {
      console.error('Error deleting alert:', err);
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'An error occurred' 
      };
    }
  };

  const updateAlertStatus = async (id: number, isActive: boolean) => {
    try {
      const { error: updateError } = await supabase
        .from('alerts')
        .update({ is_active: isActive })
        .eq('id', id);

      if (updateError) {
        throw updateError;
      }

      setAlerts(prev => prev.map(alert => 
        alert.id === id ? { ...alert, is_active: isActive } : alert
      ));
      return { success: true };
    } catch (err) {
      console.error('Error updating alert status:', err);
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'An error occurred' 
      };
    }
  };

  const getAlertById = (id: number) => {
    return alerts.find(alert => alert.id === id);
  };

  const getAlertsByEmail = (email: string) => {
    return alerts.filter(alert => alert.email.toLowerCase() === email.toLowerCase());
  };

  const getAlertsByFrequency = (frequency: string) => {
    return alerts.filter(alert => alert.frequency === frequency);
  };

  const getActiveAlerts = () => {
    return alerts.filter(alert => alert.is_active !== false);
  };

  const getInactiveAlerts = () => {
    return alerts.filter(alert => alert.is_active === false);
  };

  const getRecentAlerts = (days: number = 7) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return alerts.filter(alert => {
      const alertDate = new Date(alert.created_at);
      return alertDate >= cutoffDate;
    });
  };

  const searchAlerts = (searchTerm: string) => {
    const term = searchTerm.toLowerCase();
    return alerts.filter(alert =>
      alert.email.toLowerCase().includes(term) ||
      alert.location.toLowerCase().includes(term) ||
      alert.property_type.toLowerCase().includes(term)
    );
  };

  const getStatistics = () => {
    const total = alerts.length;
    const active = getActiveAlerts().length;
    const inactive = getInactiveAlerts().length;
    const thisWeek = getRecentAlerts(7).length;
    const thisMonth = getRecentAlerts(30).length;
    
    const byFrequency = alerts.reduce((acc, alert) => {
      acc[alert.frequency] = (acc[alert.frequency] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byLocation = alerts.reduce((acc, alert) => {
      acc[alert.location] = (acc[alert.location] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byPropertyType = alerts.reduce((acc, alert) => {
      acc[alert.property_type] = (acc[alert.property_type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      active,
      inactive,
      thisWeek,
      thisMonth,
      byFrequency,
      byLocation,
      byPropertyType
    };
  };

  const formatPriceRange = (minPrice?: number, maxPrice?: number) => {
    if (!minPrice && !maxPrice) return "Aucune limite";
    if (minPrice && !maxPrice) return `À partir de ${minPrice.toLocaleString('fr-FR')}€`;
    if (!minPrice && maxPrice) return `Jusqu'à ${maxPrice.toLocaleString('fr-FR')}€`;
    return `${minPrice?.toLocaleString('fr-FR')}€ - ${maxPrice?.toLocaleString('fr-FR')}€`;
  };

  const getNotificationTypes = (alert: Alert) => {
    const types = [];
    if (alert.new_listings) types.push("Nouvelles annonces");
    if (alert.price_changes) types.push("Changements de prix");
    if (alert.open_houses) types.push("Portes ouvertes");
    return types;
  };

  // Set up real-time subscription
  useEffect(() => {
    fetchAlerts();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('alerts_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'alerts'
        },
        (payload) => {
          console.log('Real-time change received:', payload);
          fetchAlerts(); // Refetch data when changes occur
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    alerts,
    loading,
    error,
    fetchAlerts,
    deleteAlert,
    updateAlertStatus,
    getAlertById,
    getAlertsByEmail,
    getAlertsByFrequency,
    getActiveAlerts,
    getInactiveAlerts,
    getRecentAlerts,
    searchAlerts,
    getStatistics,
    formatPriceRange,
    getNotificationTypes
  };
};

