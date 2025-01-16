import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Signal } from '../../types';

interface SignalIconProps {
  type: Signal['type'];
}

export default function SignalIcon({ type }: SignalIconProps) {
  const Icon = type === 'LONG' ? TrendingUp : TrendingDown;
  const colorClass = type === 'LONG' ? 'text-green-400' : 'text-red-400';
  
  return (
    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
      <Icon className={`h-6 w-6 ${colorClass}`} />
    </div>
  );
}