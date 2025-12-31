/**
 * Godway Moving Site Metadata
 * 
 * This file contains centralized metadata for the website including
 * page titles, descriptions, and sitemap information.
 */

// Company name (can be changed in one place)
export const COMPANY_NAME = "Godway Moving";
export const DOMAIN = "godwayusa.com";

// Site metadata for all pages
export const SiteMetadata = {
  // Home page
  home: {
    title: `${COMPANY_NAME} | Florida's Best Rated Movers | ${DOMAIN}`,
    description: `${COMPANY_NAME} provides residential & commercial moving, specialty hauling and junk removal services with careful handling and a fully insured service throughout Florida.`,
    url: "/",
    priority: 1.0,
    keywords: "Florida moving company, Miami movers, residential moving Florida, commercial moving Florida, junk removal Florida, fully insured movers, Miami moving company",
  },

  // Service pages
  services: {
    main: {
      title: `Moving & Junk Removal Services in Florida | ${COMPANY_NAME}`,
      description: `${COMPANY_NAME} provides residential & commercial moving, specialty hauling and junk removal services with careful handling and a fully insured service throughout Florida.`,
      url: "/services",
      priority: 0.9,
      keywords: "Florida moving services, Miami professional movers, residential moving Florida, commercial moving Florida, junk removal Florida, fully insured movers",
    },
    "residential-moving": {
      title: `Residential Moving in Florida | Home Movers | ${COMPANY_NAME}`,
      description: `Professional residential moving services across Florida from ${COMPANY_NAME}. Our expert team handles your home relocation with care, efficiency and precision. Serving Miami, Brickell, Miami Beach, Coral Gables and all Florida communities.`,
      url: "/services/residential-moving",
      priority: 0.8,
      keywords: "Florida residential moving, Miami home movers, Brickell movers, Miami Beach moving, Coral Gables relocation, apartment moving Miami, condo moving service",
    },
    "commercial-moving": {
      title: `Commercial Moving Services | Office Relocation Florida | ${COMPANY_NAME}`,
      description: `${COMPANY_NAME} specializes in commercial moving throughout Florida. Minimize downtime with our after-hours and weekend office relocations. Expert handling of furniture, technology & sensitive documents in Miami and South Florida.`,
      url: "/services/commercial-moving",
      priority: 0.8,
      keywords: "Florida commercial moving, Miami office relocation, business movers, commercial moving service, weekend office moves, after-hours moving service, IT equipment moving",
    },
    "junk-removal": {
      title: `Junk Removal Services Florida | Professional Hauling | ${COMPANY_NAME}`,
      description: `Professional junk removal and hauling services from ${COMPANY_NAME}. We handle furniture, appliances, and unwanted items with responsible disposal and recycling. Serving Miami, Brickell, Miami Beach, Coral Gables and all Florida.`,
      url: "/services/junk-removal",
      priority: 0.8,
      keywords: "Florida junk removal, Miami junk hauling, furniture removal, appliance disposal, estate cleanout, commercial junk removal, residential junk removal",
    }
  },

  // About page
  about: {
    title: `About Godway Moving | Our Story | ${DOMAIN}`,
    description: `Learn about ${COMPANY_NAME}'s story - built on principles of excellence, customer service satisfaction, and transparency. Proudly serving Miami, Brickell, Miami Beach, and Coral Gables with residential & commercial moving and junk removal.`,
    url: "/about",
    priority: 0.7,
    keywords: "about Godway Moving, our story, Florida moving company, licensed insured movers, veteran support, Miami movers, moving company values",
  },

  // Contact page
  contact: {
    title: `Contact Godway Moving | Free Moving Quotes Florida | ${DOMAIN}`,
    description: `Get in touch with ${COMPANY_NAME} for all your Florida moving needs. Request your free quote, schedule a consultation, or ask questions about our professional moving services in Miami, Orlando, Tampa and throughout Florida. Available 24/7.`,
    url: "/contact",
    priority: 0.9,
    keywords: "contact Florida movers, Godway Moving phone number, free moving quote Florida, schedule moving service Miami, moving consultation Orlando, Tampa movers contact, moving estimate request",
  },

  // FAQ page
  faq: {
    title: `Moving FAQs | Common Questions Answered | ${COMPANY_NAME} | ${DOMAIN}`,
    description: `Find answers to frequently asked questions about ${COMPANY_NAME}'s professional moving services throughout Florida. Learn about our process, pricing, preparation tips, and what to expect on moving day in Miami, Orlando, Tampa and beyond.`,
    url: "/faq",
    priority: 0.6,
    keywords: "Florida moving FAQ, common moving questions, relocation process information, moving cost questions, moving day preparation, Florida movers questions, what to expect when moving",
  },

  // Portfolio page
  portfolio: {
    title: `Our Moving Projects | Florida Relocation Gallery | ${COMPANY_NAME} | ${DOMAIN}`,
    description: `Browse ${COMPANY_NAME}'s portfolio of successful moves throughout Florida. See our professional team in action handling residential, commercial, last-minute and specialty relocations in Miami, Orlando, Tampa and all Florida communities.`,
    url: "/portfolio",
    priority: 0.7,
    keywords: "Florida moving gallery, Miami relocation projects, Orlando moving examples, Tampa moving photos, professional movers in action, moving service showcase, Florida movers portfolio",
  },

  // Careers page
  careers: {
    title: `Moving Company Jobs | Florida Career Opportunities | ${COMPANY_NAME} | ${DOMAIN}`,
    description: `Join ${COMPANY_NAME}'s team of professional movers in Florida. Explore rewarding career opportunities with competitive pay, benefits, training, and growth potential. Now hiring in Miami, Orlando, Tampa and throughout Florida.`,
    url: "/careers",
    priority: 0.6,
    keywords: "Florida moving jobs, Miami mover positions, Orlando moving company careers, Tampa moving jobs, professional mover employment, moving consultant jobs, driver and packer positions",
  },

  // Thank you page
  thankYou: {
    title: `Thank You | Request Received | ${COMPANY_NAME} | ${DOMAIN}`,
    description: `Thank you for contacting ${COMPANY_NAME}. Our Florida moving experts will be in touch shortly to discuss your relocation needs and provide personalized assistance for your move in Miami, Orlando, Tampa or anywhere in Florida.`,
    url: "/thank-you",
    priority: 0.3,
    keywords: "Florida moving request confirmation, moving quote thanks, relocation inquiry received, moving consultation scheduled, Florida movers response, moving service request",
  },

  // Legal pages
  legal: {
    privacy: {
      title: `Privacy Policy | Your Data Protection | ${COMPANY_NAME} | ${DOMAIN}`,
      description: `${COMPANY_NAME}'s privacy policy explains how we collect, use, and protect your personal information when using our Florida moving services or website. We are committed to safeguarding your privacy and maintaining your trust.`,
      url: "/privacy",
      priority: 0.3,
      keywords: "Florida moving company privacy policy, mover data protection, moving service privacy practices, personal information protection, Florida movers privacy terms, customer data security",
    },
    terms: {
      title: `Terms of Service | Moving Agreement | ${COMPANY_NAME} | ${DOMAIN}`,
      description: `Review ${COMPANY_NAME}'s terms of service for our Florida moving operations. This document outlines the conditions, responsibilities, and expectations when using our professional moving services throughout Florida.`,
      url: "/terms",
      priority: 0.3,
      keywords: "Florida moving terms and conditions, mover service agreement, moving company policies, relocation service terms, customer moving agreement, Florida movers liability, service contract",
    },
  },

  // Schema markup for structured data
  structured_data: {
    local_business: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": COMPANY_NAME,
      "image": `https://${DOMAIN}/Godwaylogo.png`,
      "url": `https://${DOMAIN}`,
      "telephone": "(305) 409-7671",
      "email": "godwayllc@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.7617,
        "longitude": -80.1918
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/godwaymoving",
        "https://www.instagram.com/godwaymoving",
        "https://www.yelp.com/biz/godway-moving"
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Moving Services",
            "description": "Complete home moving services including packing, loading, transportation, unloading, and furniture assembly throughout Florida."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Moving Services",
            "description": "Full business relocation services including office moves, equipment transport, and minimal downtime solutions across all of Florida."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Junk Removal Services",
            "description": "Professional junk removal and hauling services for homes and businesses. Responsible disposal and recycling of unwanted items throughout Florida."
          }
        }
      ]
    }
  }
};

export default SiteMetadata; 