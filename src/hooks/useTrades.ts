import { useState, useEffect } from 'react';
import { fetchTrades } from '../lib/trades';
import { Trade } from '../types/trades';

export function useTrades() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadTrades = async () => {
    try {
      setLoading(true);
      const data = await fetchTrades();
      setTrades(data);
      setError(null);
    } catch (err) {
      console.error('Error loading trades:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrades();
  }, []);

  return { trades, loading, error, refetch: loadTrades };
}