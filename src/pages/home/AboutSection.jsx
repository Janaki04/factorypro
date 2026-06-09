import React from 'react';
import { CheckCircle2, ArrowUpRight, Star } from 'lucide-react';
import vector from "../../assets/Vector.png"
import about1 from "../../assets/about-img-1.jpg.png"
import about2 from "../../assets/about-img-2.jpg.png"
import { useNavigate } from 'react-router-dom';

const AboutUsSection = () => {
    const navigate=useNavigate()
  const checkmarks = [
    'Sustainable Manufacturing',
    'Advanced Automation',
    'Efficient Production Processes',
    'Reliable Delivery Services'
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white text-slate-800 overflow-hidden font-sans">
      
      <div className="absolute bottom-0 left-0 w-full max-w-[340px]  pointer-events-none select-none">
       <img src={vector}/>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-1 items-center">
          
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-center pt-12 sm:pt-16 pb-6">
            
            <div className="relative z-20 w-full max-w-[340px] sm:ml-20 lg:ml-24">
              <img 
                src={about2} 
                alt="Industrial worker with clipboard" 
                className="w-full h-[450px] object-cover rounded-[32px]  border-4 border-white"
              />
            </div>

            <div className="absolute top-0 left-7 sm:left-7 z-10 w-[210px] hidden sm:block">
              <img 
                src={about1} 
                alt="Automated production line" 
                className="w-full h-[155px] object-cover rounded-[24px] shadow-lg"
              />
            </div>

            <div className="absolute top-3 right-2 sm:right-auto sm:left-[260px] z-30 bg-white/40 backdrop-blur-xs px-2 py-1 flex items-center gap-2.5 rounded-xl">
              <span className="text-4xl sm:text-5xl font-black text-[#f07e13] tracking-tight">25+</span>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider leading-tight max-w-[75px]">
                Year Of <br /> Experience
              </div>
            </div>

          </div>


          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Tagline */}
            <div className="flex items-center space-x-2 text-[#f07e13] mb-4">
              <div className="w-3.5 h-3.5 border border-[#f07e13] rounded-sm border-dashed rotate-45 flex-shrink-0" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-5">
              Building quality through <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800">
                industrial innovation
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-[14.5px] leading-relaxed mb-8 max-w-xl font-normal">
              At the heart of our operations is a commitment to delivering superior products 
              through cutting-edge technology and innovative processes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              <div className="md:col-span-7 space-y-4">
                {checkmarks.map((text, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="p-0.5 rounded-full bg-[#f07e13]/10 text-[#f07e13]">
                      <CheckCircle2 className="w-4 h-4 fill-[#f07e13] text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-600 transition-colors duration-200 group-hover:text-slate-900">
                      {text}
                    </span>
                  </div>
                ))}
                
                <div className="pt-6">
                  <button onClick={()=>{navigate("about")}} className="group flex items-center bg-white text-slate-800 font-bold border border-slate-300 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#f07e13] hover:bg-[#f07e13] hover:text-white shadow-xs">
                    <span className="px-5 py-2.5 text-xs tracking-wider">
                      Learn More
                    </span>
                    <span className="bg-[#f07e13] p-3 text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-black/10">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 bg-slate-50/70 border border-slate-100 rounded-[32px] p-8 flex flex-col items-center justify-center text-center aspect-square max-w-[200px] mx-auto md:mx-0 w-full">
                <div className="flex items-center space-x-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f07e13] text-[#f07e13]" />
                  ))}
                </div>
                <p className="text-[11px] font-medium text-slate-400 tracking-wider">
                  15.5K Genuine Rating
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;