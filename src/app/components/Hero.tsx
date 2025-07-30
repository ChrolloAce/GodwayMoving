'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BusinessInfo from '../data/business-info';
import WebhookUrls from '../data/webhook-urls';

const Hero = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: '',
    service: 'Local Residential Moving',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Use effect to make video responsive
  useEffect(() => {
    // Add script for Vimeo Player API
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Format the form data for the API
      const apiFormData = {
        ...formData,
        moveDate: '', // Add empty fields required by the API
        moveFrom: `ZIP: ${formData.zipcode}`,
        moveTo: '',
        message: `Quote request from homepage form. Service: ${formData.service}`
      };
      
      // 1. Send the form data to our email API
      const emailResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiFormData),
      });
      
      if (!emailResponse.ok) {
        throw new Error('Failed to submit form to email API');
      }
      
      // 2. Also send to Go High Level webhook
      const ghlResponse = await fetch(WebhookUrls.goHighLevelForms.quoteForm || WebhookUrls.goHighLevel, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contact: {
            firstName: formData.name.split(' ')[0] || '',
            lastName: formData.name.split(' ').slice(1).join(' ') || '',
            email: formData.email,
            phone: formData.phone,
            locationId: "primary", // Optional: If you have multiple locations in GHL
            customField: {
              "service_requested": formData.service,
              "zipcode": formData.zipcode,
              "form_source": "website_hero_form",
              "timestamp": new Date().toISOString()
            }
          },
          opportunity: {
            title: `New Moving Quote Request - ${formData.service}`,
            description: `Quote request from homepage form. Service: ${formData.service}. ZIP: ${formData.zipcode}`,
            pipelineId: "", // Optional: Add your pipeline ID if known
            pipelineStageId: "", // Optional: Add your pipeline stage ID if known
          }
        }),
      });
      
      if (!ghlResponse.ok) {
        console.error('Warning: Failed to submit to Go High Level webhook');
        // Continue with success flow even if GHL fails
      }
      
      // 3. Also send to Make.com webhook
      try {
        const makeResponse = await fetch(WebhookUrls.makeIntegrations, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            form_type: 'hero_quote_form',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            zipcode: formData.zipcode,
            service: formData.service,
            message: `Quote request from homepage form. Service: ${formData.service}`,
            timestamp: new Date().toISOString(),
            source: 'website_hero_form'
          }),
        });
        
        if (!makeResponse.ok) {
          console.error('Warning: Failed to submit to Make.com webhook');
          // Continue with success flow even if Make fails
        }
      } catch (makeError) {
        console.error('Error submitting to Make.com webhook:', makeError);
        // Continue with success flow even if Make fails
      }
      
      // Redirect to thank you page on success
      router.push('/thank-you');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('There was an error submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Service options that match exactly the services listed in the Services component
  const serviceOptions = [
    "24/7/365 Moving Services",
    "Local Residential Moving",
    "Long Distance Moving",
    "Office & Commercial Moves",
    "Small Moves",
    "Last Minute Moves"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-0 pb-16 md:pb-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Video background wrapper - using absolute positioning for fullscreen */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full" style={{padding: 0}}>
            <iframe 
              src="https://player.vimeo.com/video/1074940729?h=d7c4cee439&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '177.77777778vh', /* 16:9 aspect ratio */
                height: '56.25vw', /* 16:9 aspect ratio */
                minWidth: '100%',
                minHeight: '100%',
                transform: 'translate(-50%, -50%)',
                objectFit: 'cover'
              }}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Decorative Elements - hide on mobile for performance */}
      <div className="hidden md:block absolute top-1/3 right-16 w-72 h-72 bg-godway-green1/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/4 left-16 w-96 h-96 bg-godway-khaki/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 left-10 w-32 h-32 border border-godway-khaki/30 rounded-full"></div>
      <div className="hidden md:block absolute top-40 right-20 w-16 h-16 border border-godway-khaki/30 rounded-full"></div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald mb-4 md:mb-6 leading-tight uppercase text-godway-khaki">
              Florida's Premier Moving Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white font-oswald">
              Specializing in last-minute moves and small local relocations throughout Florida. Our expert team delivers precision and careful handling to relocate your belongings safely and efficiently.
            </p>
            <div className="flex flex-wrap gap-4 mb-6 md:mb-8 font-oswald">
              <div className="flex items-center gap-2">
                <span className="text-godway-khaki">★</span>
                <span>5.0 Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-godway-khaki">📍</span>
                <span>{BusinessInfo.areasServed}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link 
                href="#hero-form" 
                className="bg-godway-green1 text-white px-6 md:px-8 py-3 rounded-full font-oswald font-semibold hover:bg-godway-green2 transition-colors text-center uppercase"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-godway-khaki text-godway-khaki px-6 md:px-8 py-3 rounded-full font-oswald font-semibold hover:bg-godway-khaki/10 transition-colors text-center uppercase"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            id="hero-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-godway-green1/30 mt-8 lg:mt-0"
          >
            <h2 className="text-xl sm:text-2xl font-oswald font-bold text-godway-khaki mb-4 md:mb-6 uppercase">Get Your Free Quote</h2>
            
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-white rounded-lg">
                {errorMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-godway-green1/30 text-white placeholder-gray-400 focus:outline-none focus:border-godway-khaki font-oswald text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-godway-green1/30 text-white placeholder-gray-400 focus:outline-none focus:border-godway-khaki font-oswald text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-godway-green1/30 text-white placeholder-gray-400 focus:outline-none focus:border-godway-khaki font-oswald text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Your ZIP Code"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-godway-green1/30 text-white placeholder-gray-400 focus:outline-none focus:border-godway-khaki font-oswald text-base"
                  required
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-godway-green1/30 text-white focus:outline-none focus:border-godway-khaki font-oswald text-base"
                >
                  {serviceOptions.map((service) => (
                    <option key={service} value={service} className="bg-godway-navy text-white">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-godway-green1 text-white py-3 rounded-full font-oswald font-semibold hover:bg-godway-green2 transition-colors text-base uppercase flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Get Free Quote"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 