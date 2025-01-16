import React from 'react';
import Section from '../../layout/Section';
import StoryCard from './StoryCard';

const stories = [
  {
    name: "David Chen",
    achievement: "From Beginner to Pro Trader",
    story: "Started with zero trading experience. Within 6 months of following our signals, achieved consistent profitability and quit his 9-5 job.",
    stats: {
      monthlyReturn: "18.5%",
      consistency: "92%"
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sarah Williams",
    achievement: "Portfolio Growth Expert",
    story: "Transformed her trading approach with our reversal strategy. Now manages a 7-figure portfolio with remarkable consistency.",
    stats: {
      monthlyReturn: "22.3%",
      consistency: "88%"
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Marcus Thompson",
    achievement: "Master of Market Reversals",
    story: "Struggled with emotional trading for years. Our signals provided the structure he needed to achieve consistent success.",
    stats: {
      monthlyReturn: "15.8%",
      consistency: "94%"
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function SuccessStories() {
  return (
    <Section id="success-stories" className="bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute -bottom-8 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Trader Success Stories</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Real traders, real results. See how our community members transformed their trading journey with our signals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.name} {...story} />
          ))}
        </div>
      </div>
    </Section>
  );
}