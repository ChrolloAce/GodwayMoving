import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RatingsBanner from './components/RatingsBanner';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import React from 'react';

export const metadata = {
  title: 'Godway Moving | Florida\'s Best Rated Movers',
  description: 'Godway provides residential & commercial moving, specialty hauling and junk removal services with careful handling and a fully insured service throughout Florida.',
  keywords: 'Godway Moving Miami, residential moving Florida, commercial moving Florida, junk removal Florida, professional moving services, relocation South Florida, Miami moving company, fully insured movers'
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
      <Footer />
    </main>
  );
} 