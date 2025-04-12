'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface TruckAnimationProps {
  className?: string;
}

const TruckAnimation = ({ className = '' }: TruckAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setIsAnimating(true);
    
    // Set up interval to repeat animation
    const interval = setInterval(() => {
      setIsAnimating(false);
      // Small delay before restarting animation
      setTimeout(() => setIsAnimating(true), 100);
    }, 15000); // Animation repeats every 15 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height: '80px' }}>
      <motion.div
        initial={{ x: -150 }}
        animate={isAnimating ? { x: '100vw' } : { x: -150 }}
        transition={{ 
          duration: 12,
          ease: "linear",
          times: [0, 1]
        }}
        className="absolute"
      >
        {/* Truck SVG */}
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Truck cab */}
          <rect x="10" y="25" width="30" height="20" rx="2" fill="#164C28" stroke="#0F3E1F" strokeWidth="2" />
          
          {/* Windshield */}
          <path d="M10 30H5C3.89543 30 3 30.8954 3 32V40C3 41.1046 3.89543 42 5 42H10V30Z" fill="#1E6337" stroke="#0F3E1F" strokeWidth="1" />
          
          {/* Truck body */}
          <rect x="40" y="20" width="70" height="25" rx="1" fill="#1E6337" stroke="#0F3E1F" strokeWidth="2" />
          
          {/* Godway text */}
          <text x="55" y="36" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="white">GODWAY</text>
          
          {/* Wheels */}
          <circle cx="20" cy="45" r="7" fill="#333" stroke="#222" strokeWidth="1" />
          <circle cx="20" cy="45" r="3" fill="#555" />
          <circle cx="60" cy="45" r="7" fill="#333" stroke="#222" strokeWidth="1" />
          <circle cx="60" cy="45" r="3" fill="#555" />
          <circle cx="90" cy="45" r="7" fill="#333" stroke="#222" strokeWidth="1" />
          <circle cx="90" cy="45" r="3" fill="#555" />
          
          {/* Windows */}
          <rect x="15" y="30" width="20" height="8" rx="1" fill="#A3D9FF" stroke="#0F3E1F" strokeWidth="1" />
          
          {/* Headlights */}
          <rect x="5" y="35" width="3" height="3" rx="1" fill="#FFDD00" />
        </svg>
      </motion.div>
      
      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700"></div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-between">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="h-1 w-10 bg-white"></div>
        ))}
      </div>
    </div>
  );
};

export default TruckAnimation; 