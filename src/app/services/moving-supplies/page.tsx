import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBoxOpen, FaTruck, FaRecycle, FaShippingFast, FaBoxes, FaTags } from 'react-icons/fa';

export const metadata = {
  title: 'Moving Supplies | Godway Moving',
  description: 'Professional-grade moving supplies delivered to your door in Florida. From boxes to tape to bubble wrap, we have everything you need for a smooth move.',
};

export default function MovingSuppliesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-godway-green1 py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image 
            src="https://i.ibb.co/3kyCMst/moving-supplies.jpg"
            alt="Moving Supplies Background"
            fill
            className="object-cover"
            quality={90}
            priority
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-oswald uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional Moving Supplies
            </h1>
            <p className="text-white text-lg md:text-xl mb-8">
              Quality packing materials and moving supplies delivered directly to your door throughout Florida
            </p>
            <Link href="/contact" className="bg-white text-godway-green1 hover:bg-gray-100 rounded-full px-8 py-3 font-medium text-lg inline-block transition-all duration-300">
              Order Supplies Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <Image
              src="https://i.ibb.co/3kyCMst/moving-supplies.jpg"
              alt="Professional Moving Supplies"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-oswald uppercase text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Moving Supplies Delivered To Your Door
            </h2>
            <p className="text-gray-600 mb-4">
              At Godway Moving, we understand that proper packing is essential for a successful move. That's why we offer a complete range of professional-grade moving supplies delivered directly to your doorstep anywhere in Florida.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're planning a DIY move or just need additional supplies before our team arrives, we provide the same high-quality materials our professionals use every day.
            </p>
            <p className="text-gray-600 mb-4">
              With same-day delivery available in many areas and eco-friendly options for environmentally conscious customers, we make it easy to get exactly what you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-oswald uppercase text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Moving Supplies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-godway-green1 text-4xl mb-4 flex justify-center">
                <FaBoxOpen />
              </div>
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Our professional-grade moving boxes and supplies are stronger, more durable, and more protective than standard retail options.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-godway-green1 text-4xl mb-4 flex justify-center">
                <FaTruck />
              </div>
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Convenient Delivery</h3>
              <p className="text-gray-600">
                Skip the store trips and have all your supplies delivered directly to your door, with same-day options available throughout Florida.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-godway-green1 text-4xl mb-4 flex justify-center">
                <FaRecycle />
              </div>
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Eco-Friendly Options</h3>
              <p className="text-gray-600">
                Choose from our selection of environmentally responsible packaging materials, including recyclable and biodegradable options.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-oswald uppercase text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Our Moving Supply Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="relative h-60">
              <Image 
                src="https://i.ibb.co/ZxWT3W9/boxes.jpg"
                alt="Moving Boxes"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Moving Boxes</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Small boxes (16" x 12" x 12")</li>
                <li>• Medium boxes (18" x 16" x 16")</li>
                <li>• Large boxes (20" x 20" x 15")</li>
                <li>• Extra-large boxes (23" x 23" x 16")</li>
                <li>• Wardrobe boxes with hanging bar</li>
                <li>• Dish pack/kitchen boxes</li>
                <li>• Picture/mirror boxes (adjustable)</li>
                <li>• TV boxes (various sizes)</li>
              </ul>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="relative h-60">
              <Image 
                src="https://i.ibb.co/BjNkGQK/packing-materials.jpg"
                alt="Packing Materials"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Packing Materials</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Packing paper (10lb, 25lb bundles)</li>
                <li>• Bubble wrap (various sizes)</li>
                <li>• Packing peanuts (regular and biodegradable)</li>
                <li>• Foam sheets for electronics</li>
                <li>• Mattress bags (Twin through King)</li>
                <li>• Furniture covers and plastic wrap</li>
                <li>• Moving blankets and furniture pads</li>
                <li>• Corner protectors for furniture</li>
              </ul>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="relative h-60">
              <Image 
                src="https://i.ibb.co/L5GDBkt/tapes.jpg"
                alt="Tape and Labeling"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Tape & Labeling</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Professional-grade packing tape</li>
                <li>• Tape dispensers</li>
                <li>• Color-coded labels for room organization</li>
                <li>• "Fragile" labels</li>
                <li>• Moving labels with space for content details</li>
                <li>• Permanent markers</li>
                <li>• Inventory sheets and clipboards</li>
                <li>• Custom label printing available</li>
              </ul>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="relative h-60">
              <Image 
                src="https://i.ibb.co/N9myXmF/moving-tools.jpg"
                alt="Moving Tools"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Moving Tools & Equipment</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Box cutters and utility knives</li>
                <li>• Stretch wrap dispensers</li>
                <li>• Furniture sliders</li>
                <li>• Moving straps and harnesses</li>
                <li>• Hand trucks and dollies (rental)</li>
                <li>• Tool kits for furniture disassembly</li>
                <li>• Furniture lifting tools</li>
                <li>• Moving gloves and safety equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pre-packaged Kits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-oswald uppercase text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Pre-Packaged Moving Kits
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Save time and money with our carefully curated moving kits designed for different home sizes. Each kit includes everything you need for a successful move.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-godway-green1 text-4xl mb-4 flex justify-center">
                <FaBoxes />
              </div>
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-2">Studio/1BR Kit</h3>
              <p className="text-godway-green1 font-bold text-2xl mb-4">$89.99</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• 15-20 assorted boxes</li>
                <li>• 2 rolls of packing tape</li>
                <li>• 1 tape dispenser</li>
                <li>• 25ft bubble wrap</li>
                <li>• 3lbs packing paper</li>
                <li>• 5 furniture blankets</li>
                <li>• Labels and markers</li>
              </ul>
              <Link href="/contact" className="bg-godway-green1 text-white hover:bg-godway-green2 rounded-full px-6 py-2 font-medium inline-block transition-all duration-300">
                Order This Kit
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-godway-green1 relative text-center">
              <div className="absolute top-0 right-0 bg-godway-green1 text-white py-1 px-4 text-sm font-bold uppercase">
                Most Popular
              </div>
              <div className="text-godway-green1 text-4xl mb-4 flex justify-center">
                <FaBoxes />
              </div>
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-2">2-3BR Kit</h3>
              <p className="text-godway-green1 font-bold text-2xl mb-4">$149.99</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• 30-40 assorted boxes</li>
                <li>• 3 rolls of packing tape</li>
                <li>• 1 tape dispenser</li>
                <li>• 50ft bubble wrap</li>
                <li>• 5lbs packing paper</li>
                <li>• 10 furniture blankets</li>
                <li>• Complete label set and markers</li>
                <li>• 1 wardrobe box</li>
              </ul>
              <Link href="/contact" className="bg-godway-green1 text-white hover:bg-godway-green2 rounded-full px-6 py-2 font-medium inline-block transition-all duration-300">
                Order This Kit
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-godway-green1 text-4xl mb-4 flex justify-center">
                <FaBoxes />
              </div>
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-2">4BR+ Kit</h3>
              <p className="text-godway-green1 font-bold text-2xl mb-4">$239.99</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• 50-60 assorted boxes</li>
                <li>• 5 rolls of packing tape</li>
                <li>• 2 tape dispensers</li>
                <li>• 100ft bubble wrap</li>
                <li>• 10lbs packing paper</li>
                <li>• 15 furniture blankets</li>
                <li>• Complete label set and markers</li>
                <li>• 2 wardrobe boxes</li>
                <li>• 1 dish pack kit</li>
              </ul>
              <Link href="/contact" className="bg-godway-green1 text-white hover:bg-godway-green2 rounded-full px-6 py-2 font-medium inline-block transition-all duration-300">
                Order This Kit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="font-oswald uppercase text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Fast & Reliable Delivery
            </h2>
            <p className="text-gray-600 mb-4">
              We understand that moving timelines can change quickly. That's why we offer flexible delivery options throughout Florida to ensure you get your supplies when you need them.
            </p>
            
            <div className="mb-6">
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Delivery Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <FaShippingFast className="text-godway-green1 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Standard Delivery:</strong> Next-day delivery throughout Florida</span>
                </li>
                <li className="flex items-start">
                  <FaShippingFast className="text-godway-green1 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Express Delivery:</strong> Same-day delivery available in Miami, Orlando, Tampa, and surrounding areas (order by noon)</span>
                </li>
                <li className="flex items-start">
                  <FaShippingFast className="text-godway-green1 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Scheduled Delivery:</strong> Select your preferred delivery date and time window</span>
                </li>
                <li className="flex items-start">
                  <FaShippingFast className="text-godway-green1 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Pick-up Option:</strong> Available at our facilities in major Florida cities</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-oswald uppercase text-xl font-bold text-gray-800 mb-3">Delivery Fees</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <FaTags className="text-godway-green1 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Free delivery:</strong> For orders over $100 within 30 miles of our facilities</span>
                </li>
                <li className="flex items-start">
                  <FaTags className="text-godway-green1 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Standard delivery fee:</strong> $15-30 depending on location and order size</span>
                </li>
                <li className="flex items-start">
                  <FaTags className="text-godway-green1 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Express delivery:</strong> Additional $25 fee for same-day service</span>
                </li>
                <li className="flex items-start">
                  <FaTags className="text-godway-green1 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Free supplies:</strong> When booked with our full-service moving packages</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://i.ibb.co/7JsgkPC/delivery.jpg"
              alt="Moving Supplies Delivery"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-oswald uppercase text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-oswald uppercase text-lg font-bold text-gray-800 mb-2">What moving supplies do you recommend for a standard 2-bedroom apartment?</h3>
              <p className="text-gray-600">
                For a typical 2-bedroom apartment, we recommend our Medium Home Kit, which includes 30-40 boxes in various sizes, 3 rolls of packing tape, 1 tape dispenser, 50 feet of bubble wrap, 5 pounds of packing paper, 10 furniture blankets, and a marker set for labeling.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-oswald uppercase text-lg font-bold text-gray-800 mb-2">How quickly can I get supplies delivered?</h3>
              <p className="text-gray-600">
                We offer next-day delivery as our standard service throughout Florida. In major metropolitan areas (Miami, Orlando, Tampa), we frequently offer same-day delivery for orders placed before noon. Expedited delivery options are available for urgent needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-oswald uppercase text-lg font-bold text-gray-800 mb-2">Do you offer eco-friendly packing materials?</h3>
              <p className="text-gray-600">
                Yes, we're committed to environmental responsibility. We offer biodegradable packing peanuts, recycled cardboard boxes, and paper-based tape options. We also encourage customers to return reusable items like furniture blankets and plastic bins for a deposit refund.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-oswald uppercase text-lg font-bold text-gray-800 mb-2">Can I order custom or specialty boxes for unusual items?</h3>
              <p className="text-gray-600">
                Absolutely! We stock specialty boxes for items like TVs, artwork, mirrors, lamps, and dishes. For truly unique items, we can source or create custom boxes with advance notice. Just let us know your specific needs when ordering.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-oswald uppercase text-lg font-bold text-gray-800 mb-2">Is it cheaper to buy supplies from you or from a retail store?</h3>
              <p className="text-gray-600">
                Our professional-grade supplies are competitively priced compared to retail stores, and often less expensive when you consider the convenience of doorstep delivery. Additionally, our bulk kits offer significant savings over purchasing items individually, and the quality of our materials typically exceeds what's available in retail stores.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-godway-green1 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-oswald uppercase text-2xl md:text-3xl font-bold text-white mb-6">
            Ready To Order Your Moving Supplies?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to place your order or get personalized recommendations for your specific move.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-godway-green1 hover:bg-gray-100 rounded-full px-8 py-3 font-medium text-lg inline-block transition-all duration-300">
              Order Now
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-godway-green1 rounded-full px-8 py-3 font-medium text-lg inline-block transition-all duration-300">
              Explore Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 