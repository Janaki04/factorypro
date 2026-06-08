import React, { useState } from 'react';
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/Link.png"
import image4 from "../../assets/image5.jpg"

export default function IndustrialProjectsSection() {
  // Active state for filter selection matching image categories
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Automation', 'Development', 'Infrastructure', 'Manufacturing', 'Sustainability'];

  const projects = [
    {
      id: 1,
      title: "Total Quality Management Implementation",
      category: "Development",
      image: image1
    },
    {
      id: 2,
      title: "Advanced Research In Material Science",
      category: "Automation",
      image: image2
    },
    {
      id: 3,
      title: "Workplace Safety Enhancement Initiative",
      category: "Infrastructure",
      image: image3
    },
    {
      id: 4,
      title: "Robotic Process Automation Deployment",
      category: "Infrastructure",
      image: image4
    }
  ];

  // Filtering Logic
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="w-full bg-white px-6 py-20 lg:px-24 lg:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* HEADER BLOCK                                                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
          <div className="lg:col-span-7">
            {/* Tagline Badge */}
            <div className="flex items-center gap-2 text-[#f07e13] uppercase tracking-[0.25em] text-[10px] font-black mb-3">
              <span className="text-start w-2 h-2 bg-[#f07e13]/10 border border-[#f07e13] rounded-xs rotate-45 flex-shrink-0" />
              Our Work
            </div>
            {/* Title */}
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[40px] font-light tracking-tight text-slate-900 leading-[1.2]">
              Our successful project <br />
              <span className="font-extrabold block mt-1">initiatives</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-start text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-md lg:ml-auto font-light">
              Our successful project initiatives showcase our commitment to excellence and innovation across various industries.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE CATEGORY FILTERS                                               */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-4 pb-4 mb-12 border-b border-gray-100 lg:border-none">
          {categories.map((category, index) => (
            <div key={category} className="flex items-center flex-shrink-0">
              <button
                onClick={() => setActiveCategory(category)}
                className={`text-[12px] font-bold tracking-wide px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'text-[#f07e13] bg-[#f07e13]/5'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
              {index < categories.length - 1 && (
                <span className="text-gray-300 mx-1 sm:mx-2 text-xs font-light select-none">/</span>
              )}
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* COMPOSITED CARDS GRID GRAPHIC                                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col w-full">
              {/* Image Frame Container */}
              <div className="relative h-80 w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-slate-100 shadow-xs mb-5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle Image Vignette Gradient Top Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent opacity-60" />
                
                {/* Absolute Floating Badge (Matches Top-Left Alignment In Reference Screenshot) */}
                <span className="absolute top-6 left-6 px-4 py-1.5 text-[10px] font-semibold text-white/90 bg-white/10 backdrop-blur-md rounded-md tracking-wider border border-white/10 shadow-xs uppercase">
                  {project.category}
                </span>
              </div>

              {/* Centered Descriptive Label Typography */}
              <h3 className="text-center text-slate-800 text-sm sm:text-[15px] font-bold tracking-tight leading-snug px-4 group-hover:text-[#f07e13] transition-colors duration-200">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}