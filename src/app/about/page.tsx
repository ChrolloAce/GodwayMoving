'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BusinessInfo from '../data/business-info';

const AboutPage = () => {
  // Company stats
  const stats = [
    { number: '5+', text: 'Years in Florida' },
    { number: '1,200+', text: 'Successful Moves' },
    { number: '4.9', text: 'Star Rating' },
    { number: '99%', text: 'Satisfaction Rate' },
  ];

  // Company values
  const values = [
    {
      icon: <FaCheckCircle className="w-6 h-6 text-godway-green1" />,
      title: 'Professional Precision',
      description: 'We approach every move with disciplined planning and meticulous attention to detail, ensuring your belongings are handled with the utmost care.'
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-godway-green1" />,
      title: 'Reliability',
      description: 'Count on our punctual, consistent service with clear communication throughout the entire moving process.'
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-godway-green1" />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and respect for your property and privacy at all times.'
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-godway-green1" />,
      title: 'Teamwork',
      description: 'Our well-trained crews work together efficiently to ensure a smooth, coordinated moving experience.'
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-godway-green1" />,
      title: 'Careful Handling',
      description: 'Every item is treated with professional care to prevent damage during the moving process.'
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    'Experienced, background-checked moving professionals',
    'Precision in planning and execution',
    'Custom moving plans tailored to your specific needs',
    'Climate-controlled storage solutions for Florida\'s weather',
    'Careful handling of fragile and valuable items',
    'Comprehensive insurance coverage for peace of mind',
    'Satisfaction guaranteed with every move',
    'Specialized in South Florida\'s unique moving challenges'
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-godway-green1">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://i.ibb.co/CwgG4tL/team.jpg"
              alt="About Godway Moving"
              fill
              className="object-cover opacity-30"
              priority
              unoptimized
            />
          </div>
          
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-5xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display uppercase">About Our Florida Moving Company</h1>
              <p className="text-xl max-w-3xl mx-auto">Godway Moving has been providing exceptional moving services to customers across Florida with precision and care.</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Main image with overlayed smaller image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative lg:mr-6"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-godway-green1/20">
                  <Image
                    src="https://i.ibb.co/v65KPtGc/IMG-0739.jpg"
                    alt="Local Florida Moving 1"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="rounded-xl"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-godway-navy/40 to-transparent"></div>
                </div>
                
                {/* Overlayed smaller image */}
                <div className="absolute -bottom-6 -right-6 w-28 h-28 md:w-32 md:h-32">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white">
                    <Image
                      src="https://i.ibb.co/WvBWPXWM/IMG-0731.jpg"
                      alt="Local Florida Moving 2"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="rounded-xl"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative lg:ml-6"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-oswald uppercase text-godway-green1">
                    Our Mission
                  </h2>
                  <p className="text-base text-gray-700 mb-4 font-oswald">
                    At Godway Moving, we're dedicated to transforming the moving experience with professional precision and exceptional care. Our mission is to make your relocation stress-free by providing reliable, efficient, and careful moving services.
                  </p>
                  <p className="text-base text-gray-700 mb-4 font-oswald">
                    Based in Miami, we serve clients throughout South Florida, delivering premium moving services that combine strategic planning with superior execution. We specialize in last-minute moves and small local relocations.
                  </p>
                  <p className="text-base text-gray-700 font-oswald">
                    From Naples to Miami and everywhere in between, our dedicated team ensures your moving experience exceeds expectations with careful handling and efficient service, especially when time is of the essence.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-oswald uppercase text-godway-green1">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-oswald">
                The principles that guide our work and set us apart
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Precision",
                  description: "We approach every move with disciplined planning and meticulous execution, ensuring nothing is left to chance.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Customer Satisfaction",
                  description: "Your satisfaction is our top priority. We work closely with you throughout the move to ensure all your expectations are met.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  )
                },
                {
                  title: "Florida Expertise",
                  description: "We understand Florida's unique moving challenges, from high-rise condos to dealing with the humidity and heat that can affect your belongings.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-godway-green1/20"
                >
                  <div className="w-16 h-16 bg-godway-green1/10 rounded-md flex items-center justify-center mb-6 text-godway-green1">
                      {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4 font-oswald">{value.title}</h3>
                  <p className="text-gray-700 font-oswald">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:mr-6"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-oswald uppercase text-godway-green1">
                  Why Choose Godway Moving
                </h2>
                <p className="text-base text-gray-700 mb-6 font-oswald">
                  When you choose Godway Moving, you're selecting a team that brings professional precision to every aspect of your move:
                </p>
                <ul className="space-y-4">
                  {whyChooseUs.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-godway-green1 mt-1 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 font-oswald">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative lg:ml-6"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-godway-green1/20">
                  <Image
                    src="https://i.ibb.co/27xmL2w8/IMG-1632.jpg"
                    alt="Florida Moving Services"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="rounded-xl"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-godway-navy/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-godway-khaki/20">
          <div className="absolute top-0 left-0 w-full h-2 bg-godway-green1/40"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-godway-green1/40"></div>
          <div className="absolute left-10 top-10 w-24 h-24 border-4 border-dashed border-godway-green1/20 rounded-md transform rotate-45"></div>
          <div className="absolute right-10 bottom-10 w-32 h-32 border-4 border-dashed border-godway-green1/20 rounded-md transform -rotate-12"></div>
          
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-8 bg-godway-green1/30 transform rotate-45 translate-x-16 -translate-y-4"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-8 bg-godway-green1/30 transform rotate-45 -translate-x-16 translate-y-4"></div>
          </div>
          
          <div className="container-custom relative z-10">
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
                  <Link href="/services" className="bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy px-8 py-4 rounded-full font-oswald uppercase shadow-lg">
                    View Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage; 