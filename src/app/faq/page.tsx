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
      answer: "We serve all of South Florida including Miami, Fort Lauderdale, Orlando, Tampa, and surrounding counties. We specialize in both local and long-distance moves within Florida. Contact us to confirm service availability for your specific location."
    },
    {
      question: "How much does a local move in Florida cost?",
      answer: "Local moving costs in Florida typically range from $300-$1,500 depending on the size of your home, distance, and specific services needed. We provide free, detailed quotes after understanding your exact requirements to ensure transparency in pricing."
    },
    {
      question: "Can you accommodate last-minute moves?",
      answer: "Yes! We specialize in last-minute and urgent moving services throughout Florida. Our flexible team can often accommodate moves with as little as 24-48 hours notice, depending on availability and distance."
    },
    {
      question: "Do you provide packing services?",
      answer: "Absolutely. We offer full-service packing, partial packing, or you can pack yourself. Our professional packers use quality materials and efficient techniques to ensure your belongings are protected throughout the moving process."
    },
    {
      question: "How do you handle Florida's heat and humidity when moving sensitive items?",
      answer: "We take special precautions for Florida's climate, including climate-controlled vehicles for sensitive items, moisture-resistant packing materials, and strategic moving schedules to avoid the hottest parts of the day when necessary."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Godway Moving is fully licensed and insured in the state of Florida. We carry comprehensive liability insurance and provide coverage options for your belongings during the move for your peace of mind."
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
      answer: "Our professional precision, specialized last-minute moving expertise, and deep understanding of Florida's unique moving challenges set us apart. We combine efficiency with careful handling and personalized service for every client, ensuring a stress-free moving experience."
    },
    {
      question: "Do you offer storage solutions?",
      answer: "Yes, we provide both short-term and long-term storage solutions in climate-controlled facilities throughout Florida. This is particularly helpful for staging between moves or when your new home isn't quite ready."
    }
  ];

  return (
    <>
      <Head>
        <title>Moving FAQs | Godway Moving - South Florida Moving Experts</title>
        <meta name="description" content="Find answers to common questions about Godway Moving services in South Florida. Learn about local moves, pricing, packing services, and what makes our Florida moving team unique." />
        <meta name="keywords" content="Florida moving FAQs, South Florida movers, last-minute moving questions, local moving cost Florida, Miami moving company, Orlando movers FAQs, Tampa moving services, Florida moving tips" />
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
                <a href="tel:+18139995321" className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald uppercase shadow-lg">
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