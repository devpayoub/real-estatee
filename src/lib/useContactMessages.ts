import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_at: string;
}

export const useContactMessages = () => {
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContactMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setContactMessages(data || []);
    } catch (err) {
      console.error('Error fetching contact messages:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const deleteContactMessage = async (id: number) => {
    try {
      const { error: deleteError } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (deleteError) {
        throw deleteError;
      }

      setContactMessages(prev => prev.filter(message => message.id !== id));
      return { success: true };
    } catch (err) {
      console.error('Error deleting contact message:', err);
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'An error occurred' 
      };
    }
  };

  const getContactMessageById = (id: number) => {
    return contactMessages.find(message => message.id === id);
  };

  const getContactMessagesByEmail = (email: string) => {
    return contactMessages.filter(message => message.email.toLowerCase() === email.toLowerCase());
  };

  const getRecentMessages = (days: number = 7) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return contactMessages.filter(message => {
      const messageDate = new Date(message.created_at);
      return messageDate >= cutoffDate;
    });
  };

  const searchContactMessages = (searchTerm: string) => {
    const term = searchTerm.toLowerCase();
    return contactMessages.filter(message =>
      message.name.toLowerCase().includes(term) ||
      message.email.toLowerCase().includes(term) ||
      message.subject.toLowerCase().includes(term) ||
      message.message.toLowerCase().includes(term)
    );
  };

  const getStatistics = () => {
    const total = contactMessages.length;
    const thisWeek = getRecentMessages(7).length;
    const thisMonth = getRecentMessages(30).length;
    const today = getRecentMessages(1).length;
    
    const bySubject = contactMessages.reduce((acc, message) => {
      const subject = message.subject.toLowerCase();
      acc[subject] = (acc[subject] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byMonth = contactMessages.reduce((acc, message) => {
      const month = new Date(message.created_at).toLocaleDateString('fr-CA', { 
        year: 'numeric', 
        month: 'long' 
      });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      thisWeek,
      thisMonth,
      today,
      bySubject,
      byMonth
    };
  };

  // Set up real-time subscription
  useEffect(() => {
    fetchContactMessages();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('contact_messages_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'contact_messages'
        },
        (payload) => {
          console.log('Real-time change received:', payload);
          fetchContactMessages(); // Refetch data when changes occur
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    contactMessages,
    loading,
    error,
    fetchContactMessages,
    deleteContactMessage,
    getContactMessageById,
    getContactMessagesByEmail,
    getRecentMessages,
    searchContactMessages,
    getStatistics
  };
};

