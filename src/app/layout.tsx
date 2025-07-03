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
  title: "Kidzee Kasavanahalli - Best Preschool in Bangalore",
  description:
    "13+  years of excellence in Kasavanahalli. Trusted preschool and daycare in Bangalore. 1400+ children nurtured. Péntemind curriculum.",
  keywords: "preschool kasavanahalli, kindergarten bangalore, daycare kasavanahalli, best preschool bangalore",
  openGraph: {
    title: "Kidzee Kasavanahalli - Best Preschool in Bangalore",
    description: "13+  years of excellence in Kasavanahalli. Trusted preschool and daycare in Bangalore.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
