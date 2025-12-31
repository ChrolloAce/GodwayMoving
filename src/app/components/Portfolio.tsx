'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  image: string;
}

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Godway Team",
      image: "/images/godway/hero-team-leader.jpg"
    },
    {
      title: "Full Team",
      image: "/images/godway/team-full.jpg"
    },
    {
      title: "Team Lineup",
      image: "/images/godway/team-lineup.jpg"
    },
    {
      title: "Professional Movers",
      image: "/images/godway/truck-back-team.jpg"
    },
    {
      title: "Moving in Action",
      image: "/images/godway/action-moving-1.jpg"
    },
    {
      title: "Expert Handling",
      image: "/images/godway/action-moving-2.jpg"
    },
    {
      title: "Careful Transport",
      image: "/images/godway/action-moving-3.jpg"
    },
    {
      title: "Loading Service",
      image: "/images/godway/action-moving-4.jpg"
    },
    {
      title: "Our Fleet",
      image: "/images/godway/truck-front.jpg"
    },
    {
      title: "Team Photo",
      image: "/images/godway/team-pose.jpg"
    },
    {
      title: "Founders",
      image: "/images/godway/couple-photo.jpg"
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

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 3 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 3 ? 0 : prev + 1));
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
          <div className="h-1 w-24 bg-godway-gradient mx-auto mb-8 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight font-oswald uppercase">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-oswald">
            Experience our quality moving services through these project highlights
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
                  className="relative bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-all duration-300 border border-godway-green1/30 h-[400px]"
                  onClick={() => openModal(project.image)}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-3xl">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-godway-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
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

      {/* Image modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
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
              className="relative max-w-5xl w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl"
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
              <div className="relative h-full w-full">
                <Image
                  src={selectedImage}
                  alt="Project gallery image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  className="object-contain"
                  quality={95}
                  priority={true}
                  unoptimized={true}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio; 