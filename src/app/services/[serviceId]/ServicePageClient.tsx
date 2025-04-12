'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaCheckCircle, FaInfoCircle, FaPhone, FaClock, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { serviceDetails, ServiceDetail } from '../../data/serviceDetails';

interface ServicePageClientProps {
  params: {
    serviceId: string;
  };
}

export default function ServicePageClient({ params }: ServicePageClientProps) {
  const { serviceId } = params;
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Find the service based on the serviceId
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];
  
  // If service doesn't exist, return Not Found
  if (!service && mounted) {
    notFound();
  }
  
  if (!service) {
    return null; // Return null initially on the client if service is not found
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-godway-navy">
          <div className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-oswald text-4xl md:text-5xl lg:text-6xl text-white mb-4 uppercase font-bold"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto font-light"
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="h-1 w-20 bg-godway-gradient mb-6 rounded-full"></div>
                <h2 className="text-3xl font-oswald text-godway-green1 mb-4 uppercase font-bold">Our Approach</h2>
                <div className="space-y-4">
                  {service.longDescription.map((paragraph: string, index: number) => (
                    <p key={index} className="text-lg text-gray-700">{paragraph}</p>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-oswald text-godway-navy mb-4 uppercase font-bold">Why Choose Us</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl overflow-hidden shadow-lg relative h-[500px]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Details Grid */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="h-1 w-20 bg-godway-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold">Service Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Features */}
              <div className="bg-cream rounded-3xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-godway-green1 p-3 rounded-full">
                    <FaInfoCircle className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-oswald uppercase font-bold">Features</h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Pricing */}
              <div className="bg-cream rounded-3xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-godway-green1 p-3 rounded-full">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-oswald uppercase font-bold">Pricing</h3>
                </div>
                <ul className="space-y-3">
                  {service.pricing.map((price: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Availability */}
              <div className="bg-cream rounded-3xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-godway-green1 p-3 rounded-full">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-oswald uppercase font-bold">Availability</h3>
                </div>
                <ul className="space-y-3">
                  {service.availability.map((time: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Service Areas */}
              <div className="bg-cream rounded-3xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-godway-green1 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-oswald uppercase font-bold">Locations</h3>
                </div>
                <ul className="space-y-3">
                  {service.locations.map((location: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="h-1 w-20 bg-godway-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold">Frequently Asked Questions</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {service.FAQs.map((faq: {question: string, answer: string}, index: number) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-lg">
                  <h3 className="text-xl font-oswald text-godway-navy mb-2 font-semibold">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-godway-navy relative">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-oswald text-3xl md:text-4xl text-white mb-6 uppercase font-bold"
              >
                Ready To Get Moving?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-200 mb-8 text-lg"
              >
                Contact us today for a free, no-obligation quote for your {service.title.toLowerCase()} needs
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-godway-green1 text-white rounded-full hover:bg-godway-green2 transition-colors duration-300 font-medium font-oswald uppercase"
                >
                  Get A Free Quote
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-colors duration-300 font-oswald uppercase"
                >
                  Explore Other Services
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 