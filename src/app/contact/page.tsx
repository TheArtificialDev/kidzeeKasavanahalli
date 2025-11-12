import { Metadata } from 'next';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

export const metadata: Metadata = {
  title: 'Contact Kidzee Kasavanahalli | Best Preschool Near Me - Address, Phone, Directions | Enroll Now',
  description: 'Contact best preschool in Kasavanahalli. Address: Kasavanahalli Main Road, near Sarjapur Road. Phone: +91-8884750750. Schedule visit, enrollment details, directions. Open Mon-Sat.',
  keywords: 'contact kidzee kasavanahalli, preschool near me, kasavanahalli directions, preschool enrollment bangalore, schedule visit preschool, preschool phone number, best preschool kasavanahalli address, daycare contact kasavanahalli, preschool near sarjapur road contact, schools near me contact',
  openGraph: {
    title: 'Contact Kidzee Kasavanahalli | Enroll at Best Preschool Near Me',
    description: 'Get in touch with Kasavanahalli\'s top preschool. Call +91-8884750750 or WhatsApp for enrollment. Visit us today!',
    url: 'https://kidzeekasavanahalli.in/contact',
    siteName: 'Kidzee Kasavanahalli',
    images: ['/images/Kidzee New Logo.png'],
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://kidzeekasavanahalli.in/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimationWrapper animation="fade">
        <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimationWrapper animation="slide-up" delay={1}>
              <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">Visit Us and See Why We&apos;re Kasavanahalli&apos;s Favorite&nbsp;Preschool</h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="slide-up" delay={2}>
              <p className="text-xl text-gray-700 mb-8">Your Child&apos;s Future Starts with a Single&nbsp;Visit</p>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Contact Information */}
      <ScrollAnimationWrapper animation="slide-up">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollAnimationWrapper animation="bounce" delay={1}>
              <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Get in Touch</h2>
            </ScrollAnimationWrapper>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ScrollAnimationWrapper animation="slide-left" delay={1}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-purple-700 mb-3 flex items-center">
                    <span className="mr-2">📍</span> Visit Us
                  </h3>
                  <p className="text-gray-700">House no: 108, 19th Cross Rd, opposite to SJR VERITY, Tulasi Layout, apartment,<br/>Bengaluru, Karnataka 560035</p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="slide-right" delay={1}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-purple-700 mb-3 flex items-center">
                    <span className="mr-2">📞</span> Call Us
                  </h3>
                  <p className="text-gray-700">Phone: <a href="tel:+918884750750" className="underline">+91 8884750750</a><br/>WhatsApp: <a href="https://wa.me/918884750750?text=Hi%20Ma'am" className="underline">+91 8884750750</a></p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="slide-left" delay={2}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-purple-700 mb-3 flex items-center">
                    <span className="mr-2">✉️</span> Email
                  </h3>
                  <p className="text-gray-700">Email: <a href="mailto:contactkidzeekasavanahalli@gmail.com" className="underline">contactkidzeekasavanahalli@gmail.com</a></p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="slide-right" delay={2}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-purple-700 mb-3 flex items-center">
                    <span className="mr-2">🕒</span> Hours
                  </h3>
                  <p className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM (Visiting Hours)<br/>Sat: 10:00 AM - 1:00 PM (Visits Only)<br/>Sun: Closed</p>
                </div>
              </ScrollAnimationWrapper>
            </div>
            <ScrollAnimationWrapper animation="scale" delay={3}>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-purple-700 mb-3 flex items-center">
                  <span className="mr-2">🚐</span> Van Service
                </h3>
                <p className="text-gray-700">Safe transportation across Kasavanahalli</p>
              </div>
            </ScrollAnimationWrapper>
            
            {/* WhatsApp CTA */}
            <ScrollAnimationWrapper animation="bounce" delay={4}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Ready to Give Your Child the Best Start?</h3>
                <p className="text-gray-600 mb-6">Contact us directly on WhatsApp for quick responses and to schedule your visit!</p>
                <ScrollAnimationWrapper animation="scale" delay={1}>
                  <a 
                    href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20contacting%20the%20school" 
                    className="inline-flex items-center bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-colors text-lg"
                  >
                    💬 WhatsApp Us Now
                  </a>
                </ScrollAnimationWrapper>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* FAQ Section */}
      <ScrollAnimationWrapper animation="slide-up">
        <section className="py-16 bg-purple-50">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollAnimationWrapper animation="bounce" delay={1}>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8 text-center">Frequently Asked Questions</h2>
            </ScrollAnimationWrapper>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'When does enrollment open?',
                'What documents are required?',
                'Is there an enrollment test?',
                'What is the fee structure?',
                'What is the teacher-student ratio?',
                'How do you handle different learning paces?',
                'What if my child has special needs?',
                'How do you communicate with parents?',
                'What safety measures do you have?',
                'How do you handle medical emergencies?',
                'What is your sick child policy?',
                'How secure is the premises?'
              ].map((question, i) => (
                <ScrollAnimationWrapper key={i} animation="slide-up" delay={Math.floor(i / 2) + 1}>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-700 font-medium">{question}</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
            <ScrollAnimationWrapper animation="scale" delay={7}>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Have more questions? We&apos;d love to answer them during your visit!</p>
                <a href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20contacting%20the%20school" className="bg-yellow-400 text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
                  💬 WhatsApp Us
                </a>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </div>
  );
}
