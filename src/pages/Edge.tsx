import React from 'react';
import Header from '../components/Header';
import Section from '../components/layout/Section';
import { Shield, Target, Award } from 'lucide-react';
import GlowingButton from '../components/ui/GlowingButton';

const principles = [
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

export default function Edge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Trade Reversals: Our Edge</h1>
          <p className="text-xl text-blue-100 mb-12">
            At Trade Reversals, we are a dedicated team of traders and decision-makers with over a decade of market experience. Our mission is to provide actionable, high-quality trading signals that empower traders to succeed in the fast-paced futures market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle) => (
            <div key={principle.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <principle.icon className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{principle.title}</h3>
              <p className="text-blue-100">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-12 text-blue-100">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">What Drives Us</h2>
            <p className="text-lg">
              Through years of market observation and disciplined strategy development, we've built a foundation that helps traders achieve consistent profitability. Our focus on Gold (GC) and Nasdaq (NQ) futures ensures tailored insights that match the needs of active traders.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Methodology</h2>
            <p className="text-lg">
              We combine advanced technical analysis with deep market understanding to identify high-probability reversal setups. Each signal is carefully vetted through our proven methodology that considers multiple timeframes, market context, and risk parameters. Visit our Stats page to see our verified track record of success.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Trade Reversals?</h2>
            <p className="text-lg">
              Our disciplined approach to trading signals and unwavering commitment to our subscribers make us a trusted partner in your trading journey. With a focus on precision, transparency, and profitability, we're here to help you reach your trading goals.
            </p>
          </div>

          <div className="text-center pt-8 space-y-6">
            <p className="text-xl font-semibold text-white">
              Ready to experience trading with our proven edge?
            </p>
            <a 
              href="https://t.me/+Lpdf18Y6A3xjYTA8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <GlowingButton variant="primary" size="large">
                Start Trading With Confidence
              </GlowingButton>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}