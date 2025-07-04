import { Metadata } from 'next';
import { blogPosts } from './data';
import BlogSearch from '@/components/BlogSearch';

export const metadata: Metadata = {
  title: 'Blogs & Updates | Kidzee Kasavanahalli',
  description: 'Expert insights, parenting tips, child development, and school updates from Kidzee Kasavanahalli. Stay connected with our preschool community.',
};

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

      {/* Blog Posts Grid and Search Section only (cards below) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <BlogSearch blogPosts={blogPosts} />
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

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
            Have Questions About Our Content?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Want to discuss any of our blog topics or need personalized parenting advice? Let's chat!
          </p>
          <a 
            href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20blogs"
            className="inline-block bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
          >
            💬 WhatsApp Us About Our Blogs
          </a>
        </div>
      </section>
    </div>
  );
}
