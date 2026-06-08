import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import image from "../../assets/testimonial-image.jpg.png"

export default function IndustrialClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialData = [
    {
      id: 1,
      quote: `"The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"`,
      name: "Brooklyn Simmons",
      role: "Homeowner",
      heroImage: image,
      avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: 2,
      quote: `"Their structural automation protocols integration has optimized our assembly parameters to record speeds. The timeline precision and engineering capabilities are genuinely industry-standard."`,
      name: "Marcus Vance",
      role: "Operations Chief",
      heroImage: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80&w=800",
      avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
    },
    {
      id: 3,
      quote: `"An exceptional group to partner with for scalable factory deployments. They took complex machinery constraints and delivered a streamlined interface that our technicians adopted immediately."`,
      name: "Sarah Jenkins",
      role: "Production Lead",
      heroImage: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800",
      avatarImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#F5F5F5] text-[#222] font-sans antialiased px-10 py-12 lg:px-20 lg:py-14 relative overflow-hidden">
      {/* Background Matrix Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#f07e13_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================================================= */}
        {/* INTERACTIVE CAROUSEL FRAME MATRIX                                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* LEFT CONTAINER: RESPONSIVE RADIAL CORNER MAIN SPOTLIGHT IMAGE */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] aspect-square rounded-[44px] overflow-hidden shadow-2xl bg-slate-200">
              {testimonialData.map((item, idx) => (
                <img
                  key={item.id}
                  src={item.heroImage}
                  alt="Industrial workspace setting featuring state-of-the-art machinery panels"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    activeIndex === idx 
                      ? 'opacity-100 scale-100 rotate-0 z-10' 
                      : 'opacity-0 scale-95 z-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTAINER: DYNAMIC TEXT DATA CONTENT OVERVIEW */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            
            {/* Header Badge */}
            <div className="flex items-center gap-2 text-[#f07e13] uppercase tracking-[0.25em] text-[10px] font-black mb-4">
              <span className="text-start w-1.5 h-1.5 border border-[#f07e13] rounded-xs rotate-45 flex-shrink-0" />
              Our Client Say
            </div>

            {/* Layout Main Headline */}
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[40px] font-light tracking-tight text-slate-900 leading-[1.25] mb-8">
              What our satisfied clients <br />
              <span className="text-start font-extrabold block mt-0.5">are saying</span>
            </h2>

            {/* Slider Quote Container Block */}
            <div className="relative min-h-[140px] sm:min-h-[100px] mb-8">
              {testimonialData.map((item, idx) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-500 transform ${
                    activeIndex === idx 
                      ? 'opacity-100 translate-y-0 pointer-events-auto z-10' 
                      : 'opacity-0 translate-y-2 pointer-events-none z-0'
                  }`}
                >
                  <p className="text-start text-gray-400 text-xs sm:text-[13.5px] leading-relaxed max-w-xl font-light">
                    {item.quote}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigators and Avatar Profile Ribbon Splitter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-gray-100">
              
              {/* Dynamic Profile Metadata */}
              <div className="flex items-center gap-3.5 min-h-[50px]">
                <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-slate-300 shadow-inner flex-shrink-0">
                  {testimonialData.map((item, idx) => (
                    <img 
                      key={item.id}
                      src={item.avatarImage} 
                      alt={`Portrait silhouette placeholder profile for ${item.name}`} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <h4 className="text-start text-[14px] font-bold text-slate-900 tracking-tight transition-colors duration-300">
                    {testimonialData[activeIndex].name}
                  </h4>
                  <p className="text-start text-[11px] text-gray-400 font-medium tracking-wide mt-0.5 transition-colors duration-300">
                    {testimonialData[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Functional Interaction Controller Buttons */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-xl bg-[#f07e13] text-white flex items-center justify-center transition-all duration-200 hover:bg-slate-900 shadow-md shadow-orange-500/10 hover:shadow-none cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-11 h-11 rounded-xl bg-[#f07e13] text-white flex items-center justify-center transition-all duration-200 hover:bg-slate-900 shadow-md shadow-orange-500/10 hover:shadow-none cursor-pointer"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE BRAND LOGO ROW GRIDS                                           */}
        {/* ========================================================================= */}
        <div className="pt-10 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-80">
          
          {/* Logo Structure 1 */}
          <div className="flex items-center gap-2 group cursor-pointer select-none">
            <div className="w-5.5 h-5.5 rounded-full bg-[#f07e13] flex items-center justify-center text-white font-black text-[10px] shadow-2xs transition-transform group-hover:scale-105">⚡</div>
            <span className="text-start text-[14px] font-black text-slate-800 tracking-tighter">Logoipsum</span>
          </div>

          {/* Logo Structure 2 */}
          <div className="flex items-center gap-2 group cursor-pointer select-none">
            <div className="w-5.5 h-5.5 rounded-md bg-[#f07e13] flex flex-col gap-0.5 justify-center items-center text-white p-0.5 shadow-2xs transition-transform group-hover:scale-105">
              <span className="text-start w-2.5 h-0.5 bg-white rounded-full" />
              <span className="text-start w-2.5 h-0.5 bg-white rounded-full" />
            </div>
            <span className="text-start text-[14px] font-black text-slate-800 tracking-tighter">Logoipsum</span>
          </div>

          {/* Logo Structure 3 */}
          <div className="flex items-center gap-2 group cursor-pointer select-none">
            <div className="w-5.5 h-5.5 rotate-45 border-2 border-[#f07e13] flex items-center justify-center text-[#f07e13] font-black text-[8px] shadow-2xs transition-transform group-hover:scale-105">◈</div>
            <span className="text-start text-[14px] font-black text-slate-800 tracking-tighter">Logoipsum</span>
          </div>

          {/* Logo Structure 4 */}
          <div className="flex items-center gap-2 group cursor-pointer select-none">
            <div className="w-5.5 h-5.5 rounded-full border-4 border-[#f07e13] flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105">
              <div className="w-1 h-1 rounded-full bg-[#f07e13]" />
            </div>
            <span className="text-[14px] font-black text-slate-800 tracking-tighter">Logoipsum</span>
          </div>

          {/* Logo Structure 5 */}
          <div className="flex items-center gap-2 group cursor-pointer select-none col-span-2 sm:col-span-1">
            <div className="w-5.5 h-5.5 bg-[#f07e13]/10 text-[#f07e13] rounded-md flex items-center justify-center font-bold text-xs shadow-2xs transition-transform group-hover:scale-105">❖</div>
            <span className="text-[14px] font-black text-slate-800 tracking-tighter">Logoipsum</span>
          </div>

        </div>

      </div>
    </section>
  );
}