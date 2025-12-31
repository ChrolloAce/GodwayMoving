'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
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
                src="https://i.ibb.co/v65KPtGc/IMG-0739.jpg"
                alt="Local Florida Moving 1"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 500px"
                className="rounded-xl"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-godway-navy/40 to-transparent"></div>
            </div>
            
            {/* Overlayed smaller image */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 md:w-32 md:h-32">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="https://i.ibb.co/WvBWPXWM/IMG-0731.jpg"
                  alt="Local Florida Moving 2"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="rounded-xl"
                  unoptimized={true}
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
            className="relative lg:ml-6 flex flex-col items-center lg:items-start justify-center"
          >
            <SectionHeader
              title="Florida's Go-To Moving Solution"
              centered={false}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-start mt-6"
            >
              <Link 
                href="/about" 
                className="bg-godway-green1 text-white hover:bg-godway-green2 px-6 py-3 rounded-full font-oswald font-medium transition-colors shadow-lg inline-block uppercase"
              >
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 