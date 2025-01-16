import { supabase } from './supabase';
import { Trade } from '../types/trades';

export async function fetchTrades() {
  const { data, error } = await supabase
    .from('trades')
    .select('*')
    .order('date', { ascending: false });

  if (error) throw error;
  return data as Trade[];
}

export async function createTrade(trade: Omit<Trade, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('trades')
    .insert([trade])
    .select()
    .single();

  if (error) throw error;
  return data as Trade;
}

export async function deleteTrade(id: string) {
  const { error } = await supabase
    .from('trades')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export function calculateTradeStats(trades: Trade[]) {
  const total = trades.length;
  const wins = trades.filter(trade => trade.result === 'WIN').length;
  const winRate = ((wins / total) * 100).toFixed(1);
  const gcTrades = trades.filter(trade => trade.market === 'GC').length;
  const nqTrades = trades.filter(trade => trade.market === 'NQ').length;

  return { total, wins, winRate, gcTrades, nqTrades };
}