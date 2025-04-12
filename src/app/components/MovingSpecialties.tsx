'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const MovingSpecialties = () => {
  const services = [
    {
      title: 'Residential Moving',
      description: 'We specialize in local residential moves across Florida. We can move you between any Florida cities with care and efficiency, whether planned or last-minute.',
      features: [
        'Comprehensive packing and unpacking',
        'Furniture disassembly and reassembly',
        'Special handling for fragile items',
        'Flexible scheduling options'
      ],
      link: '/services/residential-moving',
      image: 'https://i.ibb.co/cXYdSC0j/IMG-0713.jpg'
    },
    {
      title: 'Last Minute Moves',
      description: 'Need to move urgently in Florida? Our last minute moving service will save the day. We'll get you into your new address ASAP with same-day service available throughout South Florida.',
      features: [
        'Same-day service in most areas',
        'Rapid response team',
        'Expedited packing services',
        'No excessive emergency fees'
      ],
      link: '/services/last-minute',
      image: 'https://i.ibb.co/kRD39Rv/IMG-0719.jpg'
    },
    {
      title: 'Small Moves',
      description: 'Need to move a few small items or moving out of a studio in Florida? Our small move service is perfect for apartments, dorms, and partial relocations throughout Florida.',
      features: [
        'Cost-effective for smaller loads',
        'No minimum hour requirements',
        'Professional moving personnel',
        'Same-day service often available'
      ],
      link: '/services/small-moves',
      image: 'https://i.ibb.co/XrX5kdM7/IMG-1736.jpg'
    },
    {
      title: 'Long-Distance Moving',
      description: 'From coast to coast, we can move you to any state in the USA. With on time long distance delivery dates and safe packing we will get you settled into your new home quickly.',
      features: [
        'Dedicated move coordinator',
        'Guaranteed delivery dates',
        'Real-time shipment tracking',
        'Comprehensive valuation coverage'
      ],
      link: '/services/long-distance',
      image: 'https://i.ibb.co/XfDrGtZN/IMG-0718.jpg'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="relative h-52 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
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
                  className="absolute bottom-4 left-0 w-full px-4"
                >
                  <h3 className="font-oswald text-xl sm:text-2xl text-white font-semibold text-center drop-shadow-md uppercase">
                    {service.title}
                  </h3>
                </motion.div>
              </div>
              
              <div className="p-4 sm:p-5">
                <p className="text-gray-700 mb-4 text-sm font-oswald">{service.description}</p>
                
                <div className="space-y-2 mb-6">
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
                      <p className="ml-3 text-gray-700 text-xs sm:text-sm font-oswald">{feature}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link 
                    href={service.link}
                    className="inline-block px-4 py-2 bg-godway-green1 text-white font-oswald uppercase font-medium rounded-md hover:bg-godway-green2 transition-colors duration-300 shadow-md text-sm"
                  >
                    Learn More
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