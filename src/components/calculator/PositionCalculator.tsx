import React, { useState } from 'react';
import { Calculator, DollarSign, Percent } from 'lucide-react';

export default function PositionCalculator() {
  const [values, setValues] = useState({
    accountSize: 10000,
    riskPercent: 1,
    entryPrice: 0,
    stopLoss: 0,
  });

  const calculatePosition = () => {
    if (!values.entryPrice || !values.stopLoss) return null;

    const riskAmount = (values.accountSize * values.riskPercent) / 100;
    const priceDifference = Math.abs(values.entryPrice - values.stopLoss);
    const positionSize = riskAmount / priceDifference;

    return {
      riskAmount: riskAmount.toFixed(2),
      positionSize: positionSize.toFixed(2),
      totalValue: (positionSize * values.entryPrice).toFixed(2)
    };
  };

  const results = calculatePosition();

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-600/20 rounded-lg">
          <Calculator className="h-6 w-6 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">Position Calculator</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Account Size
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300" />
              <input
                type="number"
                value={values.accountSize}
                onChange={(e) => setValues({ ...values, accountSize: parseFloat(e.target.value) || 0 })}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Risk Percentage
            </label>
            <div className="relative">
              <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300" />
              <input
                type="number"
                value={values.riskPercent}
                onChange={(e) => setValues({ ...values, riskPercent: parseFloat(e.target.value) || 0 })}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                step="0.1"
                min="0.1"
                max="100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Entry Price
            </label>
            <input
              type="number"
              value={values.entryPrice || ''}
              onChange={(e) => setValues({ ...values, entryPrice: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Stop Loss
            </label>
            <input
              type="number"
              value={values.stopLoss || ''}
              onChange={(e) => setValues({ ...values, stopLoss: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
              step="0.01"
            />
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6">
          <h4 className="text-lg font-medium text-white mb-4">Position Details</h4>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-blue-300 mb-1">Risk Amount</div>
              <div className="text-2xl font-bold text-white">
                ${results?.riskAmount || '0.00'}
              </div>
            </div>
            <div>
              <div className="text-sm text-blue-300 mb-1">Position Size</div>
              <div className="text-2xl font-bold text-white">
                {results?.positionSize || '0.00'} units
              </div>
            </div>
            <div>
              <div className="text-sm text-blue-300 mb-1">Total Position Value</div>
              <div className="text-2xl font-bold text-white">
                ${results?.totalValue || '0.00'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}