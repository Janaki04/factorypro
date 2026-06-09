import React, { useState } from 'react';
import image from "../../assets/our-process-image.jpg.png"

export default function IndustrialProcessSection() {
  const [activeStep, setActiveStep] = useState(1);

  const processSteps = [
    {
      id: 1,
      number: "01",
      title: "Understanding Your Needs",
      description: "We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.",
      image: image
    },
    {
      id: 2,
      number: "02",
      title: "Design and Planning",
      description: "Our team collaborates to create detailed project plans, ensuring all aspects of the process.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      number: "03",
      title: "Implementation",
      description: "Utilizing advanced technologies and skilled personnel, we execute the project flawlessly.",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfc] text-[#222] font-sans antialiased px-13 py-15 lg:px-20 lg:py-14">
      <div className="max-w-7xl mx-auto">
        
   
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-[#f07e13] uppercase tracking-[0.25em] text-[10px] font-black mb-3">
              <span className="text-start w-1.5 h-1.5 border border-[#f07e13] rounded-xs rotate-45 flex-shrink-0" />
              Our Process
            </div>
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[40px] font-light tracking-tight text-slate-900 leading-[1.25]">
              Streamlined processes <span className="font-medium text-slate-900">for</span> <br />
              <span className="font-extrabold block mt-0.5">optimal efficiency</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-start text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-md lg:ml-auto font-light">
              Our process is designed to maximize efficiency and quality at every stage of production. By integrating advanced technologies and best practices, we ensure seamless workflows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[540px] aspect-square rounded-[40px] overflow-hidden shadow-md bg-slate-100">
              {processSteps.map((step) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    activeStep === step.id 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-95 z-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4 w-full max-w-[540px] mx-auto lg:mx-0">
            {processSteps.map((step) => {
              const isSelected = activeStep === step.id;
              
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative flex items-start gap-6 p-6 sm:p-8 rounded-[32px] transition-all duration-300 cursor-pointer select-none ${
                    isSelected 
                      ? 'bg-[#f07e13] text-white shadow-lg shadow-[#f07e13]/10 translate-x-2' 
                      : 'bg-transparent text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-2xl sm:text-[32px] font-black text-start tracking-tight leading-none mt-0.5 transition-colors duration-200 ${
                    isSelected ? 'text-white' : 'text-[#f07e13]'
                  }`}>
                    {step.number}
                  </span>

                  <div className="flex flex-col">
                    <h3 className={`text-sm sm:text-[15px] font-bold text-start tracking-tight mb-2 transition-colors duration-200 ${
                      isSelected ? 'text-white' : 'text-slate-900 group-hover:text-[#f07e13]'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-[11.5px] text-start sm:text-xs leading-relaxed transition-colors duration-200 ${
                      isSelected ? 'text-white/80 font-light' : 'text-gray-400 font-light'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}