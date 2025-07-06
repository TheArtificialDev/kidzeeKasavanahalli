import { Metadata } from 'next';
import ProgramCard from "@/components/ProgramCard";
import AnimatedText from "@/components/AnimatedText";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import React from "react";
import Image from 'next/image';
import FAQSection, { homeFAQs } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: 'Kidzee Kasavanahalli - Best Preschool in Bangalore | Top Play School Near Me | Enrollment Open',
  description: 'Best preschool in Kasavanahalli, Bangalore with 13+ years of excellence. Top play school with daycare, Péntemind curriculum, experienced teachers & 1400+ happy families. Safe environment, affordable fees. Enrollment open!',
  keywords: 'best preschool Kasavanahalli, top play school Bangalore, preschool near me, nursery school Bangalore, kindergarten Kasavanahalli, daycare center Bangalore, Kidzee preschool enrollment, affordable preschool fees Bangalore, best preschool for working parents',
  openGraph: {
    title: 'Kidzee Kasavanahalli - Best Preschool in Bangalore | Enrollment Open',
    description: 'Best preschool in Kasavanahalli with 13+ years of excellence. Top play school with daycare, experienced teachers & 1400+ happy families.',
    url: 'https://kidzeekasavanahalli.in',
    images: ['/images/kidzee-kasavanahalli-preschool.jpg'],
  },
  alternates: {
    canonical: 'https://kidzeekasavanahalli.in',
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

export default function Home() {	return (
		<div>
			{/* Hero Section - Full viewport height minus header */}
			<section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-purple-50 via-white to-yellow-50 flex items-center relative overflow-hidden">
				{/* Background decoration */}
				<div className="absolute inset-0 opacity-30">
					<Image src="/images/graduation day.jpg" alt="Happy children at Kidzee Kasavanahalli graduation day - best preschool in Bangalore celebrating student achievements" layout="fill" objectFit="cover" className="opacity-30" />
				</div>
				
				<div className="max-w-5xl mx-auto px-4 text-center py-20 relative z-10">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-700 mb-6 leading-tight" style={{hyphens: 'none', wordBreak: 'keep-all'}}>
						<AnimatedText 
							text="Where Young&nbsp;Minds Bloom Into Future&nbsp;Leaders" 
							startDelay={300}
							letterDelay={0.15}
							animateByWords={true}
							className="inline-block"
						/>
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto text-purple-600 font-bold fade-from-top" style={{hyphens: 'none', wordBreak: 'keep-all'}}>
						13+&nbsp;Years of Excellence in Early&nbsp;Childhood&nbsp;Education | 1400+&nbsp;Happy&nbsp;Children | Kasavanahalli&apos;s Most&nbsp;Trusted&nbsp;Preschool
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
							✅ Trained Teachers (10+&nbsp;Years&nbsp;Experience)
						</span>
						<span className="bg-white text-purple-800 px-4 py-3 rounded-full border-2 border-purple-200 shadow-md font-semibold">
							✅ Holistic Péntemind&nbsp;Curriculum
						</span>
						<span className="bg-white text-purple-800 px-4 py-3 rounded-full border-2 border-purple-200 shadow-md font-semibold">
							✅ Safe, Hygienic&nbsp;Environment
						</span>
					</div>
				</div>
			</section>
			{/* Image Marquee with Animation */}
      <section className="py-16 bg-gray-50">
        <ScrollAnimationWrapper animation="fade-blur">
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-marquee-fast">
              {/* First set of images */}
              {[
                { src: "/images/enterance.jpeg", alt: "Secure entrance of best preschool Kidzee Kasavanahalli with safety gate and colorful welcome area" },
                { src: "/images/Office.jpeg", alt: "Principal office at Kidzee Kasavanahalli preschool with comfortable parent consultation area" },
                { src: "/images/cctv_tv.jpeg", alt: "CCTV monitoring system at Kidzee Kasavanahalli ensuring complete child safety and security" },
                { src: "/images/toys1.jpeg", alt: "Educational toys and learning materials at Kidzee Kasavanahalli preschool activity center" },
                { src: "/images/washroom.jpeg", alt: "Clean, child-friendly washrooms at Kidzee Kasavanahalli with proper hygiene facilities" },
                { src: "/images/JrKg_Classroom.jpeg", alt: "Junior KG classroom at Kidzee Kasavanahalli with modern learning environment for 4-5 year olds" },
                { src: "/images/Nursery_Classroom.jpeg", alt: "Nursery classroom at Kidzee Kasavanahalli with age-appropriate furniture for 3-4 year olds" },
                { src: "/images/Playgroup_classroom.jpeg", alt: "Playgroup classroom at Kidzee Kasavanahalli designed for 2-3 year old toddlers" },
                { src: "/images/Srkg_classroom.jpeg", alt: "Senior KG classroom at Kidzee Kasavanahalli preparing 5-6 year olds for primary school" },
                { src: "/images/play_area_1.jpeg", alt: "Outdoor play area at Kidzee Kasavanahalli with safe playground equipment for children" },
                { src: "/images/safty_wall.jpeg", alt: "Safety walls and secure boundaries at Kidzee Kasavanahalli ensuring child protection" },
                { src: "/images/small_playara.jpeg", alt: "Indoor play area at Kidzee Kasavanahalli with educational toys and activities" },
                { src: "/images/small_playarea.jpeg", alt: "Small play zone at Kidzee Kasavanahalli for group activities and social interaction" },
                { src: "/images/graduation day.jpg", alt: "Graduation day celebration at Kidzee Kasavanahalli with happy children and proud parents" },
                { src: "/images/house 1.jpg", alt: "Beautiful building exterior of Kidzee Kasavanahalli preschool in Bangalore" },
                { src: "/images/website_1.jpeg", alt: "Happy children at Kidzee Kasavanahalli enjoying learning activities and playtime" }
              ].map((item, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-96">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={384}
                    height={256}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { src: "/images/enterance.jpeg", alt: "Secure entrance of best preschool Kidzee Kasavanahalli with safety gate and colorful welcome area" },
                { src: "/images/Office.jpeg", alt: "Principal office at Kidzee Kasavanahalli preschool with comfortable parent consultation area" },
                { src: "/images/cctv_tv.jpeg", alt: "CCTV monitoring system at Kidzee Kasavanahalli ensuring complete child safety and security" },
                { src: "/images/toys1.jpeg", alt: "Educational toys and learning materials at Kidzee Kasavanahalli preschool activity center" },
                { src: "/images/washroom.jpeg", alt: "Clean, child-friendly washrooms at Kidzee Kasavanahalli with proper hygiene facilities" },
                { src: "/images/JrKg_Classroom.jpeg", alt: "Junior KG classroom at Kidzee Kasavanahalli with modern learning environment for 4-5 year olds" },
                { src: "/images/Nursery_Classroom.jpeg", alt: "Nursery classroom at Kidzee Kasavanahalli with age-appropriate furniture for 3-4 year olds" },
                { src: "/images/Playgroup_classroom.jpeg", alt: "Playgroup classroom at Kidzee Kasavanahalli designed for 2-3 year old toddlers" },
                { src: "/images/Srkg_classroom.jpeg", alt: "Senior KG classroom at Kidzee Kasavanahalli preparing 5-6 year olds for primary school" },
                { src: "/images/play_area_1.jpeg", alt: "Outdoor play area at Kidzee Kasavanahalli with safe playground equipment for children" },
                { src: "/images/safty_wall.jpeg", alt: "Safety walls and secure boundaries at Kidzee Kasavanahalli ensuring child protection" },
                { src: "/images/small_playara.jpeg", alt: "Indoor play area at Kidzee Kasavanahalli with educational toys and activities" },
                { src: "/images/small_playarea.jpeg", alt: "Small play zone at Kidzee Kasavanahalli for group activities and social interaction" },
                { src: "/images/graduation day.jpg", alt: "Graduation day celebration at Kidzee Kasavanahalli with happy children and proud parents" },
                { src: "/images/house 1.jpg", alt: "Beautiful building exterior of Kidzee Kasavanahalli preschool in Bangalore" },
                { src: "/images/website_1.jpeg", alt: "Happy children at Kidzee Kasavanahalli enjoying learning activities and playtime" }
              ].map((item, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-96">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={384}
                    height={256}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* Trust Section */}
			<section className="py-20 bg-white" id="why-choose-us">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center mb-16">
						<ScrollAnimationWrapper animation="glide">
							<h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6">
								Why 1000+ Kasavanahalli Parents Choose Us
							</h2>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper animation="fade-blur" delay={1}>
							<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
								Trusted by families for over a decade, we provide comprehensive early childhood education with proven results.
							</p>
						</ScrollAnimationWrapper>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<ScrollAnimationWrapper animation="float" delay={1}>
							<div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-purple-100">
								<div className="text-5xl mb-6">🏆</div>
								<h3 className="font-bold text-xl text-purple-700 mb-4">
									Experienced Excellence
								</h3>
								<p className="text-gray-600 leading-relaxed">
									<strong><a href="/about" className="text-purple-700 hover:underline">13 years serving Kasavanahalli</a></strong> with <strong>1400+ children nurtured</strong> into confident learners
								</p>
							</div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper animation="float" delay={2}>
							<div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-yellow-100">
								<div className="text-5xl mb-6">👩‍🏫</div>
								<h3 className="font-bold text-xl text-purple-700 mb-4">Expert Educators</h3>
								<p className="text-gray-600 leading-relaxed">
									Teachers with <strong>10+ years experience</strong>, trained every 6 months in latest teaching methods
								</p>
							</div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper animation="float" delay={3}>
							<div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-purple-100">
								<div className="text-5xl mb-6">📚</div>
								<h3 className="font-bold text-xl text-purple-700 mb-4">Proven Curriculum</h3>
								<p className="text-gray-600 leading-relaxed">
									<strong><a href="/programs" className="text-purple-700 hover:underline">Péntemind philosophy</a></strong> preparing children for any board with holistic development
								</p>
							</div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper animation="float" delay={4}>
							<div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-yellow-100">
								<div className="text-5xl mb-6">🤱</div>
								<h3 className="font-bold text-xl text-purple-700 mb-4">Complete Care</h3>
								<p className="text-gray-600 leading-relaxed">
									From learning to <strong><a href="/contact" className="text-purple-700 hover:underline">daycare</a></strong>, <strong>worry-free solution</strong> for working parents
								</p>
							</div>
						</ScrollAnimationWrapper>
					</div>
				</div>
			</section>

			{/* Programs Overview */}
			<section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50" id="programs">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center mb-16">
						<ScrollAnimationWrapper animation="elastic">
							<h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6">
								Programs Designed for Every Stage of Growth
							</h2>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper animation="slide-up" delay={1}>					
							<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
								From playful exploration to academic readiness, our scientifically designed programs nurture your child&apos;s unique potential at every stage.
							</p>
						</ScrollAnimationWrapper>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{programData.map((p, i) => (
							<ScrollAnimationWrapper key={i} animation="scale" delay={i + 1}>
								<ProgramCard {...p} />
							</ScrollAnimationWrapper>
						))}
					</div>
					<ScrollAnimationWrapper animation="bounce" delay={2}>
						<div className="text-center mt-12">
							<a
								href="/programs"
								className="inline-block bg-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-purple-800 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
							>
								Learn More About Our Programs
							</a>
						</div>
					</ScrollAnimationWrapper>
				</div>
			</section>

				{/* FAQ Section */}
				<ScrollAnimationWrapper animation="fade">
					<FAQSection faqs={homeFAQs} title="Frequently Asked Questions - Preschool Enrollment & Programs" />
				</ScrollAnimationWrapper>

				{/* SEO Content Section - Rich Keyword Content */}
				<section className="py-16 bg-gray-50">
					<div className="max-w-6xl mx-auto px-4">
						<ScrollAnimationWrapper animation="fade">
							<div className="text-center mb-12">
								<h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
									Best Preschool in Kasavanahalli, Bangalore - Kidzee Excellence Since 2012
								</h2>
								<p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
									When searching for the <strong>best preschool in Bangalore</strong> or <strong>top play school near me</strong>, 
									Kidzee Kasavanahalli stands out as the premier choice for early childhood education. Located in the heart of 
									Kasavanahalli, our <strong>preschool and daycare center</strong> has been serving families across Sarjapur Road, 
									HSR Layout, Bellandur, and Electronic City for over <strong>13 years with remarkable success</strong>.
								</p>
							</div>
						</ScrollAnimationWrapper>
						
						<div className="max-w-2xl mx-auto">
							<ScrollAnimationWrapper animation="slide-up">
								<div className="bg-white rounded-lg shadow-md p-8">
									<h3 className="text-2xl font-bold text-purple-700 mb-4">Why We&apos;re the Top Choice for Preschool Enrollment</h3>
									<ul className="space-y-3 text-gray-700">
										<li>✓ <strong>Proven Track Record:</strong> 1400+ successful graduates now excelling in top schools</li>
										<li>✓ <strong>Expert Faculty:</strong> Teachers with 10+ years experience in early childhood education</li>
										<li>✓ <strong>Scientific Curriculum:</strong> Péntemind methodology preparing children for any board</li>
										<li>✓ <strong>Complete Safety:</strong> 24/7 CCTV monitoring and secure premises</li>
										<li>✓ <strong>Affordable Excellence:</strong> Premium education at competitive fees</li>
										<li>✓ <strong>Working Parents Solution:</strong> Daycare, van service, and extended hours</li>
									</ul>
								</div>
							</ScrollAnimationWrapper>
						</div>
					</div>
				</section>
				
			{/* Contact CTA */}
			<section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
				<div className="max-w-5xl mx-auto px-4 text-center">
					<ScrollAnimationWrapper animation="rotate">
						<h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-8">
							Ready to Give Your Child the Best Start?
						</h2>
					</ScrollAnimationWrapper>
					<ScrollAnimationWrapper animation="fade" delay={1}>
						<p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
							Join our family of satisfied parents and watch your child thrive in a nurturing, educational environment.
						</p>
					</ScrollAnimationWrapper>
					
					<ScrollAnimationWrapper animation="scale" delay={2}>
						<div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border-2 border-purple-100">
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
								<ScrollAnimationWrapper animation="slide-up" delay={1}>
									<div className="text-center md:text-left">
										<div className="text-3xl mb-3">📍</div>
										<h3 className="font-bold text-purple-700 mb-2 text-lg">Visit Us</h3>
										<p className="text-gray-600">
											House no: 108, 19th Cross Rd, opposite to SJR VERITY, Tulasi Layout, apartment,<br />
											Bengaluru, Karnataka 560035
										</p>
									</div>
								</ScrollAnimationWrapper>
								<ScrollAnimationWrapper animation="slide-up" delay={2}>
									<div className="text-center md:text-left">
										<div className="text-3xl mb-3">📞</div>
										<h3 className="font-bold text-purple-700 mb-2 text-lg">Contact</h3>
										<p className="text-gray-600">
											Phone: <a href="tel:+918884750750" className="underline">+91 8884750750</a><br />
											Email: <a href="mailto:contactkidzeekasavanahalli@gmail.com" className="underline">contactkidzeekasavanahalli@gmail.com</a>
										</p>
									</div>
								</ScrollAnimationWrapper>
								<ScrollAnimationWrapper animation="slide-up" delay={3}>
									<div className="text-center md:text-left">
										<div className="text-3xl mb-3">🕒</div>
										<h3 className="font-bold text-purple-700 mb-2 text-lg">Hours</h3>
										<p className="text-gray-600">
											Mon-Fri: 9am-6pm<br />
											Sat: 10am-1pm (Visits)
										</p>
									</div>
								</ScrollAnimationWrapper>
								<ScrollAnimationWrapper animation="slide-up" delay={4}>
									<div className="text-center md:text-left">
										<div className="text-3xl mb-3">🚐</div>
										<h3 className="font-bold text-purple-700 mb-2 text-lg">Van Service</h3>
										<p className="text-gray-600">
											Safe transportation<br />
											across Kasavanahalli
										</p>
									</div>
								</ScrollAnimationWrapper>
							</div>
						</div>
					</ScrollAnimationWrapper>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<ScrollAnimationWrapper animation="elastic" delay={3}>
							<a
								href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school"
								className="bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg border-2 border-yellow-400"
							>
								💬 WhatsApp Us Today
							</a>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper animation="elastic" delay={4}>
							<a
								href="tel:+918884750750"
								className="bg-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-purple-800 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
							>
								📞 Call Now
							</a>
						</ScrollAnimationWrapper>
					</div>
				</div>
			</section>
			</div>
	);
}
