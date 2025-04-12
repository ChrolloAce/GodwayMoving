import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { serviceDetails } from '../../data/serviceDetails';
import ServicePageClient from './ServicePageClient';

// Generate metadata
export async function generateMetadata({ params }: { params: { serviceId: string } }): Promise<Metadata> {
  const service = serviceDetails[params.serviceId];
  
  if (!service) {
    return {
      title: 'Service Not Found | Godway Moving',
      description: 'The requested service could not be found.'
    };
  }
  
  return {
    title: `${service.title} | Godway Moving Florida`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Godway Moving Florida`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

// Server Component
export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  return <ServicePageClient params={params} />;
} 