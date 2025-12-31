'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaYelp, FaThumbsUp } from 'react-icons/fa';
import BusinessInfo from '../data/business-info';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
    services: [
      { name: 'Residential Moving', href: '/services/residential-moving' },
      { name: 'Commercial Moving', href: '/services/commercial-moving' },
      { name: 'Junk Removal', href: '/services/junk-removal' },
    ],
    contact: [
      { icon: <FaPhone />, text: BusinessInfo.contact.phone.display, href: `tel:${BusinessInfo.contact.phone.link}` },
      { icon: <FaEnvelope />, text: BusinessInfo.contact.email, href: `mailto:${BusinessInfo.contact.email}` },
      { icon: <FaMapMarkerAlt />, text: `${BusinessInfo.contact.address.city}, ${BusinessInfo.contact.address.state}`, href: `https://maps.google.com/?q=${BusinessInfo.contact.address.city},${BusinessInfo.contact.address.state}` },
      { icon: <FaClock />, text: BusinessInfo.hours.display, href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <FaInstagram size={20} />, href: BusinessInfo.socialMedia.instagram },
    { icon: <FaYelp size={20} />, href: BusinessInfo.socialMedia.yelp },
    { icon: <FaThumbsUp size={20} />, href: BusinessInfo.socialMedia.thumbtack },
  ];

  return (
    <footer className="bg-military-olive text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3">
                <Image 
                  src="https://i.ibb.co/VfFtvdM/love-2.png" 
                  alt="Godway Moving Logo" 
                  fill
                  style={{objectFit: 'contain'}}
                  sizes="48px"
                  className="drop-shadow-sm"
                  unoptimized={true}
                />
              </div>
              <h2 className="text-2xl font-bold text-white font-oswald uppercase">{BusinessInfo.company.name}</h2>
            </Link>
            <p className="text-gray-100 mb-6">{BusinessInfo.company.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-white">★</span>
                <span>5+ ⭐️ (200+ reviews)</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-100 hover:text-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-100 hover:text-cream transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="text-white">{item.icon}</span>
                  <Link href={item.href} className="text-gray-100 hover:text-cream transition-colors">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-white">Areas Served</h4>
              <p className="text-gray-100">{BusinessInfo.areasServed}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-100 text-sm">
              © {currentYear} {BusinessInfo.company.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-cream transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 