import React from 'react';
import Section from '../../layout/Section';
import FAQList from './FAQList';

export default function FAQ() {
  return (
    <Section id="faq" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to know about our trading signals
        </p>
      </div>
      <FAQList />
    </Section>
  );
}