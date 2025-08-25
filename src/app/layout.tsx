import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kidzeekasavanahalli.in'),
  title: "Kidzee Kasavanahalli - Best Preschool in Bangalore | Top Play School Near Me",
  description:
    "Best preschool in Kasavanahalli, Bangalore with 13+ years of excellence. Top play school with daycare, activity center & Péntemind curriculum. 1400+ children nurtured. Safe environment, trained teachers, affordable fees. Enrollment open!",
  icons: {
    icon: [
      { url: '/images/Kidzee New Logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Kidzee New Logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/Kidzee New Logo.png',
    shortcut: '/images/Kidzee New Logo.png',
  },
  keywords: [
    // Primary keywords
    "preschool near me",
    "best preschool in Bangalore", 
    "preschool in Kasavanahalli",
    "play school in Bangalore",
    "nursery school in Bangalore",
    "kindergarten in Bangalore",
    
    // Kidzee brand keywords
    "Kidzee preschool Kasavanahalli",
    "Kidzee Kasavanahalli reviews",
    "Kidzee enrollment Bangalore",
    "Kidzee play school Bangalore",
    "Kidzee fees Kasavanahalli",
    "Kidzee Bangalore contact",
    "Kidzee curriculum Bangalore",
    "Kidzee activity center Kasavanahalli",
    "Kidzee daycare Kasavanahalli",
    
    // Location-specific keywords
    "daycare in Kasavanahalli",
    "activity center in Kasavanahalli",
    "nursery school Kasavanahalli",
    "best preschool near Kasavanahalli",
    "Kasavanahalli schools",
    "Kasavanahalli kids activities",
    "Kasavanahalli child care center",
    "Kasavanahalli early learning center",
    
    // Educational keywords
    "early childhood education Bangalore",
    "Montessori preschool Bangalore",
    "affordable preschool Bangalore",
    "preschool enrollment Bangalore",
    "preschool enrollment Bangalore",
    "preschool with daycare Bangalore",
    "preschool with extended hours Bangalore",
    "preschool curriculum Bangalore",
    "preschool activities Bangalore",
    "preschool for toddlers Bangalore",
    
    // Activity center keywords
    "activity center for kids Bangalore",
    "children activity center Kasavanahalli",
    "indoor play area Kasavanahalli",
    "kids learning center Bangalore",
    "creative activities for kids Bangalore",
    "art and craft classes Kasavanahalli",
    "music classes for kids Kasavanahalli",
    "dance classes for kids Kasavanahalli",
    
    // Parent-focused keywords
    "preschool for working parents Bangalore",
    "preschool for 2 year olds Bangalore",
    "preschool for 3 year olds Bangalore",
    "preschool for 4 year olds Bangalore",
    "preschool for 5 year olds Bangalore",
    "safe preschool in Kasavanahalli",
    "preschool with CCTV Bangalore",
    "preschool with transport facility Bangalore",
    "preschool with trained teachers Bangalore",
    
    // Geo-targeted keywords
    "preschool near Sarjapur Road",
    "preschool near HSR Layout",
    "preschool near Bellandur",
    "preschool near Electronic City",
    "preschool near Outer Ring Road Bangalore",
    
    // Top preschools and schools
    "top preschools in Bangalore",
    "top rated schools Bangalore",
    "schools in Bangalore",
    "best schools in Bangalore",
    "private schools in Bangalore"
  ].join(", "),
  authors: [{ name: "Kidzee Kasavanahalli" }],
  creator: "Kidzee Kasavanahalli",
  publisher: "Kidzee Kasavanahalli",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Kidzee Kasavanahalli - Best Preschool in Bangalore | Top Play School Near Me",
    description: "Best preschool in Kasavanahalli with 13+ years of excellence. Top play school with daycare, activity center & safe environment. 1400+ children nurtured.",
    type: "website",
    url: "https://kidzeekasavanahalli.in",
    siteName: "Kidzee Kasavanahalli",
    locale: "en_IN",
    images: [
      {
        url: "/images/Kidzee New Logo.png",
        width: 1200,
        height: 630,
        alt: "Kidzee Kasavanahalli - Best Preschool in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidzee Kasavanahalli - Best Preschool in Bangalore",
    description: "Best preschool in Kasavanahalli with 13+ years of excellence. Top play school with daycare & activity center.",
    images: ["/images/Kidzee New Logo.png"],
  },
  alternates: {
    canonical: "https://kidzeekasavanahalli.in",
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Kasavanahalli, Bangalore',
    'geo.position': '12.8697;77.7085',
    'ICBM': '12.8697, 77.7085',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://kidzeekasavanahalli.in/#localbusiness",
        "name": "Kidzee Kasavanahalli",
        "alternateName": ["Kidzee Preschool Kasavanahalli", "Best Preschool Kasavanahalli"],
        "description": "Best preschool in Kasavanahalli, Bangalore with 13+ years of excellence. Top play school with daycare, activity center & Péntemind curriculum.",
        "url": "https://kidzeekasavanahalli.in",
        "telephone": "+91-8884750750",
        "email": "contactkidzeekasavanahalli@gmail.com",
        "priceRange": "Contact for details",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "House no: 108, 19th Cross Rd, opposite to SJR VERITY, Tulasi Layout",
          "addressLocality": "Kasavanahalli",
          "addressRegion": "Karnataka",
          "postalCode": "560035",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.8697",
          "longitude": "77.7085"
        },
        "openingHours": [
          "Mo-Fr 09:00-18:00",
          "Sa 10:00-13:00"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification", 
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "13:00"
          }
        ],
        "image": "https://kidzeekasavanahalli.in/images/Kidzee New Logo.png",
        "sameAs": [
          "https://www.facebook.com/kidzeekasavanahalli",
          "https://www.instagram.com/kidzeekasavanahalli"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Preschool Programs",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Playgroup Program (2-3 Years)",
                "description": "Social skills, basic motor development, play-based learning"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Nursery Program (3-4 Years)",
                "description": "Language development, pre-reading skills, creative expression"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Junior KG Program (4-5 Years)",
                "description": "Pre-academic skills, logical thinking, structured learning"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Senior KG Program (5-6 Years)", 
                "description": "Academic preparation, leadership skills, advanced concepts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Daycare Services",
                "description": "Extended care for working parents with safe environment"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Activity Center",
                "description": "Art, music, dance, karate, and enrichment programs"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Sharma"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Best preschool in Kasavanahalli! My daughter has been attending for 2 years and has grown so much. Teachers are very caring and experienced. Highly recommended!"
          },
          {
            "@type": "Review", 
            "author": {
              "@type": "Person",
              "name": "Rajesh Kumar"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Excellent facilities and curriculum. The Péntemind program really helped prepare our son for primary school. Van service is very reliable and safe."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person", 
              "name": "Anitha Reddy"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "13 years of excellence shows! Amazing teachers, clean facilities, and great communication. My twins love coming to school every day."
          }
        ]
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://kidzeekasavanahalli.in/#educational",
        "name": "Kidzee Kasavanahalli",
        "description": "Premier early childhood education center in Kasavanahalli offering Péntemind curriculum",
        "foundingDate": "2012",
        "numberOfStudents": "1400+",
        "educationalCredentialAwarded": "School Readiness Certificate"
      },
      {
        "@type": "WebSite",
        "@id": "https://kidzeekasavanahalli.in/#website", 
        "url": "https://kidzeekasavanahalli.in",
        "name": "Kidzee Kasavanahalli",
        "description": "Best preschool in Kasavanahalli, Bangalore",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kidzeekasavanahalli.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6B46C1" />
        <link rel="canonical" href="https://kidzeekasavanahalli.in" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
