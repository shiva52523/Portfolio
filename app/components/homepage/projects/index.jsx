  "use client";

  import Link from 'next/link';
  import { useEffect, useRef, useState } from 'react';
  import { projectsData } from '@/utils/data/projects-data';
  import ProjectCard from './project-card';

  const ProjectsPreview = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const stickyRefs = useRef([]);

    // Sticky scroll animation
    useEffect(() => {
      const handleScroll = () => {
        stickyRefs.current.forEach((el, index) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const offset = Math.min(Math.max(-rect.top / 10, -20), 20);
          el.style.transform = `translateY(${offset}px)`;
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div id="projects" className="relative z-50 my-12 lg:my-24">
        {/* Header */}
        <div className="flex items-center justify-start relative mb-6">
          <span className="bg-[#1a1443] w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>

        {/* Preview Cards (Sticky + Hover) */}
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, visibleCount).map((project, index) => (
            <div
              key={index}
              ref={(el) => (stickyRefs.current[index] = el)}
              className={`w-full mx-auto max-w-2xl transition-all duration-500 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2`}
              style={{
                position: index < 4 ? 'sticky' : 'relative',
                top: index < 4 ? '20px' : 'auto',
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects Button (Interactive) */}
        <div className="flex justify-center mt-6">
          <Link
            href="/projects"
            className="relative inline-flex items-center px-6 py-3 overflow-hidden font-medium text-white rounded-md group bg-gradient-to-r from-purple-500 to-violet-600 hover:from-violet-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 bg-white group-hover:opacity-10 rounded-md"></span>
            <span className="relative">View All Projects</span>
          </Link>
        </div>
      </div>
    );
  };

  export default ProjectsPreview;
