import React from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';
import Section from './layout/Section';

const monthlyStats = [
  { 
    month: 'February',
    return: '+8.2%',
    trades: 42,
    winRate: '71%',
    avgRR: '1:2.5'
  },
  { 
    month: 'January',
    return: '+7.9%',
    trades: 38,
    winRate: '68%',
    avgRR: '1:2.3'
  },
  { 
    month: 'December',
    return: '+8.5%',
    trades: 45,
    winRate: '73%',
    avgRR: '1:2.4'
  }
];

const qualityMetrics = [
  {
    label: "Quality Over Quantity",
    value: "1-3 Signals Daily",
    description: "We focus on the highest probability setups",
    icon: Target
  },
  {
    label: "Consistent Returns",
    value: "8% Monthly Avg",
    description: "Verified performance across all market conditions",
    icon: TrendingUp
  },
  {
    label: "Professional Analysis",
    value: "10+ Years Experience",
    description: "Expert market analysis and trade management",
    icon: Award
  }
];

export default function LivePerformance() {
  return (
    <Section className="bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white">Monthly Performance</h2>
        <p className="mt-4 text-xl text-blue-200">
          Consistent results through disciplined trading
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Monthly Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Performance</h3>
          <div className="space-y-6">
            {monthlyStats.map((stat) => (
              <div key={stat.month} className="grid grid-cols-5 gap-4 p-4 bg-white/5 rounded-lg">
                <div>
                  <div className="text-sm text-blue-300">Month</div>
                  <div className="text-white font-medium">{stat.month}</div>
                </div>
                <div>
                  <div className="text-sm text-blue-300">Return</div>
                  <div className="text-green-400 font-medium">{stat.return}</div>
                </div>
                <div>
                  <div className="text-sm text-blue-300">Trades</div>
                  <div className="text-white font-medium">{stat.trades}</div>
                </div>
                <div>
                  <div className="text-sm text-blue-300">Win Rate</div>
                  <div className="text-white font-medium">{stat.winRate}</div>
                </div>
                <div>
                  <div className="text-sm text-blue-300">Avg R:R</div>
                  <div className="text-white font-medium">{stat.avgRR}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-6">Our Approach</h3>
          <div className="space-y-6">
            {qualityMetrics.map((metric) => (
              <div key={metric.label} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <metric.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">{metric.label}</div>
                  <div className="text-blue-400 text-lg font-semibold mb-1">{metric.value}</div>
                  <div className="text-sm text-blue-200">{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}