import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Cpu, Settings } from 'lucide-react';
import Header from '../../components/Header';
import bg from "../../assets/Image.png"
import AboutSection from './AboutSection';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate=useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Blog', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Page', href: '#', hasDropdown: true },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <>
    <div className="relative min-h-screen w-full text-white overflow-hidden font-sans">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${bg}')` 
        }}
      >
    
      </div>

      <div className="relative z-10 flex flex-col min-h-screen justify-evenly max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
     <Header/>

        <main className="flex-1 flex flex-col pl-10 max-w-2xl py-12 lg:py-20">
          <h1 className="text-start text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight sm:leading-none">
            Excellence innovating <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white via-white to-gray-300">
              industry for today
            </span>
           
          </h1>

          <p className="text-start mt-6 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
            At the heart of our operations is a commitment to delivering superior products 
            through cutting-edge technology and innovative processes.
          </p>

          <div className="mt-8 flex">
            <button onClick={()=>{navigate("services")}} className="group flex items-center bg-white text-black font-semibold rounded-md overflow-hidden transition-all duration-300 hover:bg-[#f07e13] hover:text-white shadow-lg shadow-black/30">
              <span className="px-6 py-3.5 tracking-wide text-sm">
                Explore More
              </span>
              <span className="bg-[#f07e13] p-3.5 text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-black/20">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </main>

        <footer style={{display:"flex",justifyContent:"space-evenly"}} className="w-full flex  py-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-medium tracking-wide text-gray-300">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#f07e13] group-hover:bg-[#f07e13] group-hover:text-white transition-all duration-300">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="group-hover:text-white transition-colors">Advanced Manufacturing Solutions</span>
          </div>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#f07e13] group-hover:bg-[#f07e13] group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="group-hover:text-white transition-colors">Quality Assurance Systems</span>
          </div>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#f07e13] group-hover:bg-[#f07e13] group-hover:text-white transition-all duration-300">
              <Settings className="w-4 h-4" />
            </div>
            <span className="group-hover:text-white transition-colors">State-of-the-Art Technology</span>
          </div>
        </footer>

      </div>
    </div>
    </>
  );
};

export default Hero;