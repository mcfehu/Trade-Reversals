import React from 'react';
import { Award, TrendingUp, DollarSign } from 'lucide-react';
import GlowingButton from './ui/GlowingButton';

const benefits = [
  {
    icon: Award,
    title: "Get Funded Up to $400,000",
    description: "Pass the FTMO Challenge and get funded with up to $400,000 to trade with"
  },
  {
    icon: TrendingUp,
    title: "Keep Up to 90% of Profits",
    description: "Earn up to 90% of your trading profits with no risk of your own capital"
  },
  {
    icon: DollarSign,
    title: "Start from £79",
    description: "Begin your journey to becoming a funded trader from just $155"
  }
];

export default function FTMOPromotion() {
  return (
    <div className="bg-gradient-to-br from-blue-950/80 to-indigo-900/80 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" />
        <div className="absolute -bottom-8 right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-200" />
      </div>

      <div className="relative">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
          {/* Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Become a Funded Trader with FTMO
            </h2>
            <p className="text-xl text-blue-200">
              Trade with up to $400,000 of our capital. Keep up to 90% of the profits. Start your journey today.
            </p>
            <div>
              <a 
                href="https://trader.ftmo.com/?affiliates=LyxCvZMWBskRvzBBHQQi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlowingButton variant="primary" size="large">
                  Start FTMO Challenge Now
                </GlowingButton>
              </a>
            </div>
          </div>

          {/* FTMO Affiliate Banner */}
          <div className="md:w-1/2">
            <div className="bg-white/5 p-1 rounded-xl backdrop-blur-sm border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <a 
                href="https://trader.ftmo.com/?affiliates=LyxCvZMWBskRvzBBHQQi"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden"
              >
                <img 
                  src="https://cdn.ftmo.com/affiliate-banner.320x250" 
                  alt="FTMO.com - For serious traders"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="p-3 bg-blue-500/20 rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-blue-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}