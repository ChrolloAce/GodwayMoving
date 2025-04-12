'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BusinessInfo from '../data/business-info';

const Hero = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: '',
    service: 'South Florida Residential Moving',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Navigate to thank you page instead of showing alert
    router.push('/thank-you');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16 md:pt-0 md:pb-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://i.ibb.co/6cff1WzW/IMG-4365.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-military-navy/80 to-military-navy/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative Elements - hide on mobile for performance */}
      <div className="hidden md:block absolute top-1/3 right-16 w-72 h-72 bg-military-olive/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/4 left-16 w-96 h-96 bg-military-khaki/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 left-10 w-32 h-32 border border-military-khaki/30 rounded-full"></div>
      <div className="hidden md:block absolute top-40 right-20 w-16 h-16 border border-military-khaki/30 rounded-full"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Military-Grade Moving Services in South Florida
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
              {BusinessInfo.company.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <span className="text-military-khaki">★</span>
                <span>{BusinessInfo.reviews.rating} Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-military-khaki">📍</span>
                <span>{BusinessInfo.areasServed}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link 
                href="/contact" 
                className="bg-military-olive text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-military-camo transition-colors text-center"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors text-center"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-md border-2 border-military-khaki/30 mt-8 lg:mt-0"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 md:mb-6">Get Your Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-military-khaki text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-military-khaki text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-military-khaki text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Your ZIP Code"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-military-khaki text-base"
                  required
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:border-military-khaki text-base"
                >
                  {BusinessInfo.services.primary.map((service) => (
                    <option key={service} value={service} className="bg-gray-800 text-white">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-military-olive text-white py-3 rounded-md font-semibold hover:bg-military-camo transition-colors text-base"
              >
                Get Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 