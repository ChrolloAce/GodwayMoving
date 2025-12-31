// Define service details
export interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string[];
  benefits: string[];
  image: string;
  features: string[];
  pricing: string[];
  availability: string[];
  locations: string[];
  FAQs: Array<{question: string, answer: string}>;
}

// All services data
export const serviceDetails: Record<string, ServiceDetail> = {
  "residential-moving": {
    title: "Residential Moving",
    description: "We specialize in local residential moves across Florida. We can move you between any Florida cities with care and efficiency, whether planned or last-minute.",
    longDescription: [
      "Our residential moving service covers all your needs when relocating within Florida, whether you're moving to a neighboring street or across town.",
      "We handle every aspect of your move with precision and care, from carefully packing your belongings to safely transporting them to your new home.",
      "Our experienced team specializes in efficient, damage-free moves that make your transition to a new home as smooth and stress-free as possible."
    ],
    benefits: [
      "Comprehensive door-to-door service",
      "Professionally trained moving specialists",
      "Proper handling of all household items",
      "Efficient loading and unloading",
      "Minimal disruption to your schedule",
      "Fully licensed and insured"
    ],
    image: "https://i.ibb.co/cXYdSC0j/IMG-0713.jpg",
    features: [
      "Full packing and unpacking services",
      "Disassembly and reassembly of furniture",
      "Custom crating for valuable items",
      "Floor and doorway protection",
      "Professional-grade moving equipment",
      "Clean, well-maintained trucks"
    ],
    pricing: [
      "Hourly rates for local moves",
      "Free, detailed estimates",
      "Transparent pricing structure",
      "No hidden fees"
    ],
    availability: [
      "7 days a week scheduling",
      "Evening and weekend appointments",
      "Same-day service available",
      "Flexible scheduling options"
    ],
    locations: [
      "Miami",
      "Brickell",
      "Miami Beach",
      "Coral Gables",
      "All of Florida"
    ],
    FAQs: [
      {
        question: "How long does a typical local move take?",
        answer: "Most local moves take between 3-8 hours, depending on the size of your home and the amount of belongings."
      },
      {
        question: "Do I need to empty my dresser drawers?",
        answer: "For local moves, lightweight items can often remain in drawers, but we recommend removing valuables and fragile items."
      },
      {
        question: "Will the movers assemble my bed at the new house?",
        answer: "Yes, our comprehensive service includes disassembly and reassembly of standard furniture including beds."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, Godway Moving is fully licensed and insured for your complete peace of mind."
      }
    ]
  },
  "commercial-moving": {
    title: "Commercial Moving",
    description: "We can move your office overnight, on the weekend and during holidays to minimize your downtime. With full office packing and unpacking, your staff will be up and running the next morning.",
    longDescription: [
      "Our specialized commercial moving service is designed to minimize business disruption while ensuring a smooth transition to your new location.",
      "We understand that time is money for businesses, which is why we offer after-hours, weekend, and holiday moving options to reduce downtime and keep your operations running smoothly.",
      "Our team has extensive experience handling office furniture, technology, and sensitive documents with the care and precision required for business relocations."
    ],
    benefits: [
      "Minimal business disruption",
      "Specialized equipment for office moves",
      "IT equipment handling experts",
      "Systematic labeling and organization",
      "After-hours and weekend service",
      "Rapid setup at new location"
    ],
    image: "https://i.ibb.co/whdn6mFS/IMG-1682.jpg",
    features: [
      "Comprehensive move planning",
      "Workstation disassembly and reassembly",
      "Computer and server relocation",
      "Secure document transportation",
      "Furniture installation services",
      "Debris removal and recycling"
    ],
    pricing: [
      "Custom quotes based on business needs",
      "Project-based pricing available",
      "Volume discounts for large offices",
      "Inclusive packages for complete relocations"
    ],
    availability: [
      "Evenings, nights, and weekends",
      "Holiday scheduling available",
      "Phased move options",
      "Emergency relocation services"
    ],
    locations: [
      "Miami",
      "Brickell",
      "Miami Beach",
      "Coral Gables",
      "All of Florida"
    ],
    FAQs: [
      {
        question: "Can you move our office during the weekend so we don't lose workdays?",
        answer: "Yes, weekend moves are one of our specialties. We can complete your entire move between Friday evening and Monday morning to ensure no disruption to your business operations."
      },
      {
        question: "How do you handle the moving of computers and IT equipment?",
        answer: "Our technicians are trained in proper disconnection, packing, and reconnection of computers and peripherals. We use anti-static materials and specialized crates for all electronic equipment."
      },
      {
        question: "Do you provide a move coordinator for commercial relocations?",
        answer: "Yes, all commercial moves are assigned a dedicated project manager who oversees every aspect of your relocation and serves as your single point of contact."
      },
      {
        question: "Can you help with planning our office layout at the new location?",
        answer: "Yes, we offer space planning services and can work with floor plans to ensure efficient setup at your new location according to your specifications."
      }
    ]
  },
  "junk-removal": {
    title: "Junk Removal",
    description: "Professional junk removal services to clear out unwanted items from your home or business. We handle everything from furniture to appliances with responsible disposal and recycling.",
    longDescription: [
      "Godway Moving offers professional junk removal services designed to help you clear out unwanted items quickly and responsibly.",
      "Whether you're decluttering your home, cleaning out an estate, renovating, or clearing a commercial space, our team handles all the heavy lifting for you.",
      "We are committed to environmentally responsible disposal, recycling and donating items whenever possible to minimize landfill waste."
    ],
    benefits: [
      "Fast and efficient removal service",
      "Eco-friendly disposal practices",
      "No item too large or too small",
      "Same-day service available",
      "Upfront transparent pricing",
      "Fully licensed and insured"
    ],
    image: "https://i.ibb.co/XrX5kdM7/IMG-1736.jpg",
    features: [
      "Furniture removal and disposal",
      "Appliance hauling and recycling",
      "Estate cleanouts",
      "Construction debris removal",
      "Yard waste removal",
      "Commercial junk removal"
    ],
    pricing: [
      "Volume-based pricing",
      "Free on-site estimates",
      "No hidden fees",
      "Competitive rates"
    ],
    availability: [
      "7 days a week service",
      "Same-day appointments available",
      "Flexible scheduling",
      "Emergency cleanouts"
    ],
    locations: [
      "Miami",
      "Brickell",
      "Miami Beach",
      "Coral Gables",
      "All of Florida"
    ],
    FAQs: [
      {
        question: "What items can you remove?",
        answer: "We can remove almost anything non-hazardous including furniture, appliances, electronics, mattresses, yard waste, construction debris, and general household junk."
      },
      {
        question: "Do you recycle or donate items?",
        answer: "Yes! We are committed to responsible disposal. We recycle applicable materials and donate usable items to local charities whenever possible."
      },
      {
        question: "How is pricing determined?",
        answer: "Our pricing is based on the volume of items being removed. We provide free on-site estimates so you know the exact cost before we begin."
      },
      {
        question: "Can you handle large items like pianos or hot tubs?",
        answer: "Yes, our team is equipped and trained to handle large, heavy items. Just let us know in advance so we can bring the right equipment."
      },
      {
        question: "Do I need to be present during the junk removal?",
        answer: "While it's helpful to have someone present, it's not always necessary. We can arrange access and communicate via phone if needed."
      }
    ]
  }
};
