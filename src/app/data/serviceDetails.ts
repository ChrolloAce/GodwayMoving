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
  "24-7-365-moving-services": {
    title: "24/7/365 Moving Services",
    description: "Round-the-clock moving services for emergency relocations and tight schedules.",
    longDescription: [
      "Godway Moving offers comprehensive 24/7/365 moving services designed for those unexpected life changes and urgent relocations.",
      "Whether you're facing a sudden job transfer, family emergency, or last-minute housing change, our team is ready to respond at any hour, any day of the year.",
      "Our round-the-clock services ensure that your moving timeline is never compromised, providing the same exceptional quality regardless of when you need to move."
    ],
    benefits: [
      "Available any time, day or night, including holidays",
      "Rapid response teams for emergency relocations",
      "Same high-quality service regardless of time constraints",
      "Flexible scheduling to accommodate your exact timeline",
      "Specialized equipment for expedited moves"
    ],
    image: "https://i.ibb.co/DDZT8qsm/15-C40-AB1-EF46-45-E3-8-AFE-7-BFFD535054-A.jpg",
    features: [
      "24-hour customer service hotline",
      "Emergency packing services",
      "Night moving capabilities with proper lighting and safety protocols",
      "Same-day service availability",
      "Digital inventory system for rapid cataloging",
      "Priority scheduling"
    ],
    pricing: [
      "Base rate plus time-of-service adjustments",
      "Transparent emergency service fees",
      "Hourly rates available for short-notice moves",
      "Custom packages for different urgency levels",
      "Special rates for truly urgent situations"
    ],
    availability: [
      "Available 24 hours a day, 7 days a week, 365 days a year",
      "Immediate dispatch available for emergency situations",
      "Pre-booking available for planned off-hours moves",
      "Service throughout all Florida locations",
      "Priority scheduling for urgent needs"
    ],
    locations: [
      "All Florida service areas covered for emergency moves",
      "Miami-Dade County",
      "Broward County",
      "Palm Beach County",
      "Orange County (Orlando area)",
      "Hillsborough County (Tampa area)"
    ],
    FAQs: [
      {
        question: "How quickly can you start my emergency move?",
        answer: "In most cases, we can dispatch a team within 2-4 hours of your call, depending on your location in Florida and the current demand. For extreme emergencies, we always prioritize and do our absolute best to accommodate your situation."
      },
      {
        question: "Do you charge extra for moving services at night or on holidays?",
        answer: "Yes, there is a modest surcharge for moves that occur between 9 PM and 6 AM, as well as on major holidays. However, our commitment to transparent pricing means you'll know all costs upfront before your move begins."
      },
      {
        question: "Is the quality of service the same for emergency/off-hours moves?",
        answer: "Absolutely. We maintain the same high standards regardless of when your move occurs. Our night and emergency crews are fully trained and experienced specifically in handling relocations under time pressure and during off-hours."
      },
      {
        question: "What's the minimum notice you need for an emergency move?",
        answer: "There is no minimum notice requirement for emergency moves. While more notice helps us prepare optimally, we understand that emergencies are unpredictable. Call us as soon as you know you need to move, and we'll start making arrangements immediately."
      },
      {
        question: "Can you handle specialized items during emergency moves?",
        answer: "Yes. Our emergency moving teams are equipped to handle specialty items including pianos, artwork, antiques, and sensitive electronics. We bring appropriate equipment and materials even for urgent relocations."
      }
    ]
  },
  "all-hours-moving": {
    title: "All Hours Moving Service",
    description: "Round-the-clock moving services available any time you need to relocate in Florida.",
    longDescription: [
      "Godway Moving's All Hours service ensures you can move whenever it fits your schedule - early morning, late night, or any time in between.",
      "Our specially trained crews are available to help with your move at any hour, providing the same exceptional quality service regardless of the time.",
      "Whether you're facing work constraints, building requirements, or just prefer moving during off-peak hours, our All Hours Moving service accommodates your specific timing needs."
    ],
    benefits: [
      "Flexible scheduling at any hour of the day or night",
      "Trained crews for off-hours relocations",
      "Reduces stress by working around your schedule",
      "Avoid daytime traffic and building restrictions",
      "Same quality service regardless of time"
    ],
    image: "https://i.ibb.co/kgGFqq7n/IMG-1682.jpg",
    features: [
      "Early morning and late night availability",
      "Proper lighting equipment for night moves",
      "Noise-minimizing techniques for nighttime moves",
      "24-hour customer service support",
      "Specialized planning for off-hours logistics",
      "Coordination with building management for off-hour access"
    ],
    pricing: [
      "Standard rates with minimal off-hours surcharges",
      "Transparent pricing with no hidden fees",
      "Free quotes for all-hours moves",
      "Flexible payment options",
      "Discounts available for certain off-peak times"
    ],
    availability: [
      "24-hour service, 7 days a week",
      "Early morning (midnight to 6 AM) with advance notice",
      "Late night (8 PM to midnight) available daily",
      "Weekend and holiday service",
      "Booking available online or by phone anytime"
    ],
    locations: [
      "All Florida service areas",
      "Miami-Dade County",
      "Broward County",
      "Palm Beach County",
      "Orange County (Orlando area)",
      "Hillsborough County (Tampa area)",
      "All major Florida cities and suburbs"
    ],
    FAQs: [
      {
        question: "Do you really move at 3 AM if needed?",
        answer: "Yes, we can schedule moves at any hour, including 3 AM. Some customers prefer very early morning moves to avoid traffic, heat, or to accommodate unusual work schedules. We have dedicated crews trained for overnight operations."
      },
      {
        question: "Is there an extra charge for middle-of-the-night moves?",
        answer: "We apply a modest surcharge for moves between 10 PM and 6 AM to cover the additional staffing costs, but we keep these fees reasonable. The exact amount depends on your specific move details, and we'll provide this information in your quote."
      },
      {
        question: "How do you handle noise restrictions for night moves?",
        answer: "Our night crews are specially trained in noise-minimizing techniques. We use soft-close equipment, communication headsets instead of verbal calls, specialized moving blankets that dampen sound, and carefully plan the logistics to respect quiet hours in residential areas."
      },
      {
        question: "Can you coordinate with my building for after-hours access?",
        answer: "Yes, we regularly work with building management to arrange after-hours access, service elevator reservations, and loading dock use during off-peak hours. We can help coordinate these arrangements as part of our service."
      },
      {
        question: "How do you ensure safety during night moves?",
        answer: "Safety is our priority regardless of the hour. For night moves, we bring additional lighting equipment, reflective gear for our movers, and carefully plan the logistics to ensure safe operations. Our night crews receive additional training specific to working in low-light conditions."
      }
    ]
  },
  "residential-moving": {
    title: "Local Residential Moving",
    description: "We specialize in local residential moves across Florida. We can move you between any Florida cities with care and efficiency, whether planned or last-minute.",
    longDescription: [
      "Our local residential moving service covers all your needs when relocating within Florida, whether you're moving to a neighboring street or across town.",
      "We handle every aspect of your move with precision and care, from carefully packing your belongings to safely transporting them to your new home.",
      "Our experienced team specializes in efficient, damage-free moves that make your transition to a new home as smooth and stress-free as possible."
    ],
    benefits: [
      "Comprehensive door-to-door service",
      "Professionally trained moving specialists",
      "Proper handling of all household items",
      "Efficient loading and unloading",
      "Minimal disruption to your schedule",
      "Reduces physical strain and stress"
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
      "Multiple service tiers available"
    ],
    availability: [
      "7 days a week scheduling",
      "Evening and weekend appointments",
      "Same-day service available",
      "Flexible scheduling options"
    ],
    locations: [
      "All Florida metropolitan areas",
      "Miami-Dade County",
      "Broward County",
      "Palm Beach County",
      "Orange County",
      "Hillsborough County"
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
        question: "Can you move my plants?",
        answer: "Yes, we can transport houseplants for local moves, though special care arrangements may be necessary for delicate specimens."
      }
    ]
  },
  "long-distance": {
    title: "Long Distance Moving",
    description: "From coast to coast, we can move you to any state in the USA. With on time long distance delivery dates and safe packing we will get you settled into your new home quickly.",
    longDescription: [
      "Our long-distance moving service provides comprehensive relocation assistance for moves between Florida and any other state in the USA.",
      "We specialize in carefully coordinating every aspect of your interstate move, from detailed planning and secure packing to prompt transportation and professional unpacking.",
      "With our guaranteed delivery dates and real-time shipment tracking, you'll have peace of mind knowing exactly when your belongings will arrive at your new home."
    ],
    benefits: [
      "Dedicated move coordinator",
      "Guaranteed delivery dates",
      "Real-time shipment tracking",
      "Comprehensive valuation coverage",
      "Interstate moving expertise",
      "Streamlined cross-country transitions"
    ],
    image: "https://i.ibb.co/XfDrGtZN/IMG-0718.jpg",
    features: [
      "Custom packing for long-distance transport",
      "Climate-controlled vehicles",
      "Secure storage options if needed",
      "Furniture disassembly and reassembly",
      "Special handling of high-value items",
      "Detailed inventory management"
    ],
    pricing: [
      "Fixed-price quotes based on shipment weight and distance",
      "Multiple service levels available",
      "No hidden costs or surprise fees",
      "Binding estimates available"
    ],
    availability: [
      "Year-round scheduling",
      "Flexible pick-up dates",
      "Guaranteed delivery windows",
      "Advanced booking recommended"
    ],
    locations: [
      "All 50 states",
      "All major cities nationwide",
      "Remote and rural destinations",
      "Door-to-door service anywhere in the continental US"
    ],
    FAQs: [
      {
        question: "How long will my interstate move take?",
        answer: "Transit times typically range from 2-7 days for East Coast destinations, 5-10 days for Midwest, and 7-14 days for West Coast, depending on distance and specific circumstances."
      },
      {
        question: "How are my belongings protected during long-distance transport?",
        answer: "We use specialized packing materials, secure loading techniques, air-ride suspension vehicles, and comprehensive valuation coverage for maximum protection."
      },
      {
        question: "Do you handle both the packing and unpacking for long-distance moves?",
        answer: "Yes, our full-service option includes professional packing at origin and complete unpacking at destination."
      },
      {
        question: "Can I track my shipment during transit?",
        answer: "Yes, we provide real-time GPS tracking and regular updates from your dedicated move coordinator throughout your move."
      }
    ]
  },
  "commercial-moving": {
    title: "Office & Commercial Moves",
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
      "All Florida business districts",
      "Office parks and industrial areas",
      "Medical facilities",
      "Retail locations",
      "Educational institutions",
      "Government offices"
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
  "small-moves": {
    title: "Small Moves",
    description: "Need to move a few small items or moving out of a studio in Florida? Our small move service is perfect for apartments, dorms, and partial relocations throughout Florida.",
    longDescription: [
      "Our small moves service is specifically designed for studio apartments, dorm rooms, partial moves, or single-item relocations across Florida.",
      "We provide the same professional care and attention to detail for small moves as we do for larger relocations, but with pricing structures that make sense for smaller jobs.",
      "This service is ideal for college students, singles, or anyone with a limited number of belongings who doesn't want to deal with the hassle of renting a truck or asking friends for help."
    ],
    benefits: [
      "Cost-effective for smaller loads",
      "No minimum hour requirements",
      "Perfect for studios and one-bedroom apartments",
      "Efficient service for partial moves",
      "Same professional standards as larger moves",
      "Eliminates need for truck rental"
    ],
    image: "https://i.ibb.co/XrX5kdM7/IMG-1736.jpg",
    features: [
      "Appropriately sized vehicles",
      "Professional moving personnel",
      "Basic packing services available",
      "Furniture disassembly if needed",
      "Blanket wrapping of furniture",
      "Loading and unloading assistance"
    ],
    pricing: [
      "Affordable hourly rates",
      "Customized small-load pricing",
      "Mini-move packages available",
      "Straightforward pricing with no hidden fees"
    ],
    availability: [
      "Same-day service often available",
      "7-day scheduling",
      "Flexible timing options",
      "Last-minute booking available"
    ],
    locations: [
      "All Florida college towns",
      "Major apartment complexes",
      "Urban high-rises",
      "Condominium buildings",
      "Retirement communities",
      "All residential areas in Florida"
    ],
    FAQs: [
      {
        question: "What qualifies as a 'small move'?",
        answer: "Generally, if you're moving the contents of a studio, dorm room, or just a few items like a bed, dresser, and a couple of boxes, it would be considered a small move."
      },
      {
        question: "How many movers will you send for a small move?",
        answer: "Typically we send 2 movers for small moves, which is sufficient for most studio and one-bedroom apartments."
      },
      {
        question: "Can I just move a single large item like a piano or armoire?",
        answer: "Yes, we offer single-item moving services with specialized equipment and techniques for large or delicate pieces."
      },
      {
        question: "Is there a minimum charge for small moves?",
        answer: "We have a minimum service time of 2 hours for local small moves, which includes travel time to your location."
      }
    ]
  },
  "last-minute": {
    title: "Last Minute Moves",
    description: "Need to move urgently in Florida? Our last minute moving service will save the day. We'll get you into your new address ASAP with same-day service available throughout South Florida.",
    longDescription: [
      "Our last-minute moving service is designed for those unexpected situations when you need to relocate quickly and efficiently.",
      "We maintain an emergency response team ready to mobilize at short notice, allowing us to accommodate same-day and next-day moving requests throughout Florida.",
      "Despite the rushed timeline, we never compromise on quality or safety, ensuring your belongings are handled with the same care and professionalism as our scheduled moves."
    ],
    benefits: [
      "Rapid response team",
      "Same-day service availability",
      "Streamlined moving process",
      "Stress reduction during urgent situations",
      "Professional service despite tight timeline",
      "Complete solution for emergency relocations"
    ],
    image: "https://i.ibb.co/kRD39Rv/IMG-0719.jpg",
    features: [
      "Expedited packing services",
      "Priority scheduling",
      "Immediate quote processing",
      "Quick logistics coordination",
      "Efficient loading and transport",
      "Rapid setup at destination"
    ],
    pricing: [
      "Competitive rates even for urgent moves",
      "No excessive emergency fees",
      "Transparent pricing",
      "Multiple service options available"
    ],
    availability: [
      "Same-day service in most areas",
      "Next-day guaranteed service",
      "24/7 emergency response",
      "On-call crews for unexpected situations"
    ],
    locations: [
      "Miami and surrounding areas",
      "Ft. Lauderdale metropolitan area",
      "Palm Beach County",
      "Orlando region",
      "Tampa Bay area",
      "All major cities in Florida"
    ],
    FAQs: [
      {
        question: "How quickly can you start my last-minute move?",
        answer: "In most cases, we can dispatch a team within 2-4 hours of your confirmed booking, depending on crew availability and your location in Florida."
      },
      {
        question: "Is there an extra charge for same-day moving service?",
        answer: "We maintain the same competitive rates for last-minute moves that we offer for scheduled moves, with no premium charged for urgency."
      },
      {
        question: "Do I need to have everything packed for a last-minute move?",
        answer: "No, our emergency moving teams come prepared with all necessary packing supplies and can pack your belongings efficiently as part of the service."
      },
      {
        question: "How can I book a last-minute move?",
        answer: "Call our emergency moving hotline at (305) 555-7890, which is staffed 24/7 for immediate assistance with urgent moving needs."
      }
    ]
  },
  "last-minute-moves": {
    title: "Last Minute Moves",
    description: "Urgent moving services when you need to relocate with little notice.",
    longDescription: [
      "When life throws you a curveball and you need to move quickly, Godway Moving is ready to respond with our specialized Last Minute Moving service.",
      "Our team is trained to handle urgent relocations with the same care and attention to detail as our planned moves, ensuring nothing is overlooked despite the compressed timeline.",
      "We maintain reserve crews and equipment specifically for last-minute requests, allowing us to mobilize quickly and efficiently when you call."
    ],
    benefits: [
      "Same-day service availability in most cases",
      "Rapid response team dedicated to urgent relocations",
      "Simplified booking process for quick starts",
      "Full service options despite short notice",
      "Experience in handling time-sensitive situations"
    ],
    image: "https://i.ibb.co/s9KcKDP/last-minute-moving.jpg",
    features: [
      "Expedited packing services",
      "Priority scheduling",
      "Flexible payment options",
      "24/7 customer support during your move",
      "Simplified inventory process",
      "Same great care despite the rush"
    ],
    pricing: [
      "Transparent rates with upfront pricing",
      "Hourly options for maximum flexibility",
      "No excessive emergency fees",
      "Payment plans available",
      "Multiple payment methods accepted"
    ],
    availability: [
      "Available 7 days a week",
      "Same-day service in most Florida locations",
      "Extended hours for urgent situations",
      "After-hours moves available",
      "Weekend and holiday availability"
    ],
    locations: [
      "All Florida service areas",
      "Miami-Dade County",
      "Broward County",
      "Palm Beach County",
      "Orange County (Orlando area)",
      "Hillsborough County (Tampa area)"
    ],
    FAQs: [
      {
        question: "How quickly can you start my last-minute move?",
        answer: "In most cases, we can begin your move the same day you call, depending on your location and our current schedule. For morning calls, we often can have a crew at your location by afternoon. If you call later in the day, we may be able to start first thing the next morning."
      },
      {
        question: "Do you charge extra for last-minute moves?",
        answer: "We pride ourselves on fair pricing, even for urgent moves. While there may be a small convenience fee for same-day service, we don't believe in price gouging during stressful situations. Our rates remain reasonable and transparent."
      },
      {
        question: "Will my belongings be safe with a rushed move?",
        answer: "Absolutely. While the timeline may be compressed, our standards never are. We use the same careful packing techniques, quality materials, and experienced movers for last-minute relocations as we do for moves booked weeks in advance."
      },
      {
        question: "What information do you need for a same-day move?",
        answer: "To get started quickly, we'll need your current address, destination address, a rough estimate of your inventory (number of bedrooms is a good start), any special items requiring extra attention, and your preferred payment method."
      },
      {
        question: "Can you help with packing for a last-minute move?",
        answer: "Yes! Our expedited packing service is especially valuable for last-minute moves. Our team can quickly and efficiently pack your belongings using professional techniques and quality materials, saving you valuable time."
      }
    ]
  },
  "moving-supplies": {
    title: "Moving Supplies",
    description: "Professional-grade packing materials and moving supplies delivered to your door.",
    longDescription: [
      "Godway Moving offers premium moving supplies to ensure your belongings are properly protected during your relocation.",
      "Our professional-grade materials are the same high-quality supplies our moving teams use, now available to you for your DIY packing needs.",
      "We deliver all supplies directly to your door throughout Florida, with options for same-day delivery in many areas for last-minute packing needs."
    ],
    benefits: [
      "Professional-grade materials for superior protection",
      "Convenient doorstep delivery throughout Florida",
      "Same-day delivery available in many areas",
      "Eco-friendly and recyclable options",
      "Custom supply kits based on home size"
    ],
    image: "https://i.ibb.co/3kyCMst/moving-supplies.jpg",
    features: [
      "Various box sizes for different items",
      "Specialized boxes for fragile items",
      "Premium packing tape and dispensers",
      "Protective wrapping materials",
      "Furniture covers and moving blankets",
      "Labeling supplies for organized unpacking"
    ],
    pricing: [
      "Individual items available for purchase",
      "Pre-configured kits for different home sizes",
      "Bulk discounts for larger orders",
      "Competitive pricing compared to retail stores",
      "Discounts when combined with our moving services"
    ],
    availability: [
      "Online ordering 24/7",
      "Next-day delivery standard",
      "Same-day delivery in many Florida locations",
      "In-person pickup available at our facilities",
      "Special orders for unique items"
    ],
    locations: [
      "Delivery throughout all Florida service areas",
      "Miami-Dade County",
      "Broward County",
      "Palm Beach County",
      "Orange County (Orlando area)",
      "Hillsborough County (Tampa area)"
    ],
    FAQs: [
      {
        question: "What moving supplies do you recommend for a standard 2-bedroom apartment?",
        answer: "For a typical 2-bedroom apartment, we recommend our Medium Home Kit, which includes 30-40 boxes in various sizes, 3 rolls of packing tape, 1 tape dispenser, 50 feet of bubble wrap, 5 pounds of packing paper, 10 furniture blankets, and a marker set for labeling."
      },
      {
        question: "How quickly can I get supplies delivered?",
        answer: "We offer next-day delivery as our standard service throughout Florida. In major metropolitan areas (Miami, Orlando, Tampa), we frequently offer same-day delivery for orders placed before noon. Expedited delivery options are available for urgent needs."
      },
      {
        question: "Do you offer eco-friendly packing materials?",
        answer: "Yes, we're committed to environmental responsibility. We offer biodegradable packing peanuts, recycled cardboard boxes, and paper-based tape options. We also encourage customers to return reusable items like furniture blankets and plastic bins for a deposit refund."
      },
      {
        question: "Can I order custom or specialty boxes for unusual items?",
        answer: "Absolutely! We stock specialty boxes for items like TVs, artwork, mirrors, lamps, and dishes. For truly unique items, we can source or create custom boxes with advance notice. Just let us know your specific needs when ordering."
      },
      {
        question: "Is it cheaper to buy supplies from you or from a retail store?",
        answer: "Our professional-grade supplies are competitively priced compared to retail stores, and often less expensive when you consider the convenience of doorstep delivery. Additionally, our bulk kits offer significant savings over purchasing items individually, and the quality of our materials typically exceeds what's available in retail stores."
      }
    ]
  }
}; 