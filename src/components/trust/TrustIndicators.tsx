import React from 'react';
import { Target, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { 
    label: 'December Success Rate', 
    value: '73%', 
    icon: Target, 
    subtitle: '11 Wins from 15 Trades' 
  },
  { 
    label: 'Monthly Return', 
    value: '8%', 
    icon: TrendingUp, 
    subtitle: 'Average Performance' 
  },
  { 
    label: 'Quality Signals', 
    value: '1-3', 
    icon: Clock, 
    subtitle: 'Premium Setups Daily' 
  }
];

export default function TrustIndicators() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      {stats.map(({ label, value, icon: Icon, subtitle }) => (
        <div key={label} className="flex items-center space-x-3 bg-white/5 rounded-lg p-4">
          <Icon className="h-8 w-8 text-blue-400" />
          <div>
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-sm text-white/60">{label}</div>
            <div className="text-xs text-blue-400">{subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}