"use client";

import { useEffect, useRef } from "react";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "../components/homepage/projects/project-card";

export default function ProjectsPage() {
  const cardRefs = useRef([]);

  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("fadeInUp");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto my-16 px-4">
      <h1 className="text-4xl font-bold mb-12 text-white text-center">
        All Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative bg-[#1a1443] rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 opacity-0"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .fadeInUp {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 0.6s ease-out;
        }

        .grid > div {
          transform: translateY(20px);
        }
      `}</style>
    </div>
  );
}
