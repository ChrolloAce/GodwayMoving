'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Luxury Condo Relocation",
      location: "Miami Beach, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/5xBSjyB8/IMG-3761.jpg",
      description: "Complete relocation of a luxury beachfront condo with specialized handling for high-value items and artwork. Our team coordinated with building management for seamless elevator access and protected all flooring surfaces during the move."
    },
    {
      title: "Office Expansion Project",
      location: "Downtown Miami, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/3YVdYwCd/IMG-2040.jpg",
      description: "Comprehensive office relocation for a growing financial firm. The project included detailed inventory management, IT equipment handling, and weekend scheduling to minimize business disruption."
    },
    {
      title: "Last-Minute Family Move",
      location: "Orlando, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/cXYdSC0j/IMG-0713.jpg",
      description: "Urgent residential move completed within 24 hours notice. Our team quickly mobilized to pack, transport, and set up this 4-bedroom home, allowing the family to relocate without stress despite the tight timeline."
    },
    {
      title: "Medical Office Relocation",
      location: "Tampa, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/WvBWPXWM/IMG-0731.jpg",
      description: "Specialized moving services for a medical practice requiring careful handling of sensitive equipment and patient records. Coordinated after-hours move to ensure zero disruption to patient care."
    },
    {
      title: "Waterfront Property Move",
      location: "Naples, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/JwyyPvSk/IMG-2406.jpg",
      description: "Luxury waterfront home relocation with special handling for antiques and high-value furniture. Our team managed all aspects including crating of fine art and specialized packing for delicate items."
    },
    {
      title: "Restaurant Equipment Relocation",
      location: "Fort Lauderdale, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/mVLnRJHX/IMG-0715.jpg",
      description: "Complete restaurant equipment move requiring specialized handling and transportation of industrial kitchen equipment. Completed overnight to allow for minimal disruption to business operations."
    },
    {
      title: "Small Apartment Move",
      location: "Boca Raton, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/DDZT8qsm/15-C40-AB1-EF46-45-E3-8-AFE-7-BFFD535054-A.jpg",
      description: "Efficient move for a one-bedroom apartment with full packing and unpacking services. Completed within a 4-hour window to accommodate the client's tight schedule."
    },
    {
      title: "Corporate Headquarters Relocation",
      location: "Miami, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/XfDrGtZN/IMG-0718.jpg",
      description: "Major corporate relocation involving 150+ employees and complete office furniture systems. Executed over a holiday weekend with precise planning and coordination."
    },
    {
      title: "Senior Downsizing Project",
      location: "Orlando, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/7T7KvGT/IMG-2041.jpg",
      description: "Compassionate and thoughtful moving services for seniors downsizing from a long-time family home to a retirement community. Included sorting, donation coordination, and specialized packing of heirlooms."
    },
    {
      title: "Retail Store Expansion",
      location: "Tampa, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/XrX5kdM7/IMG-1736.jpg",
      description: "Overnight commercial move for a retail clothing store expanding to a larger location. Included careful handling of display fixtures, inventory, and point-of-sale systems."
    },
    {
      title: "Beachfront Condo Move",
      location: "Miami Beach, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/whdn6mFS/IMG-1682.jpg",
      description: "High-rise condo move requiring specialized logistics for elevator coordination and protection of common areas. Completed with zero disruption to other residents."
    },
    {
      title: "University Laboratory Relocation",
      location: "Gainesville, FL",
      category: "Specialty Moving",
      image: "https://i.ibb.co/kRD39Rv/IMG-0719.jpg",
      description: "Precision moving of sensitive laboratory equipment for a university research department. Required specialized crating, climate control, and coordination with scientific staff."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 3 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 3 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 3 ? 0 : prev + 1));
  };

  return (
    <>
      <Head>
        <title>Portfolio | Godway Moving - South Florida Moving Projects</title>
        <meta name="description" content="View our successful moving projects throughout Miami, Orlando, and Tampa. See how Godway Moving delivers professional, efficient moving services for homes and businesses across Florida." />
        <meta name="keywords" content="Florida moving portfolio, Miami moving projects, Orlando moving gallery, professional movers Florida, South Florida moving services, Tampa relocation portfolio, last-minute moving projects, local Florida movers" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-godway-green1">
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-oswald text-4xl md:text-5xl lg:text-6xl text-white mb-4 uppercase"
              >
                Our Moving Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto font-oswald"
              >
                View our successful moving projects across South Florida
              </motion.p>
            </div>
          </div>
        </section>

        {/* Portfolio Slider Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-godway-green1 mb-6 tracking-tight font-oswald uppercase">
                Featured Moving Projects
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-oswald">
                Browse through our portfolio of residential and commercial moving projects throughout Florida
              </p>
            </motion.div>

            <div className="relative max-w-7xl mx-auto">
              {/* Mobile Navigation Controls - Only visible on small screens */}
              <div className="flex items-center justify-between mb-6 md:hidden">
                <button
                  onClick={goToPrev}
                  className="p-3 bg-godway-green1 rounded-full flex items-center justify-center text-white shadow-md active:scale-95 transition-transform"
                  aria-label="Previous projects"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="text-godway-green1 font-medium font-oswald">
                  {currentIndex + 1}-{Math.min(currentIndex + 3, projects.length)} of {projects.length}
                </div>
                <button
                  onClick={goToNext}
                  className="p-3 bg-godway-green1 rounded-full flex items-center justify-center text-white shadow-md active:scale-95 transition-transform"
                  aria-label="Next projects"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
          </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {visibleProjects.map((project, index) => (
                  <motion.div
                      key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-all duration-300 border border-godway-green1/10 h-[450px]"
                    onClick={() => openModal(project)}
                  >
                      <div className="relative h-[280px] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                          quality={90}
                          priority={index === 0}
                        unoptimized={true}
                      />
                        <div className="absolute inset-0 bg-gradient-to-t from-godway-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-3 py-1 bg-godway-green1/10 text-godway-green1 rounded-full text-xs font-semibold tracking-wide font-oswald">
                          {project.category}
                        </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 tracking-tight text-godway-navy font-oswald">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-700 mb-2 font-oswald">
                          {project.location}
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-2 font-oswald">
                          {project.description.substring(0, 100)}...
                        </p>
                        <button className="mt-3 text-godway-green1 font-oswald flex items-center text-sm uppercase font-bold">
                          View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
                </motion.div>
              </AnimatePresence>

              {/* Desktop Navigation Arrows - Hidden on mobile */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 bg-godway-green1 rounded-full hidden md:flex items-center justify-center text-white hover:bg-godway-green2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-x-20"
                aria-label="Previous projects"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
                <button 
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 bg-godway-green1 rounded-full hidden md:flex items-center justify-center text-white hover:bg-godway-green2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-x-20"
                aria-label="Next projects"
                >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3 mt-12">
                {Array.from({ length: projects.length - 2 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all duration-500 ${
                      index === currentIndex ? 'bg-godway-green1 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to projects ${index + 1}-${index + 3}`}
                  />
                ))}
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
                  Ready For Your <span className="text-godway-navy">Next Move?</span>
                </h2>
                
                <p className="text-gray-700 text-lg mb-10 font-oswald">
                  Let our experienced team handle your next relocation with the same care and professionalism shown in our portfolio. Contact us today for a personalized moving plan.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link href="/contact" className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald text-white uppercase shadow-lg">
                    Get a Free Quote
                  </Link>
                  <Link href="/services" className="bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy px-8 py-4 rounded-full font-oswald uppercase shadow-lg">
                    View Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-godway-green1/90 rounded-full flex items-center justify-center text-white hover:bg-godway-green1 transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative h-[400px]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    className="object-cover"
                    quality={95}
                    priority={true}
                    unoptimized={true}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-4 py-1.5 bg-godway-green1 text-white rounded-full text-sm font-semibold tracking-wide font-oswald">
                      {selectedProject.category}
                    </span>
                    <span className="text-gray-600 font-oswald">
                      {selectedProject.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight text-godway-navy font-oswald">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-oswald">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage; 