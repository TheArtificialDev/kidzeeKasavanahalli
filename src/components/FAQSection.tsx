interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center">
            {title}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-purple-700 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Common FAQ data for different pages
export const homeFAQs: FAQItem[] = [
  {
    question: "Which is the best preschool in Kasavanahalli?",
    answer: "Kidzee Kasavanahalli is the best preschool in the area with 13+ years of excellence, 1400+ children successfully nurtured, experienced teachers with 10+ years experience, and the proven Péntemind curriculum. We offer complete care with daycare, van service, and modern facilities."
  },
  {
    question: "What are the preschool fees at Kidzee Kasavanahalli?",
    answer: "We offer affordable preschool fees with flexible payment options. Contact us at +91-8884750750 for detailed fee structure for Playgroup, Nursery, Junior KG, and Senior KG programs. We also provide sibling discounts and early bird offers."
  },
  {
    question: "Does Kidzee Kasavanahalli provide daycare services?",
    answer: "Yes, we provide complete daycare services for working parents with extended hours from 9 AM to 6 PM on weekdays. Our daycare includes nutritious meals, supervised activities, homework assistance, and safe transportation."
  },
  {
    question: "What curriculum does Kidzee Kasavanahalli follow?",
    answer: "We follow the scientifically designed Péntemind curriculum that focuses on holistic child development. Our curriculum prepares children for any board (CBSE, ICSE, State) and emphasizes play-based learning, creativity, social skills, and academic readiness."
  },
  {
    question: "Is transportation available for preschool students?",
    answer: "Yes, we provide safe van service across Kasavanahalli and nearby areas including Sarjapur Road, HSR Layout, Bellandur, and Electronic City. Our vehicles are equipped with GPS tracking, trained drivers, and female attendants for child safety."
  },
  {
    question: "What safety measures are in place at Kidzee Kasavanahalli?",
    answer: "We maintain the highest safety standards with 24/7 CCTV monitoring, secure entry/exit gates, trained staff, first-aid facilities, fire safety equipment, child-friendly infrastructure, and regular safety drills. Parents can monitor their children through our CCTV access."
  }
];

export const programsFAQs: FAQItem[] = [
  {
    question: "What age groups are the programs designed for?",
    answer: "Our programs are designed for children aged 2-6 years: Playgroup (2-3 years), Nursery (3-4 years), Junior KG (4-5 years), and Senior KG (5-6 years). Each program is scientifically crafted for the specific developmental needs of that age group."
  },
  {
    question: "How is the Péntemind curriculum different from other preschool curriculums?",
    answer: "The Péntemind curriculum is scientifically designed to focus on five key development areas: Physical, Emotional, Social, Creative, and Cognitive. It uses play-based learning, hands-on activities, and age-appropriate challenges to ensure holistic development and school readiness."
  },
  {
    question: "What is the teacher-to-student ratio at Kidzee Kasavanahalli?",
    answer: "We maintain an optimal teacher-to-student ratio of 1:15 in all classes. This ensures personalized attention for every child and effective learning outcomes."
  },
  {
    question: "Are the teachers at Kidzee Kasavanahalli qualified?",
    answer: "Yes, all our teachers have 10+ years of experience in early childhood education and are regularly trained every 6 months in the latest teaching methodologies, child psychology, and safety protocols. They are certified in the Péntemind curriculum."
  }
];

export const activitiesFAQs: FAQItem[] = [
  {
    question: "Can non-Kidzee students join the activity center?",
    answer: "Yes, our activity center is open to all children in Kasavanahalli, not just Kidzee preschool students. We welcome children aged 3-12 for various activities including karate, art, music, dance, and tuition classes."
  },
  {
    question: "Are online classes available for activities?",
    answer: "Yes, we offer flexible online and offline classes for most activities. This hybrid approach allows children to participate from home when needed while still receiving quality instruction from our expert teachers."
  },
  {
    question: "What extracurricular activities are available?",
    answer: "We offer karate classes, art and craft sessions, music classes, dance classes, tuition for academics, sports activities, STEM programs, and seasonal camps. All activities are conducted by certified instructors with age-appropriate curricula."
  }
];
