import React from 'react';
import { Link } from 'react-router-dom';

// Types
export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt?: string;
  image: string;
  isFeatured?: boolean;
}

// Mock Data
export const blogPosts: BlogPost[] = [
  {
    id: 'Best-practices-for-keeping-your-data-secure',
    category: 'Financial Planning',
    date: 'August 13, 2025',
    title: 'Best practices for keeping your data secure',
    excerpt: 'Create complex passwords and enable MFA for an extra layer of security. Regularly update software, apps, and operating systems to fix vulnerabilities.',
    image: '/image/blog-1.png',
    isFeatured: true
  },
  {
    id: 'How-to-scale-your-B2B-sales-funnel-in-2025',
    category: 'Team Collaboration',
    date: 'August 13, 2025',
    title: 'How to scale your B2B sales funnel in 2025',
    image: '/image/blog-2.png'
  },
  {
    id: 'How-to-scale-your-B2B-sales-funnel-in-2025-2',
    category: 'Team Collaboration',
    date: 'August 13, 2025',
    title: 'How to scale your B2B sales funnel in 2025',
    image: '/image/blog-2.png'
  },
  {
    id: 'The-power-of-market-research-in-B2B-strategy',
    category: 'Productivity',
    date: 'August 13, 2025',
    title: 'The power of market research in B2B strategy',
    image: '/image/blog-3.png'
  },
  {
    id: 'Choosing-the-right-CRM-for-your-B2B-sales-team',
    category: 'Data & Analytics',
    date: 'August 13, 2025',
    title: 'Choosing the right CRM for your B2B sales team',
    image: '/image/blog-4.png'
  }
];

const BlogHero = () => (
  <section className="py-[7px] px-2">
    <div className="max-w-[1500px] mx-auto bg-[#161A18] text-center rounded-[30px] px-6 md:px-[30px] lg:px-[80px] py-16 md:py-24 lg:py-[115px]">
      <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-[#F3FFC9] animate-fade-in-up">
        Our blogs
      </h1>
    </div>
  </section>
);

const FeaturedCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link to={`/blog/${post.id}`} className="bg-[#161A18] rounded-[30px] p-4 flex flex-col md:flex-row md:gap-8 h-full group cursor-pointer border border-transparent hover:border-surfaceLight transition-colors">
    {/* Image Side */}
    <div className="md:w-1/2 h-[200px] md:h-auto rounded-[20px] overflow-hidden relative">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute top-5 left-5 bg-[#0E100F] px-3 py-1.5 rounded-[5px] text-[#F9FFE5] text-[15px]">
        Featured
      </div>
    </div>

    {/* Content Side */}
    <div className="md:w-1/2 flex flex-col justify-center py-4 md:pr-10">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="bg-[#0E100F] text-[#A9AD9B] px-4 py-1 rounded-[40px] text-[10px] md:text-[13.5px]">
          {post.category}
        </span>
        <span className="text-[#A9AD9B] text-[13.2px]">
          {post.date}
        </span>
      </div>

      <h2 className="text-[#F3FFC9] text-[18px] md:text-[28px] font-medium leading-[1.4] mb-6">
        {post.title}
      </h2>

      <p className="text-[#A9AD9B] text-[14px] md:text-[17px] leading-[1.5]">
        {post.excerpt}
      </p>
    </div>
  </Link>
);

export const StandardCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link to={`/blog/${post.id}`} className="bg-[#161A18] rounded-[30px] p-4 h-full flex flex-col group cursor-pointer border border-transparent hover:border-surfaceLight transition-colors">
    <div className="rounded-[20px] overflow-hidden h-[280px] mb-6 relative">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>

    <div className="flex flex-col flex-grow px-2">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <span className="bg-[#0E100F] text-[#A9AD9B] px-4 py-1 rounded-[40px] text-[10.5px] md:text-[13px]">
          {post.category}
        </span>
        <span className="text-[#A9AD9B] text-[13.2px]">
          {post.date}
        </span>
      </div>

      <h3 className="text-[#F3FFC9] text-[16px] md:text-[22px] font-medium leading-[1.4]">
        {post.title}
      </h3>
    </div>
  </Link>
);

const Blog: React.FC = () => {
  const featuredPost = blogPosts[0];
  const topSidePost = blogPosts[1];
  const gridPosts = blogPosts.slice(2);

  return (
    <div className="w-full bg-background min-h-screen font-inter">
      <BlogHero />

      <section className="py-10 px-2 md:px-8 max-w-[1500px] mx-auto">
        {/* Top Section: Featured + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <FeaturedCard post={featuredPost} />
          </div>
          <div className="lg:col-span-1">
            <StandardCard post={topSidePost} />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post, idx) => (
            <StandardCard key={idx} post={post} />
          ))}
        </div>
      </section>


    </div>
  );
};

export default Blog;
