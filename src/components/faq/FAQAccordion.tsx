import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQAccordionProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {questions.map((item, index) => (
        <div key={index} className="border-b border-white/10 last:border-0">
          <button
            className="w-full py-4 flex justify-between items-center text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-white font-medium pr-8">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-blue-400 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="pb-4 text-blue-200">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}