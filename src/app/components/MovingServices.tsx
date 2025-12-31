'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const MovingServices = () => {
  const services = [
    {
      title: 'Residential Moving',
      description: 'Experience stress-free home relocations with our military-precise residential moving services. We handle every aspect of your move with care, from careful packing to strategic transport and organized unpacking.',
      features: [
        'Comprehensive packing and unpacking',
        'Furniture disassembly and reassembly',
        'Special handling for fragile items',
        'Climate-controlled transport'
      ],
      link: '/contact',
      image: 'https://i.ibb.co/rKNpRR16/IMG-2584.jpg'
    },
    {
      title: 'Commercial Moving',
      description: 'Minimize downtime and maximize efficiency with our specialized commercial moving services. We work with military precision to relocate your business quickly while ensuring everything arrives safely and on schedule.',
      features: [
        'Office equipment handling and setup',
        'IT infrastructure moving assistance',
        'Asset inventory and tracking',
        'After-hours and weekend service options'
      ],
      link: '/contact',
      image: 'https://i.ibb.co/rR2M5hxC/IMG-6795.jpg'
    },
    {
      title: 'Long-Distance Moving',
      description: 'Trust our long-distance moving expertise to transport your belongings safely across Florida and beyond. Our strategic planning and military-style logistics ensure your items arrive intact, on time, and within budget.',
      features: [
        'Detailed moving plans and scheduling',
        'GPS-tracked transport fleet',
        'Climate-controlled vehicles',
        'Regular status updates throughout the move'
      ],
      link: '/contact',
      image: 'https://i.ibb.co/BVhN5FL0/IMG-3769.jpg'
    }
  ];

  return (
    <section className="py-20 bg-cream overflow-hidden">
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
            Our Moving Specialties
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Military-grade moving solutions for every relocation challenge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-md overflow-hidden shadow-military border border-military-olive/20 hover:border-military-olive/40 transition-all duration-500 h-full flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full" style={{ height: "500px" }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full overflow-hidden"
                >
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 brightness-[0.95]"
                    style={{ objectPosition: "center" }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-military-navy/80 via-military-navy/30 to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-0 w-full px-6"
                >
                  <h3 className="font-playfair text-2xl text-white font-semibold text-center drop-shadow-md">
                    {service.title}
                  </h3>
                </motion.div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-700 mb-6 text-base">{service.description}</p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-md bg-military-olive/10 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-military-olive" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700 text-sm">{feature}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-auto">
                  <Link 
                    href={service.link}
                    className="inline-block px-6 py-3 bg-military-olive text-white font-medium rounded-md hover:bg-military-camo transition-colors duration-300 shadow-military"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovingServices; 