import React from 'react';
import Section from '../../layout/Section';
import { Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "traderevs@gmail.com"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "London, United Kingdom"
  }
];

export default function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? Our team is here to help
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg">
                <div className="p-3 bg-blue-100 rounded-full">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}