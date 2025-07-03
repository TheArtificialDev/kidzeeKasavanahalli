// Default SEO metadata and Open Graph for Kidzee Kasavanahalli
import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: "Kidzee Kasavanahalli - Best Preschool in Bangalore",
  description: "14+ years of excellence in Kasavanahalli. Trusted preschool and daycare in Bangalore. 7000+ children nurtured. Péntemind curriculum.",
  keywords: "preschool kasavanahalli, kindergarten bangalore, daycare kasavanahalli, best preschool bangalore",
  openGraph: {
    title: "Kidzee Kasavanahalli",
    description: "Best preschool and daycare in Kasavanahalli, Bangalore",
    url: "https://kidzeekasavanahalli.in",
    images: ["/images/og-image.jpg"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidzee Kasavanahalli",
    description: "Best preschool and daycare in Kasavanahalli, Bangalore",
  },
  alternates: {
    canonical: "https://kidzeekasavanahalli.in"
  }
};
