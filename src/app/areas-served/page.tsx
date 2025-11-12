import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preschool Near Sarjapur Road, HSR Layout, Bellandur | Kidzee Kasavanahalli - Van Service Available',
  description: 'Best preschool near me serving Sarjapur Road, HSR Layout, Bellandur, Electronic City, Marathahalli, Whitefield, Munnekolala. Kidzee Kasavanahalli with safe transportation, affordable fees. Enroll now!',
  keywords: 'preschool near me, preschool near Sarjapur Road, preschool near HSR Layout, preschool near Bellandur, preschool near Electronic City, preschool near Marathahalli, preschool near Whitefield, schools near Sarjapur Road, preschool nearby kasavanahalli sarjapur, preschool near kasavanahalli sarjapur, pre primary school nearby kasavanahalli sarjapur, best preschool in munnekolala, schools in sarjapur road, preschool with transportation bangalore, van service preschool Bangalore',
  openGraph: {
    title: 'Preschool Near Sarjapur Road, HSR Layout, Bellandur | Safe Transportation Available',
    description: 'Top-rated preschool serving multiple IT corridors with GPS-tracked van service. 13+ years experience, affordable fees.',
    url: 'https://kidzeekasavanahalli.in/areas-served',
    siteName: 'Kidzee Kasavanahalli',
    images: ['/images/Kidzee New Logo.png'],
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://kidzeekasavanahalli.in/areas-served',
  },
};

const areasServed = [
  {
    area: "Sarjapur Road",
    description: "Premium preschool service with daily van pickup and drop for children living along Sarjapur Road. Safe, GPS-tracked transportation.",
    landmarks: ["Prestige Shantiniketan", "Salarpuria Sattva", "Adarsh Palm Retreat"]
  },
  {
    area: "HSR Layout",
    description: "Trusted by families in HSR Layout for over 13 years. Easy commute with dedicated van service and flexible timings.",
    landmarks: ["Sector 1, 2, 3", "BDA Complex", "HSR Club"]
  },
  {
    area: "Bellandur",
    description: "Serving working parents in Bellandur with extended daycare hours and nutritious meals. Modern curriculum and experienced teachers.",
    landmarks: ["Bellandur Lake", "Ecospace", "Embassy TechVillage"]
  },
  {
    area: "Electronic City",
    description: "Convenient preschool solution for tech professionals in Electronic City. Early drop-off and late pickup options available.",
    landmarks: ["Phase 1 & 2", "Infosys Campus", "TCS Campus"]
  },
  {
    area: "Marathahalli",
    description: "Quality early childhood education for Marathahalli residents. Proven track record with 1400+ successful graduates.",
    landmarks: ["Marathahalli Bridge", "Phoenix MarketCity", "AECS Layout"]
  },
  {
    area: "Whitefield",
    description: "Premium preschool and activity center services extending to Whitefield area. Flexible online and offline learning options.",
    landmarks: ["International Tech Park", "Forum Value Mall", "VR Bengaluru"]
  }
];

export default function AreasServedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
            Best Preschool Serving Sarjapur&nbsp;Road, HSR&nbsp;Layout, Bellandur & Surrounding&nbsp;Areas
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            13+&nbsp;Years of Excellence | Safe Van&nbsp;Service | 1400+ Happy&nbsp;Families | Affordable&nbsp;Fees
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Schedule Visit
            </Link>
            <a
              href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20for%20preschool%20near%20my%20area"
              className="bg-purple-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-800 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center">
            Areas We Serve with Safe Van Service
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areasServed.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-700 mb-4">{area.area}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600">Popular Landmarks:</h4>
                  <ul className="text-sm text-gray-600">
                    {area.landmarks.map((landmark, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Area Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center">
            Why Parents Across Bangalore Choose Kidzee Kasavanahalli
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">🚐 Safe Van Service</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• GPS-tracked vehicles with live location sharing</li>
                <li>• Trained drivers with clean driving records</li>
                <li>• Female attendants for child safety and comfort</li>
                <li>• Door-to-door pickup and drop service</li>
                <li>• Covering 15+ km radius from Kasavanahalli</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">⏰ Flexible Timings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Early drop-off from 8:30 AM for working parents</li>
                <li>• Extended daycare till 6:00 PM</li>
                <li>• Saturday programs for working families</li>
                <li>• Holiday camps during school breaks</li>
                <li>• Makeup classes for missed sessions</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">💰 Affordable Excellence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive fees compared to other premium preschools</li>
                <li>• Transparent pricing with no hidden charges</li>
                <li>• Sibling discounts and early bird offers</li>
                <li>• Quarterly and annual payment options</li>
                <li>• Best value for quality education in Bangalore</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">🏆 Proven Track Record</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 13+ years of successful operation</li>
                <li>• 1400+ children successfully graduated</li>
                <li>• 95% parent satisfaction rate</li>
                <li>• Children excelling in top primary schools</li>
                <li>• Awards and recognition in early childhood education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
            Ready to Visit the Best Preschool Near You?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a visit to see our world-class facilities and meet our experienced teachers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918884750750"
              className="bg-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-purple-800 transition-all text-lg"
            >
              📞 Call Now: +91-8884750750
            </a>
            <a
              href="https://wa.me/918884750750?text=Hey%20Ma'am,%20I'm%20interested%20in%20preschool%20enrollment%20for%20my%20area"
              className="bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 transition-all text-lg"
            >
              💬 WhatsApp for Area Info
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
