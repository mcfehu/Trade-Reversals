import React from 'react';
import { Target, Clock, BarChart } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Precision Signals',
    description: 'Get accurate market reversal signals for Gold and Nasdaq futures.',
  },
  {
    icon: Clock,
    title: 'Real-Time Alerts',
    description: 'Instant notifications delivered straight to your inbox or Telegram.',
  },
  {
    icon: BarChart,
    title: 'Proven Track Record',
    description: 'Consistent performance with verified monthly statistics.',
  },
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Developed by Traders, for Traders
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Trade Reversals specializes in helping traders capitalize on market reversals
            with precision, simplicity, and real-time signals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}