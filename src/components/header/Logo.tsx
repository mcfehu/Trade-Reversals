import React from 'react';
import { LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <LineChart className="h-8 w-8 text-blue-400" />
      <span className="text-xl font-semibold text-white">Trade Reversals</span>
    </Link>
  );
}