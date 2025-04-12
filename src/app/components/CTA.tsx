'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-godway-khaki/20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-godway-khaki/20"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-godway-green1/40"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-godway-green1/40"></div>
      <div className="absolute left-10 top-10 w-24 h-24 border-4 border-dashed border-godway-green1/20 rounded-md transform rotate-45"></div>
      <div className="absolute right-10 bottom-10 w-32 h-32 border-4 border-dashed border-godway-green1/20 rounded-md transform -rotate-12"></div>
      
      {/* Diagonal stripes in corners */}
      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-8 bg-godway-green1/30 transform rotate-45 translate-x-16 -translate-y-4"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-8 bg-godway-green1/30 transform rotate-45 -translate-x-16 translate-y-4"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl text-godway-green1 mb-6 uppercase">
              Local & Last-Minute <span className="text-godway-navy">Moving</span>
            </h2>
            
            <p className="text-gray-700 text-lg mb-10 font-oswald">
              Ready for a seamless moving experience across Florida? We specialize in last-minute moves and small local relocations. Contact us today for a free quote and personalized moving plan tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact" className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald text-white uppercase shadow-lg">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy rounded-full uppercase shadow-lg">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 