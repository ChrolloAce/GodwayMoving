import { Metadata } from 'next';
import { SiteMetadata } from '../data/site-metadata';

// Generate metadata for the About page
const metadata: Metadata = {
  title: SiteMetadata.about.title,
  description: SiteMetadata.about.description,
  keywords: SiteMetadata.about.keywords,
};

export default metadata; 