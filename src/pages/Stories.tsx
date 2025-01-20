import React from 'react';
import Header from '../components/Header';
import PageCTA from '../components/ui/PageCTA';
import { Star, TrendingUp, Award } from 'lucide-react';

const testimonials = [
  {
    name: "Kevin",
    role: "Professional Futures Trader",
    content: "Good signals. Their focus on key reversal points in Gold futures has already helped me improve my entry timing.",
    metrics: {
      label: "First Week Return",
      value: "+6.2%"
    }
  },
  {
    name: "Chris",
    role: "Day Trader",
    content: "What sets Trade Reversals apart is their risk management approach. Every signal comes with clear entry and exit points, making it easy to maintain discipline.",
    metrics: {
      label: "Win Rate",
      value: "25%"
    }
  },
  {
    name: "Uwe",
    role: "Scalper",
    content: "Their Nasdaq signals have been outstanding, with each trade setup reflecting a clear and strategic approach to the market.",
    metrics: {
      label: "Average R:R",
      value: "1:2.3"
    }
  },
  {
    name: "Kayla",
    role: "Futures Specialist",
    content: "The quality of the signals provided has been invaluable. It's not just about following trades, but benefiting from their precision and alignment with market context..",
    metrics: {
      label: "Monthly Growth",
      value: "+8.7%"
    }
  },
  {
    name: "Sophie",
    role: "Day Trader",
    content: "Trade Reversals has brought a systematic approach to my trading. Their focus on high-probability setups and proper position sizing is refreshing.",
    metrics: {
      label: "Success Rate",
      value: "15%"
    }
  }
];

export default function Stories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Early Success Stories
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Hear from our first members who are already experiencing the benefits of our professional trading signals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-blue-200 mb-6">{testimonial.content}</p>
                
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-sm text-blue-300">{testimonial.metrics.label}</div>
                  <div className="flex items-center gap-1 text-green-400">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-bold">{testimonial.metrics.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Award className="h-6 w-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Join Our Growing Community</h2>
            </div>
            <p className="text-blue-200 text-lg">
              These early success stories demonstrate the potential of our trading signals. As we continue to grow, we remain committed to providing the highest quality service and support to help you achieve your trading goals.
            </p>
          </div>

          <PageCTA
            title="Start Your Success Story"
            description="Join our community of successful traders today"
            buttonText="Get Started Now"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}
