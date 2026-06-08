import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import image from "../../assets/post-1.jpg.png"
import image1 from "../../assets/post-2.jpg.png"

export default function IndustrialBlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Practices Reducing Waste in Industrial Production",
      image: image,
      link: "#"
    },
    {
      id: 2,
      title: "Advanced Robotics Revolutionizing Industrial Workflows",
      image: image1,
      link: "#"
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfc] text-[#222] font-sans antialiased px-10 py-20 lg:px-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* HEADER BLOCK                                                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
          <div className="lg:col-span-7">
            {/* Tagline Indicator Badge */}
            <div className="flex items-center gap-2 text-[#f07e13] uppercase tracking-[0.25em] text-[10px] font-black mb-3">
              <span className="text-start w-1.5 h-1.5 border border-[#f07e13] rounded-xs rotate-45 flex-shrink-0" />
              Latest Blog
            </div>
            {/* Headline Title */}
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[40px] font-light tracking-tight text-slate-900 leading-[1.25]">
              Insights from our <br />
              <span className="font-extrabold block mt-0.5">latest blogs</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-start text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-md lg:ml-auto font-light">
              Stay updated with the latest trends, innovations, and expert insights in the manufacturing and industrial sectors.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE BLOG CARDS GRID                                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {blogPosts.map((post) => (
            <a 
              key={post.id} 
              href={post.link}
              className="group flex flex-col w-full text-left cursor-pointer"
            >
              {/* Image Frame Container */}
              <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden bg-slate-100 shadow-xs mb-5">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                {/* Subtle dark ambient gradient overlay on top-left area */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Micro-interactive Action Ribbon */}
              <div className="flex items-start justify-between gap-6 px-1">
                <h3 className="text-start text-slate-800 text-sm sm:text-[15px] font-bold tracking-tight leading-snug max-w-[82%] group-hover:text-[#f07e13] transition-colors duration-200">
                  {post.title}
                </h3>
                
                {/* Bright Industrial Orange Action Square */}
                <div className="w-9 h-9 rounded-xl bg-[#f07e13] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/10 transition-all duration-300 group-hover:bg-slate-900 group-hover:shadow-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}