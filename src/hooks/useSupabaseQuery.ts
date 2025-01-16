import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { PostgrestError } from '@supabase/supabase-js';

interface UseSupabaseQueryResult<T> {
  data: T[] | null;
  error: PostgrestError | null;
  loading: boolean;
  refetch: () => Promise<void>;
}

export function useSupabaseQuery<T>(
  table: string,
  query?: (query: any) => any,
  options = { enabled: true }
): UseSupabaseQueryResult<T> {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!options.enabled) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      let queryBuilder = supabase.from(table).select('*');
      
      if (query) {
        queryBuilder = query(queryBuilder);
      }

      const { data: result, error: queryError } = await queryBuilder;

      if (queryError) {
        throw queryError;
      }

      setData(result);
      setError(null);
    } catch (err) {
      console.error(`Error fetching ${table}:`, err);
      setError(err as PostgrestError);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [table, options.enabled]);

  return { data, error, loading, refetch: fetchData };
}