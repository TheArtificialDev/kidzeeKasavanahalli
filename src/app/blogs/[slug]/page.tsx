import { blogPosts } from '../data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return notFound();
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blogs" className="text-purple-700 hover:underline text-lg mb-8 inline-block">← Back to Blogs</Link>
        <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-4">{post.date}</div>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="bg-yellow-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
          ))}
        </div>
        <article className="prose prose-lg max-w-none text-gray-800">
          {post.content}
        </article>
      </div>
    </section>
  );
}
