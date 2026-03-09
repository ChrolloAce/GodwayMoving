'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  project: string;
}

const Testimonials = () => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Thomas R.',
      rating: 5,
      text: 'Godway Moving handled our relocation from Orlando to Miami with incredible efficiency. Their team was professional, careful with our belongings, and incredibly efficient. The move was completed ahead of schedule with zero damage!',
      project: 'Residential Move'
    },
    {
      id: 2,
      name: 'Sarah L.',
      rating: 5,
      text: 'We hired Godway Moving for our office relocation in Tampa and couldn\'t be happier. The team was professional from start to finish, and they completed the project over the weekend to minimize our downtime. Highly recommended!',
      project: 'Commercial Relocation'
    },
    {
      id: 3,
      name: 'James B.',
      rating: 5,
      text: 'Outstanding work on our cross-Florida move. Godway Moving handled everything with professionalism and exceptional attention to detail. They carefully packed and transported our belongings with precision. No damage, no stress!',
      project: 'Residential Move'
    },
    {
      id: 4,
      name: 'Emily K.',
      rating: 5,
      text: 'Godway Moving packed and moved our entire Miami Beach condo with incredible care. Their packing service saved us so much time and stress. The team was respectful of our space and items. The project went smoothly from start to finish.',
      project: 'Residential Move'
    },
    {
      id: 5,
      name: 'David W.',
      rating: 5,
      text: 'We used Godway Moving for our junk removal and they did an amazing job. Quick, efficient, and left the space spotless. The team made the whole process incredibly simple and stress-free.',
      project: 'Junk Removal'
    },
    {
      id: 6,
      name: 'Michelle P.',
      rating: 5,
      text: 'The specialized moving team at Godway handled our piano and artwork with exceptional care during our move to Naples. Their attention to detail and professional approach made the process worry-free. We\'ll definitely use them again!',
      project: 'Specialty Item Moving'
    }
  ]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom max-w-[1600px]">
        <SectionHeader
          title="What Our Clients Are Saying"
          subtitle="Hear from our satisfied clients across Florida about their excellent moving experiences"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full border border-godway-green1/20"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-godway-green1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? 'text-godway-green1' : 'text-gray-300'} />
                  ))}
                </div>
              </div>
              <div className="text-sm text-godway-green1 font-medium mb-2 font-oswald">{review.project}</div>
              <p className="text-gray-700 mb-4 flex-grow font-oswald">"{review.text}"</p>
              <div className="font-semibold text-dark font-oswald">{review.name}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/Godway+Moving+Miami"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-godway-green1 text-white hover:bg-godway-green2 px-6 py-3 rounded-full font-oswald font-medium transition-colors shadow-lg inline-block uppercase"
          >
            Read More Testimonials
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 