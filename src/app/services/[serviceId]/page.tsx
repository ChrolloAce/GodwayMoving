import { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { serviceDetails } from '../../data/serviceDetails';
import ServicePageClient from './ServicePageClient';
import { DOMAIN } from '../../data/site-metadata';

const COMPANY_NAME = "Godway Moving";

// Generate metadata
export async function generateMetadata({ params }: { params: { serviceId: string } }): Promise<Metadata> {
  const service = serviceDetails[params.serviceId];

  if (!service) {
    return {
      title: `Service Not Found | ${COMPANY_NAME} Florida | ${DOMAIN}`,
      description: 'The requested moving service could not be found. Please visit our main services page to explore our available moving solutions throughout Florida.'
    };
  }
  
  // Service specific keywords based on service title
  let serviceKeywords = "";
  
  if (service.title.toLowerCase().includes("residential")) {
    serviceKeywords = "home moving, house relocation, apartment moving, condo moving";
  } else if (service.title.toLowerCase().includes("commercial") || service.title.toLowerCase().includes("office")) {
    serviceKeywords = "office moving, business relocation, commercial movers, workplace transition";
  } else if (service.title.toLowerCase().includes("junk")) {
    serviceKeywords = "junk removal, furniture disposal, appliance hauling, estate cleanout, debris removal";
  } else {
    serviceKeywords = "professional movers, Florida moving service, expert relocation, moving company";
  }
  
  return {
    title: `${service.title} | Professional Florida Movers | ${DOMAIN}`,
    description: service.description,
    keywords: `${serviceKeywords}, Florida movers, Miami moving service, Orlando relocation, Tampa moving company, ${service.title}, professional movers`,
    openGraph: {
      title: `${service.title} | Expert Florida Moving Service | ${COMPANY_NAME}`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} - Professional moving service in Florida`
        }
      ],
      locale: 'en_US',
      type: 'website',
      url: `https://${DOMAIN}/services/${params.serviceId}`,
      siteName: COMPANY_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${COMPANY_NAME} Florida`,
      description: service.description,
      images: [service.image],
    },
    alternates: {
      canonical: `https://${DOMAIN}/services/${params.serviceId}`,
    },
  };
}

// Server Component
export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  return <ServicePageClient params={params} />;
} 