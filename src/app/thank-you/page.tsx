'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewsWidget from '../components/ReviewsWidget';
import Head from 'next/head';

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thank You | Godway Moving Services Florida</title>
        <meta name="description" content="Thank you for choosing Godway Moving in Florida. We're excited to help you with your moving needs across Miami, Tampa, Orlando and all of Florida." />
        <meta name="keywords" content="moving services Florida, professional movers Miami, last minute moving Tampa, local movers Orlando, Florida moving company" />
      </Head>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-12 md:pb-20 bg-white relative">
          <div className="container-custom px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 md:mb-8 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-godway-green1/10 text-godway-green1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              <h1 className="font-oswald text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 uppercase">
                Thank You for <span className="text-godway-green1">Choosing Us</span>
              </h1>
              
              <p className="text-gray-700 text-base sm:text-lg mb-6 md:mb-10 px-4 sm:px-0 font-oswald">
                We've received your moving quote request and a member of our team will contact you shortly. While you wait, explore more about our Florida moving services.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center px-4 sm:px-0"
              >
                <Link href="/services" className="btn-primary bg-godway-green1 hover:bg-godway-green2 text-white rounded-lg text-center w-full sm:w-auto font-oswald px-6 py-3">
                  Explore Our Services
                </Link>
                <Link href="/" className="btn bg-gray-100 text-gray-800 hover:bg-gray-200 text-center w-full sm:w-auto font-oswald rounded-lg px-6 py-3">
                  Return to Home
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-godway-green1/30 to-transparent"></div>
        </section>

        {/* Reviews Widget Section */}
        <section className="py-10 md:py-16 bg-white relative">
          <ReviewsWidget />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-godway-green1/30 to-transparent"></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThankYouPage; 