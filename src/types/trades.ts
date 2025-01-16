export interface Trade {
  id: string;
  date: string;
  time: string;
  market: 'GC' | 'NQ';
  result: 'WIN' | 'LOSS';
  created_at: string;
  updated_at: string;
}

export interface TradeStats {
  total: number;
  wins: number;
  winRate: string;
  gcTrades: number;
  nqTrades: number;
}