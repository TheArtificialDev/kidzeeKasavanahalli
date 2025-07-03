import ProgramCard from "@/components/ProgramCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StatsSection from "@/components/StatsSection";

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
	return (
		<div>
			{/* Hero Section - Full viewport height minus header */}
			<section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-purple-50 via-white to-yellow-50 flex items-center relative overflow-hidden">
				{/* Background decoration */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-10 left-10 w-20 h-20 bg-purple-600 rounded-full"></div>
					<div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rounded-full"></div>
					<div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400 rounded-full"></div>
					<div className="absolute bottom-32 right-10 w-24 h-24 bg-yellow-300 rounded-full"></div>
				</div>
				
				<div className="max-w-5xl mx-auto px-4 text-center py-20 relative z-10">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-700 mb-6 leading-tight">
						Where Young Minds
						<span className="block text-yellow-500">Bloom Into Future Leaders</span>
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
						<span className="text-purple-600 font-bold">14+ Years of Excellence</span> in Early Childhood Education | 
						<span className="text-purple-600 font-bold"> 7000+ Happy Children</span> | 
						<span className="text-purple-600 font-bold"> Kasavanahalli&apos;s Most Trusted Preschool</span>
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
						<a
							href="/contact"
							className="bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg border-2 border-yellow-400 hover:border-yellow-500"
						>
							📅 Schedule a Visit
						</a>
						<a
							href="#programs"
							className="border-2 border-purple-700 text-purple-700 font-bold py-4 px-8 rounded-xl hover:bg-purple-700 hover:text-white transition-all text-lg bg-white hover:shadow-lg"
						>
							📚 Explore Programs
						</a>
					</div>
					<div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
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
			</section>			{/* Trust Section */}
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
								14 years serving Kasavanahalli with <strong>7000+ children nurtured</strong> into confident learners
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
									[Your full address]<br />
									Kasavanahalli, Bangalore
								</p>
							</div>
							<div className="text-center md:text-left">
								<div className="text-3xl mb-3">📞</div>
								<h3 className="font-bold text-purple-700 mb-2 text-lg">Contact</h3>
								<p className="text-gray-600">
									Phone: [Your contact number]<br />
									Email: [Your email]
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
							href="/contact"
							className="bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg border-2 border-yellow-400"
						>
							📅 Schedule Your Visit Today
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
