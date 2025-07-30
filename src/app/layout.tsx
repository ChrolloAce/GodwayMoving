import './globals.css';
import { Montserrat, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import { Anton } from 'next/font/google';
import { Oswald } from 'next/font/google';
import ChatWidget from './components/ChatWidget';
import { COMPANY_NAME, DOMAIN, SiteMetadata } from './data/site-metadata';
import React from 'react';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-anton',
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: {
    default: SiteMetadata.home.title,
    template: `%s | ${COMPANY_NAME} | ${DOMAIN}`
  },
  description: SiteMetadata.home.description,
  keywords: SiteMetadata.home.keywords,
  authors: [{ name: COMPANY_NAME, url: `https://${DOMAIN}` }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  icons: {
    icon: [
      { url: 'https://i.ibb.co/VfFtvdM/love-2.png', sizes: 'any' },
    ],
    shortcut: 'https://i.ibb.co/VfFtvdM/love-2.png',
    apple: [
      { url: 'https://i.ibb.co/VfFtvdM/love-2.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://${DOMAIN}`,
    title: SiteMetadata.home.title,
    description: SiteMetadata.home.description,
    siteName: COMPANY_NAME,
    images: [
      {
        url: 'https://i.ibb.co/VfFtvdM/love-2.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Professional moving services in Florida`
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteMetadata.home.title,
    description: SiteMetadata.home.description,
    images: ['https://i.ibb.co/VfFtvdM/love-2.png'],
    creator: `@${COMPANY_NAME.replace(/\s+/g, '').toLowerCase()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `https://${DOMAIN}`,
  },
  verification: {
    google: 'verification_token', // Replace with your verification token when available
  },
  applicationName: COMPANY_NAME,
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  category: 'Moving Services',
  classification: 'Florida Moving Company',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Convert the structured data to a JSON string
  const structuredDataJSON = JSON.stringify(SiteMetadata.structured_data.local_business);

  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} ${playfair.variable} ${anton.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href="https://i.ibb.co/VfFtvdM/love-2.png" sizes="any" />
        <link rel="apple-touch-icon" href="https://i.ibb.co/VfFtvdM/love-2.png" sizes="180x180" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#4B5320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href={`https://${DOMAIN}`} />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Florida" />
        <meta name="geo.position" content="25.7617;-80.1918" />
        <meta name="ICBM" content="25.7617, -80.1918" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJSON }}
        />
      </head>
      <body className="min-h-screen bg-white text-dark font-sans antialiased overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
} 