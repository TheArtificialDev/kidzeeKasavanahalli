'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Aarav (Senior KG)",
    text: "Kidzee Kasavanahalli has been amazing for our son. The teachers are so caring and professional. Aarav has gained so much confidence and is now reading fluently. We couldn't be happier!",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of Ananya (Junior KG)",
    text: "The Péntemind curriculum is fantastic. Our daughter loves the creative activities and has developed excellent problem-solving skills. The van service is also very reliable and safe.",
    rating: 5
  },
  {
    name: "Sowmya Reddy",
    role: "Parent of Rohan (Nursery)",
    text: "As working parents, the daycare facility has been a lifesaver. The staff treats our child like family, and we can see his social skills improving every day. Highly recommend!",
    rating: 5
  },
  {
    name: "Vikram Gupta",
    role: "Parent of Kavya (Playgroup)",
    text: "Clean, safe environment with experienced teachers. Our daughter was initially shy but now she's excited to go to school every day. The progress in just 6 months has been remarkable.",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6">
            What Parents Say About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from families who trust us with their most precious gifts
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-3xl shadow-xl p-8 md:p-12 text-center border-2 border-purple-100">
            <div className="mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <h4 className="font-bold text-purple-700 text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-600">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-purple-700' 
                    : 'bg-purple-200 hover:bg-purple-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100">
            <div className="text-3xl font-bold text-purple-700 mb-2">98%</div>
            <p className="text-gray-600">Parent Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-yellow-100">
            <div className="text-3xl font-bold text-purple-700 mb-2">1400+</div>
            <p className="text-gray-600">Happy Children Graduated</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100">
            <div className="text-3xl font-bold text-purple-700 mb-2">13+ </div>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
