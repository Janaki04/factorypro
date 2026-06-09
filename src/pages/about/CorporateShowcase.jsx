import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import history from "../../assets/history-image-1.jpg.png"

export default function CorporateShowcase() {
  // --- Tab Section State ---
  const [activeTab, setActiveTab] = useState('mission'); // mission | vision | value

  // --- History Section State ---
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(0);

  // --- FAQ Section State ---
  const [openFAQIndex, setOpenFAQIndex] = useState(1);

  // --- Data Layers ---
  const tabsData = {
    mission: {
      text: "Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.",
      bullets: [
        "Sustainable Manufacturing Practices",
        "Advanced Technology Integration",
        "Community and Environmental Responsibility",
        "Innovation-Driven Growth"
      ],
      image: history
    },
    vision: {
      text: "To become the global benchmark for automated industrial infrastructure, establishing clean paradigms that optimize resource deployment across future smart-facility networks.",
      bullets: [
        "Global Scalability Benchmarks",
        "Predictive Resource Deployment",
        "Next-Generation Smart Automation Protocols",
        "Eco-Industrial Legacy Engineering"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    value: {
      text: "Uncompromising precision guides our organizational ethos, keeping absolute workplace integrity and environmental stewardship at the forefront of every mechanical implementation.",
      bullets: [
        "Absolute Workplace Integrity",
        "Environmental Stewardship Priority",
        "Uncompromising Material Quality",
        "Empowered Collaborative Ecosystems"
      ],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
    }
  };

  const historyTimeline = [
    { year: "In 1920", label: "Planning", desc: "Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.", bullets: ["Quality Control System", "Building Quality Industrial", "Environmental Responsibility", "Building Quality Industrial"], img: history },
    { year: "In 1922", label: "Journey Started", desc: "Establishing initial raw forge foundries and engineering blueprints to supply heavy freight equipment arrays across localized logistics markets.", bullets: ["Foundry Launch Standards", "Freight Infrastructure Supply", "Structural Precision Testing"], img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
    { year: "In 1925", label: "Journey Progress", desc: "Expanding operational pipelines to support automated production matrices, increasing daily performance thresholds tenfold.", bullets: ["Production Framework Expansion", "Automated Line Integrations", "High-Velocity Output Safeguards"], img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" },
    { year: "In 1930", label: "Global Reach", desc: "Inaugurating maritime supply chains to route modular plant infrastructure pieces globally into primary developmental trade zones.", bullets: ["International Supply Alignment", "Modular Facility Deployments", "Transcontinental Trade Standards"], img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" },
    { year: "In 1940", label: "Industry Leadership", desc: "Solidifying a legacy configuration recognized officially for setting high quality control safeguards and introducing automation patents worldwide.", bullets: ["Patented Automation Protocols", "Historical Quality Recognition", "Global Benchmark Governance"], img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" }
  ];

  const faqs = [
    { id: 0, question: "What industries do you serve?", answer: "We support a broad spectrum of sectors including automotive assembly, heavy industrial manufacturing, advanced logistics infrastructure, energy, and automated consumer packaging pipelines." },
    { id: 1, question: "How do you ensure product quality?", answer: "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards." },
    { id: 2, question: "What sustainability practices do you follow?", answer: "Our processes optimize raw material yield, limit localized structural carbon outputs, minimize industrial byproducts, and safely deploy high-efficiency machinery to limit total electrical loads." },
    { id: 3, question: "Do you offer customized solutions?", answer: "Yes, every industrial deployment is tailored meticulously to meet custom production rates, structural facility parameters, and specialized compliance configurations unique to your workflow." },
    { id: 4, question: "How do you handle safety in the workplace?", answer: "We follow strict occupational health frameworks, implement clear multi-tiered automation barriers, and hold continuous risk assessment loops to maintain safe working conditions." }
  ];

  return (
    <div className="w-full bg-[#fcfcfc] text-[#111111] font-sans antialiased">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO OVERLAY BANNER + DRIVEN APPROACH MISSION TABS            */}
      {/* ========================================================================= */}
      <section className="relative w-full">
        {/* Deep Industrial Ambient Top Header Banner */}
        <div className="relative w-full h-[440px] sm:h-[480px] md:h-[520px] bg-black overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?auto=format&fit=crop&q=80&w=1600"
            alt="Heavy automation arm assembly blur background"
            className="w-full h-full object-cover opacity-35 object-center scale-105 transform"
          />

          <div className="absolute inset-x-0 bottom-32 max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-[100px] z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.3em] text-[#f07e13] uppercase mb-3">
                  <span className="text-start w-1.5 h-1.5 bg-[#f07e13] rounded-full inline-block" />
                  OUR APPROACH
                </div>
                <h1 className="text-start text-3xl sm:text-[44px] lg:text-[48px] font-light text-white tracking-tight leading-[1.15]">
                  Empowering sustainable <br />
                  <span className="text-start font-extrabold">growth in industry</span>
                </h1>
              </div>
              <div className="lg:col-span-5 pb-2">
                <p className="text-start text-white/70 text-xs sm:text-[13px] leading-relaxed max-w-[440px]">
                  We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Modular Approach Interactive Tabs Container Element */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-[100px] -mt-20 relative z-20 mb-24">
          <div className="w-full bg-white rounded-[32px] shadow-xl shadow-gray-200/40 overflow-hidden border border-gray-100 p-4 sm:p-8 lg:p-10">
            
            {/* Interactive Selector Header Rows Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#fafafa] rounded-[20px] p-1.5 mb-10 max-w-[840px]">
              <button 
                onClick={() => setActiveTab('mission')}
                className={`flex items-center justify-center gap-3 py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide rounded-[16px] transition-all cursor-pointer select-none ${activeTab === 'mission' ? 'bg-[#f07e13] text-white shadow-md shadow-orange-500/20' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <svg className="text-start w-4 h-4 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                Our Mission
              </button>
              <button 
                onClick={() => setActiveTab('vision')}
                className={`flex items-center justify-center gap-3 py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide rounded-[16px] transition-all cursor-pointer select-none ${activeTab === 'vision' ? 'bg-[#f07e13] text-white shadow-md shadow-orange-500/20' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <svg className="text-start w-4 h-4 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                Our Vision
              </button>
              <button 
                onClick={() => setActiveTab('value')}
                className={`flex items-center justify-center gap-3 py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide rounded-[16px] transition-all cursor-pointer select-none ${activeTab === 'value' ? 'bg-[#f07e13] text-white shadow-md shadow-orange-500/20' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <svg className="text-start w-4 h-4 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                Our Value
              </button>
            </div>

            {/* Inner Content Grid Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6 text-left">
                <p className="text-start text-gray-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {tabsData[activeTab].text}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 pt-2">
                  {tabsData[activeTab].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-gray-800 tracking-tight">
                      <div className="w-[18px] h-[18px] bg-orange-50 text-[#f07e13] flex items-center justify-center rounded-md">
                        <svg className="w-3 h-3 stroke-current fill-none" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Tab Image Slot */}
              <div className="lg:col-span-6 w-full aspect-[520/320] rounded-[24px] overflow-hidden bg-gray-50 shadow-sm">
                <img 
                  src={tabsData[activeTab].image}
                  alt="Dynamic context tab visual representation"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: TIMELINE BLOCK HISTORY SEGMENTATION WITH VERTICAL STEPS       */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 lg:px-[100px] mb-12">
        <div className="max-w-[1240px] mx-auto">
          
          {/* Header Rows */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.3em] text-[#f07e13] uppercase mb-3">
                <span className="text-start w-1.5 h-1.5 bg-[#f07e13] rounded-full inline-block" />
                OUR HISTORY
              </div>
              <h2 className="text-start text-[32px] sm:text-[42px] lg:text-[46px] font-light text-[#111111] tracking-tight leading-[1.15]">
                Foundation of excellences <br />
                <span className="text-start font-extrabold text-[#111111]">in industry</span>
              </h2>
            </div>
            <div className="lg:col-span-5 pb-2 text-left">
              <p className="text-start text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-[420px]">
                Built on a legacy of quality and innovation, we have established a strong foundation in the industrial sector, consistently delivering reliable solutions that drive progress and set industry standards.
              </p>
            </div>
          </div>

          {/* Interactive History Stepper Architecture Matrix Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 xl:gap-x-16 items-start">
            
            {/* Left Vertical Button Controller Index */}
            <div className="lg:col-span-4 space-y-2 w-full">
              {historyTimeline.map((step, idx) => {
                const isActive = activeHistoryIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveHistoryIndex(idx)}
                    className={`w-full text-left h-[52px] px-6 rounded-xl font-bold text-[13px] tracking-wide flex items-center justify-between transition-all duration-300 cursor-pointer select-none ${
                      isActive 
                        ? 'bg-[#f07e13] text-white shadow-lg shadow-orange-500/10' 
                        : 'bg-white border border-gray-100 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{step.year} - {step.label}</span>
                    {isActive && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Display Metrics Dynamic Pane Frame */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#fafafa] border border-gray-100/80 rounded-[32px] p-6 sm:p-8 items-center text-left">
              <div className="md:col-span-7 space-y-5">
                <h3 className="text-start text-2xl font-light text-[#111111]">
                  Company <span className="font-extrabold">started</span>
                </h3>
                <p className="text-start text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                  {historyTimeline[activeHistoryIndex].desc}
                </p>
                <div className="space-y-2.5 pt-1">
                  {historyTimeline[activeHistoryIndex].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-gray-800 tracking-tight">
                      {/* Orange Multi-gear micro bullet token */}
                      <svg className="w-3.5 h-3.5 text-[#f07e13] fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated Image Right Frame Slot */}
              <div className="md:col-span-5 w-full aspect-[280/290] rounded-[24px] overflow-hidden bg-gray-100 shadow-sm">
                <img 
                  src={historyTimeline[activeHistoryIndex].img} 
                  alt="Historical production archival rendering asset"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}