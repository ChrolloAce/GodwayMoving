/**
 * Godway Moving Site Metadata
 * 
 * This file contains centralized metadata for the website including
 * page titles, descriptions, and sitemap information.
 */

// Company name (can be changed in one place)
export const COMPANY_NAME = "Godway Moving";

// Site metadata for all pages
export const SiteMetadata = {
  // Home page
  home: {
    title: `${COMPANY_NAME} | Professional Moving Services in Miami, FL`,
    description: `${COMPANY_NAME} delivers exceptional moving services throughout Florida. Specializing in residential and commercial relocations with military precision, careful handling, and efficient service across Miami, Orlando, Tampa, and South Florida.`,
    url: "/",
    priority: 1.0,
    keywords: "Miami moving, Florida relocation, professional movers Miami, residential moving Florida, commercial moving Tampa, moving services Orlando, South Florida relocation",
  },

  // Service pages
  services: {
    main: {
      title: `${COMPANY_NAME} | Top-Rated Moving Services in Miami, Florida`,
      description: `${COMPANY_NAME} offers comprehensive moving solutions across Florida. From residential and commercial relocations to packing, loading, and furniture assembly, our expert team delivers exceptional quality for Florida residents and businesses.`,
      url: "/services",
      priority: 0.9,
      keywords: "Miami moving services, Florida relocation company, professional South Florida movers, residential moving services, commercial moving Florida, moving company Orlando, professional relocation Miami",
    },
    residential: {
      title: `${COMPANY_NAME} | Expert Residential Moving in South Florida`,
      description: `Move your home with ${COMPANY_NAME}'s professional moving services throughout Florida. Our expert team handles your belongings with military-grade precision, careful packing, and efficient transport across Miami, Orlando, and Tampa.`,
      url: "/services#residential",
      priority: 0.8,
      keywords: "South Florida residential moving, Florida home relocation, professional home movers Miami, residential moving service Orlando, home moving company Tampa, moving contractor Florida",
    },
    commercial: {
      title: `${COMPANY_NAME} | Professional Commercial Moving in Miami, Florida`,
      description: `${COMPANY_NAME} handles business relocations throughout Florida. Our professional team relocates your office or business with minimal downtime, careful handling, and superior organization across Miami, Tampa, and Orlando.`,
      url: "/services#commercial",
      priority: 0.8,
      keywords: "Miami commercial moving, Florida business relocation, office moving Orlando, commercial moving service Tampa, business moving company South Florida, office relocation Miami",
    },
    packing: {
      title: `${COMPANY_NAME} | Professional Packing Services in Florida`,
      description: `${COMPANY_NAME} provides expert packing services throughout Florida. From fragile items to furniture, our skilled team delivers careful packaging with proper materials for safe transportation across Miami, Orlando, and Tampa.`,
      url: "/services#packing",
      priority: 0.8,
      keywords: "Florida packing services, Miami moving preparation, professional packers Orlando, packing service Tampa, moving supplies South Florida, packing assistance Miami",
    },
    furniture: {
      title: `${COMPANY_NAME} | Furniture Assembly and Disassembly in South Florida`,
      description: `${COMPANY_NAME} specializes in furniture assembly and disassembly for moves across Florida. Our skilled team carefully handles your furniture to ensure safe transport and proper setup in your new space in Miami, Orlando, and Tampa.`,
      url: "/services#furniture",
      priority: 0.8,
      keywords: "furniture assembly Miami, Florida furniture disassembly, furniture moving service Orlando, furniture setup Tampa, moving furniture South Florida, furniture transport Miami",
    }
  },

  // About page
  about: {
    title: `${COMPANY_NAME} | About Our South Florida Moving Experts`,
    description: `${COMPANY_NAME} is Florida's trusted moving company with years of experience relocating homes and businesses throughout Miami, Orlando, and Tampa. Learn about our dedicated team, military-grade precision, and exceptional customer service.`,
    url: "/about",
    priority: 0.7,
    keywords: "Miami moving company, Florida relocation experts, about Godway Moving, professional movers South Florida, licensed movers Florida, trusted moving company Miami",
  },

  // Contact page
  contact: {
    title: `${COMPANY_NAME} | Contact Our Florida Moving Team`,
    description: `Ready to plan your move? Contact ${COMPANY_NAME} for professional moving services throughout Florida. Request a free consultation and discover how our experts can make your move stress-free in Miami, Orlando, and Tampa.`,
    url: "/contact",
    priority: 0.9,
    keywords: "contact Miami movers, Florida moving consultation, free moving quote, South Florida moving company contact, relocation estimate, moving services Orlando",
  },

  // FAQ page
  faq: {
    title: `${COMPANY_NAME} | Frequently Asked Moving Questions | Miami, FL`,
    description: `Get answers to common questions about ${COMPANY_NAME}'s professional moving services throughout Florida. Find information about our process, pricing, timeline, and what to expect during your move in Miami, Orlando, and Tampa.`,
    url: "/faq",
    priority: 0.6,
    keywords: "Miami moving FAQ, Florida relocation questions, moving information, moving process South Florida, relocation timeline Orlando, moving costs Tampa",
  },

  // Portfolio page
  portfolio: {
    title: `${COMPANY_NAME} | Moving Service Gallery | South Florida`,
    description: `Explore ${COMPANY_NAME}'s showcase of successful moving projects throughout Florida. See our professional team in action handling residential and commercial relocations with military precision across Miami, Orlando, and Tampa.`,
    url: "/portfolio",
    priority: 0.7,
    keywords: "Miami moving gallery, Florida relocation projects, moving service examples, relocation showcase, moving company photos, South Florida moving process, Tampa moving gallery",
  },

  // Careers page
  careers: {
    title: `${COMPANY_NAME} | Join Our Elite Florida Moving Team`,
    description: `${COMPANY_NAME} is hiring skilled professionals to join our premier moving team in Miami, Florida. Discover rewarding career opportunities with competitive pay, benefits, and growth potential throughout South Florida.`,
    url: "/careers",
    priority: 0.6,
    keywords: "Miami moving jobs, Florida relocation careers, mover jobs Orlando, moving company positions, employment Tampa, moving jobs South Florida",
  },

  // Thank you page
  thankYou: {
    title: `${COMPANY_NAME} | Thank You | Florida Moving Experts`,
    description: `Thank you for contacting ${COMPANY_NAME}. Our Florida moving team will be in touch shortly to discuss your relocation and schedule your free consultation in Miami, Orlando, or Tampa.`,
    url: "/thank-you",
    priority: 0.3,
    keywords: "Miami moving consultation, Florida relocation inquiry, moving quote, moving request South Florida, relocation estimate Orlando",
  },

  // Legal pages
  legal: {
    privacy: {
      title: `${COMPANY_NAME} | Privacy Policy | Miami, FL Moving Company`,
      description: `${COMPANY_NAME}'s privacy policy explains how our Florida moving company collects, uses, and protects your personal information when you use our website or services.`,
      url: "/privacy",
      priority: 0.3,
      keywords: "Miami moving privacy policy, Florida movers terms, relocation company privacy, moving service agreement, mover policies South Florida",
    },
    terms: {
      title: `${COMPANY_NAME} | Terms of Service | Florida Moving Company`,
      description: `${COMPANY_NAME}'s terms of service outline the conditions governing your use of our website and professional moving services throughout Florida.`,
      url: "/terms",
      priority: 0.3,
      keywords: "Miami moving terms, Florida movers conditions, relocation service agreement, moving terms and conditions, mover policies South Florida",
    },
  },

  // Schema markup for structured data
  structured_data: {
    local_business: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": COMPANY_NAME,
      "image": "https://www.godwaymoving.com/logo.png",
      "url": "https://www.godwaymoving.com",
      "telephone": "(909) 645-3373",
      "email": "Savemoneyremodeling@gmail.com",
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/godwaymoving",
        "https://www.instagram.com/godwaymoving"
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 25.7617,
          "longitude": -80.1918
        },
        "geoRadius": "200000"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "South Florida Residential Moving",
            "description": "Complete home moving services including packing, loading, transportation, unloading, and furniture assembly throughout Miami, Orlando, and Tampa."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Florida Commercial Relocations",
            "description": "Full business relocation services including office moves, equipment transport, and minimal downtime solutions across all of South Florida."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Packing Services",
            "description": "Expert packing services using quality materials to ensure safe transport of all your belongings throughout Florida's hot and humid climate."
          }
        }
      ]
    }
  }
};

export default SiteMetadata; 