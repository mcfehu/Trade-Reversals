import React, { useState } from 'react';
import Header from '../components/Header';
import FTMOPromotion from '../components/FTMOPromotion';
import { TrendingUp, Target, BarChart3, ArrowUpRight, ArrowDownRight, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';

// Performance data - December only
const trades = [
  { date: '12-16-24', time: '8:23:00 AM', market: 'NQ', result: 'WIN' },
  { date: '12-16-24', time: '4:33:00 PM', market: 'GC', result: 'WIN' },
  { date: '12-17-24', time: '8:37:00 AM', market: 'GC', result: 'WIN' },
  { date: '12-17-24', time: '2:41:00 PM', market: 'GC', result: 'WIN' },
  { date: '12-19-24', time: '8:08:00 AM', market: 'NQ', result: 'LOSS' },
  { date: '12-19-24', time: '9:02:00 AM', market: 'GC', result: 'WIN' },
  { date: '12-19-24', time: '2:56:00 PM', market: 'GC', result: 'WIN' },
  { date: '12-20-24', time: '8:11:00 AM', market: 'GC', result: 'LOSS' },
  { date: '12-20-24', time: '12:16:00 PM', market: 'GC', result: 'WIN' },
  { date: '12-20-24', time: '1:03:00 PM', market: 'GC', result: 'LOSS' },
  { date: '12-20-24', time: '1:43:00 PM', market: 'NQ', result: 'WIN' },
  { date: '12-23-24', time: '9:00:00 AM', market: 'NQ', result: 'WIN' },
  { date: '12-23-24', time: '2:45:00 PM', market: 'GC', result: 'WIN' },
  { date: '12-30-24', time: '7:30:00 AM', market: 'GC', result: 'WIN' },
  { date: '12-31-24', time: '12:05:00 PM', market: 'GC', result: 'LOSS' }
];

export default function Stats() {
  const [decemberExpanded, setDecemberExpanded] = useState(true);

  // Calculate statistics for December
  const calculateStats = (monthTrades: typeof trades) => {
    const total = monthTrades.length;
    const wins = monthTrades.filter(trade => trade.result === 'WIN').length;
    const winRate = ((wins / total) * 100).toFixed(1);
    const gcTrades = monthTrades.filter(trade => trade.market === 'GC').length;
    const nqTrades = monthTrades.filter(trade => trade.market === 'NQ').length;

    return { total, wins, winRate, gcTrades, nqTrades };
  };

  const decemberStats = calculateStats(trades);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Performance Statistics
            </h1>
            <p className="text-xl text-blue-200">
              Track record of our trading signals
            </p>
          </div>

          {/* Overall Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Total Trades</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {trades.length}
              </div>
              <p className="text-blue-200 text-sm">December performance</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Win Rate</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {decemberStats.winRate}%
              </div>
              <p className="text-blue-200 text-sm">Success rate across all trades</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Market Split</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {decemberStats.gcTrades}/{decemberStats.nqTrades}
              </div>
              <p className="text-blue-200 text-sm">Gold/Nasdaq ratio</p>
            </div>
          </div>

          {/* December Section */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setDecemberExpanded(!decemberExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <h2 className="text-xl font-semibold text-white">December 2024</h2>
                </div>
                {decemberExpanded ? (
                  <ChevronUp className="h-5 w-5 text-blue-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-400" />
                )}
              </button>
              
              {decemberExpanded && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-blue-300 mb-1">Total Trades</div>
                      <div className="text-2xl font-bold text-white">{decemberStats.total}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-blue-300 mb-1">Win Rate</div>
                      <div className="text-2xl font-bold text-white">{decemberStats.winRate}%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-blue-300 mb-1">Gold/Nasdaq</div>
                      <div className="text-2xl font-bold text-white">{decemberStats.gcTrades}/{decemberStats.nqTrades}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {trades.map((trade, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-200">{trade.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-200">{trade.time}</span>
                          </div>
                          <span className="text-white font-medium">{trade.market}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {trade.result === 'WIN' ? (
                            <div className="flex items-center text-green-400">
                              <ArrowUpRight className="h-5 w-5" />
                              <span className="font-medium">WIN</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-red-400">
                              <ArrowDownRight className="h-5 w-5" />
                              <span className="font-medium">LOSS</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Add FTMO Promotion */}
          <div className="mt-16">
            <FTMOPromotion />
          </div>
        </div>
      </div>
    </div>
  );
}