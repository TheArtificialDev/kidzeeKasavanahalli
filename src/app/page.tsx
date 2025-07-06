import ProgramCard from "@/components/ProgramCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StatsSection from "@/components/StatsSection";
import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Image from 'next/image';

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

export default function Home() {
  console.log("Rendering Home component...");

	return (
		<div>
			{/* Hero Section - Full viewport height minus header */}
			<section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-purple-50 via-white to-yellow-50 flex items-center relative overflow-hidden">
				{/* Background decoration */}
				<div className="absolute inset-0 opacity-30">
					<Image src="/images/graduation day.jpg" alt="Graduation Day at Kidzee Kasavanahalli" layout="fill" objectFit="cover" className="opacity-30" />
				</div>
				
				<div className="max-w-5xl mx-auto px-4 text-center py-20 relative z-10">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-700 mb-6 leading-tight">
						<AnimatedText 
							text="Where Young Minds Bloom Into Future Leaders" 
							startDelay={300}
							letterDelay={0.06}
						/>
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto text-purple-600 font-bold fade-from-top">
						13+ Years of Excellence in Early Childhood Education | 1400+ Happy Children | Kasavanahalli's Most Trusted Preschool
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 simple-fade-delay-1">
						<a
							href="/activities"
							className="bg-yellow-400 text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
						>
							📚 Explore Activities
						</a>
						<a
							href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school"
							className="bg-yellow-400 text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
						>
							💬 WhatsApp Us
						</a>
					</div>
					<div className="flex flex-wrap gap-4 justify-center text-sm md:text-base simple-fade-delay-2">
						<span className="bg-white text-purple-800 px-4 py-3 rounded-full border-2 border-purple-200 shadow-md font-semibold">
							✅ Trained Teachers (10+ Years Experience)
						</span>
						<span className="bg-white text-purple-800 px-4 py-3 rounded-full border-2 border-purple-200 shadow-md font-semibold">
							✅ Holistic Péntemind Curriculum
						</span>
						<span className="bg-white text-purple-800 px-4 py-3 rounded-full border-2 border-purple-200 shadow-md font-semibold">
							✅ Safe, Hygienic Environment
						</span>
					</div>
				</div>
			</section>
			{/* Image Marquee with Animation */}
      <section className="py-16 bg-gray-50">
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-marquee-fast">
            {/* First set of images */}
            {[
              "/images/enterance.jpeg", 
              "/images/Office.jpeg", 
              "/images/cctv_tv.jpeg", 
              "/images/toys1.jpeg", 
              "/images/washroom.jpeg",
              "/images/JrKg_Classroom.jpeg",
              "/images/Nursery_Classroom.jpeg", 
              "/images/Playgroup_classroom.jpeg",
              "/images/Srkg_classroom.jpeg",
              "/images/play_area_1.jpeg",
              "/images/safty_wall.jpeg",
              "/images/small_playara.jpeg",
              "/images/small_playarea.jpeg",
              "/images/graduation day.jpg",
              "/images/house 1.jpg",
              "/images/website_1.jpeg"
            ].map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-96">
                <img
                  src={src}
                  alt={`Kidzee Kasavanahalli facility ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              "/images/enterance.jpeg", 
              "/images/Office.jpeg", 
              "/images/cctv_tv.jpeg", 
              "/images/toys1.jpeg", 
              "/images/washroom.jpeg",
              "/images/JrKg_Classroom.jpeg",
              "/images/Nursery_Classroom.jpeg", 
              "/images/Playgroup_classroom.jpeg",
              "/images/Srkg_classroom.jpeg",
              "/images/play_area_1.jpeg",
              "/images/safty_wall.jpeg",
              "/images/small_playara.jpeg",
              "/images/small_playarea.jpeg",
              "/images/graduation day.jpg",
              "/images/house 1.jpg",
              "/images/website_1.jpeg"
            ].map((src, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-96">
                <img
                  src={src}
                  alt={`Kidzee Kasavanahalli facility ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
			<section className="py-20 bg-white" id="why-choose-us">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6">
							Why 1000+ Kasavanahalli Parents Choose Us
						</h2>
						<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
							Trusted by families for over a decade, we provide comprehensive early childhood education with proven results.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-purple-100">
							<div className="text-5xl mb-6">🏆</div>
							<h3 className="font-bold text-xl text-purple-700 mb-4">
								Experienced Excellence
							</h3>
							<p className="text-gray-600 leading-relaxed">
								14 years serving Kasavanahalli with <strong>1400+ children nurtured</strong> into confident learners
							</p>
						</div>
						<div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-yellow-100">
							<div className="text-5xl mb-6">👩‍🏫</div>
							<h3 className="font-bold text-xl text-purple-700 mb-4">Expert Educators</h3>
							<p className="text-gray-600 leading-relaxed">
								Teachers with <strong>10+ years experience</strong>, trained every 6 months in latest teaching methods
							</p>
						</div>
						<div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-purple-100">
							<div className="text-5xl mb-6">📚</div>
							<h3 className="font-bold text-xl text-purple-700 mb-4">Proven Curriculum</h3>
							<p className="text-gray-600 leading-relaxed">
								<strong>Péntemind philosophy</strong> preparing children for any board with holistic development
							</p>
						</div>
						<div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-yellow-100">
							<div className="text-5xl mb-6">🤱</div>
							<h3 className="font-bold text-xl text-purple-700 mb-4">Complete Care</h3>
							<p className="text-gray-600 leading-relaxed">
								From learning to daycare, <strong>worry-free solution</strong> for working parents
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Programs Overview */}
			<section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50" id="programs">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6">
							Programs Designed for Every Stage of Growth
						</h2>					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						From playful exploration to academic readiness, our scientifically designed programs nurture your child&apos;s unique potential at every stage.
					</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{programData.map((p, i) => (
							<ProgramCard key={i} {...p} />
						))}
					</div>
					<div className="text-center mt-12">
						<a
							href="/programs"
							className="inline-block bg-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-purple-800 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
						>
							Learn More About Our Programs
						</a>
					</div>
				</div>
			</section>

				{/* Stats Section */}
				<StatsSection />

				{/* Testimonials */}
				<TestimonialCarousel />			{/* Contact CTA */}
			<section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
				<div className="max-w-5xl mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-8">
						Ready to Give Your Child the Best Start?
					</h2>
					<p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
						Join our family of satisfied parents and watch your child thrive in a nurturing, educational environment.
					</p>
					
					<div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border-2 border-purple-100">
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
							<div className="text-center md:text-left">
								<div className="text-3xl mb-3">📍</div>
								<h3 className="font-bold text-purple-700 mb-2 text-lg">Visit Us</h3>
								<p className="text-gray-600">
									House no: 108, 19th Cross Rd, opposite to SJR VERITY, Tulasi Layout, apartment,<br />
									Bengaluru, Karnataka 560035
								</p>
							</div>
							<div className="text-center md:text-left">
								<div className="text-3xl mb-3">📞</div>
								<h3 className="font-bold text-purple-700 mb-2 text-lg">Contact</h3>
								<p className="text-gray-600">
									Phone: <a href="tel:+918884750750" className="underline">+91 8884750750</a><br />
									Email: <a href="mailto:contact.kidzeekasavanahalli@gmail.com" className="underline">contact.kidzeekasavanahalli@gmail.com</a>
								</p>
							</div>
							<div className="text-center md:text-left">
								<div className="text-3xl mb-3">🕒</div>
								<h3 className="font-bold text-purple-700 mb-2 text-lg">Hours</h3>
								<p className="text-gray-600">
									Mon-Fri: 9am-6pm<br />
									Sat: 10am-1pm (Visits)
								</p>
							</div>
							<div className="text-center md:text-left">
								<div className="text-3xl mb-3">🚐</div>
								<h3 className="font-bold text-purple-700 mb-2 text-lg">Van Service</h3>
								<p className="text-gray-600">
									Safe transportation<br />
									across Kasavanahalli
								</p>
							</div>
						</div>
					</div>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school"
							className="bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg border-2 border-yellow-400"
						>
							� WhatsApp Us Today
						</a>
						<a
							href="tel:[Your contact number]"
							className="bg-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-purple-800 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
						>
							📞 Call Now
						</a>
					</div>
				</div>
			</section>
			</div>
	);
}
