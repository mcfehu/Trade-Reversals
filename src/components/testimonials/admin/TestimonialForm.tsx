import React, { useState } from 'react';
import { supabase } from '../../../lib/supabase';

interface FormData {
  name: string;
  role: string;
  content: string;
  avatar_url: string;
  metrics_label: string;
  metrics_value: string;
  featured: boolean;
}

const initialFormData: FormData = {
  name: '',
  role: '',
  content: '',
  avatar_url: '',
  metrics_label: '',
  metrics_value: '',
  featured: false
};

export default function TestimonialForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([formData]);

      if (error) throw error;
      
      setFormData(initialFormData);
      alert('Testimonial created successfully!');
    } catch (error) {
      console.error('Error creating testimonial:', error);
      alert('Error creating testimonial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Role
        </label>
        <input
          type="text"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Testimonial Content
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Avatar URL
        </label>
        <input
          type="url"
          value={formData.avatar_url}
          onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Metrics Label
          </label>
          <input
            type="text"
            value={formData.metrics_label}
            onChange={(e) => setFormData({ ...formData, metrics_label: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            placeholder="e.g., Monthly Return"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Metrics Value
          </label>
          <input
            type="text"
            value={formData.metrics_value}
            onChange={(e) => setFormData({ ...formData, metrics_value: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            placeholder="e.g., +18.5%"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="featured"
          checked={formData.featured}
          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
          className="h-4 w-4 rounded border-white/10 bg-white/5 text-blue-600"
        />
        <label htmlFor="featured" className="ml-2 text-sm text-white">
          Feature this testimonial
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {loading ? 'Creating...' : 'Create Testimonial'}
      </button>
    </form>
  );
}