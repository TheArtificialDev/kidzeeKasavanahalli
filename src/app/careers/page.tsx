import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pre Primary Teacher Vacancy Near Me | Kidzee Kasavanahalli Careers - Teaching Jobs Bangalore',
  description: 'Pre primary teacher vacancy at Kidzee Kasavanahalli, Bangalore. Join our team of experienced educators. Fresher & experienced teachers welcome. Apply for preschool teaching jobs near Sarjapur Road, HSR Layout, Bellandur.',
  keywords: 'pre primary teacher vacancy near me, pre primary teacher vacancy near me for freshers, preschool teacher jobs Bangalore, nursery teacher vacancy Kasavanahalli, Kidzee teacher recruitment, teaching jobs near Sarjapur Road, preschool jobs near me, early childhood educator jobs Bangalore, kindergarten teacher vacancy Kasavanahalli',
  openGraph: {
    title: 'Pre Primary Teacher Vacancy | Kidzee Kasavanahalli Careers',
    description: 'Join Kidzee Kasavanahalli as a pre-primary teacher. Great work environment, competitive salary, training provided. Apply now!',
    url: 'https://kidzeekasavanahalli.in/careers',
    images: ['/images/Kidzee New Logo.png'],
  },
  alternates: {
    canonical: 'https://kidzeekasavanahalli.in/careers',
  },
};

const jobOpenings = [
  {
    title: "Pre-Primary Teacher (Fresher)",
    type: "Full-time",
    experience: "0-1 years",
    qualifications: [
      "B.Ed / D.Ed / Montessori Teacher Training",
      "Graduate in any stream with passion for teaching",
      "Good communication skills in English",
      "Love for children and patience"
    ],
    responsibilities: [
      "Conduct age-appropriate activities for 2-6 year olds",
      "Follow Péntemind curriculum guidelines",
      "Maintain classroom hygiene and safety",
      "Communicate with parents regularly"
    ]
  },
  {
    title: "Experienced Pre-Primary Teacher",
    type: "Full-time",
    experience: "2+ years",
    qualifications: [
      "B.Ed / D.Ed / Montessori certification required",
      "Minimum 2 years preschool teaching experience",
      "Excellent classroom management skills",
      "Strong parent communication abilities"
    ],
    responsibilities: [
      "Lead classroom activities and curriculum delivery",
      "Mentor junior teachers",
      "Plan and execute annual events",
      "Handle parent-teacher meetings"
    ]
  },
  {
    title: "Activity Instructor (Part-time)",
    type: "Part-time",
    experience: "0-2 years",
    qualifications: [
      "Expertise in arts, music, dance, or sports",
      "Experience working with young children preferred",
      "Creative and energetic personality",
      "Flexible with timings"
    ],
    responsibilities: [
      "Conduct weekly activity sessions",
      "Develop age-appropriate activity plans",
      "Engage children in creative learning",
      "Support main curriculum with activities"
    ]
  }
];

const benefits = [
  "Competitive salary package",
  "Professional training and development",
  "Friendly work environment",
  "Career growth opportunities",
  "Paid leaves and holidays",
  "Health insurance (for full-time staff)",
  "Performance bonuses",
  "Transportation allowance"
];

export default function CareersPage() {
  // Schema markup for JobPosting
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Pre Primary Teacher",
    "description": "Preschool teacher position for children aged 2-6 years. Freshers and experienced teachers welcome.",
    "datePosted": "2025-01-01",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "EducationalOrganization",
      "name": "Kidzee Kasavanahalli",
      "sameAs": "https://kidzeekasavanahalli.in",
      "logo": "https://kidzeekasavanahalli.in/images/Kidzee New Logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kasavanahalli",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560035",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 15000,
        "maxValue": 35000,
        "unitText": "MONTH"
      }
    },
    "qualifications": "B.Ed, D.Ed, or Montessori Teacher Training. Passion for early childhood education.",
    "responsibilities": "Teach preschool children aged 2-6 years following Péntemind curriculum. Maintain classroom safety and hygiene. Communicate with parents regularly.",
    "skills": "Early childhood education, classroom management, parent communication, activity planning"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              Pre Primary Teacher Vacancy Near Me
            </h1>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Join Kidzee Kasavanahalli - Bangalore&apos;s Trusted Preschool with 13+ Years of Excellence
            </p>
            <p className="text-lg text-purple-600 mb-8">
              Looking for preschool teacher jobs near Sarjapur Road, HSR Layout, Kasavanahalli, or Bellandur? Apply now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="bg-yellow-400 text-purple-700 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="#openings"
                className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg border-2 border-purple-700 hover:bg-purple-50 transition-colors"
              >
                View Openings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center">
            Why Join Kidzee Kasavanahalli?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">13+ Years of Excellence</h3>
              <p className="text-gray-700">
                Be part of Kasavanahalli&apos;s most trusted preschool with proven track record of 1400+ successful students
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Professional Growth</h3>
              <p className="text-gray-700">
                Regular training sessions, workshops, and opportunities to advance your teaching career
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Competitive Package</h3>
              <p className="text-gray-700">
                Market-leading salary, performance bonuses, and comprehensive benefits for full-time staff
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Supportive Environment</h3>
              <p className="text-gray-700">
                Work with experienced educators in a friendly, collaborative atmosphere
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Convenient Location</h3>
              <p className="text-gray-700">
                Easily accessible from Sarjapur Road, HSR Layout, Bellandur, and surrounding areas
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Work-Life Balance</h3>
              <p className="text-gray-700">
                Reasonable working hours, paid leaves, and all public holidays observed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center">
            Current Teacher Vacancy Openings
          </h2>
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <span className="mr-2">📋</span> {job.type}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-2">💼</span> {job.experience}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-2">📍</span> Kasavanahalli, Bangalore
                      </span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="mt-4 md:mt-0 bg-yellow-400 text-purple-700 font-bold py-2 px-6 rounded hover:bg-yellow-500 transition-colors text-center"
                  >
                    Apply Now
                  </a>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-purple-700 mb-3">Qualifications:</h4>
                    <ul className="space-y-2">
                      {job.qualifications.map((qual, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-700 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center">
            Employee Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-purple-50 p-4 rounded-lg">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-16 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">
              Apply for Pre Primary Teacher Vacancy
            </h2>
            <p className="text-center text-gray-700 mb-8">
              Interested in joining our team? Send your CV and details to apply for teaching positions at Kidzee Kasavanahalli
            </p>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-bold text-purple-700 mb-3 text-lg">How to Apply:</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold text-purple-600 mr-3">1.</span>
                    <span>Send your updated CV/resume to our email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-purple-600 mr-3">2.</span>
                    <span>Include a cover letter mentioning the position you&apos;re applying for</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-purple-600 mr-3">3.</span>
                    <span>Mention your availability for interview</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-purple-600 mr-3">4.</span>
                    <span>Our HR team will contact shortlisted candidates within 7 working days</span>
                  </li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">📧</div>
                  <h4 className="font-bold text-purple-700 mb-2">Email Your CV</h4>
                  <a href="mailto:careers@kidzeekasavanahalli.in" className="text-purple-600 hover:text-purple-800 font-medium">
                    careers@kidzeekasavanahalli.in
                  </a>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">📞</div>
                  <h4 className="font-bold text-purple-700 mb-2">Call for Enquiry</h4>
                  <p className="text-purple-600 font-medium">+91-XXXXXXXXXX</p>
                  <p className="text-sm text-gray-600 mt-2">Mon-Sat: 9 AM - 6 PM</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-700 mb-3">Or Visit Us In Person:</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Kidzee Kasavanahalli</strong><br />
                  Kasavanahalli, Bangalore - 560035<br />
                  Near Sarjapur Road, Karnataka
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Walk-in interviews: Every Saturday, 10 AM - 1 PM (Prior appointment preferred)
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/contact" 
                className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Visit Contact Page for More Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Pre Primary Teacher Vacancy Near Me - Fresher & Experienced Positions
            </h2>
            <p className="text-gray-700 mb-4">
              Looking for <strong>pre primary teacher vacancy near me</strong>? Kidzee Kasavanahalli is hiring passionate educators 
              for preschool teaching positions in Bangalore. We welcome both <strong>freshers looking for their first teaching job</strong> and 
              <strong>experienced pre-primary teachers</strong> who want to advance their careers.
            </p>
            
            <h3 className="text-xl font-bold text-purple-700 mb-3 mt-6">
              Preschool Teacher Jobs in Bangalore - Why Choose Kidzee Kasavanahalli?
            </h3>
            <p className="text-gray-700 mb-4">
              Located in the heart of Kasavanahalli, our preschool is easily accessible from <strong>Sarjapur Road, HSR Layout, Bellandur, 
              Electronic City, Marathahalli, and Whitefield</strong>. With <strong>13+ years of experience</strong> in early childhood education 
              and <strong>1400+ successful graduates</strong>, we offer a stable and rewarding career path for teachers.
            </p>

            <h3 className="text-xl font-bold text-purple-700 mb-3 mt-6">
              Nursery and Kindergarten Teacher Positions Available
            </h3>
            <p className="text-gray-700 mb-4">
              We are currently hiring for multiple positions including <strong>nursery teachers, kindergarten teachers, playgroup facilitators, 
              and activity instructors</strong>. Whether you&apos;re searching for &quot;preschool teacher jobs near me&quot; or 
              &quot;nursery teacher vacancy in Kasavanahalli,&quot; this is your opportunity to join a leading preschool in Bangalore.
            </p>

            <h3 className="text-xl font-bold text-purple-700 mb-3 mt-6">
              Teaching Jobs for Freshers - No Experience Required
            </h3>
            <p className="text-gray-700 mb-4">
              Fresh graduates with <strong>B.Ed, D.Ed, or Montessori Teacher Training</strong> are encouraged to apply. We provide 
              comprehensive training and mentorship to help you build a successful career in early childhood education. Search keywords: 
              <em>pre primary teacher vacancy near me for freshers, fresher teaching jobs Bangalore, preschool jobs for freshers.</em>
            </p>

            <h3 className="text-xl font-bold text-purple-700 mb-3 mt-6">
              Convenient Location - Teaching Jobs Near Sarjapur Road
            </h3>
            <p className="text-gray-700">
              Our preschool is strategically located for easy commute from all major IT corridors and residential areas in East Bangalore. 
              If you&apos;re searching for <strong>teaching jobs near Sarjapur Road, preschool jobs near HSR Layout, or nursery teacher 
              positions near Bellandur</strong>, Kidzee Kasavanahalli offers the perfect opportunity close to home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
