import React from 'react';
import Header from '../components/Header';
import FAQSection from '../components/faq/FAQSection';
import PageCTA from '../components/ui/PageCTA';
import { faqSections } from '../data/faqSections';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-200">
              Find quick answers to common questions about our trading signals
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {faqSections.map((section) => (
              <FAQSection
                key={section.title}
                icon={section.icon}
                title={section.title}
                questions={section.questions}
              />
            ))}
          </div>

          <PageCTA
            title="Ready to Start Trading?"
            description="Join our community of successful traders today"
            buttonText="Get Started Now"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}