import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Example trades that can be easily updated
const recentSignals = [
  {
    id: 1,
    market: 'GOLD',
    type: 'LONG',
    entry: 2024.50,
    stopLoss: 2020.30,
    takeProfit: 2035.80,
    profit: 2.45,
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    status: 'active'
  },
  {
    id: 2,
    market: 'NASDAQ',
    type: 'SHORT',
    entry: 17850,
    stopLoss: 17880,
    takeProfit: 17780,
    profit: 1.8,
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    status: 'active'
  }
];

export default function SignalCard() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <span className="text-lg font-medium text-white">Active Signals</span>
      </div>
      
      <div className="space-y-4">
        {recentSignals.map((signal) => (
          <div 
            key={signal.id} 
            className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {signal.type === 'LONG' ? (
                  <ArrowUpRight className="h-6 w-6 text-green-400" />
                ) : (
                  <ArrowDownRight className="h-6 w-6 text-red-400" />
                )}
                <div>
                  <div className="text-white font-medium">{signal.market}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-medium ${signal.type === 'LONG' ? 'text-green-400' : 'text-red-400'}`}>
                  {signal.type}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-sm text-blue-300">Entry</div>
                <div className="text-white font-medium">{signal.entry}</div>
              </div>
              <div>
                <div className="text-sm text-blue-300">Stop Loss</div>
                <div className="text-red-400 font-medium">{signal.stopLoss}</div>
              </div>
              <div>
                <div className="text-sm text-blue-300">Take Profit</div>
                <div className="text-green-400 font-medium">{signal.takeProfit}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}