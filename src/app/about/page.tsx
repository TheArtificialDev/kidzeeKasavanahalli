import { Metadata } from 'next';
import Image from 'next/image';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

export const metadata: Metadata = {
  title: 'About Kidzee Kasavanahalli - 13+ Years of Excellence | Best Preschool in Bangalore',
  description: 'Discover Kidzee Kasavanahalli\'s 13+ year legacy of excellence. Top preschool in Bangalore with experienced teachers, modern facilities, Péntemind curriculum & 1400+ happy families. Learn our story.',
  keywords: 'about Kidzee Kasavanahalli, best preschool Bangalore story, experienced preschool teachers Kasavanahalli, Péntemind curriculum, top play school Bangalore history, established preschool Kasavanahalli, trusted daycare center Bangalore',
  openGraph: {
    title: 'About Kidzee Kasavanahalli - 13+ Years of Excellence | Best Preschool in Bangalore',
    description: 'Discover our 13+ year legacy of excellence. Top preschool in Bangalore with experienced teachers, modern facilities & 1400+ happy families.',
    url: 'https://kidzeekasavanahalli.in/about',
    images: ['/images/enterance.jpeg'],
  },
  alternates: {
    canonical: 'https://kidzeekasavanahalli.in/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimationWrapper animation="fade">
        <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">13 Years of Nurturing Young Minds in Kasavanahalli</h1>
            <p className="text-xl text-gray-700 mb-8">From a Dream to Bangalore&apos;s Most Trusted Preschool</p>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Alternating Images and Text */}
      <ScrollAnimationWrapper animation="slide-up">
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 space-y-12">
            {/* Entrance */}
            <ScrollAnimationWrapper animation="slide-left" delay={1}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/enterance.jpeg"
                    alt="Welcoming entrance of Kidzee Kasavanahalli preschool with safety gate and colorful entrance"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">A Warm Welcome Every Day</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our secure entrance sets the tone for a safe, nurturing environment. With dedicated drop-off zones and friendly staff greeting each child personally, we ensure every morning starts with smiles. The colorful, child-friendly design immediately makes little ones feel excited about their day ahead.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Office */}
            <ScrollAnimationWrapper animation="slide-right" delay={1}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/Office.jpeg"
                    alt="Principal office at Kidzee Kasavanahalli with comfortable seating for parent consultations"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">Always Available for Parents</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our comfortable office space is designed for meaningful conversations between parents and educators. With 13 years of experience, our principal and staff are always ready to discuss your child&apos;s progress, address concerns, and collaborate on your little one&apos;s development journey. Open communication is at the heart of our partnership with families.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* CCTV */}
            <ScrollAnimationWrapper animation="slide-left" delay={1}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/cctv_tv.jpeg"
                    alt="CCTV monitoring system at Kidzee Kasavanahalli ensuring child safety and security"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">Your Peace of Mind, Our Priority</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive CCTV coverage throughout our facility ensures complete transparency and safety. Parents can have absolute confidence knowing every area is monitored, from classrooms to play areas. Our security systems reflect our commitment to creating the safest possible environment for your most precious treasure.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Play Area/Toys */}
            <ScrollAnimationWrapper animation="slide-right" delay={1}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/toys1.jpeg"
                    alt="Colorful play area with educational toys and activities at Kidzee Kasavanahalli"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">Learning Through Joyful Play</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our vibrant play areas are carefully designed with age-appropriate, educational toys that spark creativity and learning. From building blocks that develop motor skills to interactive games that enhance cognitive abilities, every toy serves a purpose in your child&apos;s holistic development. Play isn&apos;t just fun here—it&apos;s the foundation of growth.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Washrooms */}
            <ScrollAnimationWrapper animation="slide-left" delay={1}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/washroom.jpeg"
                    alt="Clean, child-friendly washrooms at Kidzee Kasavanahalli with proper hygiene facilities"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">Hygiene & Independence Combined</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our spotlessly maintained, child-sized washrooms promote independence while ensuring the highest hygiene standards. With easy-to-reach fixtures, proper ventilation, and constant supervision when needed, we help children develop essential life skills in a clean, comfortable environment. Your child&apos;s health and dignity are our top priorities.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Story & Mission */}
      <ScrollAnimationWrapper animation="scale">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ScrollAnimationWrapper animation="flip" delay={1}>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Story</h2>
                  <p className="text-gray-700 leading-relaxed">Founded in 2012, Kidzee Kasavanahalli has grown from 20 children to 1400+ nurtured, setting new standards in early childhood education. Our journey began with a simple vision: to provide every child with the foundation they need to become confident, capable, and caring individuals.</p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="flip" delay={2}>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">Mission & Vision</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-purple-600 mb-1">Mission</h3>
                      <p className="text-gray-700 text-sm">Nurture every child&apos;s unique potential through innovative education and care.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-600 mb-1">Vision</h3>
                      <p className="text-gray-700 text-sm">Be the gold standard for early childhood education in India.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
            
            {/* Team Excellence Section */}
            <ScrollAnimationWrapper animation="bounce">
              <div className="bg-purple-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">What Makes Our Team Special</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <ScrollAnimationWrapper animation="slide-up" delay={1}>
                    <div className="text-center">
                      <div className="text-3xl mb-3">👩‍🏫</div>
                      <h3 className="font-bold text-purple-700 mb-2">10+ Years Experience</h3>
                      <p className="text-gray-600 text-sm">Each teacher brings a decade of expertise</p>
                    </div>
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper animation="slide-up" delay={2}>
                    <div className="text-center">
                      <div className="text-3xl mb-3">📚</div>
                      <h3 className="font-bold text-purple-700 mb-2">Continuous Training</h3>
                      <p className="text-gray-600 text-sm">Bi-annual skill development workshops</p>
                    </div>
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper animation="slide-up" delay={3}>
                    <div className="text-center">
                      <div className="text-3xl mb-3">❤️</div>
                      <h3 className="font-bold text-purple-700 mb-2">Maternal Care</h3>
                      <p className="text-gray-600 text-sm">Every child feels loved and secure</p>
                    </div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Community Impact */}
      <ScrollAnimationWrapper animation="rotate">
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8">Our Community Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimationWrapper animation="bounce" delay={1}>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="text-4xl mb-4">1400+</div>
                  <h3 className="font-bold text-purple-700 mb-2">Children Nurtured</h3>
                  <p className="text-gray-600 text-sm">Successful graduates in top schools</p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="bounce" delay={2}>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="text-4xl mb-4">13</div>
                  <h3 className="font-bold text-purple-700 mb-2">Years of Excellence</h3>
                  <p className="text-gray-600 text-sm">Serving Kasavanahalli community</p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="bounce" delay={3}>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="text-4xl mb-4">100%</div>
                  <h3 className="font-bold text-purple-700 mb-2">Parent Satisfaction</h3>
                  <p className="text-gray-600 text-sm">Referrals drive our growth</p>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* WhatsApp CTA Section */}
      <ScrollAnimationWrapper animation="slide-down">
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
              Want to Know More About Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Learn about our teaching methodology, meet our team, or schedule a facility tour.
            </p>
            <ScrollAnimationWrapper animation="scale" delay={1}>
              <a 
                href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school"
                className="inline-block bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                💬 WhatsApp Us About Our School
              </a>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </div>
  );
}
