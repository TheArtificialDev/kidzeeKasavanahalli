'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically handle the form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your inquiry! We will contact you soon.');
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100">
      <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">Get In Touch</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parentName" className="block text-sm font-semibold text-purple-700 mb-2">
              Parent Name *
            </label>
            <input 
              id="parentName" 
              name="parentName" 
              type="text" 
              required 
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors placeholder-gray-400"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-semibold text-purple-700 mb-2">
              Contact Number *
            </label>
            <input 
              id="contactNumber" 
              name="contactNumber" 
              type="tel" 
              required 
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors placeholder-gray-400"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="childName" className="block text-sm font-semibold text-purple-700 mb-2">
              Child&apos;s Name *
            </label>
            <input 
              id="childName" 
              name="childName" 
              type="text" 
              required 
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors placeholder-gray-400"
              placeholder="Child's full name"
            />
          </div>
          <div>
            <label htmlFor="childAge" className="block text-sm font-semibold text-purple-700 mb-2">
              Child&apos;s Age *
            </label>
            <select 
              id="childAge" 
              name="childAge" 
              required 
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors"
            >
              <option value="">Select age</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-purple-700 mb-2">
            Email Address
          </label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors placeholder-gray-400"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="program" className="block text-sm font-semibold text-purple-700 mb-2">
            Program of Interest
          </label>
          <select 
            id="program" 
            name="program" 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors"
          >
            <option value="">Select a program</option>
            <option value="playgroup">Playgroup (2-3 years)</option>
            <option value="nursery">Nursery (3-4 years)</option>
            <option value="junior-kg">Junior KG (4-5 years)</option>
            <option value="senior-kg">Senior KG (5-6 years)</option>
            <option value="daycare">Daycare Services</option>
            <option value="activities">Extracurricular Activities</option>
          </select>
        </div>

        <div>
          <label htmlFor="visitDate" className="block text-sm font-semibold text-purple-700 mb-2">
            Preferred Visit Date/Time
          </label>
          <input 
            id="visitDate" 
            name="visitDate" 
            type="text" 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors placeholder-gray-400"
            placeholder="e.g., This Saturday morning, Next week afternoon"
          />
        </div>

        <div>
          <label htmlFor="questions" className="block text-sm font-semibold text-purple-700 mb-2">
            Specific Questions or Requirements
          </label>
          <textarea 
            id="questions" 
            name="questions" 
            rows={4} 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors placeholder-gray-400"
            placeholder="Tell us about any specific needs, questions about curriculum, fees, or anything else you'd like to know..."
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-yellow-400 text-purple-700 font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            <>� Submit Inquiry</>
          )}
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Prefer instant communication? WhatsApp us directly!
          </p>
          <a 
            href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20contacting%20the%20school"
            className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp Us Now
          </a>
        </div>

        <p className="text-sm text-gray-600 text-center">
          We&apos;ll contact you within 24 hours to provide all the information you need.
          <br />
          <strong>Call us directly at +91 8884750750 for immediate assistance.</strong>
        </p>
      </form>
    </div>
  );
}
