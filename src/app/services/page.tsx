import React from 'react';
import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Professional Moving & Junk Removal Services | Godway Moving - Florida',
  description: 'Godway provides residential & commercial moving, specialty hauling and junk removal services with careful handling and a fully insured service throughout Florida.',
  openGraph: {
    title: 'Professional Moving & Junk Removal Services | Godway Moving - Florida',
    description: 'Godway provides residential & commercial moving, specialty hauling and junk removal services with careful handling and a fully insured service throughout Florida.',
    images: [
      {
        url: '/images/godway/team-full.jpg',
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