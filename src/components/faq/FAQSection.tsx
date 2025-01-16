import React from 'react';
import { LucideIcon } from 'lucide-react';
import FAQAccordion from './FAQAccordion';

interface FAQSectionProps {
  icon: LucideIcon;
  title: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQSection({ icon: Icon, title, questions }: FAQSectionProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6 text-blue-400" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="space-y-4">
        <FAQAccordion questions={questions} />
      </div>
    </div>
  );
}