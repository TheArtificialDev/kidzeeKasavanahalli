import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs & Updates | Kidzee Kasavanahalli',
  description: 'Expert insights, parenting tips, child development, and school updates from Kidzee Kasavanahalli. Stay connected with our preschool community.',
};

const blogCategories = [
  {
    title: '🧠 Child Development',
    topics: [
      'The Science Behind Play-Based Learning',
      'Milestone Moments: What to Expect at Each Age',
      "Supporting Your Child's Emotional Intelligence",
    ],
  },
  {
    title: '👨‍👩‍👧‍👦 Parenting Tips',
    topics: [
      'Morning Routines That Work',
      'Positive Discipline Strategies',
      'Screen Time Guidelines for Preschoolers',
    ],
  },
  {
    title: '🎓 Education Insights',
    topics: [
      'School Readiness: More Than Just ABCs and 123s',
      'Choosing the Right School',
      'The Importance of Art and Music in Early Education',
    ],
  },
  {
    title: '🏠 Home Learning Activities',
    topics: [
      '10 Educational Activities Using Household Items',
      'Cooking with Kids: Math and Science in the Kitchen',
      'Nature Walks: Outdoor Learning Adventures',
    ],
  },
  {
    title: '📅 School Updates & News',
    topics: [
      'Monthly newsletters',
      'Event announcements',
      'Program updates',
    ],
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">Expert Insights for Modern Parents</h1>
          <p className="text-xl text-gray-700 mb-8">Your Guide to Raising Happy, Confident Children</p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {blogCategories.map((cat, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">{cat.title}</h2>
                <ul className="space-y-3">
                  {cat.topics.map((topic, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">📖</span>
                      <span className="text-gray-700 hover:text-purple-700 cursor-pointer transition-colors">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Never Miss Important Updates</h2>
            <p className="text-gray-700 mb-6">Get the latest blog posts, parenting tips, and school news delivered to your inbox weekly.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 border border-gray-300 p-3 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" 
              />
              <button className="bg-yellow-400 text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
