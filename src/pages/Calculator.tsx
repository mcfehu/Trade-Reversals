import React from 'react';
import Header from '../components/Header';
import Section from '../components/layout/Section';
import { Calculator } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Calculator className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Position Size Calculator</h1>
            <p className="text-xl text-blue-200">
              Calculate your position size based on your risk parameters
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <iframe 
              src="https://www.tradingview.com/forex-position-size-calculator/"
              className="w-full h-[600px] rounded-lg"
              title="Position Size Calculator"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}