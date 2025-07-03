# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Copilot Instructions - Kidzee Kasavanahalli Website

## Project Overview
Building a preschool website for Kidzee Kasavanahalli - a 14-year-old preschool in Bangalore, India. Primary goal: Convert local parents into enrolled families through trust-building and clear information presentation.

## Business Context
- **Target Audience**: Parents with children aged 2-6 years in Kasavanahalli, Bangalore
- **Key Selling Points**: 13+  years experience, 1400+ children served, experienced teachers (10+ years), Péntemind curriculum
- **Programs**: Playgroup (2-3yrs), Nursery (3-4yrs), Junior KG (4-5yrs), Senior KG (5-6yrs)
- **Additional Services**: Daycare, van service, karate, drawing, tuition classes
- **Brand Colors**: Purple (#6B46C1), Yellow (#FDE047), Light Purple (#E9D5FF)
- **Domain**: kidzeekasavanahalli.in

## Technical Requirements

### Technology Stack (Keep Simple & Stable)
- **Framework**: Next.js 13+ with App Router (stable version)
- **Language**: TypeScript (but keep types simple)
- **Styling**: Tailwind CSS (utility-first, no custom CSS)
- **No External Libraries**: Avoid unnecessary dependencies
- **No Animations**: Keep it simple, fast-loading
- **No JavaScript Frameworks**: Minimal client-side JS

### Code Standards
```typescript
// Simple, readable TypeScript
interface SimpleProps {
  title: string;
  description?: string;
}

// Clean, semantic HTML
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-purple-700 mb-8">Section Title</h2>
  </div>
</section>
```

### File Structure
```
src/
├── app/
│   ├── page.tsx (Home)
│   ├── programs/page.tsx
│   ├── activities/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blogs/page.tsx
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── ProgramCard.tsx
└── lib/
    ├── metadata.ts
    └── constants.ts
```

## SEO Requirements (CRITICAL)

### Meta Tags for Every Page
```typescript
export const metadata: Metadata = {
  title: "Specific Page Title | Kidzee Kasavanahalli - Best Preschool in Bangalore",
  description: "Compelling 150-character description with local keywords",
  keywords: "preschool kasavanahalli, kindergarten bangalore, daycare kasavanahalli, best preschool bangalore",
  openGraph: {
    title: "Page Title",
    description: "Description",
    url: "https://kidzeekasavanahalli.in/page-url",
    images: ["/images/og-image.jpg"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title",
    description: "Description",
  },
  alternates: {
    canonical: "https://kidzeekasavanahalli.in/page-url"
  }
}
```

### Required Schema Markup
```typescript
// Local Business Schema (Home page)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kidzee Kasavanahalli",
  "description": "Best preschool and daycare in Kasavanahalli, Bangalore",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Full Address]",
    "addressLocality": "Kasavanahalli",
    "addressRegion": "Karnataka",
    "postalCode": "[Postal Code]",
    "addressCountry": "IN"
  },
  "telephone": "[Phone Number]",
  "url": "https://kidzeekasavanahalli.in",
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-13:00",
  "priceRange": "Contact for details"
}
```

### SEO-Optimized Content Guidelines
- **H1 Tags**: One per page, include main keyword
- **H2-H6**: Hierarchical structure, include related keywords
- **Image Alt Text**: Descriptive with keywords (e.g., "Children playing at Kidzee Kasavanahalli preschool playground")
- **Internal Linking**: Link between related pages
- **Local Keywords**: Include "Kasavanahalli", "Bangalore", "Bengaluru" naturally

## Content Requirements

### Key Messages to Reinforce
1. **Experience**: "13+  years of excellence in Kasavanahalli"
2. **Trust**: "1400+ children nurtured successfully"
3. **Quality**: "Teachers with 10+ years experience"
4. **Convenience**: "Daycare, van service, worry-free for working parents"
5. **Curriculum**: "Péntemind philosophy for holistic development"

### Required Pages Content Structure

#### Home Page Must Include:
- Hero: "Where Young Minds Bloom Into Future Leaders"
- Trust indicators: 13+  years, 1400+ children, experienced teachers
- Program overview: All 4 age groups with hours and focus
- Testimonials carousel
- Contact CTA with phone/WhatsApp

#### Contact Page Must Include:
- Phone: [Primary contact number]
- Address: Full address with landmarks
- Hours: 9 AM - 6 PM (Mon-Fri), 10 AM - 1 PM (Sat)
- Van service areas
- Visit booking form

### Component Patterns

#### Program Card Component
```typescript
interface ProgramCardProps {
  title: string;
  ageRange: string;
  duration: string;
  focus: string;
  keyBenefits: string[];
  icon: string;
}

const ProgramCard = ({ title, ageRange, duration, focus, keyBenefits, icon }: ProgramCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className="text-xl font-bold text-purple-700">{title}</h3>
    </div>
    <p className="text-gray-600 mb-2">Age: {ageRange} | Duration: {duration}</p>
    <p className="text-gray-700 mb-4">{focus}</p>
    <ul className="text-sm text-gray-600">
      {keyBenefits.map((benefit, index) => (
        <li key={index} className="flex items-center mb-1">
          <span className="text-green-500 mr-2">✓</span>
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);
```

#### Contact Form Component
```typescript
const ContactForm = () => (
  <form className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-purple-700 mb-4">Schedule a Visit</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Parent Name"
        className="border border-gray-300 p-3 rounded focus:border-purple-500 focus:outline-none"
        required
      />
      <input
        type="text"
        placeholder="Child's Name"
        className="border border-gray-300 p-3 rounded focus:border-purple-500 focus:outline-none"
        required
      />
      <input
        type="number"
        placeholder="Child's Age (Years)"
        className="border border-gray-300 p-3 rounded focus:border-purple-500 focus:outline-none"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="border border-gray-300 p-3 rounded focus:border-purple-500 focus:outline-none"
        required
      />
    </div>
    <select className="w-full border border-gray-300 p-3 rounded focus:border-purple-500 focus:outline-none mt-4">
      <option>Select Program Interest</option>
      <option>Playgroup (2-3 years)</option>
      <option>Nursery (3-4 years)</option>
      <option>Junior KG (4-5 years)</option>
      <option>Senior KG (5-6 years)</option>
      <option>Daycare Services</option>
      <option>Extracurricular Activities</option>
    </select>
    <textarea
      placeholder="Any specific questions or requirements?"
      className="w-full border border-gray-300 p-3 rounded focus:border-purple-500 focus:outline-none mt-4"
      rows={3}
    ></textarea>
    <button
      type="submit"
      className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-700 font-bold py-3 px-6 rounded mt-4 transition-colors"
    >
      Schedule Visit
    </button>
  </form>
);
```

## Design Guidelines

### Color Usage
- **Primary Purple** (#6B46C1): Headers, important text, borders
- **Yellow** (#FDE047): CTA buttons, highlights, accents
- **Light Purple** (#E9D5FF): Background sections, subtle highlights
- **Gray** (#6B7280): Body text, secondary information
- **White** (#FFFFFF): Backgrounds, cards

### Typography Scale
```css
/* Tailwind classes to use */
.text-4xl    /* Hero headlines */
.text-3xl    /* Section headers */
.text-xl     /* Subsection headers */
.text-lg     /* Important body text */
.text-base   /* Regular body text */
.text-sm     /* Secondary information */
```

### Responsive Breakpoints
- **Mobile First**: Design for 320px+ screens
- **Tablet**: md: breakpoint for 768px+
- **Desktop**: lg: breakpoint for 1024px+
- **Large Desktop**: xl: breakpoint for 1280px+

### Common Layout Pattern
```typescript
<section className="py-12 md:py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
        Section Title
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Section description that explains the value proposition
      </p>
    </div>
    {/* Section content */}
  </div>
</section>
```

## Performance Requirements

### Image Optimization
- Use Next.js Image component for all images
- WebP format preferred
- Alt text required for SEO
- Lazy loading enabled by default

### Loading Performance
- Target: <3 seconds initial load
- Minimize JavaScript bundle size
- Use static generation where possible
- Compress all assets

### Mobile Optimization
- Touch-friendly buttons (min 44px)
- Readable text (min 16px)
- Fast loading on 3G networks
- Thumb-friendly navigation

## Content Constants

### Business Information
```typescript
export const BUSINESS_INFO = {
  name: "Kidzee Kasavanahalli",
  phone: "[TO BE ADDED]",
  whatsapp: "[TO BE ADDED]",
  email: "[TO BE ADDED]",
  address: "[TO BE ADDED]",
  hours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 1:00 PM (Visits Only)",
    sunday: "Closed"
  },
  established: "2010",
  childrenServed: "1400+",
  experience: "13+ "
};

export const PROGRAMS = [
  {
    name: "Playgroup",
    age: "2-3 Years",
    duration: "3 hours",
    focus: "Social skills, basic motor development"
  },
  {
    name: "Nursery", 
    age: "3-4 Years",
    duration: "3 hours",
    focus: "Language development, pre-reading skills"
  },
  {
    name: "Junior KG",
    age: "4-5 Years", 
    duration: "4 hours",
    focus: "Pre-academic skills, logical thinking"
  },
  {
    name: "Senior KG",
    age: "5-6 Years",
    duration: "4 hours", 
    focus: "Academic preparation, leadership skills"
  }
];
```

## Testing Requirements
- Test all forms and contact methods
- Verify mobile responsiveness
- Check page load speeds
- Validate all links and navigation
- Test contact form submissions
- Verify schema markup with Google's tools

Remember: Keep it simple, fast, and focused on converting parents into visitors and visitors into enrolled families. Every element should serve the business goal of increasing enrollments.