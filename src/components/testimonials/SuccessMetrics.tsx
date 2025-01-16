import React from 'react';
import { Users, TrendingUp, Award } from 'lucide-react';
import { useTrades } from '../../hooks/useTrades';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function SuccessMetrics() {
  const { trades, loading, error } = useTrades();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !trades) {
    return null;
  }

  // Calculate metrics
  const totalTraders = '5,000+'; // This would come from users table if available
  const monthlyTrades = trades.filter(trade => {
    const tradeDate = new Date(trade.date);
    const now = new Date();
    return tradeDate.getMonth() === now.getMonth() && 
           tradeDate.getFullYear() === now.getFullYear();
  });

  const wins = monthlyTrades.filter(trade => trade.result === 'WIN').length;
  const winRate = ((wins / monthlyTrades.length) * 100).toFixed(1);
  const monthlyReturn = ((wins * 1.5) - ((monthlyTrades.length - wins) * 1)).toFixed(1); // Assuming 1.5:1 reward ratio

  const metrics = [
    {
      icon: Users,
      label: 'Active Traders',
      value: totalTraders,
      description: 'Trusted by traders worldwide'
    },
    {
      icon: TrendingUp,
      label: 'Average Monthly Return',
      value: `${monthlyReturn}%`,
      description: 'Consistent performance'
    },
    {
      icon: Award,
      label: 'Success Rate',
      value: `${winRate}%`,
      description: 'Verified win rate'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <metric.icon className="h-8 w-8 text-blue-400 mb-4" />
          <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
          <div className="text-lg text-blue-200 mb-2">{metric.label}</div>
          <div className="text-sm text-blue-300">{metric.description}</div>
        </div>
      ))}
    </div>
  );
}