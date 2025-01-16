import React from 'react';
import Section from '../layout/Section';
import { TrendingUp, Users, LineChart } from 'lucide-react';
import { cn } from '../../utils/cn';
import GlowingButton from '../ui/GlowingButton';

const features = [
  {
    icon: TrendingUp,
    title: 'Market Analysis',
    description: 'Deep understanding of market dynamics and price action across multiple timeframes.',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: LineChart,
    title: 'Trading Experience',
    description: '10+ years of trading in the futures markets.',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Users,
    title: 'Growing Community',
    description: 'Join our active community of dedicated traders.',
    color: 'from-amber-500 to-amber-600'
  }
];

const DottedLine = () => (
  <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px">
    <div className="relative w-full h-full">
      <div className="absolute w-full h-px border-t-2 border-dashed border-amber-500/30"></div>
    </div>
  </div>
);

export default function About() {
  return (
    <Section id="about" className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-900">Who We </span>
            <span className="text-amber-500">Are</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trade Reversals is a team of professional traders dedicated to providing high-quality 
            trading signals and education for Gold and Nasdaq futures markets.
          </p>
        </div>

        <div className="relative">
          <DottedLine />
          
          <div className="grid lg:grid-cols-3 gap-12 relative">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center animate-fade-in">
                  <div className={cn(
                    "w-24 h-24 rounded-full flex items-center justify-center mb-6",
                    "bg-gradient-to-br shadow-lg transform hover:scale-110 transition-transform duration-300",
                    feature.color
                  )}>
                    <feature.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://t.me/+gBblYCDDioMyM2E0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <GlowingButton variant="secondary" size="large" className="animate-fade-in">
              Join Our Community
            </GlowingButton>
          </a>
        </div>
      </div>
    </Section>
  );
}