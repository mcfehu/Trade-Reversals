import React from 'react';
import Section from '../layout/Section';
import { Sparkles, BookOpen, AlertCircle, CheckCircle } from 'lucide-react';
import GlowingButton from '../ui/GlowingButton';

const plans = [
  {
    name: "1-Month Plan",
    price: "39",
    interval: "month",
    features: [
      "Real-time Gold & Nasdaq signals",
      "1-3 quality setups daily",
      "Precise entry & exit points",
      "Private Telegram group access"
    ]
  },
  {
    name: "3-Month Plan",
    price: "99",
    interval: "quarter",
    popular: true,
    features: [
      "Everything in 1-Month Plan",
      "Free Trading Ebook (£14.99 value)",
      "Priority support"
    ]
  },
  {
    name: "Lifetime Plan",
    price: "399",
    interval: "one-time",
    features: [
      "Everything in 3-Month Plan",
      "Free Trading Ebook (£14.99 value)",
      "Priority support"
    ]
  }
];

const transparency = [
  "No hidden fees or extra charges",
  "Cancel your subscription anytime"
];

export default function Pricing() {
  return (
    <Section className="bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="text-center mb-16 relative">
        <div className="flex justify-center mb-4 animate-float">
          <div className="p-3 bg-blue-500/20 rounded-full">
            <Sparkles className="h-6 w-6 text-blue-400" />
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-4 text-white">
          Choose Your Trading Journey
        </h2>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          Select the plan that best fits your trading goals
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 relative ${
              plan.popular ? 'ring-2 ring-blue-400' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <div className="inline-block bg-blue-500/20 px-4 py-1 rounded-full text-blue-300 text-sm mb-4">
                {plan.name.toUpperCase()}
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-blue-200">£</span>
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-lg text-blue-200">
                  /{plan.interval}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{feature}</span>
                </li>
              ))}
            </ul>

            {plan.price === "99" || plan.price === "399" ? (
              <div className="bg-blue-500/10 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-blue-300 mb-2">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">Free Trading Ebook Included</span>
                </div>
                <p className="text-sm text-blue-200">
                  Get our comprehensive guide to scalping the futures market (£14.99 value)
                </p>
              </div>
            ) : null}

            <a 
              href="https://t.me/+Lpdf18Y6A3xjYTA8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <GlowingButton 
                variant={plan.popular ? "primary" : "secondary"} 
                size="large" 
                className="w-full"
              >
                Get Started Now
              </GlowingButton>
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto">
        <div className="bg-blue-500/10 rounded-lg p-4">
          {transparency.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-blue-200 mb-2 last:mb-0">
              <AlertCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}