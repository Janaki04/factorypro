import React from 'react';
import { 
  ArrowRight, 
  Play, 
  ArrowUpRight, 
  Factory, 
  Cpu, 
  Layers, 
  Wrench, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/Link.png"
import image4 from "../../assets/image3.jpg"


export default function IndustrialPage() {
  return (
    <div className="w-full bg-[#fcfcfc] text-[#222] font-sans antialiased selection:bg-[#f07e13]/30">
      
      {/* ========================================================================= */}
      {/* SECTION 1: SERVICES HEADER & FLOATING CARD DECK AREA                     */}
      {/* ========================================================================= */}
      <section className="relative bg-[#1a1f1c] text-white pt-14 lg:pt-18  overflow-hidden">
        {/* Real Industrial Robotics Background View overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url('${image1}')` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-white/10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-[#f07e13] uppercase tracking-[0.2em] text-[11px] font-black mb-4">
                <span className="text-start w-1.5 h-1.5 border border-[#f07e13] rounded-xs rotate-45 flex-shrink-0" />
                Services
              </div>
              <h2 className="text-start text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.2]">
                Comprehensive solutions <br />
                <span className="text-start font-extrabold text-white">for industrial excellence</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-start text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-md lg:ml-auto font-light">
                We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Rounded Card Container Wrapper Block */}
        <div className=" left-0 right-0 -bottom-36 sm:-bottom-18 mx-20 lg:-bottom-14 z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-2">
            <div className="bg-white rounded-[32px] shadow-xl p-4 sm:p-4 lg:p-7 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 division-x division-gray-100">
                {[
                  { title: "Custom Manufacturing Solution", icon: <Factory className="w-6 h-6" /> },
                  { title: "Industrial Automation And Robotics", icon: <Cpu className="w-6 h-6" /> },
                  { title: "Product Design And Prototyping", icon: <Layers className="w-6 h-6" /> },
                  { title: "Equipment Maintenance Support", icon: <Wrench className="w-6 h-6" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col justify-between p-4 min-h-[190px] group">
                    <div>
                      <div className="text-[#f07e13] mb-5 bg-[#f07e13]/5 w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                        {item.icon}
                      </div>
                      <h3 className="text-start text-[13.5px] font-bold text-slate-800 tracking-tight leading-snug max-w-[180px]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-4">
                      <button className="w-7 h-7 rounded-md bg-gray-50 text-slate-400 flex items-center justify-center group-hover:bg-[#f07e13] group-hover:text-white transition-all duration-200">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer Grid Cushion */}
      <div className="h-44 sm:h-36 lg:h-32" />


      {/* ========================================================================= */}
      {/* SECTION 2: OUR STORY COMPOSITION REALIGNMENT                              */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-5 mb-10">
        
        {/* TOP SUB-GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          {/* Headline Heading Blocks */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-[#f07e13] uppercase tracking-[0.2em] text-[11px] font-black mb-3">
              <span className="text-start w-1.5 h-1.5 border border-[#f07e13] rounded-xs rotate-45 flex-shrink-0" />
              Our Story
            </div>
            <h2 className="text-start text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-[1.2]">
              Transforming industries <br />
              <span className="font-extrabold">with innovative efficient solutions</span>
            </h2>
          </div>

          {/* Side-By-Side Top Image Pill Duo Cards */}
          <div className="lg:col-span-5 flex gap-4 justify-start lg:justify-end">
            <img 
              src={image2}
              alt="Engineers inspecting site view" 
              className="w-[140px] h-[90px] sm:w-[170px] sm:h-[110px] object-cover rounded-[20px] shadow-xs"
            />
            <img 
              src={image3} 
              alt="Automated production lines" 
              className="w-[140px] h-[90px] sm:w-[170px] sm:h-[110px] object-cover rounded-[20px] shadow-xs"
            />
          </div>
        </div>

        {/* BOTTOM SUB-GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Big Singular Left Column Image Box */}
          <div className="lg:col-span-6">
            <img 
              src={image4} 
              alt="Welder operations close up" 
              className="w-full h-[320px] sm:h-[380px] object-cover rounded-[32px] shadow-sm"
            />
          </div>

          {/* Stats Matrix Data and Actions right column block */}
          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-start text-gray-400 text-xs sm:text-[13.5px] leading-relaxed max-w-xl mb-10 font-light">
              We specialize in revolutionizing industries by delivering innovative, efficient solutions that enhance productivity and streamline processes. Through advanced technologies, precision engineering, and sustainable practices.
            </p>

            {/* Metrics Counters Row Block */}
            <div className="grid grid-cols-3 gap-4 pt-2 pb-8 border-b border-gray-100 mb-8">
              {[
                { count: "10k+", label: "Completed Project" },
                { count: "15+", label: "Satisfied Customer" },
                { count: "10k+", label: "Year Of Mastery" }
              ].map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-[32px] font-black text-[#f07e13] tracking-tight">{metric.count}</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mt-2 leading-tight">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* Video Active Row Components */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="avatar" />
                <img className="inline-block h-8 w-8 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="avatar" />
                <img className="inline-block h-8 w-8 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="avatar" />
              </div>

              <button className="flex items-center gap-2.5 group focus:outline-none cursor-pointer">
                <span className="w-9 h-9 rounded-full border border-gray-200 text-[#f07e13] flex items-center justify-center transition-all group-hover:bg-[#f07e13] group-hover:text-white shadow-xs">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase group-hover:text-[#f07e13] transition-colors">
                  Watch Intro
                </span>
              </button>
            </div>
          </div>

        </div>
      </section>


     

    </div>
  );
}