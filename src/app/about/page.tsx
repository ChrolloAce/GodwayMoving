'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaShieldAlt, FaStar, FaHandshake, FaHeart } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BusinessInfo from '../data/business-info';

const AboutPage = () => {
  // Core values
  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in every move, ensuring your belongings are handled with the utmost care and professionalism.",
      icon: <FaStar className="w-8 h-8" />
    },
    {
      title: "Customer Service Satisfaction",
      description: "Your satisfaction is our top priority. We work closely with you throughout the move to ensure all your expectations are exceeded.",
      icon: <FaHandshake className="w-8 h-8" />
    },
    {
      title: "Transparency",
      description: "Complete honesty and transparency in all our estimates and communications. No hidden fees, no surprises.",
      icon: <FaShieldAlt className="w-8 h-8" />
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: 'Licensed and Insured',
      description: 'Fully licensed and insured for your complete peace of mind'
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: 'Great Customer Feedback',
      description: '5-star rated with over 200+ positive reviews from satisfied customers'
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: 'Complete Transparency in All Estimates',
      description: 'No hidden fees or surprise charges - what we quote is what you pay'
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: 'We Help Support Our Veterans',
      description: 'Proudly supporting and serving our veterans community'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-godway-green1">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/godway/team-lineup.jpg"
              alt="About Godway Moving"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-5xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display uppercase">About Godway Moving</h1>
              <p className="text-xl max-w-3xl mx-auto">Florida's best rated movers providing residential & commercial moving, specialty hauling and junk removal services.</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
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
                    src="/images/godway/truck-back-team.jpg"
                    alt="Godway Moving Team"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-godway-navy/40 to-transparent"></div>
                </div>
                
                {/* Overlayed smaller image */}
                <div className="absolute -bottom-6 -right-6 w-28 h-28 md:w-32 md:h-32">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white">
                    <Image
                      src="/images/godway/team-pose.jpg"
                      alt="Godway Moving"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="rounded-xl"
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
                    Our Story
                  </h2>
                  <p className="text-base text-gray-700 mb-4 font-oswald">
                    After being unable to enlist in the U.S. Army, Pablo chose another path of service. At just 20 years old, he began helping people move with his pickup truck, learning firsthand the value of discipline, responsibility, and teamwork.
                  </p>
                  <p className="text-base text-gray-700 mb-4 font-oswald">
                    That experience inspired the creation of Godway Moving, built on principles drawn from the military — structure, and service excellence. When Pablo shared his vision with his brother, Pablo José, he didn't hesitate. He left his job, believed in the mission, and together they have spent the past four years building a trusted moving company in Miami.
                  </p>
                  <p className="text-base text-gray-700 font-oswald">
                    Today, our crews approach every job with professionalism, attention to detail, and respect for our clients and their belongings. We proudly serve Miami, Brickell, Miami Beach, and Coral Gables, providing residential and commercial moving, junk removal, furniture delivery, and specialty assembly services. We are also honored to serve and support our veterans, carrying our commitment to service into every move.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
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
                <p className="text-base text-gray-700 mb-8 font-oswald">
                  When you choose Godway Moving, you're selecting a team that brings professional precision and genuine care to every aspect of your move:
                </p>
                <div className="space-y-6">
                  {whyChooseUs.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-godway-green1/10 rounded-lg flex items-center justify-center flex-shrink-0 text-godway-green1">
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-dark font-oswald mb-1">{point.title}</h3>
                        <p className="text-gray-700 font-oswald">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
                    src="/images/godway/couple-photo.jpg"
                    alt="Godway Moving Services"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="rounded-xl"
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
                  Ready to <span className="text-godway-navy">Get Started?</span>
                </h2>
                
                <p className="text-gray-700 text-lg mb-10 font-oswald">
                  Contact us today for a free quote and experience the Godway difference. We're here to make your move stress-free.
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
