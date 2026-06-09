import React from 'react';
import { Cpu, ShieldCheck, Layers } from 'lucide-react';

export default function CoreStrengths() {
  const features = [
    {
      id: 1,
      icon: <Cpu className="w-6 h-6 stroke-[1.5]" />,
      title: 'Advanced Technology Integration',
      desc: 'We integrate cutting-edge technologies into every aspect of our operations, enhancing efficiency, precision, and innovation to deliver superior industrial solutions.'
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />,
      title: 'Uncompromising Quality Standards',
      desc: 'We uphold the highest quality standards across all processes, ensuring consistency, reliability, and excellence in every product and service we deliver.'
    },
    {
      id: 3,
      icon: <Layers className="w-6 h-6 stroke-[1.5]" />,
      title: 'Continuous Innovation and R&D',
      desc: 'We prioritize ongoing research and development to drive continuous innovation, staying ahead of industry trends and creating advanced solutions that meet evolving market demands.'
    }
  ];

  return (
    <section className="w-full bg-white text-gray-800 font-sans antialiased py-20 px-16 sm:px-18 lg:px-22">
      <div className="max-w-7xl mx-auto">
        
      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#f07e13] uppercase mb-3">
              <span className="text-start w-1.5 h-1.5 bg-[#f07e13] rounded-full inline-block" />
              Our Key Feature
            </div>
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[44px] font-light tracking-tight text-gray-900 leading-[1.15]">
              Core strengths in <br />
              <span className="text-start font-extrabold text-gray-900">industrial innovation</span>
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-start text-gray-400 text-xs sm:text-[13px] font-light leading-relaxed max-w-xl">
              Our expertise in industrial innovation combines advanced technology, sustainable practices, and a skilled workforce to deliver efficient, future-ready solutions that drive industry progress.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100 rounded-[32px] overflow-hidden bg-gray-50/30 shadow-sm">
          
          <div className="p-8 sm:p-12 bg-white border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-start hover:bg-gray-50/50 transition-colors duration-200">
            <div className="w-10 h-10 text-[#f07e13] mb-6 flex items-center justify-start">
              {features[0].icon}
            </div>
            <h3 className="text-start text-base sm:text-lg font-bold text-gray-900 mb-3.5 tracking-tight">
              {features[0].title}
            </h3>
            <p className="text-start text-gray-400 text-xs sm:text-[12.5px] font-light leading-relaxed">
              {features[0].desc}
            </p>
          </div>

          <div className="p-8 sm:p-12 bg-white border-b border-gray-100 flex flex-col justify-start hover:bg-gray-50/50 transition-colors duration-200">
            <div className="w-10 h-10 text-[#f07e13] mb-6 flex items-center justify-start">
              {features[1].icon}
            </div>
            <h3 className="text-start text-base sm:text-lg font-bold text-gray-900 mb-3.5 tracking-tight">
              {features[1].title}
            </h3>
            <p className="text-start text-gray-400 text-xs sm:text-[12.5px] font-light leading-relaxed">
              {features[1].desc}
            </p>
          </div>

          <div className="p-8 sm:p-12 bg-white md:border-r border-gray-100 flex flex-col justify-start hover:bg-gray-50/50 transition-colors duration-200">
            <div className="w-10 h-10 text-[#f07e13] mb-6 flex items-center justify-start">
              {features[2].icon}
            </div>
            <h3 className="text-start text-base sm:text-lg font-bold text-gray-900 mb-3.5 tracking-tight">
              {features[2].title}
            </h3>
            <p className="text-start text-gray-400 text-xs sm:text-[12.5px] font-light leading-relaxed">
              {features[2].desc}
            </p>
          </div>

          <div className="w-full h-full min-h-[280px] relative overflow-hidden bg-gray-900 group">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
              alt="Industrial heavy-duty spark production welding cutting tool"
              className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity duration-300 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}