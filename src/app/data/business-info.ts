/**
 * Godway Moving Business Information
 * 
 * This file contains all the business information for Godway Moving.
 * Use this as a central reference for consistent data across the website.
 */

export const BusinessInfo = {
  // Company Information
  company: {
    name: "Godway Moving",
    legalName: "Godway, LLC",
    tagline: "Florida's Best Rated Movers",
    description: "Godway provides residential & commercial moving, specialty hauling and junk removal services with careful handling and a fully insured service throughout Florida.",
    yearFounded: 2022,
  },

  // Contact Information
  contact: {
    phone: {
      display: "(305) 409-7671",
      link: "3054097671",
    },
    email: "godwayllc@gmail.com",
    address: {
      street: "2101 LUDLAM ROAD APT 642", 
      city: "MIAMI",
      state: "FL",
      zip: "33155", 
      country: "USA",
      coordinates: {
        lat: 25.7617,
        lng: -80.1918
      }
    }
  },

  // Business Hours
  hours: {
    monday: "8:00 AM - 8:00 PM",
    tuesday: "8:00 AM - 8:00 PM",
    wednesday: "8:00 AM - 8:00 PM",
    thursday: "8:00 AM - 8:00 PM",
    friday: "8:00 AM - 8:00 PM",
    saturday: "8:00 AM - 8:00 PM",
    sunday: "3:00 PM - 7:00 PM",
    display: "Mon-Sat: 8am-8pm, Sun: 3pm-7pm"
  },

  // Services Offered
  services: {
    primary: [
      "Residential Moving",
      "Commercial Moving",
      "Junk Removal"
    ],
    description: "Godway provides residential & commercial moving, specialty hauling and junk removal services with careful handling and a fully insured service throughout Florida."
  },

  // Social Media Links
  socialMedia: {
    instagram: "https://www.instagram.com/godwayllc/",
    yelp: "https://www.yelp.com/biz/godway-miami",
    thumbtack: "https://www.thumbtack.com/fl/miami/movers/godway/service/488253238115549187",
  },

  // Areas Served
  areasServed: "Miami, Brickell, Miami Beach, Coral Gables, and all of Florida",

  // Reviews
  reviews: {
    platform: "Google",
    rating: 5,
    count: "200+",
    url: "https://g.page/godwaymoving"
  },

  // External Resource URLs
  externalResources: {
    bookingWidget: "https://connect.maktubtechnologies.com/widget/booking/GYKJcexln2BS0NfhXpga",
    bookingScript: "https://connect.maktubtechnologies.com/js/form_embed.js",
    reviewWidget: "https://reputationhub.site/reputation/widgets/review_widget/dIR65OesFgKY03WTP30z",
    reviewScript: "https://reputationhub.site/reputation/assets/review-widget.js",
    chatWidget: {
      src: "https://widgets.leadconnectorhq.com/loader.js",
      resourcesUrl: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
      widgetId: "67e166d44a3e9647844a3b19"
    }
  }
};

export default BusinessInfo; 