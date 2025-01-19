import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/sections/About';
import WhyUs from '../components/sections/WhyUs';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';
import Disclaimer from '../components/Disclaimer';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <NewsletterSignup />
        </div>
        <Pricing />
        <Contact />
      </main>
      <Disclaimer />
    </div>
  );
}