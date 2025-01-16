export interface Signal {
  id: number;
  market: string;
  type: 'LONG' | 'SHORT';
  entry: number;
  stopLoss: number;
  takeProfit: number;
  profit: number;
  timestamp: Date;
  successRate: number;
  status: 'active' | 'completed' | 'cancelled';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  isPopular?: boolean;
}