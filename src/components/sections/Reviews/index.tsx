import React from 'react';
import Section from '../../layout/Section';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "Michael Chen",
    role: "Professional Trader",
    content: "The accuracy of these signals is remarkable. I've been trading for 8 years and this is the most reliable service I've used.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sarah Johnson",
    role: "Day Trader",
    content: "What sets Trade Reversals apart is their risk management. Every signal comes with clear entry and exit points.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Reviews() {
  return (
    <Section id="reviews" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Trader Reviews</h2>
        <p className="mt-4 text-lg text-gray-600">
          See what our community of traders has to say
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </Section>
  );
}