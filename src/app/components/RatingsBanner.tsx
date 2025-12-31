'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const RatingsBanner = () => {
  return (
    <section className="py-6 bg-cream shadow-sm">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0"
        >
          {/* Heading */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-godway-green1 font-oswald uppercase leading-tight">
              Top rated Florida movers<br className="hidden sm:block" /> across ALL review sites
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-between md:w-2/3 gap-6 md:gap-2 lg:gap-4">
            {/* Google */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="https://i.ibb.co/nMhcf8NY/google.png"
                  alt="Google"
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized={true}
                />
              </div>
              <div>
                <span className="font-bold text-xl md:text-2xl text-godway-green2">5/5</span>
                <p className="text-xs text-gray-600 font-oswald">200+ reviews</p>
              </div>
            </div>
            
            {/* Yelp */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="https://i.ibb.co/rGrk83Qq/yelp.png"
                  alt="Yelp"
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized={true}
                />
              </div>
              <div>
                <span className="font-bold text-xl md:text-2xl text-godway-green2">5/5</span>
                <p className="text-xs text-gray-600 font-oswald">50+ reviews</p>
              </div>
            </div>
            
            {/* Trustpilot */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="https://i.ibb.co/cchtkxJd/thumb.png"
                  alt="Trustpilot"
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized={true}
                />
              </div>
              <div>
                <span className="font-bold text-xl md:text-2xl text-godway-green2">5/5</span>
                <p className="text-xs text-gray-600 font-oswald">50+ reviews</p>
              </div>
            </div>
            
            {/* Thumbtack */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="https://i.ibb.co/h18XVxCh/thumbtac.png"
                  alt="Thumbtack"
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized={true}
                />
              </div>
              <div>
                <span className="font-bold text-xl md:text-2xl text-godway-green2">5/5</span>
                <p className="text-xs text-gray-600 font-oswald">100+ reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RatingsBanner; 