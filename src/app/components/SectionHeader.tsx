'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}: SectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${centered ? 'text-center' : ''} mb-16 ${className}`}
    >
      <div className={`h-1 w-20 bg-godway-green1 ${centered ? 'mx-auto' : ''} mb-6 rounded-full`}></div>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-oswald uppercase ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} font-oswald ${light ? 'text-gray-200' : 'text-gray-700'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader; 