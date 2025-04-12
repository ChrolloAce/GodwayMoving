import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import React from 'react';

export const metadata = {
  title: 'Godway Moving | Professional Moving Services in Miami, FL',
  description: 'Transform your moving experience with Miami\'s leading military-grade moving company. Specializing in residential and commercial relocations, packing services, and careful handling of your belongings throughout South Florida.',
  keywords: 'Godway Moving Miami, residential moving Florida, commercial moving Tampa, packing services Orlando, professional moving services, relocation South Florida, Miami moving company, military-grade moving service'
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <AboutSection />
      <Industries />
      <Testimonials />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
} 