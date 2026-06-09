import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Phone, Mail } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1); 

  const faqs = [
    {
      id: 0,
      question: "What industries do you serve?",
      answer: "We support a broad spectrum of sectors including automotive assembly, heavy industrial manufacturing, advanced logistics infrastructure, energy, and automated consumer packaging pipelines."
    },
    {
      id: 1,
      question: "How do you ensure product quality?",
      answer: "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards."
    },
    {
      id: 2,
      question: "What sustainability practices do you follow?",
      answer: "Our processes optimize raw material yield, limit localized structural carbon outputs, minimize industrial byproducts, and safely deploy high-efficiency machinery to limit total electrical loads."
    },
    {
      id: 3,
      question: "Do you offer customized solutions?",
      answer: "Yes, every industrial deployment is tailored meticulously to meet custom production rates, structural facility parameters, and specialized compliance configurations unique to your workflow."
    },
    {
      id: 4,
      question: "How do you handle safety in the workplace?",
      answer: "We follow strict occupational health frameworks, implement clear multi-tiered automation barriers, and hold continuous risk assessment loops to maintain safe working conditions."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="w-full bg-white text-gray-800 font-sans antialiased py-[100px] px-6 sm:px-12 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto">
        
 
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-[60px]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#f07e13] uppercase mb-4">
              <svg className="w-4 h-4 text-[#f07e13]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              FAQS
            </div>
            <h2 className="text-start text-[36px] sm:text-[44px] lg:text-[48px] font-light tracking-tight text-[#1a1a1a] leading-[1.15]">
              Frequently asked <br />
              <span className="text-start font-extrabold text-[#1a1a1a]">questions</span>
            </h2>
          </div>

          <div className="flex-shrink-0 mb-2">
            <a 
              href="#all-faqs" 
              className="inline-flex items-center gap-4 pl-6 pr-1.5 py-1.5 bg-white border border-gray-300 rounded-full group hover:border-[#f07e13] transition-all duration-300"
            >
              <span className="text-start text-xs font-bold text-gray-900 tracking-wider uppercase transition-colors group-hover:text-[#f07e13]">
                All FAQs
              </span>
              <div className="w-9 h-9 rounded-full bg-[#f07e13] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </div>
            </a>
          </div>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-[70px] items-start">
          
          <div className="lg:col-span-5 w-full aspect-[480/515] rounded-[40px] overflow-hidden relative group shadow-sm lg:sticky lg:top-8">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
              alt="Industrial factory chimney structures under sky backdrop"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 pointer-events-none" />

            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 items-start sm:items-center text-white z-10">
              <a href="tel:+911236547890" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#f07e13] transition-colors duration-200">
                <Phone className="w-4 h-4 text-[#f07e13] fill-current" />
                <span className="text-start tracking-wide">+91 1236547890</span>
              </a>
              <a href="mailto:info@domainname.com" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#f07e13] transition-colors duration-200">
                <Mail className="w-4 h-4 text-[#f07e13]" />
                <span className="text-start tracking-wide">info@domainname.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-[18px] w-full pt-1">
            {faqs.map((item) => {
              const isOpen = openIndex === item.id;
              
              return (
                <div 
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#f07e13] border-[#f07e13] text-white shadow-xl shadow-orange-500/10' 
                      : 'bg-[#fafafa] border-gray-100 text-gray-900 hover:border-gray-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full text-left px-[30px] py-[22px] flex items-center justify-between gap-6 focus:outline-none cursor-pointer select-none"
                  >
                    <span className="text-start text-base sm:text-[17px] font-bold tracking-tight leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white' : 'text-gray-400'
                      }`} 
                      strokeWidth={2.5}
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className={`px-[30px] pb-[26px] text-sm text-start leading-[1.6] font-normal tracking-wide max-w-[92%] ${
                      isOpen ? 'text-white/90' : 'text-gray-500'
                    }`}>
                      {item.answer}
                    </div>
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