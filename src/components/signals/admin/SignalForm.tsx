import React, { useState } from 'react';
import { supabase } from '../../../lib/supabase';

interface FormData {
  market: string;
  type: 'LONG' | 'SHORT';
  entry: number;
  stop_loss: number;
  take_profit: number;
  success_rate: number;
}

const initialFormData: FormData = {
  market: '',
  type: 'LONG',
  entry: 0,
  stop_loss: 0,
  take_profit: 0,
  success_rate: 85
};

export default function SignalForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('signals')
        .insert([{
          ...formData,
          status: 'active'
        }]);

      if (error) throw error;
      
      setFormData(initialFormData);
      alert('Signal created successfully!');
    } catch (error) {
      console.error('Error creating signal:', error);
      alert('Error creating signal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Market
        </label>
        <select
          value={formData.market}
          onChange={(e) => setFormData({ ...formData, market: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        >
          <option value="">Select Market</option>
          <option value="GOLD">GOLD</option>
          <option value="NASDAQ">NASDAQ</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Type
        </label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value as 'LONG' | 'SHORT' })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        >
          <option value="LONG">LONG</option>
          <option value="SHORT">SHORT</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Entry Price
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.entry}
          onChange={(e) => setFormData({ ...formData, entry: parseFloat(e.target.value) })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Stop Loss
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.stop_loss}
          onChange={(e) => setFormData({ ...formData, stop_loss: parseFloat(e.target.value) })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Take Profit
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.take_profit}
          onChange={(e) => setFormData({ ...formData, take_profit: parseFloat(e.target.value) })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Success Rate (%)
        </label>
        <input
          type="number"
          min="0"
          max="100"
          value={formData.success_rate}
          onChange={(e) => setFormData({ ...formData, success_rate: parseInt(e.target.value) })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {loading ? 'Creating...' : 'Create Signal'}
      </button>
    </form>
  );
}