'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
}

const ReviewsWidget = () => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Thomas R.',
      rating: 5,
      date: 'February 18, 2024',
      text: 'Godway Moving handled our Miami apartment move with incredible efficiency. Their team was organized and careful with all our belongings. Everything arrived in perfect condition, and they even helped set up the furniture in our new place!'
    },
    {
      id: 2,
      name: 'Sarah L.',
      rating: 5,
      date: 'January 9, 2024',
      text: 'We needed a last-minute move in Tampa and Godway Moving came through for us. They responded quickly to our request and had a team at our place the next day. The movers were professional and worked efficiently to get us moved on time.'
    },
    {
      id: 3,
      name: 'James B.',
      rating: 5,
      date: 'December 15, 2023',
      text: 'Outstanding service for our cross-Florida move from Orlando to Miami. Godway Moving handled everything with professionalism and exceptional attention to detail. They made what could have been a stressful experience completely smooth!'
    },
    {
      id: 4,
      name: 'Emily K.',
      rating: 4,
      date: 'November 22, 2023',
      text: 'Godway Moving helped us relocate our small business in Jacksonville. The team was respectful of our equipment and made sure everything was properly packed and protected. The project took slightly longer than expected, but the results were worth the wait.'
    },
    {
      id: 5,
      name: 'David W.',
      rating: 5,
      date: 'October 8, 2023',
      text: 'We hired Godway Moving for our local move in Fort Lauderdale, and we couldn\'t be more impressed. The team was efficient, and everything was handled with care. They even helped us dispose of some unwanted furniture, which was a huge help!'
    },
    {
      id: 6,
      name: 'Michelle P.',
      rating: 5,
      date: 'September 14, 2023',
      text: 'Godway Moving handled our senior parents\' downsizing move in Naples with such care and compassion. Their team was patient and took the time to make sure everything was exactly where my parents wanted it in their new home. We highly recommend them!'
    }
  ]);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="h-1 w-16 md:w-20 bg-godway-green1 mx-auto mb-4 md:mb-6 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 md:mb-4 font-oswald uppercase">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 font-oswald">
            Read what our valued customers have to say about their moving experience with Godway Moving across Florida
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex flex-col h-full"
            >
              <div className="flex flex-wrap items-center mb-4 justify-between">
                <div className="flex text-godway-green1 mb-2 sm:mb-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={`${i < review.rating ? 'text-godway-green1' : 'text-gray-300'} mr-1 text-sm sm:text-base`} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4 flex-grow text-sm sm:text-base font-oswald">"{review.text}"</p>
              <div className="font-semibold text-black font-oswald">{review.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a 
            href="https://g.page/r/Godway-Moving-Florida-Reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-godway-green1 hover:text-godway-green2 transition-colors font-medium text-sm sm:text-base font-oswald"
          >
            View more reviews on Google
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsWidget; 