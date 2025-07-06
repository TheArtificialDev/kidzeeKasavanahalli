import { Metadata } from 'next';
import { blogPosts } from './data';
import BlogSearch from '@/components/BlogSearch';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

export const metadata: Metadata = {
  title: 'Parenting Tips & Child Development Blog | Kidzee Kasavanahalli - Expert Insights',
  description: 'Expert parenting tips, child development insights, preschool updates from Kidzee Kasavanahalli. Essential reading for modern parents in Bangalore. Stay connected with our community.',
  keywords: 'parenting tips Bangalore, child development blog, preschool insights, early childhood education tips, parenting advice Kasavanahalli, Kidzee blog, modern parenting guidance Bangalore',
  openGraph: {
    title: 'Parenting Tips & Child Development Blog | Kidzee Kasavanahalli',
    description: 'Expert parenting tips, child development insights, preschool updates. Essential reading for modern parents in Bangalore.',
    url: 'https://kidzeekasavanahalli.in/blogs',
    images: ['/images/graduation day.jpg'],
  },
  alternates: {
    canonical: 'https://kidzeekasavanahalli.in/blogs',
  },
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimationWrapper animation="fade">
        <section className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimationWrapper animation="slide-up" delay={1}>
              <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">Expert Insights for Modern&nbsp;Parents</h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="slide-up" delay={2}>
              <p className="text-xl text-gray-700 mb-8">Your Guide to Raising Happy, Confident&nbsp;Children</p>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Blog Posts Grid and Search Section only (cards below) */}
      <ScrollAnimationWrapper animation="slide-up">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <BlogSearch blogPosts={blogPosts} />
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* WhatsApp CTA Section */}
      <ScrollAnimationWrapper animation="slide-up">
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimationWrapper animation="bounce" delay={1}>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
                Have Questions About Our Content?
              </h2>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="slide-up" delay={2}>
              <p className="text-lg text-gray-600 mb-8">
                Want to discuss any of our blog topics or need personalized parenting advice? Let&apos;s chat!
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="scale" delay={3}>
              <a 
                href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20blogs"
                className="inline-block bg-yellow-400 text-purple-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                💬 WhatsApp Us About Our Blogs
              </a>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </div>
  );
}
