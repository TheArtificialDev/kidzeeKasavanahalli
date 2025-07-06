"use client";

import { useState } from 'react';
import Link from 'next/link';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  date: string;
}

interface BlogSearchProps {
  blogPosts: BlogPost[];
}

export default function BlogSearch({ blogPosts }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter blogs based on search term and selected tag
  const filteredBlogs = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      {/* Search and Filter Section */}
      <ScrollAnimationWrapper animation="slide-down" delay={1}>
        <div className="mb-12 bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              >
                <option value="">All Categories</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tag Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === ''
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((post, index) => (
          <ScrollAnimationWrapper key={post.slug} animation="scale" delay={Math.floor(index / 3) + 1}>
            <Link href={`/blogs/${post.slug}`} className="block group focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-xl">
              <article className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-xl shadow-lg border-2 border-purple-200 hover:shadow-2xl hover:border-yellow-400 transition-all duration-200 overflow-hidden h-full flex flex-col">
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-purple-700 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {post.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between px-6 pb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-purple-700 font-semibold px-4 py-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </article>
            </Link>
          </ScrollAnimationWrapper>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <ScrollAnimationWrapper animation="fade" delay={1}>
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        </ScrollAnimationWrapper>
      )}
    </>
  );
}
