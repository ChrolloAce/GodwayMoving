'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BusinessInfo from '../data/business-info';

export default function Services() {
  // Removing the unused services variable since it's not being used in the component
  // const services = BusinessInfo.services;
  
  const serviceItems = [
    {
      title: "South Florida Residential Moving",
      description: "Complete home relocation services throughout Miami, Orlando, and Tampa with professional packing and careful handling",
      image: "https://i.ibb.co/rKNpRR16/IMG-2584.jpg",
      id: "residential-moving"
    },
    {
      title: "Florida Commercial Relocations",
      description: "Business and office relocations across South Florida with minimal downtime and professional coordination",
      image: "https://i.ibb.co/rR2M5hxC/IMG-6795.jpg",
      id: "commercial-moving"
    },
    {
      title: "Professional Packing Services",
      description: "Expert packing and unpacking using quality materials for safe transport in Florida's climate",
      image: "https://i.ibb.co/WHCVmfZ/IMG-3762-1.jpg",
      id: "packing-services"
    },
    {
      title: "Loading & Unloading",
      description: "Expert loading and unloading services for all types of moves and storage needs across Miami and beyond",
      image: "https://i.ibb.co/mCVrXF9S/IMG-6835.jpg",
      id: "loading-unloading"
    },
    {
      title: "Furniture Assembly & Disassembly",
      description: "Professional furniture handling for safe transport and setup in your new Florida home",
      image: "https://i.ibb.co/3YdZsd4C/IMG-5190.jpg",
      id: "furniture-assembly"
    },
    {
      title: "Climate-Controlled Storage Solutions",
      description: "Secure short and long-term storage options protected from Florida's heat and humidity",
      image: "https://i.ibb.co/BVhN5FL0/IMG-3769.jpg",
      id: "storage-solutions"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="h-1 w-20 bg-military-gradient mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Florida Moving Services
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From Miami to Orlando and Tampa, we offer comprehensive moving solutions with military-grade precision throughout the Sunshine State
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-md shadow-military transform hover:-translate-y-1 transition-all duration-300 border-2 border-military-khaki"
            >
              <Link href={`/services/${service.id}`} className="block relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-military-navy/90 via-military-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200">{service.description}</p>
                <Link 
                  href={`/services/${service.id}`} 
                  className="inline-flex items-center mt-4 text-military-khaki hover:text-military-tan"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            Explore All Moving Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 