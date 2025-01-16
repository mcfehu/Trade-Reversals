import React from 'react';
import { useSupabaseQuery } from '../../../hooks/useSupabaseQuery';
import { Testimonial } from '../../../types';
import { Pencil, Trash2, Star } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

export default function TestimonialList() {
  const { data: testimonials, loading, error, refetch } = useSupabaseQuery<Testimonial>(
    'testimonials',
    (query) => query.order('created_at', { ascending: false })
  );

  const deleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;
      refetch();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Error deleting testimonial');
    }
  };

  if (loading) {
    return <div className="text-white">Loading testimonials...</div>;
  }

  if (error) {
    return <div className="text-red-400">Error loading testimonials</div>;
  }

  return (
    <div className="space-y-4">
      {testimonials?.map((testimonial) => (
        <div 
          key={testimonial.id} 
          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            {testimonial.avatar && (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
            )}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-medium">{testimonial.name}</h3>
                {testimonial.featured && (
                  <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                )}
              </div>
              <p className="text-blue-200 text-sm">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {/* Implement edit functionality */}}
              className="p-2 text-blue-300 hover:text-blue-200 transition-colors"
            >
              <Pencil className="h-5 w-5" />
            </button>
            <button
              onClick={() => deleteTestimonial(testimonial.id)}
              className="p-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}