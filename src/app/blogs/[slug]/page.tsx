import { blogPosts } from '../data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Metadata } from 'next';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Blog Not Found - Kidzee Kasavanahalli',
    };
  }

  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags.join(', ') + ', Kidzee Kasavanahalli, preschool Bangalore',
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://kidzeekasavanahalli.in/blogs/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Kidzee Kasavanahalli'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
    alternates: {
      canonical: `https://kidzeekasavanahalli.in/blogs/${post.slug}`,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return notFound();
  return (
    <ScrollAnimationWrapper animation="fade">
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollAnimationWrapper animation="slide-right" delay={1}>
            <Link href="/blogs" className="text-purple-700 hover:underline text-lg mb-8 inline-block">← Back to Blogs</Link>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="slide-up" delay={2}>
            <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-4">{post.title}</h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fade" delay={3}>
            <div className="text-sm text-gray-500 mb-4">{post.date}</div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="slide-up" delay={4}>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="bg-yellow-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="slide-up" delay={5}>
            <article className="prose prose-lg max-w-none text-gray-800">
              <MarkdownRenderer content={post.content} />
            </article>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}
