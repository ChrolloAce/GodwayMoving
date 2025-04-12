'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: "Schedule a free consultation with our team to discuss your moving needs, timeline, and budget for a personalized moving plan.",
      color: 'from-godway-green1 to-godway-green2',
      bgColor: 'bg-white',
      shadowColor: 'shadow-lg',
    },
    {
      number: 2,
      title: 'Planning & Preparation',
      description: 'Our expert team creates a detailed moving strategy, including inventory assessment, packing materials, and logistics coordination tailored to your needs.',
      color: 'from-godway-green1 to-godway-green2',
      bgColor: 'bg-white',
      shadowColor: 'shadow-lg',
    },
    {
      number: 3,
      title: 'Professional Execution',
      description: 'Our skilled moving professionals execute your move with precision, ensuring careful handling, efficient transport, and proper placement at your new location.',
      color: 'from-godway-green1 to-godway-green2',
      bgColor: 'bg-white',
      shadowColor: 'shadow-lg',
    }
  ];

  return (
    <section className="py-20 bg-cream overflow-hidden relative">
      {/* Subtle background elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-godway-green1/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-godway-green1/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="h-1 w-20 bg-godway-gradient mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-oswald uppercase">
            Our Moving Process
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-oswald">
            From initial consultation to final delivery, we ensure a seamless moving experience with professional precision
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-godway-green1/20 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step card */}
                <div className={`rounded-3xl ${step.bgColor} p-6 md:p-8 ${step.shadowColor} border border-godway-green1/20 hover:border-godway-green1/40 transition-all duration-300 hover:-translate-y-1`}>
                  {/* Top circle with number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white shadow-lg font-bold text-xl border-2 border-white`}
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-6 text-center">
                    <h3 className="font-oswald text-2xl font-semibold mb-4 text-dark uppercase">{step.title}</h3>
                    <p className="text-gray-700 mb-6 font-oswald">{step.description}</p>
                  </div>
                </div>
                
                {/* Arrow to next step - only visible on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-6 z-10">
                    <svg className="w-12 h-12 text-godway-green1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/contact#booking" 
            className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 inline-flex items-center justify-center shadow-lg rounded-full font-oswald transition-colors duration-300 uppercase"
          >
            <span>Schedule Your Move</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 