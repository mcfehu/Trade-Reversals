import React from 'react';
import Header from '../components/Header';
import GlowingButton from '../components/ui/GlowingButton';
import { BookOpen, CheckCircle, Download, Star } from 'lucide-react';

const benefits = [
  "Master the art of identifying high-probability reversal setups",
  "Learn professional risk management techniques",
  "Understand market psychology and price action",
  "Develop a disciplined trading mindset",
  "Access proven scalping strategies for Gold and Nasdaq",
  "Real examples and case studies from our trading desk"
];

const chapters = [
  {
    number: "01",
    title: "Understanding Market Reversals",
    description: "Learn the fundamental principles behind market reversals and why they present high-probability trading opportunities."
  },
  {
    number: "02",
    title: "Technical Analysis Mastery",
    description: "Master the essential technical indicators and chart patterns that signal potential market reversals."
  },
  {
    number: "03",
    title: "Psychology of Trading",
    description: "Develop the mindset of a professional trader and learn to control emotions during critical market moments."
  },
  {
    number: "04",
    title: "Risk Management Strategies",
    description: "Implement professional risk management techniques to protect your capital and maximize profits."
  },
  {
    number: "05",
    title: "Gold Trading Strategies",
    description: "Specific strategies and setups for trading Gold futures, including optimal entry and exit points."
  },
  {
    number: "06",
    title: "Nasdaq Trading Tactics",
    description: "Advanced techniques for trading Nasdaq futures, including market correlation and sector analysis."
  }
];

export default function Ebook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2 space-y-6">
              <div className="text-yellow-400 font-semibold">By Trade Reversals</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                THE ULTIMATE GUIDE
                <span className="block text-yellow-400">To Scalping the Futures Market</span>
              </h1>
              <p className="text-xl text-blue-200">
                Unlock the secrets of disciplined trading with Trade Reversals. Get expert scalping signals for Gold and the Nasdaq, designed to help you trade smarter, stay consistent, and achieve your trading goals.
              </p>
              <div className="flex items-center gap-4 text-blue-300">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span>Trusted by Professional Traders</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowingButton variant="primary" size="large" className="flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  Get Instant Access (£14.99)
                </GlowingButton>
                <GlowingButton variant="secondary" size="large" className="flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Preview Sample
                </GlowingButton>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gradient-to-b from-blue-900 to-blue-950">
                  <img
                    src="https://i.imgur.com/zxkZ9DN.jpeg"
                    alt="The Ultimate Guide to Scalping the Futures Market"
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-blue-100">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chapters Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Inside the Guide
            </h2>
            <div className="space-y-6">
              {chapters.map((chapter) => (
                <div 
                  key={chapter.number}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-3xl font-bold text-yellow-400">
                      {chapter.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {chapter.title}
                      </h3>
                      <p className="text-blue-200">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Journey to Consistent Profits
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Join successful traders who are already benefiting from our professional scalping strategies
            </p>
            <GlowingButton variant="primary" size="large" className="flex items-center justify-center gap-2 mx-auto">
              <Download className="h-5 w-5" />
              Download Now (£14.99)
            </GlowingButton>
            <p className="mt-4 text-blue-300">
              Due to the nature of digital products, all sales are final. If you have any questions about the eBook before purchasing, feel free to contact us. We're happy to provide more details to ensure this guide meets your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}