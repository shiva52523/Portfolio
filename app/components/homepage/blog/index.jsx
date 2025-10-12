// @flow strict
"use client";

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { myBlogs } from '@/utils/data/my-blogs';

const Blog = () => {
  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background Glow */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      {/* Top Divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Research & Developments
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Blog Cards (First 3 Only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 xl:gap-10">
        {myBlogs.slice(0, 3).map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8 lg:mt-12">
        <Link
          href="/blog"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white uppercase tracking-wider transition-all duration-300 hover:gap-4 hover:scale-105 hover:shadow-lg"
        >
          <span>View Projects & Research</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
