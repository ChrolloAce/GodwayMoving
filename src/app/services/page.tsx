import React from 'react';
import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Professional Moving Services | Godway Moving - Florida',
  description: 'Choose from our full range of professional moving services in Florida. Local, long-distance, and specialized moving solutions to fit your needs.',
  openGraph: {
    title: 'Professional Moving Services | Godway Moving - Florida',
    description: 'Choose from our full range of professional moving services in Florida. Local, long-distance, and specialized moving solutions to fit your needs.',
    images: [
      {
        url: 'https://godwaymovingllc.imgix.net/moving-services-florida-godway.webp',
        width: 1200,
        height: 630,
        alt: 'Godway Moving Services in Florida'
      }
    ],
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
} 