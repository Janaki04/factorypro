import React from 'react';
import { ArrowUpRight, Hammer } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#1e1e1e] text-white font-sans antialiased overflow-hidden pt-20 pb-8 px-10 lg:px-22">

      <div 
        className="absolute bottom-0 left-0 w-full h-full lg:w-[45%] opacity-15 pointer-events-none bg-cover bg-bottom bg-no-repeat bg-blend-luminosity mix-blend-overlay"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1513828583835-c541714b1d85?auto=format&fit=crop&q=80&w=1000')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e1e]/60 via-[#1e1e1e] to-[#1e1e1e] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
  
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 pb-16 border-b border-white/10">
          <div className="max-w-xl">
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight mb-4 leading-tight">
              Ready to work with us?
            </h2>
            <p className="text-start text-gray-400 text-xs sm:text-[13.5px] font-light leading-relaxed">
              Join us to experience cutting-edge industrial solutions that drive innovation, lasting success.
            </p>
          </div>

          <div className="relative flex-shrink-0 self-start md:self-center mr-4 lg:mr-10">
            <a 
              href="/contact" 
              className="group relative w-28 h-28 sm:w-32 sm:h-32 bg-[#f07e13] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-xl shadow-orange-500/10 cursor-pointer"
            >
              <svg 
                className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] p-1.5"
                viewBox="0 0 100 100"
              >
                <path 
                  id="circlePath" 
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                  fill="none" 
                />
                <text className="text-[7.5px] fill-white/90 font-bold uppercase tracking-[0.22em]">
                  <textPath href="#circlePath" startOffset="0%">
                    • Contact Now • Connect Today • Work with us
                  </textPath>
                </text>
              </svg>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 py-16">
          
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-5 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-[#f07e13] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                <Hammer className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-start text-lg font-black tracking-tight text-white group-hover:text-[#f07e13] transition-colors duration-200">
                Factory<span className="text-start text-[#f07e13]">Pro</span>
              </span>
            </div>
            
            <p className="text-start text-gray-400 text-xs sm:text-[13px] font-light leading-relaxed max-w-xs mb-6">
              We are committed to providing personalized industrial solutions.
            </p>

            <div className="flex items-center gap-3">
              <a href="#pinterest" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#f07e13] hover:border-[#f07e13] transition-all duration-200 text-xs font-bold" aria-label="Pinterest Profile">
                P
              </a>
              <a href="#facebook" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#f07e13] hover:border-[#f07e13] transition-all duration-200" aria-label="Facebook Profile">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#f07e13] hover:border-[#f07e13] transition-all duration-200" aria-label="Instagram Profile">
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            <div className="flex flex-col">
              <h3 className="text-start text-sm font-bold tracking-tight mb-5 text-white/90">Quick Links</h3>
              <ul className="space-y-3.5">
                {['Home', 'About Us', 'Blog', 'Services'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="flex text-gray-400 text-xs font-light hover:text-[#f07e13] transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-start text-sm font-bold tracking-tight mb-5 text-white/90">Security</h3>
              <ul className="space-y-3.5">
                {['Term & Condition', 'Privacy Policy', 'Help', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="flex text-gray-400 text-xs font-light hover:text-[#f07e13] transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col col-span-2 sm:col-span-1">
              <h3 className="text-start text-sm font-bold tracking-tight mb-5 text-white/90">Contact</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <a href="tel:+91123654789" className="flex text-start text-gray-400 text-xs font-light hover:text-[#f07e13] transition-colors duration-150 tracking-wide">
                    +91 123654789
                  </a>
                </li>
                <li className="flex flex-col">
                  <a href="mailto:info@domainname.com" className="flex text-start text-gray-400 text-xs font-light hover:text-[#f07e13] transition-colors duration-150 break-all">
                    info@domainname.com
                  </a>
                </li>
                <li className="flex text-start text-gray-400 text-xs font-light leading-relaxed">
                  520, West Valley, Amin and minim
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center text-center">
          <p className="text-start text-[11px] text-gray-500 tracking-wide font-light">
            Copyright © {currentYear} All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}