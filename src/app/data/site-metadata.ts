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
    title: `${COMPANY_NAME} | Top-Rated Florida Moving Company | ${DOMAIN}`,
    description: `${COMPANY_NAME} offers exceptional moving services throughout Florida with military precision. Professional residential & commercial movers in Miami, Orlando, Tampa specializing in last-minute, small moves and same-day service.`,
    url: "/",
    priority: 1.0,
    keywords: "Florida moving company, Miami movers, Orlando moving services, Tampa professional movers, last-minute moving Florida, small local moves Miami, same-day moving service Tampa",
  },

  // Service pages
  services: {
    main: {
      title: `Moving Services in Florida | Residential & Commercial | ${COMPANY_NAME}`,
      description: `${COMPANY_NAME} provides comprehensive moving solutions across Florida. Local residential, commercial, last-minute & long-distance moving services with free quotes. Serving Miami, Orlando, Tampa and all Florida communities.`,
      url: "/services",
      priority: 0.9,
      keywords: "Florida moving services, Miami professional movers, Orlando relocation company, Tampa commercial moving, last-minute moving Florida, small moves Miami, long-distance moving services",
    },
    "residential-moving": {
      title: `Residential Moving in Florida | Local Home Movers | ${COMPANY_NAME}`,
      description: `Professional residential moving services across Florida from ${COMPANY_NAME}. Our expert team handles your home relocation with care, efficiency and precision. Serving Miami, Orlando, Tampa and all Florida communities.`,
      url: "/services/residential-moving",
      priority: 0.8,
      keywords: "Florida residential moving, Miami home movers, Orlando house relocation, Tampa residential moving service, local movers Florida, apartment moving Miami, condo moving service",
    },
    "commercial-moving": {
      title: `Commercial Moving Services | Office Relocation Florida | ${COMPANY_NAME}`,
      description: `${COMPANY_NAME} specializes in commercial moving throughout Florida. Minimize downtime with our after-hours and weekend office relocations. Expert handling of furniture, technology & sensitive documents in Miami, Orlando, Tampa.`,
      url: "/services/commercial-moving",
      priority: 0.8,
      keywords: "Florida commercial moving, Miami office relocation, Orlando business movers, Tampa commercial moving service, weekend office moves, after-hours moving service, IT equipment moving",
    },
    "long-distance": {
      title: `Long Distance Moving | Florida to Anywhere in the USA | ${COMPANY_NAME}`,
      description: `Reliable long-distance moving from Florida to anywhere in the USA with ${COMPANY_NAME}. Guaranteed delivery dates, real-time tracking and comprehensive move coordination. Professional interstate movers based in Florida.`,
      url: "/services/long-distance",
      priority: 0.8,
      keywords: "Florida long distance moving, interstate movers Miami, Orlando to out-of-state moving, Tampa long-distance relocation, cross-country moving Florida, state-to-state movers, guaranteed delivery moving",
    },
    "small-moves": {
      title: `Small Moving Services | Studio & Apartment Moves | ${COMPANY_NAME}`,
      description: `Expert small moving services throughout Florida from ${COMPANY_NAME}. Perfect for studios, apartments, dorms and partial relocations. Same professional quality without minimum hour requirements. Serving all Florida communities.`,
      url: "/services/small-moves",
      priority: 0.8,
      keywords: "Florida small moves, studio moving Miami, apartment movers Orlando, partial relocation Tampa, dorm room moving service, small load movers Florida, single item moving",
    },
    "last-minute": {
      title: `Last-Minute Moving Services | Same-Day Moves Florida | ${COMPANY_NAME}`,
      description: `Emergency and last-minute moving services across Florida from ${COMPANY_NAME}. Same-day availability, rapid response teams and full-service options despite short notice. Serving Miami, Orlando, Tampa and all Florida communities.`,
      url: "/services/last-minute",
      priority: 0.8,
      keywords: "Florida last-minute moving, same-day movers Miami, emergency moving service Orlando, urgent relocation Tampa, quick-response moving company, rush moving service Florida, unplanned moving help",
    },
    "last-minute-moves": {
      title: `Urgent Moving Solutions | Last-Minute Relocations Florida | ${COMPANY_NAME}`,
      description: `${COMPANY_NAME} specializes in last-minute and urgent moving services throughout Florida. Same-day availability, expedited packing, and professional teams ready to respond quickly to your moving emergency in Miami, Orlando, and Tampa.`,
      url: "/services/last-minute-moves",
      priority: 0.8,
      keywords: "urgent moving service Florida, same-day movers Miami, emergency relocation Orlando, last-minute moving company Tampa, quick-response moving, short-notice relocation Florida, rush moving services",
    },
    "moving-supplies": {
      title: `Professional Moving Supplies | Delivered in Florida | ${COMPANY_NAME}`,
      description: `${COMPANY_NAME} delivers professional-grade moving supplies throughout Florida. High-quality boxes, packing materials, protective wraps and moving blankets with same-day delivery options. Serving all Florida communities.`,
      url: "/services/moving-supplies",
      priority: 0.7,
      keywords: "Florida moving supplies, Miami packing materials, Orlando moving boxes, Tampa moving equipment, professional packing supplies, moving blankets delivery, bubble wrap and packing tape",
    },
    "24-7-365-moving-services": {
      title: `24/7/365 Moving Services | Round-the-Clock Movers Florida | ${COMPANY_NAME}`,
      description: `${COMPANY_NAME} provides 24/7/365 moving services for emergencies and tight schedules across Florida. Available any time, day or night, including holidays with the same exceptional quality. Serving all Florida communities.`,
      url: "/services/24-7-365-moving-services",
      priority: 0.8,
      keywords: "24 hour moving service Florida, overnight movers Miami, holiday moving Orlando, after-hours relocation Tampa, emergency moving company, round-the-clock movers, anytime moving service Florida",
    },
    "all-hours-moving": {
      title: `All Hours Moving Service | Morning to Night Relocations | ${COMPANY_NAME}`,
      description: `${COMPANY_NAME} offers flexible all-hours moving services across Florida. Early morning, late night, and any time in between to fit your schedule. Expert teams available 24/7 in Miami, Orlando, Tampa and all Florida communities.`,
      url: "/services/all-hours-moving",
      priority: 0.8,
      keywords: "all-hours moving Florida, early morning movers Miami, late night moving service Orlando, flexible schedule moving Tampa, off-peak relocation, overnight moving service, dawn or dusk moving Florida",
    }
  },

  // About page
  about: {
    title: `About Godway Moving | Florida's Trusted Moving Company | ${DOMAIN}`,
    description: `${COMPANY_NAME} is Florida's premier moving company with a commitment to excellence. Learn about our experienced team, service philosophy, and dedication to stress-free relocations across Miami, Orlando, Tampa and all Florida communities.`,
    url: "/about",
    priority: 0.7,
    keywords: "about Godway Moving, Florida moving company history, professional movers background, trusted relocation service Florida, licensed Florida movers, experienced moving team Miami, moving company values",
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
      "image": `https://${DOMAIN}/logo.png`,
      "url": `https://${DOMAIN}`,
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
            "name": "Last-Minute Moving Services",
            "description": "Urgent and same-day moving services for unexpected relocations throughout Florida with the same professional quality and care."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long-Distance Moving",
            "description": "Interstate moving services from Florida to anywhere in the USA with guaranteed delivery dates and real-time shipment tracking."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7/365 Moving Services",
            "description": "Round-the-clock moving services available any day, any time, including holidays throughout Florida for emergency relocations."
          }
        }
      ]
    }
  }
};

export default SiteMetadata; 