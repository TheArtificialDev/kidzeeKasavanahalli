// Default SEO metadata and Open Graph for Kidzee Kasavanahalli
import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: "Kidzee Kasavanahalli - Best Preschool in Bangalore",
  description: "13+  years of excellence in early childhood education. Trusted by 1400+ families in Kasavanahalli, Bangalore. Explore our programs and enroll today!",
  keywords: "preschool kasavanahalli, kindergarten bangalore, daycare kasavanahalli, best preschool bangalore",
  openGraph: {
    title: "Kidzee Kasavanahalli - Best Preschool in Bangalore",
    description: "13+  years of excellence in early childhood education. Trusted by 1400+ families in Kasavanahalli, Bangalore. Explore our programs and enroll today!",
    url: "https://kidzeekasavanahalli.in",
    images: ["/images/og-image.jpg"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidzee Kasavanahalli - Best Preschool in Bangalore",
    description: "13+  years of excellence in early childhood education. Trusted by 1400+ families in Kasavanahalli, Bangalore. Explore our programs and enroll today!",
  },
  alternates: {
    canonical: "https://kidzeekasavanahalli.in",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kidzee Kasavanahalli",
  "description": "Best preschool and daycare in Kasavanahalli, Bangalore",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "House no: 108, 19th Cross Rd, opposite to SJR VERITY, Tulasi Layout, apartment",
    "addressLocality": "Kasavanahalli",
    "addressRegion": "Karnataka",
    "postalCode": "560035",
    "addressCountry": "IN"
  },
  "telephone": "+91 8884750750",
  "url": "https://kidzeekasavanahalli.in",
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-13:00",
  "priceRange": "Contact for details"
};
