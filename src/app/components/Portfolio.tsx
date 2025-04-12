'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Luxury Condo Relocation",
      location: "Miami Beach, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/5xBSjyB8/IMG-3761.jpg",
      description: "Complete relocation of a luxury beachfront condo featuring careful handling of high-end furniture, artwork, and fragile items. Our military-precision approach ensured a smooth transition for this upscale Miami residence."
    },
    {
      title: "Office Building Transition",
      location: "Downtown Miami, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/ynJB2Pvj/IMG-6826.jpg",
      description: "Major commercial relocation for a financial firm with minimal downtime. Our team coordinated the move of sensitive equipment, documents, and office furniture over a weekend for seamless Monday operations."
    },
    {
      title: "Executive Home Relocation",
      location: "Orlando, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/B5HmQcc7/IMG-0727.jpg",
      description: "Full-service relocation of an executive family home including professional packing, furniture disassembly, transport, and setup in the new residence. Special care was taken with antique and valuable items."
    },
    {
      title: "Retail Store Expansion",
      location: "Tampa Bay, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/T66jm8t/15-C40-AB1-EF46-45-E3-8-AFE-7-BFFD535054-A.jpg",
      description: "Coordinated moving services for a retail business expanding to a larger location. Our team handled the logistics of moving inventory, displays, and store fixtures with efficiency and organization."
    },
    {
      title: "Waterfront Property Relocation",
      location: "Fort Lauderdale, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/MxxJ8zy9/IMG-5189.jpg",
      description: "Luxury home relocation for a waterfront property requiring special equipment and careful handling of high-value items. Our experienced team ensured a smooth transition to the new home."
    },
    {
      title: "Corporate Headquarters Relocation",
      location: "Boca Raton, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/GfVY1p4B/IMG-6831.jpg",
      description: "Major commercial relocation of a company headquarters involving IT infrastructure, executive offices, and staff workspace. Our comprehensive planning resulted in zero downtime during the transition."
    },
    {
      title: "Long-Distance Family Move",
      location: "Naples to Orlando, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/rGh3vXm5/IMG-5185.jpg",
      description: "Complete long-distance family relocation across Florida. Our team provided comprehensive packing, transportation, and setup services to ensure a stress-free move for this growing family."
    },
    {
      title: "Medical Office Relocation",
      location: "Jacksonville, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/qFm7pvjd/IMG-5246.jpg",
      description: "Specialized moving services for a medical practice requiring careful handling of sensitive equipment and patient records. Our team maintained HIPAA compliance throughout the relocation process."
    },
    {
      title: "Penthouse Apartment Move",
      location: "Miami, FL",
      category: "Residential Moving",
      image: "https://i.ibb.co/chLgrmKh/IMG-5188.jpg",
      description: "High-rise penthouse relocation requiring specialized equipment and protocols. Our team expertly navigated the challenges of moving luxury furniture and artwork to the new residence."
    },
    {
      title: "Restaurant Relocation",
      location: "West Palm Beach, FL",
      category: "Commercial Moving",
      image: "https://i.ibb.co/84LxMQ0N/IMG-3643.jpg",
      description: "Comprehensive moving services for a restaurant business including industrial kitchen equipment, dining furniture, and decor. Our team completed the move over two nights to minimize business disruption."
    },
    {
      title: "Storage & Inventory Management",
      location: "Miami, FL",
      category: "Storage Solutions",
      image: "https://i.ibb.co/fVSxn9dF/IMG-5323.jpg",
      description: "Climate-controlled storage solutions for a family during their home renovation. Our team cataloged and stored belongings in our secure facility protected from Florida's heat and humidity."
    },
    {
      title: "Specialized Furniture Assembly",
      location: "Orlando, FL",
      category: "Furniture Assembly",
      image: "https://i.ibb.co/5W1Cy02S/IMG-2368.jpg",
      description: "Professional furniture disassembly and reassembly services for a complex move involving custom and antique pieces. Our skilled technicians ensured every piece was properly handled and reconstructed."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 3 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="h-1 w-24 bg-military-gradient mx-auto mb-8 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our recent moving projects across South Florida
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
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
                  className="relative bg-white rounded-md shadow-xl overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-all duration-300 border border-military-khaki/30"
                  onClick={() => openModal(project)}
                >
                  <div className="relative h-[400px] overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-military-navy/90 via-military-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-4 py-1.5 bg-military-olive text-white rounded-md text-sm font-semibold tracking-wide">
                        {project.category}
                      </span>
                      <span className="text-sm opacity-90">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-200 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? projects.length - 3 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-x-20"
            aria-label="Previous projects"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev === projects.length - 3 ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-x-20"
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
                  index === currentIndex ? 'bg-military-olive w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to projects ${index + 1}-${index + 3}`}
              />
            ))}
          </div>
        </div>
      </div>

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
              className="relative max-w-5xl w-full bg-white rounded-md overflow-hidden shadow-2xl border border-military-khaki/30"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative h-[500px]">
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
                  <span className="px-4 py-1.5 bg-military-olive text-white rounded-md text-sm font-semibold tracking-wide">
                    {selectedProject.category}
                  </span>
                  <span className="text-sm text-gray-600">
                    {selectedProject.location}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio; 