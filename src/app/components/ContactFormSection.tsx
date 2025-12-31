'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import BusinessInfo from '../data/business-info';
import WebhookUrls from '../data/webhook-urls';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Local Residential Moving',
    message: '',
    moveDate: '',
    moveFrom: '',
    moveTo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send the form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }
      
      // Form submitted successfully
      setIsSuccess(true);
      
      // Also send to Make.com webhook
      try {
        const makeResponse = await fetch(WebhookUrls.makeIntegrations, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            form_type: 'contact_form',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            moveDate: formData.moveDate,
            moveFrom: formData.moveFrom,
            moveTo: formData.moveTo,
            timestamp: new Date().toISOString(),
            source: 'website_contact_form'
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
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Local Residential Moving',
        message: '',
        moveDate: '',
        moveFrom: '',
        moveTo: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('There was an error submitting your request. Please try again later.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-cream" id="contact-form">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-oswald text-godway-green1 uppercase font-bold mb-4">
            Request a Free Quote
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Fill out the form below, and we'll get back to you with a detailed quote for your moving needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-3xl shadow-lg">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-oswald text-godway-navy mb-2 uppercase font-bold">
                  Thank You!
                </h3>
                <p className="text-gray-700 mb-4">
                  Your request has been received. We'll contact you shortly with your free moving quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-godway-green1 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-godway-green1 focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-godway-green1 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-godway-green1 focus:border-transparent"
                    >
                      <option value="Local Residential Moving">Local Residential Moving</option>
                      <option value="Long Distance Moving">Long Distance Moving</option>
                      <option value="Commercial Moving">Commercial Moving</option>
                      <option value="Packing Services">Packing Services</option>
                      <option value="Storage Solutions">Storage Solutions</option>
                      <option value="Specialty Item Moving">Specialty Item Moving</option>
                      <option value="Last Minute Moving">Last Minute Moving</option>
                      <option value="Senior Moving">Senior Moving</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="moveFrom" className="block text-sm font-medium text-gray-700 mb-1">Moving From</label>
                    <input
                      type="text"
                      id="moveFrom"
                      name="moveFrom"
                      value={formData.moveFrom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-godway-green1 focus:border-transparent"
                      placeholder="Current address"
                    />
                  </div>
                  <div>
                    <label htmlFor="moveTo" className="block text-sm font-medium text-gray-700 mb-1">Moving To</label>
                    <input
                      type="text"
                      id="moveTo"
                      name="moveTo"
                      value={formData.moveTo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-godway-green1 focus:border-transparent"
                      placeholder="Destination address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Moving Date</label>
                  <input
                    type="date"
                    id="moveDate"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-godway-green1 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-godway-green1 focus:border-transparent"
                    placeholder="Tell us more about your moving needs"
                  ></textarea>
                </div>

                {/* Error message */}
                {errorMessage && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex flex-col">
                    <p>{errorMessage}</p>
                    <button 
                      type="button"
                      onClick={() => {
                        setErrorMessage('');
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Local Residential Moving',
                          message: '',
                          moveDate: '',
                          moveFrom: '',
                          moveTo: ''
                        });
                        setIsSuccess(true);
                        setTimeout(() => setIsSuccess(false), 3000);
                      }}
                      className="text-sm bg-white text-red-600 border border-red-300 px-3 py-1 rounded-lg hover:bg-red-50 transition-colors mt-1"
                    >
                      Reset Form
                    </button>
                  </div>
                )}

                {/* Success message for form reset */}
                {isSuccess && !errorMessage && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                    <p>Form has been reset successfully. You can start over.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-godway-green1 text-white font-oswald uppercase font-bold rounded-full hover:bg-godway-green2 transition-colors duration-300 flex items-center justify-center"
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
                    "Get Your Free Quote"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3 bg-godway-navy text-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-oswald mb-6 uppercase font-bold">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-godway-green1 p-3 rounded-full mr-4">
                  <FaPhone className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="font-oswald text-lg uppercase mb-1">Phone</p>
                  <a href={`tel:${BusinessInfo.contact.phone.link}`} className="text-gray-300 hover:text-white transition-colors">
                    {BusinessInfo.contact.phone.display}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Available 24/7 for your moving needs</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-godway-green1 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="font-oswald text-lg uppercase mb-1">Email</p>
                  <a href={`mailto:${BusinessInfo.contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {BusinessInfo.contact.email}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">We'll respond promptly to your inquiries</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-godway-green1 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="font-oswald text-lg uppercase mb-1">Address</p>
                  <address className="text-gray-300 not-italic">
                    {BusinessInfo.contact.address.street}<br />
                    {BusinessInfo.contact.address.city}, {BusinessInfo.contact.address.state} {BusinessInfo.contact.address.zip}
                  </address>
                  <p className="text-sm text-gray-400 mt-1">Serving all of Florida</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-oswald text-lg uppercase mb-3 font-bold">Service Areas</h4>
              <p className="text-gray-300">
                Miami • Orlando • Tampa • Jacksonville • Fort Lauderdale • West Palm Beach • Naples • Fort Myers • Gainesville • Tallahassee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection; 