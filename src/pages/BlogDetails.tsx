import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play } from 'lucide-react';
import { blogDetails } from '../data/blogDetails';
import { StandardCard, blogPosts } from './Blog';

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Default to ID "1" if not found for demo purposes, or use fallback
    const post = blogDetails[id || "1"] || blogDetails["default"];

    // Use the first 3 posts from the main blog list as "Recent blogs"
    const recentPosts = blogPosts.slice(0, 3);

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="w-full bg-background min-h-screen font-inter p-2 text-secondary">
            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#161A18] rounded-[30px] lg:m-[10px] px-0 md:px-10 lg:px-[40px] xl:px-[60px] py-12 text-[#F3FFC9]">
                <div className="bg-[#161A18] rounded-[30px] p-6 md:p-10 lg:p-[60px] flex flex-col items-center text-center">
                    {/* Meta */}
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                        <span className="bg-[#0E100F] text-[#F3FFC9] px-4 py-2 rounded-[30px] text-[12px] md:text-[15.4px]">
                            {post.category}
                        </span>
                        <span className="text-[#A9AD9B] text-[15.1px]">
                            {post.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-[22px] md:text-[55px] font-medium leading-[1.2] text-[#F3FFC9] max-w-[830px] mb-8">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-[#F3FFC9] text-[14px] md:text-[17px] leading-[1.5] max-w-[620px] mb-12">
                        {post.excerpt}
                    </p>

                    {/* Hero Image */}
                    <div className="w-full max-w-[920px] h-[250px] md:h-[345px] rounded-[20px] md:rounded-[30px] overflow-hidden">
                        <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="py-10 px-6 md:px-8">
                <div className="max-w-[900px] mx-auto">

                    <h2 className="text-[24px] md:text-[30px] font-medium text-[#F3FFC9] leading-[1.4] mb-6">
                        {post.content.introHeading}
                    </h2>

                    <p className="text-[14px] md:text-[17px] leading-[1.6] mb-10 text-[#A9AD9B]">
                        {post.content.introText}
                    </p>

                    {/* List */}
                    <ul className="space-y-4 mb-10">
                        {post.content.listItems.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-[14px] md:text-[17px] text-[#A9AD9B] leading-[1.5]">
                                <div className="w-2 h-2 bg-[#A9AD9B] rounded-full mt-2.5 shrink-0"></div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="text-[14px] md:text-[17px] leading-[1.6] mb-16 text-[#A9AD9B]">
                        {post.content.midText}
                    </p>

                    {/* Video Section */}
                    <div className="w-full h-[300px] md:h-[517px] rounded-[10px] overflow-hidden relative mb-16 group">
                        {isPlaying && post.content.videoUrl ? (
                            <iframe
                                className="w-full h-full"
                                src={post.content.videoUrl}
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <>
                                <img
                                    src={post.content.videoThumbnail || post.heroImage}
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="w-[68px] h-[48px] bg-[#FF0033] rounded-[12px] flex items-center justify-center hover:scale-110 transition-transform"
                                    >
                                        <Play fill="white" stroke="none" size={24} />
                                    </button>
                                </div>
                                {/* Video Info Overlay */}
                                <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/60 to-transparent flex justify-between items-start pointer-events-none">
                                    <h3 className="text-white text-[18px] font-medium truncate pr-4">{post.title}</h3>
                                </div>
                            </>
                        )}
                    </div>

                    <h2 className="text-[26px] md:text-[30px] font-medium text-[#F3FFC9] leading-[1.4] mb-6">
                        {post.content.secondaryHeading}
                    </h2>

                    <p className="text-[14px] md:text-[17px] leading-[1.6] mb-12 text-[#A9AD9B]">
                        {post.content.secondaryText}
                    </p>

                    {/* Quote Block */}
                    <div className="bg-[#161A18] rounded-[10px] p-6 md:p-10 lg:p-14 mb-12 text-center">
                        <p className="text-[14px] md:text-[19px] font-normal leading-[1.6] text-[#F3FFC9]">
                            "{post.content.quote}"
                        </p>
                    </div>

                    <p className=" text-[14px] md:text-[17px] leading-[1.6] text-[#A9AD9B]">
                        {post.content.closingText}
                    </p>
                </div>
            </section>

            {/* --- RECENT BLOGS --- */}
            <section className="py-8 px-2 md:px-8 bg-black">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[#F3FFC9] ml-4 md:ml-0 text-[28px] md:text-[40px] font-normal mb-12">
                        Recent blogs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentPosts.map((p, idx) => (
                            <StandardCard key={idx} post={p} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;
