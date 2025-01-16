import React from 'react';
import { Shield, Target, Award } from 'lucide-react';
import Section from '../layout/Section';

const reasons = [
  {
    icon: Target,
    title: "Precision Over Volume",
    description: "We prioritize the quality of our signals, ensuring every trade setup is well-vetted and high probability."
  },
  {
    icon: Shield,
    title: "Transparency and Trust",
    description: "We believe in providing clear, actionable insights backed by consistent performance data."
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Our focus is to deliver an exceptional trading experience that enhances your success."
  }
];

export default function WhyUs() {
  return (
    <Section className="bg-gradient-to-b from-blue-950 to-blue-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">
          Why Choose Trade Reversals?
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          At Trade Reversals, we are a dedicated team of traders and decision-makers with over a decade of market experience. Our mission is to provide actionable, high-quality trading signals that empower traders to succeed in the fast-paced futures market.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {reasons.map((reason) => (
          <div 
            key={reason.title}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <reason.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
            </div>
            <p className="text-blue-200 mb-4">{reason.description}</p>
            <div className="text-sm font-medium text-blue-400 bg-blue-400/10 py-1 px-3 rounded-full inline-block">
              {reason.highlight}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 max-w-3xl mx-auto">
        <p className="text-blue-100 text-center">
          Don't waste time with unreliable signals or unproven providers. Join Trade Reversals 
          and experience the difference that professional, focused trading signals can make to 
          your trading success.
        </p>
      </div>
    </Section>
  );
}