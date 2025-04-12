'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
import BusinessInfo from '../data/business-info';

const ContactPage = () => {
  const router = useRouter();
  const [iframeHeight, setIframeHeight] = useState(600);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'South Florida Residential Moving',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.frameHeight) {
        setIframeHeight(event.data.frameHeight + 50);
      }
    };

    // Set service from URL query parameter if available
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceParam = urlParams.get('service');
      if (serviceParam) {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Send data to webhook
      const response = await fetch('https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'website-contact-form',
          timestamp: new Date().toISOString(),
          formLocation: 'contact-page'
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      // Also store in localStorage for backup
      if (typeof window !== 'undefined') {
        const previousSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        localStorage.setItem('formSubmissions', JSON.stringify([
          ...previousSubmissions,
          {
            ...formData,
            timestamp: new Date().toISOString(),
            formLocation: 'contact-page'
          }
        ]));
      }
      
      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your form. Please try again or contact us directly by phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaPhone className="text-military-khaki" />,
      title: 'Phone',
      details: BusinessInfo.contact.phone.display,
      action: `tel:+1${BusinessInfo.contact.phone.link}`,
      actionText: 'Call Now',
    },
    {
      icon: <FaEnvelope className="text-military-khaki" />,
      title: 'Email',
      details: BusinessInfo.contact.email,
      action: `mailto:${BusinessInfo.contact.email}`,
      actionText: 'Send Email',
    },
    {
      icon: <FaMapMarkerAlt className="text-military-khaki" />,
      title: 'Address',
      details: `${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state}`,
      action: `https://maps.google.com/?q=${BusinessInfo.contact.address.city},${BusinessInfo.contact.address.state}`,
      actionText: 'Get Directions',
    },
    {
      icon: <FaClock className="text-military-khaki" />,
      title: 'Business Hours',
      details: BusinessInfo.hours.display,
      action: '#booking',
      actionText: 'Book Now',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 bg-military-olive">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://i.ibb.co/mCVrXF9S/IMG-6835.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                We're here to answer your questions and provide you with exceptional moving services throughout Florida.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="h-1 w-20 bg-military-gradient mx-auto mb-6 rounded-full"></div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Contact Us Today
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Get in touch with our Florida moving experts for a free consultation and personalized quote
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-md shadow-military p-8 border-2 border-military-olive/20"
              >
                <h2 className="text-2xl font-bold text-dark mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-military-olive/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-military-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark mb-1">Address</h3>
                      <p className="text-gray-700">
                        {BusinessInfo.contact.address.city}, {BusinessInfo.contact.address.state}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-military-olive/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-military-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark mb-1">Phone</h3>
                      <p className="text-gray-700">
                        <a href={`tel:+1${BusinessInfo.contact.phone.link}`} className="hover:text-military-olive transition-colors">
                          {BusinessInfo.contact.phone.display}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-military-olive/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-military-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href={`mailto:${BusinessInfo.contact.email}`} className="hover:text-military-olive transition-colors">
                          {BusinessInfo.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-military-olive/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-military-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday: {BusinessInfo.hours.monday}<br />
                        Tuesday - Friday: {BusinessInfo.hours.tuesday}<br />
                        Saturday: {BusinessInfo.hours.saturday}<br />
                        Sunday: {BusinessInfo.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-md shadow-military p-8 border-2 border-military-olive/20"
              >
                <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-olive focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-olive focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-olive focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-olive focus:border-transparent"
                      required
                      aria-required="true"
                    >
                      <option value="">Select a Service</option>
                      {BusinessInfo.services.primary.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                      <option value="Free Consultation">Free Consultation</option>
                      <option value="Job Application">Job Application</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-military-olive focus:border-transparent"
                      required
                      aria-required="true"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
                      {submitError}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-military-olive text-white font-medium rounded-md hover:bg-military-camo transition-colors duration-300 shadow-military"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-8">Visit Us in {BusinessInfo.contact.address.city}, {BusinessInfo.contact.address.state}</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-military border-2 border-military-olive/20">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266949!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1649126436889!5m2!1sen!2sus`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Godway Moving location in ${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state}`}
                aria-label={`Google Maps showing Godway Moving's location in ${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state}`}
              ></iframe>
            </div>
          </div>
        </section>

        <section id="booking" className="py-20 bg-cream">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="h-1 w-20 bg-military-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Schedule Your Move
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Use our convenient online booking system to schedule your move with military precision
              </p>
            </motion.div>

            <div className="bg-white shadow-military rounded-md overflow-hidden border-2 border-military-olive/20 relative" style={{ height: `${iframeHeight}px` }}>
              <Script src={BusinessInfo.externalResources.bookingScript} />
              <iframe 
                src={BusinessInfo.externalResources.bookingWidget}
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Booking Calendar"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage; 