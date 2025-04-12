import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { servicesData } from '@/app/data/servicesData';
import ServicePageClient from './ServicePageClient';
import { FaCheckCircle, FaShieldAlt, FaClock, FaClipboardCheck } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

// Generate metadata
export async function generateMetadata({ params }: { params: { serviceId: string } }): Promise<Metadata> {
  const service = servicesData.find(s => s.id === params.serviceId);

  if (!service) {
    return {
      title: 'Service Not Found | Godway Moving',
      description: 'The requested service could not be found.'
    };
  }
  
  return {
    title: `${service.title} | Godway Moving Florida`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Godway Moving Florida`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

// Server Component
export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  const service = servicesData.find(s => s.id === params.serviceId);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-godway-green1">
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white text-center uppercase mb-6">
            {service.title}
          </h1>
          <p className="text-lg text-white/90 text-center max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-godway-green1/30"></div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="h-1 w-20 bg-godway-gradient mb-6 rounded-full"></div>
              <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold mb-6">
                About This Service
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg font-oswald mb-6">
                  {service.longDescription || service.description}
                </p>
                
                <h3 className="text-2xl font-oswald text-godway-navy uppercase font-bold mt-10 mb-6">
                  What's Included:
                </h3>
                <ul className="space-y-3">
                  {service.features?.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-godway-green1 mr-2 mt-1">
                        <FaCheckCircle />
                      </span>
                      <span className="font-oswald">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <a 
                  href="tel:+18139995321" 
                  className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald uppercase shadow-lg transform hover:-translate-y-1 transition-transform duration-300 text-center"
                >
                  Call Now
                </a>
                <Link 
                  href="/contact" 
                  className="bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy px-8 py-4 rounded-full font-oswald uppercase shadow-lg transform hover:-translate-y-1 transition-transform duration-300 text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {service.imageSecondary && (
                <div className="absolute bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden border-4 border-white shadow-xl lg:block hidden">
                  <img 
                    src={service.imageSecondary} 
                    alt={`${service.title} detail`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-godway-khaki/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-godway-gradient mx-auto mb-6 rounded-full"></div>
            <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold">
              Why Choose Godway For Your {service.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4 font-oswald">
              Experience the difference with our professional team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-godway-green1/10 rounded-full flex items-center justify-center mb-6">
                <FaClipboardCheck className="text-2xl text-godway-green1" />
              </div>
              <h3 className="text-xl font-oswald text-godway-navy uppercase font-bold mb-4">
                Experienced Team
              </h3>
              <p className="text-gray-700 font-oswald">
                Our professional movers bring years of experience to every job, ensuring your belongings are handled with care
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-godway-green1/10 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-2xl text-godway-green1" />
              </div>
              <h3 className="text-xl font-oswald text-godway-navy uppercase font-bold mb-4">
                Fully Insured
              </h3>
              <p className="text-gray-700 font-oswald">
                Rest easy knowing that your belongings are protected throughout the entire moving process
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-godway-green1/10 rounded-full flex items-center justify-center mb-6">
                <FaClock className="text-2xl text-godway-green1" />
              </div>
              <h3 className="text-xl font-oswald text-godway-navy uppercase font-bold mb-4">
                On-Time Service
              </h3>
              <p className="text-gray-700 font-oswald">
                We value your time and stick to the schedule, with precision planning and execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-godway-gradient mx-auto mb-6 rounded-full"></div>
            <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold">
              Our {service.title} Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4 font-oswald">
              We've streamlined our process to make your move as stress-free as possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-godway-green1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-oswald text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                Free Quote
              </h3>
              <p className="text-gray-700 font-oswald">
                Contact us for a detailed, no-obligation quote tailored to your specific moving needs
              </p>
            </div>
            
            <div className="text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-godway-green1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-oswald text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                Planning
              </h3>
              <p className="text-gray-700 font-oswald">
                We create a detailed moving plan based on your requirements and timeline
              </p>
            </div>
            
            <div className="text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-godway-green1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-oswald text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                Execution
              </h3>
              <p className="text-gray-700 font-oswald">
                Our professional team handles every aspect of your move with care and efficiency
              </p>
            </div>
            
            <div className="text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-godway-green1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-oswald text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                Follow-up
              </h3>
              <p className="text-gray-700 font-oswald">
                We ensure your complete satisfaction with a post-move check-in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-godway-khaki/20">
        <div className="absolute top-0 left-0 w-full h-2 bg-godway-green1/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-godway-green1/40"></div>
        <div className="absolute left-10 top-10 w-24 h-24 border-4 border-dashed border-godway-green1/20 rounded-xl transform rotate-45"></div>
        <div className="absolute right-10 bottom-10 w-32 h-32 border-4 border-dashed border-godway-green1/20 rounded-xl transform -rotate-12"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-oswald text-godway-green1 uppercase font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-700 mb-10 font-oswald">
                Contact us today for a free quote on your {service.title.toLowerCase()} needs
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="tel:+18139995321" className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald uppercase shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  Call Now
                </a>
                <Link href="/contact" className="bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy px-8 py-4 rounded-full font-oswald uppercase shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 