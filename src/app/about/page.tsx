import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Kidzee Kasavanahalli',
  description: 'Learn about our story, mission, team, facilities, and community involvement. 13+  years of nurturing young minds in Kasavanahalli.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">14 Years of Nurturing Young Minds in Kasavanahalli</h1>
          <p className="text-xl text-gray-700 mb-8">From a Dream to Bangalore&apos;s Most Trusted Preschool</p>
        </div>
      </section>

      {/* Alternating Images and Text */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {["/images/enterance.jpeg", "/images/Office.jpeg", "/images/cctv_tv.jpeg", "/images/toys1.jpeg", "/images/washroom.jpeg"].map((src, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={src}
                  alt={`Placeholder image ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Placeholder Title {index + 1}</h3>
                <p className="text-gray-700 leading-relaxed">
                  Placeholder description for image {index + 1}. Replace this text with the actual description of the image.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">Founded in 2010, Kidzee Kasavanahalli has grown from 20 children to 1400+ nurtured, setting new standards in early childhood education. Our journey began with a simple vision: to provide every child with the foundation they need to become confident, capable, and caring individuals.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Mission & Vision</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-purple-600 mb-1">Mission</h3>
                  <p className="text-gray-700 text-sm">Nurture every child&apos;s unique potential through innovative education and care.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-1">Vision</h3>
                  <p className="text-gray-700 text-sm">Be the cornerstone of early childhood education in Bangalore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">1400+</div>
              <p className="text-gray-600 text-sm">Children Nurtured</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">98%</div>
              <p className="text-gray-600 text-sm">Parent Satisfaction</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
              <p className="text-gray-600 text-sm">School Readiness</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
              <p className="text-gray-600 text-sm">Teachers Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Awards */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">🏫 Facilities & Safety</h2>
              <ul className="space-y-2">
                {[
                  'Secure, age-appropriate classrooms',
                  'Large outdoor playground',
                  'CCTV monitoring system',
                  'First aid facilities',
                  'Hygiene protocols'
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">🏆 Awards & Recognition</h2>
              <ul className="space-y-2">
                {[
                  'Best Preschool in South Bangalore (2022)',
                  'Innovation in Early Childhood Education (2021)',
                  'Community Choice Award (2020-2023)',
                  'Safety Standards Certification (Annual)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-yellow-500 mr-2">🏆</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
