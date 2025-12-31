'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const MovingSpecialties = () => {
  const services = [
    {
      title: 'Residential Moving',
      description: 'Experience stress-free home relocations with our professional residential moving services across South Florida. We handle every aspect of your move with care, from careful packing to strategic transport and organized unpacking.',
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
      description: 'Minimize downtime and maximize efficiency with our specialized commercial moving services throughout Florida. We work with precision to relocate your business quickly while ensuring everything arrives safely and on schedule.',
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
      description: 'Trust our long-distance moving expertise to transport your belongings safely across Florida and beyond. Our strategic planning and professional logistics ensure your items arrive intact, on time, and within budget.',
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Moving Specialties"
          subtitle="Professional moving solutions for every relocation challenge in Florida"
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-md overflow-hidden shadow-lg border border-godway-green1/20 group hover:border-godway-green1/40 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 filter brightness-[0.9] group-hover:brightness-100"
                    unoptimized={true}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-godway-green2/90 via-godway-green2/40 to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-0 w-full px-6"
                >
                  <h3 className="font-oswald text-2xl text-white font-semibold text-center drop-shadow-md uppercase">
                    {service.title}
                  </h3>
                </motion.div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-base font-oswald">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-md bg-godway-green1/10 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-godway-green1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700 text-sm font-oswald">{feature}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link 
                    href={service.link}
                    className="inline-block px-6 py-3 bg-godway-green1 text-white font-oswald uppercase font-medium rounded-md hover:bg-godway-green2 transition-colors duration-300 shadow-lg"
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

export default MovingSpecialties; 