import { Metadata } from 'next';
import { SiteMetadata } from '../data/site-metadata';

// Generate metadata for the Contact page
const metadata: Metadata = {
  title: SiteMetadata.contact.title,
  description: SiteMetadata.contact.description,
  keywords: SiteMetadata.contact.keywords,
};

export default metadata; 