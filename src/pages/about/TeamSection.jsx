import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Ronald Richards',
      role: 'Manufacturing Executive',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500'
    },
    {
      id: 2,
      name: 'Brooklyn Simmons',
      role: 'Industrial Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500'
    },
    {
      id: 3,
      name: 'Cameron Williamson',
      role: 'Production Supervisor',
      image: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=500'
    },
    {
      id: 4,
      name: 'Darlene Robertson',
      role: 'Manufacturing Executive',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500'
    }
  ];

  return (
    <section className="w-full bg-white text-gray-800 font-sans antialiased py-20 px-16 sm:px-18 lg:px-22">
      <div className="max-w-7xl mx-auto">
        
    
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#f07e13] uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-[#f07e13] rounded-full inline-block" />
              Our Team
            </div>
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-gray-900 leading-tight">
              Core strengths in <br />
              <span className="text-start font-extrabold">industrial innovation</span>
            </h2>
          </div>

          <div className="flex-shrink-0">
            <a 
              href="#all-members" 
              className="inline-flex items-center gap-3 pl-6 pr-1 py-1 bg-white border border-gray-200 rounded-full group hover:border-[#f07e13] transition-all duration-300"
            >
              <span className="text-xs font-bold text-gray-900 tracking-wide uppercase transition-colors group-hover:text-[#f07e13]">
                All Member
              </span>
              <div className="w-8 h-8 rounded-full bg-[#f07e13] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square rounded-[28px] overflow-hidden bg-gray-50 mb-5 relative shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 tracking-tight">
                {member.name}
              </h3>
              <p className="text-gray-400 text-xs font-light tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}