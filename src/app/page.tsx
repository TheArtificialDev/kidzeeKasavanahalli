import { Metadata } from 'next';
import ProgramCard from "@/components/ProgramCard";
import AnimatedText from "@/components/AnimatedText";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import React from "react";
import Image from 'next/image';
import FAQSection, { homeFAQs } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: 'Best Preschool in Kasavanahalli | Kidzee Bangalore - Top Play School Near Me | Daycare Center',
  description: 'Best preschool in Kasavanahalli, Bangalore with 13+ years. Top play school near Sarjapur Road, HSR Layout. Affordable daycare, nursery, kindergarten. Kidzee preschool with transportation. Enrollment open! Call now.',
  keywords: [
    // Primary local keywords
    'best preschool in kasavanahalli',
    'preschool in kasavanahalli',
    'preschools in kasavanahalli',
    'kidzee kasavanahalli',
    'kidzee',
    'kidzee bangalore',
    'kidzee near me',
    'daycare in kasavanahalli',
    '24/7 daycare in bangalore',
    
    // School search terms
    'schools near me',
    'school near me',
    'schools in kasavanahalli',
    'schools near kasavanahalli',
    'primary school in kasavanahalli',
    'primary schools in kasavanahalli',
    'best school near me',
    'nearby schools',
    'schools near to me',
    
    // Play school terms
    'preschool near me',
    'play school near me',
    'pre school near me',
    'playschool near me',
    'top play schools in bangalore',
    
    // Location-specific
    'kidzee sarjapur',
    'kidzee sarjapur road',
    'preschool near kasavanahalli sarjapur',
    'preschool nearby kasavanahalli sarjapur',
    'pre primary school nearby kasavanahalli sarjapur',
    'pre primary school near kasavanahalli sarjapur',
    'primary school nearby kasavanahalli sarjapur',
    'schools in sarjapur road',
    'schools near sarjapur road',
    'preschool in sarjapur road',
    
    // Affordable keywords
    'affordable preschool bangalore',
    'affordable preschools bangalore',
    
    // Transportation
    'preschool with transportation bangalore',
    
    // Inclusive
    'inclusive schools near me',
    
    // IB keywords
    'ib preschool in kasavanahalli',
    'ib preschools in kasavanahalli',
    'ib pre primary school nearby kasavanahalli sarjapur',
    
    // Munnekolala
    'best preschool in munnekolala',
    
    // Brand terms
    'kidzee school',
    'kidzee school near me',
    'kidzee preschool',
    'kidzee photos',
    'kidzee preschool photos',
    
    // Additional
    'kasavanahalli directions',
    'nursery school bangalore',
    'kindergarten kasavanahalli',
    'best preschool for working parents'
  ].join(', '),
  openGraph: {
    title: 'Best Preschool in Kasavanahalli | Kidzee Bangalore - Daycare & Play School',
    description: 'Top-rated preschool near Sarjapur Road with 13+ years experience. Affordable daycare, transportation. 1400+ happy families. Enrollment open!',
    url: 'https://kidzeekasavanahalli.in',
    siteName: 'Kidzee Kasavanahalli',
    images: [
      {
        url: '/images/Kidzee New Logo.png',
        width: 1200,
        height: 630,
        alt: 'Kidzee Kasavanahalli - Best Preschool in Bangalore'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Preschool in Kasavanahalli | Kidzee Bangalore',
    description: 'Top preschool near Sarjapur Road with daycare & transportation. 13+ years experience. Enroll now!',
    images: ['/images/Kidzee New Logo.png'],
  },
  alternates: {
    canonical: 'https://kidzeekasavanahalli.in',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Kasavanahalli, Bangalore',
    'geo.position': '12.9279;77.6869',
    'ICBM': '12.9279, 77.6869',
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

export default function Home() {
	// Comprehensive Schema Markup for SEO
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "EducationalOrganization",
		"@id": "https://kidzeekasavanahalli.in/#organization",
		"name": "Kidzee Kasavanahalli",
		"alternateName": ["Kidzee Preschool Kasavanahalli", "Kidzee Bangalore Kasavanahalli"],
		"description": "Best preschool in Kasavanahalli, Bangalore with 13+ years of excellence in early childhood education. Top play school offering daycare, nursery, kindergarten with Péntemind curriculum.",
		"url": "https://kidzeekasavanahalli.in",
		"logo": "https://kidzeekasavanahalli.in/images/Kidzee New Logo.png",
		"image": [
			"https://kidzeekasavanahalli.in/images/Kidzee New Logo.png",
			"https://kidzeekasavanahalli.in/images/graduation day.jpg",
			"https://kidzeekasavanahalli.in/images/house 1.jpg"
		],
		"telephone": "+918884750750",
		"email": "contact@kidzeekasavanahalli.in",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Kasavanahalli Main Road",
			"addressLocality": "Kasavanahalli",
			"addressRegion": "Karnataka",
			"postalCode": "560035",
			"addressCountry": "IN"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "12.9279",
			"longitude": "77.6869"
		},
		"areaServed": [
			{
				"@type": "City",
				"name": "Bangalore",
				"sameAs": "https://en.wikipedia.org/wiki/Bangalore"
			},
			"Kasavanahalli",
			"Sarjapur Road",
			"HSR Layout",
			"Bellandur",
			"Electronic City",
			"Marathahalli",
			"Whitefield",
			"Munnekolala"
		],
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				"opens": "09:00",
				"closes": "18:00"
			},
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": "Saturday",
				"opens": "10:00",
				"closes": "13:00"
			}
		],
		"priceRange": "₹₹",
		"currenciesAccepted": "INR",
		"paymentAccepted": "Cash, Card, UPI, Bank Transfer",
		"foundingDate": "2012",
		"slogan": "Where Young Minds Bloom Into Future Leaders",
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.8",
			"reviewCount": "150",
			"bestRating": "5",
			"worstRating": "1"
		},
		"review": [
			{
				"@type": "Review",
				"author": {
					"@type": "Person",
					"name": "Parent at Kidzee Kasavanahalli"
				},
				"reviewRating": {
					"@type": "Rating",
					"ratingValue": "5",
					"bestRating": "5"
				},
				"reviewBody": "Best preschool in Kasavanahalli! Teachers are experienced and caring. My child loves going to school every day."
			}
		],
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Preschool Programs",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Playgroup Program (2-3 Years)",
						"description": "Play-based learning for toddlers aged 2-3 years with focus on social skills and motor development"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Nursery Program (3-4 Years)",
						"description": "Language development and pre-reading skills for children aged 3-4 years"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Junior KG (4-5 Years)",
						"description": "Pre-academic skills and school readiness for 4-5 year olds"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Senior KG (5-6 Years)",
						"description": "Academic preparation and primary school readiness for 5-6 year olds"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Daycare Services",
						"description": "Extended daycare with nutritious meals for working parents in Bangalore"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Transportation Services",
						"description": "Safe GPS-tracked van service across Sarjapur Road, HSR Layout, and nearby areas"
					}
				}
			]
		},
		"sameAs": [
			"https://www.facebook.com/kidzeekasavanahalli",
			"https://www.instagram.com/kidzeekasavanahalli"
		],
		"keywords": "best preschool in kasavanahalli, preschool near me, kidzee kasavanahalli, daycare in kasavanahalli, play school near me, schools near me, affordable preschool bangalore, preschool with transportation bangalore"
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://kidzeekasavanahalli.in"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "Programs",
				"item": "https://kidzeekasavanahalli.in/programs"
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": "Activities",
				"item": "https://kidzeekasavanahalli.in/activities"
			},
			{
				"@type": "ListItem",
				"position": 4,
				"name": "Contact",
				"item": "https://kidzeekasavanahalli.in/contact"
			}
		]
	};

	return (
		<div>
			{/* Schema Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			
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

			{/* Meet Our Center Owner - Shilp Shikha */}
			<section className="py-20 bg-gradient-to-br from-white to-purple-50" id="meet-our-owner">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center mb-16">
						<ScrollAnimationWrapper animation="glide">
							<h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6">
								Meet The Heart Behind Our Excellence
							</h2>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper animation="fade-blur" delay={1}>
							<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
								Every great preschool has a passionate leader who believes in nurturing young minds. Meet the visionary who has been shaping futures for over 17 years.
							</p>
						</ScrollAnimationWrapper>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Image Section */}
						<ScrollAnimationWrapper animation="slide-left">
							<div className="relative">
								<div className="bg-gradient-to-br from-purple-100 to-yellow-100 rounded-3xl p-8">
									<Image
										src="/images/shilp.jpeg"
										alt="Shilp Shikha - Center Owner and Principal at Kidzee Kasavanahalli, experienced early childhood educator with 17+ years in preschool education"
										width={500}
										height={600}
										className="rounded-2xl shadow-lg w-full h-auto"
									/>
								</div>
								{/* Decorative elements */}
								<div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-700 rounded-full p-4 shadow-lg">
									<span className="text-3xl">👩‍🏫</span>
								</div>
								<div className="absolute -bottom-4 -left-4 bg-purple-700 text-white rounded-full p-4 shadow-lg">
									<span className="text-2xl font-bold">17+</span>
								</div>
							</div>
						</ScrollAnimationWrapper>

						{/* Content Section */}
						<ScrollAnimationWrapper animation="slide-right">
							<div className="space-y-6">
								<div>
									<h3 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">
										Shilp Shikha
									</h3>
									<p className="text-xl text-purple-600 font-semibold mb-4">
										Center Owner & Principal | 17+ Years in Early Childhood Education
									</p>
								</div>

								<div className="prose prose-lg text-gray-700 leading-relaxed">
									<p className="text-lg mb-4">
										<strong className="text-purple-700">Behind every successful child is a teacher who believed in them first.</strong> 
										Shilp Shikha embodies this philosophy with her unwavering dedication to early childhood education spanning over 
										<strong> 17 remarkable years</strong>.
									</p>

									<p className="mb-4">
										With advanced certifications in early childhood development and Montessori methodologies, Shilp has transformed 
										the lives of <strong>over 1400 children</strong> in Kasavanahalli and surrounding areas. Her educational philosophy 
										centers on recognizing that <em>&ldquo;every child is unique and deserves personalized attention to unlock their full potential.&rdquo;</em>
									</p>

									<p className="mb-4">
										What sets Shilp apart is her <strong>genuine emotional connection</strong> with each child. She doesn&apos;t just see 
										students; she sees future leaders, innovators, and change-makers. Her approach combines traditional values with 
										modern teaching techniques, ensuring children are not only academically prepared but also emotionally resilient.
									</p>

									<p className="mb-6">
										<strong className="text-purple-700">Her hands-on leadership style</strong> means she&apos;s involved in every aspect 
										of your child&apos;s journey - from curriculum planning to individual progress tracking. Parents often share how 
										Shilp personally knows each child&apos;s strengths, interests, and areas for growth, making every family feel truly valued.
									</p>

									{/* Credentials & Achievements */}
									<div className="bg-gradient-to-r from-purple-50 to-yellow-50 rounded-xl p-6 mb-6">
										<h4 className="text-xl font-bold text-purple-700 mb-4">Professional Excellence</h4>
										<ul className="space-y-2">
											<li className="flex items-start">
												<span className="text-yellow-500 mr-2 mt-1">🎓</span>
												<span>Certified in Advanced Early Childhood Development</span>
											</li>
											<li className="flex items-start">
												<span className="text-yellow-500 mr-2 mt-1">🏆</span>
												<span>Montessori Training Certification</span>
											</li>
											<li className="flex items-start">
												<span className="text-yellow-500 mr-2 mt-1">📚</span>
												<span>Specialized Training in Child Psychology & Behavior Management</span>
											</li>
											<li className="flex items-start">
												<span className="text-yellow-500 mr-2 mt-1">🌟</span>
												<span>Continuous Professional Development in Modern Teaching Methods</span>
											</li>
										</ul>
									</div>

									{/* Personal Touch */}
									<div className="bg-white rounded-xl p-6 border-l-4 border-purple-600 shadow-md">
										<blockquote className="text-lg italic text-gray-700 mb-3">
											&ldquo;I don&apos;t just teach children; I nurture their curiosity, celebrate their discoveries, and guide them 
											towards becoming confident, compassionate individuals. Every child who walks through our doors becomes 
											part of our extended family.&rdquo;
										</blockquote>
										<cite className="text-purple-700 font-semibold">- Shilp Shikha</cite>
									</div>
								</div>
							</div>
						</ScrollAnimationWrapper>
					</div>

					{/* Additional Impact Statistics */}
					<ScrollAnimationWrapper animation="fade-blur" delay={2}>
						<div className="mt-16 grid md:grid-cols-3 gap-8">
							<div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
								<div className="text-4xl mb-4">❤️</div>
								<h4 className="text-2xl font-bold text-purple-700 mb-2">Personal Touch</h4>
								<p className="text-gray-600">
									Knows every child by name and personally tracks their individual growth journey
								</p>
							</div>
							<div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
								<div className="text-4xl mb-4">🤝</div>
								<h4 className="text-2xl font-bold text-purple-700 mb-2">Family Partnership</h4>
								<p className="text-gray-600">
									Maintains open communication with parents, providing regular updates and guidance
								</p>
							</div>
							<div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
								<div className="text-4xl mb-4">🌱</div>
								<h4 className="text-2xl font-bold text-purple-700 mb-2">Growth Mindset</h4>
								<p className="text-gray-600">
									Focuses on building confidence, creativity, and life-long learning habits in every child
								</p>
							</div>
						</div>
					</ScrollAnimationWrapper>
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

			{/* SEO Content Section - Hidden but crawlable */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="prose max-w-none text-gray-700">
						<h2 className="text-3xl font-bold text-purple-700 mb-6">
							Best Preschool in Kasavanahalli | Top Play School Near Me - Kidzee Bangalore
						</h2>
						<p className="mb-4">
							Searching for the <strong>best preschool in Kasavanahalli</strong>? <strong>Kidzee Kasavanahalli</strong> is 
							Bangalore&apos;s premier <strong>preschool and daycare center</strong> with <strong>13+ years of excellence</strong> in 
							early childhood education. Located conveniently near <strong>Sarjapur Road</strong>, we are the top-rated 
							<strong> play school near me</strong> for parents in Kasavanahalli, HSR Layout, Bellandur, and surrounding areas.
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Preschool Near Me - Why Kidzee Kasavanahalli is Your Best Choice
						</h3>
						<p className="mb-4">
							When parents search for <strong>&quot;preschool near me&quot;</strong> or <strong>&quot;play school near me&quot;</strong>, 
							they discover that <strong>Kidzee Kasavanahalli</strong> offers everything you need: experienced teachers (10+ years), 
							scientifically designed Péntemind curriculum, safe environment, <strong>affordable fees</strong>, and 
							<strong>transportation services</strong> across Bangalore. With <strong>1400+ successful graduates</strong>, we are 
							the most trusted <strong>preschool in Kasavanahalli</strong>.
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Schools Near Me - Comprehensive Programs from Playgroup to Senior KG
						</h3>
						<p className="mb-4">
							Parents searching for <strong>&quot;schools near me&quot;</strong> or <strong>&quot;schools in Kasavanahalli&quot;</strong> will 
							find our comprehensive programs perfect for children aged 2-6 years:
						</p>
						<ul className="mb-4 space-y-2">
							<li><strong>Playgroup (2-3 years)</strong> - Gentle introduction to learning</li>
							<li><strong>Nursery (3-4 years)</strong> - Language and social development</li>
							<li><strong>Junior KG (4-5 years)</strong> - Pre-academic skills and school readiness</li>
							<li><strong>Senior KG (5-6 years)</strong> - Primary school preparation</li>
						</ul>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Daycare in Kasavanahalli - Extended Care for Working Parents
						</h3>
						<p className="mb-4">
							Need <strong>daycare in Kasavanahalli</strong>? We offer extended daycare services with nutritious meals, 
							safe environment, and engaging activities. Our <strong>24/7 daycare in Bangalore</strong> alternative provides 
							flexible hours perfect for working parents in tech hubs like Electronic City, Bellandur, and Whitefield.
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Affordable Preschool Bangalore with Transportation
						</h3>
						<p className="mb-4">
							Looking for an <strong>affordable preschool in Bangalore</strong>? Kidzee Kasavanahalli offers 
							competitive fees without compromising on quality. Plus, we provide <strong>preschool with transportation in Bangalore</strong> - 
							safe, GPS-tracked van service covering <strong>Sarjapur Road, HSR Layout, Bellandur, Electronic City, Marathahalli, 
							Whitefield, and Munnekolala</strong>.
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Kidzee Sarjapur Road - Serving Multiple Locations
						</h3>
						<p className="mb-4">
							Residents of <strong>Sarjapur Road</strong> searching for <strong>&quot;Kidzee Sarjapur&quot;</strong> or 
							<strong> &quot;Kidzee Sarjapur Road&quot;</strong> will find our Kasavanahalli branch ideally located with easy access. 
							We serve families across:
						</p>
						<ul className="mb-4 space-y-1">
							<li>• <strong>Kasavanahalli</strong> - Walk-in facility</li>
							<li>• <strong>Sarjapur Road</strong> - Van service available</li>
							<li>• <strong>HSR Layout</strong> - Sectors 1, 2, 3 covered</li>
							<li>• <strong>Bellandur</strong> - Near Ecospace, Embassy</li>
							<li>• <strong>Electronic City</strong> - Phase 1 & 2</li>
							<li>• <strong>Marathahalli</strong> - Bridge area</li>
							<li>• <strong>Whitefield</strong> - ITPL area</li>
							<li>• <strong>Munnekolala</strong> - Nearby locality</li>
						</ul>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Primary School in Kasavanahalli - Strong Foundation for Future Success
						</h3>
						<p className="mb-4">
							Parents searching for <strong>&quot;primary school in Kasavanahalli&quot;</strong> or 
							<strong> &quot;primary schools in Kasavanahalli&quot;</strong> should start with quality preschool education. 
							Our Senior KG program provides excellent <strong>primary school preparation</strong>, ensuring your child is 
							academically and emotionally ready for the next step.
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							IB Preschool in Kasavanahalli - International Standard Curriculum
						</h3>
						<p className="mb-4">
							Looking for <strong>&quot;IB preschool in Kasavanahalli&quot;</strong> or 
							<strong> &quot;IB pre-primary school near Kasavanahalli Sarjapur&quot;</strong>? While we follow the proven 
							Péntemind curriculum, our international-standard teaching methods prepare children for IB schools and 
							other premium educational institutions.
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Inclusive Schools Near Me - Every Child Welcome
						</h3>
						<p className="mb-4">
							Searching for <strong>&quot;inclusive schools near me&quot;</strong>? Kidzee Kasavanahalli welcomes children 
							of all abilities and backgrounds. Our trained teachers provide individualized attention, ensuring every child 
							thrives in a supportive, nurturing environment.
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Best School Near Me - Awards, Recognition & Parent Reviews
						</h3>
						<p className="mb-4">
							When parents search for the <strong>&quot;best school near me&quot;</strong>, they choose Kidzee Kasavanahalli because:
						</p>
						<ul className="mb-4 space-y-2">
							<li>✅ <strong>13+ years of proven excellence</strong> in Kasavanahalli</li>
							<li>✅ <strong>1400+ happy children</strong> successfully graduated</li>
							<li>✅ <strong>Experienced teachers</strong> with 10+ years in early childhood education</li>
							<li>✅ <strong>Safe, hygienic environment</strong> with CCTV monitoring</li>
							<li>✅ <strong>Scientifically designed curriculum</strong> for holistic development</li>
							<li>✅ <strong>Affordable fees</strong> with flexible payment options</li>
							<li>✅ <strong>Transportation available</strong> across multiple locations</li>
							<li>✅ <strong>Extended daycare hours</strong> for working parents</li>
						</ul>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Kidzee Photos & Virtual Tour
						</h3>
						<p className="mb-4">
							Want to see <strong>&quot;Kidzee photos&quot;</strong> or <strong>&quot;Kidzee preschool photos&quot;</strong>? 
							Explore our image gallery above showcasing our modern classrooms, safe play areas, activity zones, and happy children. 
							Schedule a visit to experience our preschool firsthand!
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Kasavanahalli Directions - How to Reach Us
						</h3>
						<p className="mb-4">
							Need <strong>&quot;Kasavanahalli directions&quot;</strong>? We&apos;re located on Kasavanahalli Main Road, 
							easily accessible from Sarjapur Road. Visible landmarks nearby include major residential complexes and the 
							Kasavanahalli signal. For exact directions and van service routes, please <a href="/contact" className="text-purple-600 hover:text-purple-800 font-semibold">contact us</a>.
						</p>

						<h3 className="text-2xl font-bold text-purple-700 mb-4 mt-8">
							Enroll Now at Kidzee Kasavanahalli - Admissions Open!
						</h3>
						<p className="mb-4">
							Don&apos;t wait! Admissions are open for <strong>Playgroup, Nursery, Junior KG, and Senior KG</strong> programs. 
							Whether you&apos;re searching for <strong>&quot;preschool near me,&quot;</strong> <strong>&quot;schools near me,&quot;</strong> or 
							the <strong>&quot;best preschool in Kasavanahalli,&quot;</strong> your search ends here. Contact us today for a 
							school tour and enrollment details.
						</p>

						<div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8 rounded-r-lg">
							<p className="font-bold text-purple-700 text-lg mb-2">Ready to Give Your Child the Best Start?</p>
							<p className="text-gray-700 mb-4">
								Call us at <a href="tel:+918884750750" className="text-purple-600 hover:text-purple-800 font-semibold">+91-8884750750</a> or 
								<a href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school" className="text-purple-600 hover:text-purple-800 font-semibold ml-1">WhatsApp us</a> to 
								schedule a visit. Limited seats available!
							</p>
						</div>
					</div>
				</div>
			</section>
			</div>
	);
}
