'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import Head from 'next/head';
import Accordion from '../components/Accordion';

const FAQPage = () => {
  const faqs = [
    {
      question: "What areas in Florida do you serve?",
      answer: "We proudly serve Miami, Brickell, Miami Beach, Coral Gables, and all of Florida. Contact us to confirm service availability for your specific location."
    },
    {
      question: "What services do you offer?",
      answer: "We provide residential and commercial moving, specialty hauling, and junk removal services. All our services come with careful handling and fully insured coverage for your peace of mind."
    },
    {
      question: "How much does a local move in Florida cost?",
      answer: "Local moving costs in Florida typically range from $300-$1,500 depending on the size of your home, distance, and specific services needed. We provide free, detailed quotes with complete transparency in all estimates."
    },
    {
      question: "Do you provide packing services?",
      answer: "Absolutely. We offer full-service packing, partial packing, or you can pack yourself. Our professional packers use quality materials and efficient techniques to ensure your belongings are protected throughout the moving process."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Godway Moving is fully licensed and insured. We carry comprehensive liability insurance and provide coverage options for your belongings during the move for your complete peace of mind."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand plans can change. For local moves, we request at least 48 hours notice for cancellations. Deposits may be refundable with sufficient notice. Please contact us as soon as possible if you need to reschedule or cancel."
    },
    {
      question: "Do you move specialty items like pianos or antiques?",
      answer: "Yes, we have specialized training and equipment for moving pianos, antiques, artwork, and other high-value or delicate items. We take extra precautions with these items and can provide custom crating when necessary."
    },
    {
      question: "What makes Godway Moving different from other Florida movers?",
      answer: "Our commitment to excellence, customer service satisfaction, and complete transparency in all estimates sets us apart. We are also proud to support our veterans and approach every job with professionalism and attention to detail."
    },
    {
      question: "Do you offer junk removal services?",
      answer: "Yes! We provide professional junk removal services to clear out unwanted items from your home or business. We handle everything from furniture to appliances with responsible disposal and recycling."
    }
  ];

  return (
    <>
      <Head>
        <title>Moving FAQs | Godway Moving - South Florida Moving Experts</title>
        <meta name="description" content="Find answers to common questions about Godway Moving services in Florida. Learn about residential & commercial moving, junk removal, pricing, and what makes us Florida's best rated movers." />
        <meta name="keywords" content="Florida moving FAQs, South Florida movers, residential moving, commercial moving, junk removal, Miami moving company, licensed insured movers, Florida moving tips" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-godway-green1">
          <div className="container-custom relative z-10">
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our moving services in Florida"
              light={true}
            />
          </div>
        </section>

        {/* Main FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Common Moving Questions"
                subtitle="Everything you need to know about our services and moving process"
                className="mb-12"
              />
              
              <Accordion items={faqs} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-godway-khaki/20">
          <div className="absolute top-0 left-0 w-full h-2 bg-godway-green1/40"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-godway-green1/40"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeader
                title="Still Have Questions?"
                subtitle="Our team is ready to provide the answers you need"
                className="mb-10"
              />
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="tel:+13054097671" className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald uppercase shadow-lg">
                  Call Now
                </a>
                <Link href="/contact" className="bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy px-8 py-4 rounded-full font-oswald uppercase shadow-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage; 