'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const ServicesClient = () => {
  const serviceItems = [
    {
      title: "Residential Moving",
      description: "We specialize in local residential moves across Florida. We can move you between any Florida cities with care and efficiency, whether planned or last-minute.",
      image: "/images/godway/team-full.jpg",
      id: "residential-moving"
    },
    {
      title: "Commercial Moving",
      description: "We can move your office overnight, on the weekend and during holidays to minimize your downtime. With full office packing and unpacking, your staff will be up and running the next morning.",
      image: "/images/godway/action-moving-1.jpg",
      id: "commercial-moving"
    },
    {
      title: "Junk Removal",
      description: "Professional junk removal services to clear out unwanted items from your home or business. We handle everything from furniture to appliances with responsible disposal and recycling.",
      image: "/images/godway/action-moving-4.jpg",
      id: "junk-removal"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-godway-green1">
          <div className="container-custom relative z-10">
            <SectionHeader
              title="Our Services"
              subtitle="Residential & commercial moving, specialty hauling and junk removal with careful handling and fully insured service"
              light={true}
            />
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <SectionHeader
                title="OUR PROFESSIONAL SERVICES"
                subtitle="Comprehensive moving and junk removal solutions throughout Florida with careful handling and fully insured service"
              />
            </motion.div>

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
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="h-1 w-20 bg-godway-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold">
                Our Moving Process
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
                We've streamlined our process to make your move as stress-free as possible
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-godway-green1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-oswald text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                  Free Quote
                </h3>
                <p className="text-gray-700">
                  Contact us for a detailed, no-obligation quote tailored to your specific moving needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-godway-green1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-oswald text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                  Planning
                </h3>
                <p className="text-gray-700">
                  We create a detailed moving plan based on your requirements and timeline
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-godway-green1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-oswald text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                  Execution
                </h3>
                <p className="text-gray-700">
                  Our professional team handles every aspect of your move with care and efficiency
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-godway-green1 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-oswald text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                  Follow-up
                </h3>
                <p className="text-gray-700">
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
          <div className="absolute left-10 top-10 w-24 h-24 border-4 border-dashed border-godway-green1/20 rounded-md transform rotate-45"></div>
          <div className="absolute right-10 bottom-10 w-32 h-32 border-4 border-dashed border-godway-green1/20 rounded-md transform -rotate-12"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="Ready to Get Moving?"
                  subtitle="Contact us today for your next move in Florida"
                  className="mb-10"
                />
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a href="tel:+13054097671" className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald uppercase shadow-lg">
                    Call Now
                  </a>
                  <Link href="/contact" className="bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy px-8 py-4 rounded-full font-oswald uppercase shadow-lg">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesClient; 