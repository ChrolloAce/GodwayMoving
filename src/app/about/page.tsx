'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaAward, FaHandshake, FaStar, FaUsers, FaShieldAlt, FaTruck, FaBoxOpen } from 'react-icons/fa';
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
      icon: <FaShieldAlt className="w-6 h-6 text-military-olive" />,
      title: 'Military Precision',
      description: 'We apply military-grade precision and discipline to every move, ensuring your belongings are handled with the utmost care and attention to detail.'
    },
    {
      icon: <FaStar className="w-6 h-6 text-military-olive" />,
      title: 'Reliability',
      description: 'Count on our punctual, consistent service with clear communication throughout the entire moving process.'
    },
    {
      icon: <FaHandshake className="w-6 h-6 text-military-olive" />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and respect for your property and privacy at all times.'
    },
    {
      icon: <FaUsers className="w-6 h-6 text-military-olive" />,
      title: 'Teamwork',
      description: 'Our well-trained crews work together efficiently to ensure a smooth, coordinated moving experience.'
    },
    {
      icon: <FaBoxOpen className="w-6 h-6 text-military-olive" />,
      title: 'Careful Handling',
      description: 'Every item is treated with professional care to prevent damage during the moving process.'
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    'Experienced, background-checked moving professionals',
    'Military-grade precision in planning and execution',
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
        <section className="relative pt-32 pb-16 bg-military-olive">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://i.ibb.co/5XtvYCwR/IMG-5288.jpg")',
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
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4"
              >
                About Godway Moving
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                Your trusted partner in military-grade moving services across South Florida
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-md overflow-hidden border border-military-olive/20"
              >
                <Image
                  src="https://i.ibb.co/rGws4TV1/IMG-5288.jpg"
                  alt="Godway Moving Team"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="h-1 w-20 bg-military-gradient mb-6 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Godway Moving, we're dedicated to transforming the moving experience with military-grade precision and exceptional care. Our mission is to make your relocation stress-free by providing reliable, efficient, and careful moving services.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Based in Miami, we serve clients throughout South Florida, delivering premium moving services that combine strategic planning with superior execution.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-cream p-6 rounded-md border border-military-olive/20">
                    <div className="text-3xl font-bold text-military-olive mb-2">5+</div>
                    <div className="text-gray-700">Years Experience</div>
                  </div>
                  <div className="bg-cream p-6 rounded-md border border-military-olive/20">
                    <div className="text-3xl font-bold text-military-olive mb-2">1,200+</div>
                    <div className="text-gray-700">Successful Moves</div>
                  </div>
                </div>
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
              <div className="h-1 w-20 bg-military-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                The principles that guide our work and set us apart
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Military-Grade Precision",
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
                  className="bg-white p-8 rounded-md shadow-military border border-military-olive/20"
                >
                  <div className="w-16 h-16 bg-military-olive/10 rounded-md flex items-center justify-center mb-6 text-military-olive">
                      {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="h-1 w-20 bg-military-gradient mb-6 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                  Why Choose Godway Moving
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  When you choose Godway Moving, you're selecting a team that brings military precision to every aspect of your move:
                </p>
                <ul className="space-y-4">
                  {whyChooseUs.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-military-olive mt-1 flex-shrink-0 mr-3" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-md overflow-hidden border border-military-olive/20"
              >
                <Image
                  src="https://i.ibb.co/fG4nktFY/IMG-5246.jpg"
                  alt="Godway Moving Team at Work"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-military-olive relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://i.ibb.co/zZb9LTq4/IMG-5297.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Ready for a Stress-Free Move?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
              >
                Contact us today for a free consultation and let's plan your perfect move.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="/contact" className="bg-white text-military-olive hover:bg-cream px-6 py-3 rounded-md font-medium transition-colors shadow-military inline-block">
                  Get Free Quote
                </Link>
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