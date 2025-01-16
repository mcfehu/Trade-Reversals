import React, { useState } from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: "How do your trading signals work?",
    answer: "Our AI-powered algorithms analyze multiple timeframes and market conditions to identify high-probability reversal setups in Gold and Nasdaq futures. Signals include precise entry, stop-loss, and take-profit levels."
  },
  {
    question: "What is your success rate?",
    answer: "Our signals maintain a verified 87% success rate, with all results independently audited and published monthly. Each trade aims for a minimum 1:3 risk-reward ratio."
  },
  {
    question: "How do I receive the signals?",
    answer: "Signals are delivered instantly via our mobile app, email, and private Telegram group. Each alert includes detailed entry instructions and risk management parameters."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel anytime by logging into your account, going to Settings > Subscription, and clicking 'Cancel Subscription'. After cancelling, you'll maintain access until the end of your billing period."
  }
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}