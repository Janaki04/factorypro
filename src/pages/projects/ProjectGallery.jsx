import React, { useState } from 'react';

export default function ProjectGallery() {
  const categories = ['All', 'Automation', 'Development', 'Infrastructure', 'Manufacturing', 'Sustainability'];

  const [activeCategory, setActiveCategory] = useState('All');

  const projectData = [
    {
      id: 1,
      title: 'Total Quality Management Implementation',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Advanced Research In Material Science',
      category: 'Automation',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Workplace Safety Enhancement Initiative',
      category: 'Infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      title: 'Robotic Process Automation Deployment',
      category: 'Infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      title: 'Energy-Efficient Manufacturing Systems',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1513828583835-c541714b1d85?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      title: 'Redesigning Factory Layouts For Efficiency',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
    
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 mb-16 text-xs sm:text-sm font-semibold tracking-wide text-gray-500">
          {categories.map((category, idx) => (
            <React.Fragment key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`transition-colors duration-200 cursor-pointer focus:outline-none px-2 py-1 ${
                  activeCategory === category 
                    ? 'text-[#f07e13]' 
                    : 'hover:text-black text-gray-700'
                }`}
              >
                {category === 'Sustainability' ? '• Sustainability' : category}
              </button>
              
              {idx < categories.length - 1 && (
                <span className="text-gray-300 font-light select-none text-[11px]">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 px-14 gap-y-12 transition-all duration-300">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col items-center text-center animate-fade-in"
            >
              
              <div className="relative w-full aspect-[4/3] h-80 rounded-[32px] overflow-hidden bg-gray-100 shadow-sm mb-5">
                
                <span className="absolute top-5 left-5 z-20 px-3 py-1.5 bg-black/30 backdrop-blur-md text-white text-[11px] font-medium tracking-wider rounded-md pointer-events-none transition-opacity group-hover:bg-black/50">
                  {project.category}
                </span>

                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-80 object-cover transform duration-500 scale-100 group-hover:scale-103"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              </div>

              <h3 className="text-gray-800 text-[15px] sm:text-[16px] font-bold tracking-tight leading-snug px-4 group-hover:text-[#f07e13] transition-colors duration-150">
                {project.title}
              </h3>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="w-full text-center py-20 border border-dashed border-gray-200 rounded-3xl">
            <p className="text-gray-400 text-sm font-medium">No production implementations logged under this track yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}