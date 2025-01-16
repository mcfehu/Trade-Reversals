import React from 'react';
import Section from '../../layout/Section';
import ContactForm from './ContactForm';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "support@tradereversals.com"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    content: "24/7 Support Available"
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
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start">
                  <item.icon className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}