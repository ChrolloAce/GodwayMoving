'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface AccordionItem {
  question: string;
  answer: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

const Accordion = ({ items, className = '' }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-godway-green1/10"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-godway-navy font-oswald">{item.question}</h3>
              <svg
                className={`w-6 h-6 text-godway-green1 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-6 bg-white border-x border-b border-godway-green1/10 rounded-b-xl"
            >
              {typeof item.answer === 'string' ? (
                <p className="text-gray-700 font-oswald">{item.answer}</p>
              ) : (
                item.answer
              )}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion; 