// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <Link href={blog.url || '#'} target="_blank" className="group">
      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative cursor-pointer">
        <div className="h-44 lg:h-52 w-auto overflow-hidden rounded-t-lg">
          <Image
            src={blog.cover_image}
            height={1080}
            width={1920}
            alt={blog.title}
            className='h-full w-full group-hover:scale-110 transition-all duration-300'
          />
        </div>
        <div className="p-2 sm:p-3 flex flex-col">
          <div className="flex justify-between items-center text-[#16f2b3] text-sm">
            <p>{timeConverter(blog.published_at)}</p>
            <div className="flex items-center gap-3">
              <p className="flex items-center gap-1">
                <BsHeartFill />
                <span>{blog.public_reactions_count || 0}</span>
              </p>
              {blog.comments_count > 0 &&
                <p className="flex items-center gap-1">
                  <FaCommentAlt />
                  <span>{blog.comments_count}</span>
                </p>
              }
            </div>
          </div>
          <p className='my-2 lg:my-3 text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
          <p className='mb-2 text-sm text-[#16f2b3]'>
            {blog.reading_time_minutes ? `${blog.reading_time_minutes} Min Read` : ''}
          </p>
          <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
