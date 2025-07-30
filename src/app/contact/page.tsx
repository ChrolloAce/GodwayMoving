'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaInstagram, FaYelp } from 'react-icons/fa';
import { SiThumbtack } from 'react-icons/si';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
import BusinessInfo from '../data/business-info';
import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import WebhookUrls from '../data/webhook-urls';

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'South Florida Residential Moving',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // 1. Send data to email API
      const emailResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          moveDate: '',
          moveFrom: '',
          moveTo: '',
          source: 'website-contact-form',
          timestamp: new Date().toISOString(),
          formLocation: 'contact-page'
        }),
      });
      
      if (!emailResponse.ok) {
        throw new Error('Failed to submit form to email API');
      }
      
      // 2. Also send to Go High Level webhook
      const ghlResponse = await fetch(WebhookUrls.goHighLevelForms.contactForm || WebhookUrls.goHighLevel, {
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
              "message": formData.message,
              "form_source": "website_contact_page",
              "timestamp": new Date().toISOString()
            }
          },
          opportunity: {
            title: `New Contact Form Submission - ${formData.service}`,
            description: `${formData.message}\n\nService requested: ${formData.service}`,
            pipelineId: "", // Optional: Add your pipeline ID if known
            pipelineStageId: "", // Optional: Add your pipeline stage ID if known
          }
        }),
      });
      
      if (!ghlResponse.ok) {
        console.error('Warning: Failed to submit to Go High Level webhook');
        // Continue with success flow even if GHL fails
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
      
      // Show success message
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'South Florida Residential Moving',
      });
      
      // Redirect after delay
      setTimeout(() => {
        router.push('/thank-you');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your form. Please try again or contact us directly by phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information card items
  const contactCards = [
    {
      icon: <FaPhone className="w-6 h-6 text-godway-green1" />,
      title: 'Call Us',
      details: BusinessInfo.contact.phone.display,
      description: "Ready to schedule your move? Call our team directly.",
      action: `tel:+1${BusinessInfo.contact.phone.link}`,
      actionText: 'Call Now',
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-godway-green1" />,
      title: 'Email Us',
      details: BusinessInfo.contact.email,
      description: "Send us an email with your questions or concerns.",
      action: `mailto:${BusinessInfo.contact.email}`,
      actionText: 'Send Email',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-godway-green1" />,
      title: 'Our Location',
      details: `${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state}`,
      description: `${BusinessInfo.contact.address.street}, ${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state} ${BusinessInfo.contact.address.zip}`,
      action: `https://maps.google.com/?q=${encodeURIComponent(`${BusinessInfo.contact.address.street}, ${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state} ${BusinessInfo.contact.address.zip}`)}`,
      actionText: 'Get Directions',
    },
    {
      icon: <FaClock className="w-6 h-6 text-godway-green1" />,
      title: 'Business Hours',
      details: "We're available when you need us",
      description: `Mon-Sat: 8AM-8PM, Sun: 3PM-7PM`,
      action: '#',
      actionText: 'Contact Us',
    },
  ];

  // Social Media Links
  const socialLinks = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      name: 'Instagram',
      url: BusinessInfo.socialMedia.instagram,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      textColor: 'text-white'
    },
    {
      icon: <FaYelp className="w-6 h-6" />,
      name: 'Yelp',
      url: BusinessInfo.socialMedia.yelp,
      color: 'bg-red-600',
      textColor: 'text-white'
    },
    {
      icon: <SiThumbtack className="w-6 h-6" />,
      name: 'Thumbtack',
      url: BusinessInfo.socialMedia.thumbtack,
      color: 'bg-blue-500',
      textColor: 'text-white'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-godway-green1">
          <div className="container-custom relative z-10">
            <SectionHeader
              title="Contact Us"
              subtitle="We're here to answer your questions and provide you with exceptional moving services throughout Florida."
              light={true}
            />
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <SectionHeader
                title="Get In Touch"
                subtitle="Contact our Florida moving experts for your next move"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-godway-green1/10 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 mx-auto bg-godway-green1/10 rounded-xl flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center text-godway-navy mb-2 font-oswald">{card.title}</h3>
                    <p className="text-center text-godway-green1 font-medium mb-4 font-oswald">{card.details}</p>
                    <p className="text-center text-gray-600 text-sm mb-5 font-oswald">{card.description}</p>
                    <div className="text-center">
                      <a 
                        href={card.action} 
                        className="inline-block bg-godway-green1 text-white py-2 px-6 rounded-full hover:bg-godway-green2 transition-colors duration-300 font-oswald uppercase text-sm"
                      >
                        {card.actionText}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-godway-green1/10"
              >
                <div className="h-3 bg-godway-green1 w-full"></div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-godway-navy mb-6 font-oswald uppercase">Send Us a Message</h2>
                  
                  {formSubmitted ? (
                    <div className="p-6 bg-godway-green1/10 rounded-xl">
                      <div className="flex items-center justify-center mb-4">
                        <FaCheckCircle className="text-godway-green1 w-12 h-12" />
                      </div>
                      <h3 className="text-xl font-bold text-center text-godway-navy mb-2 font-oswald">Thank You!</h3>
                      <p className="text-center text-gray-700 font-oswald">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-oswald">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-godway-green1 focus:border-transparent font-oswald"
                          required
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-oswald">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-godway-green1 focus:border-transparent font-oswald"
                          required
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-oswald">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-godway-green1 focus:border-transparent font-oswald"
                          required
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1 font-oswald">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-godway-green1 focus:border-transparent font-oswald"
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
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-oswald">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-godway-green1 focus:border-transparent font-oswald"
                          required
                          aria-required="true"
                        ></textarea>
                      </div>

                      {submitError && (
                        <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm font-oswald">
                          {submitError}
                        </div>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-4 bg-godway-green1 text-white font-medium rounded-full hover:bg-godway-green2 transition-colors duration-300 shadow-lg font-oswald uppercase"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center font-oswald">
                        Your information is secure and will never be shared with third parties.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Map & Social Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Map Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-godway-green1/10">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.6282294841983!2d-80.31068552447057!3d25.733981108373225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b8a29c5c07e1%3A0x6452ce78cf3ad597!2s2101%20Ludlam%20Rd%2C%20Miami%2C%20FL%2033155%2C%20USA!5e0!3m2!1sen!2sus!4v1718212012736!5m2!1sen!2sus`}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Godway Moving location in ${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state}`}
                      aria-label={`Google Maps showing Godway Moving's location in ${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state}`}
                      className="rounded-t-xl"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-godway-navy mb-2 font-oswald">Our Location</h3>
                    <p className="text-gray-700 mb-4 font-oswald">{BusinessInfo.contact.address.street}, {BusinessInfo.contact.address.city}, {BusinessInfo.contact.address.state} {BusinessInfo.contact.address.zip}</p>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(`${BusinessInfo.contact.address.street}, ${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state} ${BusinessInfo.contact.address.zip}`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-godway-navy text-white py-2 px-6 rounded-full hover:bg-godway-navy/90 transition-colors duration-300 font-oswald uppercase text-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                {/* Social Media Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-godway-green1/10">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-godway-navy mb-4 font-oswald text-center">Connect With Us</h3>
                    <div className="flex flex-col space-y-4">
                      {socialLinks.map((social, index) => (
                        <a 
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} ${social.textColor} py-3 px-6 rounded-full flex items-center justify-center font-oswald uppercase text-sm transition-transform hover:scale-105 shadow-md`}
                        >
                          <span className="mr-2">{social.icon}</span>
                          Follow us on {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hours Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-godway-green1/10">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-godway-navy mb-4 font-oswald">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-oswald text-gray-700">Monday - Saturday:</span>
                        <span className="font-oswald text-godway-navy font-medium">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-oswald text-gray-700">Sunday:</span>
                        <span className="font-oswald text-godway-navy font-medium">3:00 PM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="font-oswald text-gray-700 font-bold">24/7 Service Available</span>
                        <span className="font-oswald text-godway-green1 font-bold">Call Us Anytime!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage; 