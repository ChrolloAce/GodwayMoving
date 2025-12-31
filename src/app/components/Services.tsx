'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BusinessInfo from '../data/business-info';
import SectionHeader from './SectionHeader';

export default function Services() {
  // Removing the unused services variable since it's not being used in the component
  // const services = BusinessInfo.services;
  
  const serviceItems = [
    {
      title: "Residential Moving",
      description: "We specialize in local residential moves across Florida. We can move you between any Florida cities with care and efficiency, whether planned or last-minute.",
      image: "https://i.ibb.co/cXYdSC0j/IMG-0713.jpg",
      id: "residential-moving"
    },
    {
      title: "Commercial Moving",
      description: "We can move your office overnight, on the weekend and during holidays to minimize your downtime. With full office packing and unpacking, your staff will be up and running the next morning.",
      image: "https://i.ibb.co/whdn6mFS/IMG-1682.jpg",
      id: "commercial-moving"
    },
    {
      title: "Junk Removal",
      description: "Professional junk removal services to clear out unwanted items from your home or business. We handle everything from furniture to appliances with responsible disposal and recycling.",
      image: "https://i.ibb.co/XrX5kdM7/IMG-1736.jpg",
      id: "junk-removal"
    }
  ];

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container-custom">
        <SectionHeader
          title="OUR PROFESSIONAL SERVICES"
          subtitle="Comprehensive moving and junk removal solutions throughout Florida with careful handling and fully insured service"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 border-2 border-godway-green1/20"
            >
              <Link href={`/services/${service.id}`} className="block relative w-full" style={{ height: "400px" }}>
                <div className="absolute inset-x-0 top-0 z-20 bg-godway-green1/90 py-3 px-4 rounded-t-3xl">
                  <h3 className="text-xl font-oswald text-white text-center uppercase">{service.title}</h3>
                </div>
                
                <div className="w-full h-full overflow-hidden rounded-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-godway-navy/90 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-6 text-white flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-godway-navy/60 rounded-b-3xl">
                  <p className="text-sm text-white font-oswald text-center">{service.description}</p>
                  <div className="inline-flex items-center mt-4 text-godway-khaki hover:text-white font-oswald">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
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
          <Link href="/services" className="bg-godway-green1 text-white px-8 py-4 rounded-full font-oswald hover:bg-godway-green2 transition-colors shadow-lg uppercase">
            Explore All Moving Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 