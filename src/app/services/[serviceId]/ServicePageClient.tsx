'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaCheckCircle, FaInfoCircle, FaPhone, FaClock, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaTruck, FaBoxOpen, FaHome } from 'react-icons/fa';
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
  
  // Fix potential 24/7/365 display issues by ensuring it's displayed as text
  const formatTitle = (title: string) => {
    return title.replace("24/7/365", "24/7/365 ");
  };

  // All available images - now using local optimized images
  const allImages = [
    "/images/godway/hero-team-leader.jpg",
    "/images/godway/team-full.jpg",
    "/images/godway/team-lineup.jpg",
    "/images/godway/truck-back-team.jpg",
    "/images/godway/action-moving-1.jpg",
    "/images/godway/action-moving-2.jpg",
    "/images/godway/action-moving-3.jpg",
    "/images/godway/action-moving-4.jpg",
    "/images/godway/truck-front.jpg",
    "/images/godway/team-pose.jpg",
    "/images/godway/couple-photo.jpg",
  ];

  // Use a deterministic hash function to select different images for each service
  const getHashCode = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  // Get truly unique images for each service based on service title
  const getUniqueImagesForService = (title: string) => {
    const hash = getHashCode(title);
    const startIndex = hash % (allImages.length - 3); // Ensure we have room for 3 images
    
    return [
      allImages[startIndex % allImages.length],
      allImages[(startIndex + 11) % allImages.length], // Use prime offsets to avoid patterns
      allImages[(startIndex + 23) % allImages.length],
    ];
  };

  // Get unique images for this specific service
  const serviceImages = getUniqueImagesForService(service.title);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - Simplified to just a color background */}
        <section className="relative pt-32 pb-20 bg-godway-green1">
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-oswald text-4xl md:text-5xl lg:text-6xl text-white mb-4 uppercase font-bold"
              >
                {formatTitle(service.title)}
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
                    src={serviceImages[0]} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Service Description - New Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="h-1 w-20 bg-godway-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold">How We Help You Move</h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">Our Florida-based moving team brings expertise and care to every relocation, whether you're moving across town or to a new Florida city.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-cream rounded-3xl p-8 shadow-lg"
              >
                <div className="bg-godway-green1 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FaTruck className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-oswald text-godway-navy mb-4 uppercase font-semibold">Professional Expertise</h3>
                <p className="text-gray-700">Our Florida moving specialists are trained to handle all aspects of your relocation with care and precision. We understand the unique challenges of Florida moves, from navigating coastal areas to handling the hot climate.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-cream rounded-3xl p-8 shadow-lg"
              >
                <div className="bg-godway-green1 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FaBoxOpen className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-oswald text-godway-navy mb-4 uppercase font-semibold">Comprehensive Service</h3>
                <p className="text-gray-700">From packing and loading to transportation and unpacking, we provide end-to-end solutions for your moving needs in Miami, Orlando, Tampa, and throughout Florida. We handle everything so you don't have to worry.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-cream rounded-3xl p-8 shadow-lg"
              >
                <div className="bg-godway-green1 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FaHome className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-oswald text-godway-navy mb-4 uppercase font-semibold">Florida Expertise</h3>
                <p className="text-gray-700">Our local knowledge of Florida neighborhoods, building requirements, and traffic patterns ensures your move goes smoothly. We're familiar with the unique aspects of moving in Florida's diverse communities.</p>
              </motion.div>
            </div>
            
            {/* Additional Content Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 space-y-4"
              >
                <h2 className="text-3xl font-oswald text-godway-green1 mb-4 uppercase font-bold">Tailored Florida Moving Solutions</h2>
                <p className="text-lg text-gray-700">We understand that every move in Florida is unique. Whether you're relocating to a beachfront condo in Miami, a family home in Orlando, or a retirement community in Tampa, our services are customized to your specific needs.</p>
                <p className="text-lg text-gray-700">Our team carefully plans each move considering factors like Florida weather conditions, building access restrictions, and your timeline requirements. We provide personalized attention to ensure your possessions arrive safely at your new Florida home.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom packing solutions for Florida's climate</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Specialized handling for valuable and delicate items</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Flexible scheduling for last-minute Florida moves</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="rounded-3xl overflow-hidden shadow-lg relative h-[500px]">
                  <img 
                    src={serviceImages[1]}
                    alt="Florida Moving Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Additional Content Image Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl overflow-hidden shadow-lg relative h-[500px]">
                  <img 
                    src={serviceImages[2]} 
                    alt="Professional Moving Team in Florida"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-oswald text-godway-green1 mb-4 uppercase font-bold">Our Florida Moving Process</h2>
                <p className="text-lg text-gray-700">At Godway Moving, we've developed a seamless moving process designed to make your Florida relocation as stress-free as possible. Our systematic approach ensures nothing is overlooked.</p>
                <p className="text-lg text-gray-700">From the initial consultation to the final placement of furniture in your new Florida home, our team maintains clear communication and professional service throughout the entire process.</p>
                <ol className="mt-6 space-y-4 list-decimal pl-5">
                  <li className="text-gray-700 pl-2">
                    <span className="font-semibold text-godway-navy">Initial Consultation:</span> We assess your specific moving needs and provide a detailed quote tailored to your Florida move.
                  </li>
                  <li className="text-gray-700 pl-2">
                    <span className="font-semibold text-godway-navy">Pre-Move Planning:</span> Our team creates a comprehensive plan considering your timeline, inventory, and Florida location specifics.
                  </li>
                  <li className="text-gray-700 pl-2">
                    <span className="font-semibold text-godway-navy">Professional Packing:</span> Using high-quality materials, we carefully pack your belongings to withstand Florida's climate and transportation.
                  </li>
                  <li className="text-gray-700 pl-2">
                    <span className="font-semibold text-godway-navy">Secure Transport:</span> Our well-maintained fleet safely transports your possessions to your new Florida home.
                  </li>
                  <li className="text-gray-700 pl-2">
                    <span className="font-semibold text-godway-navy">Placement & Setup:</span> We arrange furniture and boxes according to your instructions in your new Florida residence.
                  </li>
                </ol>
              </motion.div>
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
        
        {/* Service Areas Section - New SEO Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="h-1 w-20 bg-godway-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold">Florida Service Areas</h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">We provide exceptional moving services throughout these Florida communities:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {service.locations.map((location: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-cream rounded-3xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <FaMapMarkerAlt className="text-godway-green1 mb-3 text-2xl" />
                  <h3 className="text-xl font-oswald text-godway-navy font-semibold">{location}</h3>
                  <p className="text-gray-700 mt-2">Full-service moving solutions in {location} and surrounding areas.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section - Updated to match homepage style */}
        <section className="py-20 relative overflow-hidden bg-godway-khaki/20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-godway-khaki/20"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-godway-green1/40"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-godway-green1/40"></div>
          <div className="absolute left-10 top-10 w-24 h-24 border-4 border-dashed border-godway-green1/20 rounded-md transform rotate-45"></div>
          <div className="absolute right-10 bottom-10 w-32 h-32 border-4 border-dashed border-godway-green1/20 rounded-md transform -rotate-12"></div>
          
          {/* Diagonal stripes in corners */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-8 bg-godway-green1/30 transform rotate-45 translate-x-16 -translate-y-4"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-8 bg-godway-green1/30 transform rotate-45 -translate-x-16 translate-y-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl text-godway-green1 mb-6 uppercase">
                Local & Last-Minute <span className="text-godway-navy">Moving</span>
              </h2>
              
              <p className="text-gray-700 text-lg mb-10 font-oswald">
                Ready for a seamless moving experience across Florida? We specialize in last-minute moves and small local relocations. Contact us today for a free quote and personalized moving plan tailored to your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/contact" className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald text-white uppercase shadow-lg">
                  Get a Free Quote
                </Link>
                <Link href="/services" className="btn bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy rounded-full px-8 py-4 font-oswald uppercase shadow-lg">
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 