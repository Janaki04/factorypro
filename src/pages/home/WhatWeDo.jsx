import React from 'react'
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
import image from "../../assets/image4.jpg"

function WhatWeDo() {
  return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-[#191d1a] text-white">
        
        {/* Left Half Component Column details */}
        <div className="p-8 sm:p-12 lg:p-20 xl:p-24 flex flex-col justify-center max-w-2xl ml-auto w-full">
          <div className="flex items-center gap-2 text-[#f07e13] uppercase tracking-[0.2em] text-[10px] font-black mb-4">
            <span className="text-start w-1.5 h-1.5 border border-[#f07e13] rounded-xs rotate-45 flex-shrink-0" />
            What We Do
          </div>
          
          <h2 className="text-start text-2xl sm:text-3xl font-medium tracking-tight leading-tight mb-8">
            Innovative factory and industry <br />
            <span className="text-start font-extrabold text-white">solutions today</span>
          </h2>

          {/* Rounded Subtle Custom Grid Highlight Cards Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Automation Solutions", info: "Streamlining processes through cutting-edge technology.", icon: <Cpu className="w-4 h-4 text-[#f07e13]" /> },
              { label: "Quality Control", info: "Ensuring product excellence through rigorous testing.", icon: <ShieldCheck className="w-4 h-4 text-[#f07e13]" /> },
              { label: "Process Engineering", info: "Optimizing workflow methodologies efficiently.", icon: <Activity className="w-4 h-4 text-[#f07e13]" /> },
              { label: "Product Development", info: "Streaming processes through cutting-edge technology.", icon: <Factory className="w-4 h-4 text-[#f07e13]" /> }
            ].map((box, idx) => (
              <div 
                key={idx} 
                className="bg-white/[0.03] border border-white/5 rounded-[20px] p-6 transition-colors hover:bg-white/[0.06]"
              >
                <div className="mb-3">{box.icon}</div>
                <h4 className="text-start text-[13px] font-bold mb-1.5 text-gray-100">{box.label}</h4>
                <p className="text-start text-[11px] text-gray-400 leading-relaxed font-light">{box.info}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-[11px] text-gray-400 font-medium">
            Let's make something great work together.{' '}
            <a href="#quote" className="text-[#f07e13] font-bold underline underline-offset-4 ml-1 hover:text-white transition-colors">
              Get Free Quote
            </a>
          </div>
        </div>

        {/* Right Half: Industrial Operations Live Action View panel */}
        <div className="relative min-h-[400px] lg:min-h-full w-full">
          <img 
            src={image} 
            alt="Angle grinder spark processes" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />

          {/* Overlapping Rounded Badge Sticker on the Center Splitter */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-30 hidden lg:block">
            <div className="relative w-14 h-14 rounded-full bg-[#f07e13] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 group cursor-pointer ring-4 ring-[#191d1a]">
              <ArrowUpRight className="w-5 h-5 text-white" />
              {/* Spinning Overlay Graphic Track */}
              <div className="absolute inset-0 border border-white/20 rounded-full animate-spin-slow pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
  )
}

export default WhatWeDo