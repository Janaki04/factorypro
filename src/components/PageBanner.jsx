import React from 'react';
import Header from './Header';

export default function PageBanner({ titleLight, titleBold, activePage, bgImage }) {
  return (
    <div className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] w-full text-white overflow-hidden font-sans">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${bgImage}')` 
        }}
      />

      {/* Cinematic Dark Progressive Overlay to match design mockups */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Main Container Assembly */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-16 sm:pb-20">
        
        {/* Persistent Global Header Component Context */}
        <Header />

        {/* Dynamic Lower Banner Context Block */}
        <div className="mt-auto max-w-2xl pl-2 sm:pl-4">
          
          {/* Main Dynamic Subtitle Typography Frame */}
          <h1 className="text-start text-4xl sm:text-5xl lg:text-[64px] tracking-tight text-white leading-tight mb-4">
            <span className="font-light">{titleLight} </span>
            <span className="font-extrabold">{titleBold}</span>
          </h1>

          {/* Dynamic Breadcrumb Navigation Ribbon */}
          <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium tracking-wide">
            <a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors duration-150"
            >
              Home
            </a>
            <span className="text-white/40 text-[10px]">•</span>
            <span className="text-[#f07e13] capitalize">{activePage}</span>
          </div>

        </div>

      </div>
    </div>
  );
}