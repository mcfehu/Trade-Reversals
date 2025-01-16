import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

export default function TestimonialGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
}