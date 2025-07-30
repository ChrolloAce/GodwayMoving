import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RatingsBanner from './components/RatingsBanner';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import React from 'react';

export const metadata = {
  title: 'Godway Moving | Professional Moving Services in Miami, FL',
  description: 'Transform your moving experience with Miami\'s leading moving company. Specializing in last-minute moves and small local relocations throughout Florida with careful handling of your belongings.',
  keywords: 'Godway Moving Miami, residential moving Florida, last-minute moves Florida, small local moves, professional moving services, relocation South Florida, Miami moving company, emergency moving service'
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RatingsBanner />
      <Services />
      <HowItWorks />
      <AboutSection />
      <Testimonials />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
} 