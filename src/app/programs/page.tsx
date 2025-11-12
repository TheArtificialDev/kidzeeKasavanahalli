import { Metadata } from 'next';
import ProgramCard from '@/components/ProgramCard';
import AnimatedText from '@/components/AnimatedText';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import FAQSection, { programsFAQs } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Preschool Programs Kasavanahalli | Playgroup, Nursery, Junior KG, Senior KG - Best Curriculum Bangalore',
  description: 'Best preschool programs in Kasavanahalli, Bangalore. Playgroup (2-3yrs), Nursery (3-4yrs), Junior KG (4-5yrs), Senior KG (5-6yrs) with Péntemind curriculum. Affordable fees, experienced teachers. Enroll now!',
  keywords: 'preschool programs Kasavanahalli, playgroup near me, nursery school Bangalore, junior kg program, senior kg program, kindergarten Kasavanahalli, Péntemind curriculum, best preschool curriculum Bangalore, preschool near Sarjapur Road, affordable preschool programs, Kidzee programs, early childhood education Bangalore',
  openGraph: {
    title: 'Preschool Programs Kasavanahalli | Playgroup to Senior KG - Kidzee Bangalore',
    description: 'Comprehensive preschool programs with scientifically designed Péntemind curriculum. Playgroup to Senior KG for ages 2-6 years.',
    url: 'https://kidzeekasavanahalli.in/programs',
    siteName: 'Kidzee Kasavanahalli',
    images: ['/images/Kidzee New Logo.png'],
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://kidzeekasavanahalli.in/programs',
  },
};

const programData = [
  {
    title: "Playgroup",
    ageRange: "2-3 Years",
    duration: "3 hours",
    focus: "Social skills, basic motor development, play-based learning",
    keyBenefits: [
      "Separation anxiety management",
      "Toilet training",
      "First social interactions",
    ],
    icon: "🎈",
  },
  {
    title: "Nursery",
    ageRange: "3-4 Years",
    duration: "3 hours",
    focus: "Language development, pre-reading skills, creative expression",
    keyBenefits: [
      "Vocabulary building",
      "Fine motor skills",
      "Independence",
    ],
    icon: "🌱",
  },
  {
    title: "Junior KG",
    ageRange: "4-5 Years",
    duration: "4 hours",
    focus: "Pre-academic skills, logical thinking, structured learning",
    keyBenefits: [
      "School readiness",
      "Early literacy",
      "Mathematical concepts",
    ],
    icon: "📚",
  },
  {
    title: "Senior KG",
    ageRange: "5-6 Years",
    duration: "4 hours",
    focus: "Academic preparation, leadership skills, advanced concepts",
    keyBenefits: [
      "Board exam readiness",
      "Confident communication",
      "Problem-solving",
    ],
    icon: "🎓",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
            <AnimatedText 
              text="Scientifically Designed Programs for Holistic&nbsp;Development"
              startDelay={300}
              letterDelay={0.15}
              animateByWords={true}
              className="inline-block"
            />
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            <AnimatedText 
              text="From First Steps to School Readiness - We Guide Every&nbsp;Journey"
              startDelay={2000}
              letterDelay={0.03}
            />
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <ScrollAnimationWrapper animation="slide-up">
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {programData.map((p, i) => (
                <ScrollAnimationWrapper key={i} animation="bounce" delay={i + 1}>
                  <ProgramCard {...p} />
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Péntemind Philosophy */}
      <ScrollAnimationWrapper animation="flip">
        <section className="py-16 bg-purple-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">The Péntemind Philosophy</h2>
            <p className="text-xl text-gray-700 mb-8 text-center">Learn-Unlearn-Relearn: Developing Future-Ready Minds</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Artsy", desc: "Art appreciation, cultural understanding, creative problem-solving" },
                { name: "Mental Might", desc: "Empathy, diversity, global interconnectedness" },
                { name: "Showstopper", desc: "Planning, teamwork, confident expression" },
                { name: "Tell-a-Tale", desc: "Moral reasoning, creative storytelling" },
                { name: "Whirl & Twirl", desc: "Dance mastery: body, action, time, space, energy" },
                { name: "Personality Development", desc: "Self-confidence, positive self-image" },
                { name: "Critical Thinking", desc: "Logical reasoning, evidence-based conclusions" },
                { name: "Eco-Conscious", desc: "Environmental stewardship, sustainable lifestyle" },
              ].map((item, i) => (
                <ScrollAnimationWrapper key={i} animation="slide-left" delay={Math.floor(i / 2) + 1}>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="font-bold text-purple-700 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Teacher Excellence */}
      <ScrollAnimationWrapper animation="scale">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">Teacher Excellence Program</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollAnimationWrapper animation="slide-up" delay={1}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-purple-700 mb-2">👩‍🎓 Experience</h3>
                  <p className="text-gray-600 text-sm">Minimum 10 years teaching experience</p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="slide-up" delay={2}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-purple-700 mb-2">📚 Training</h3>
                  <p className="text-gray-600 text-sm">Bi-annual professional development</p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="slide-up" delay={3}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-purple-700 mb-2">🏥 Certification</h3>
                  <p className="text-gray-600 text-sm">First aid and safety certified</p>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* WhatsApp CTA Section */}
      <ScrollAnimationWrapper animation="rotate">
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Learn more about our programs, enrollment process, and schedule a visit to see our classrooms.
            </p>
            <ScrollAnimationWrapper animation="bounce" delay={1}>
              <a
                href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school%20programs"
                className="inline-block bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                💬 WhatsApp Us About Programs
              </a>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* FAQ Section */}
      <FAQSection faqs={programsFAQs} />
    </div>
  );
}
