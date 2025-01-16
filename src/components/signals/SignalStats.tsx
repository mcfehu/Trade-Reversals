import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SignalStatsProps {
  profit: number;
  successRate: number;
}

export default function SignalStats({ profit, successRate }: SignalStatsProps) {
  return (
    <div className="text-right">
      <div className="flex items-center text-green-400">
        <span className="font-medium">+{profit}%</span>
        <ArrowUpRight className="h-4 w-4 ml-1" />
      </div>
      <div className="text-sm text-white/60">
        {successRate}% Success Rate
      </div>
    </div>
  );
}