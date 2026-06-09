import React, { useState } from 'react';
import { Check, Calendar, ShieldCheck, Clock } from 'lucide-react';

export default function IndustrialPricingSection() {
  const [selectedPlanId, setSelectedPlanId] = useState(2); 

  const plans = [
    {
      id: 1,
      price: "39",
      name: "Standard Plan",
      features: [
        "Standard Manufacturing Services",
        "Quality Control Checks",
        "Technical Support",
        "Monthly Progress Reports"
      ],
      bgDecoration: (
        <svg className="absolute top-0 right-0 w-32 h-32 text-orange-500/10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M40,20 L80,35 L60,55 L20,40 Z" />
          <path d="M40,30 L80,45 L60,65 L20,50 Z" />
          <path d="M40,40 L80,55 L60,75 L20,60 Z" />
        </svg>
      )
    },
    {
      id: 2,
      price: "39",
      name: "Advanced Plan",
      isFeatured: true, 
      features: [
        "Standard Manufacturing Services",
        "Quality Control Checks",
        "Technical Support",
        "Monthly Progress Reports"
      ],
      bgDecoration: (
        <svg className="absolute top-4 right-4 w-28 h-28 text-white/15 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50,25 C40,25 35,35 35,45 C35,55 45,65 55,65 C65,65 65,50 65,45 C65,35 60,25 50,25 Z" strokeDasharray="4 2" />
          <circle cx="75" cy="35" r="8" />
          <circle cx="25" cy="65" r="10" />
        </svg>
      )
    },
    {
      id: 3,
      price: "39",
      name: "Premium Plan",
      features: [
        "Standard Manufacturing Services",
        "Quality Control Checks",
        "Technical Support",
        "Monthly Progress Reports"
      ],
      bgDecoration: (
        <svg className="absolute top-6 right-6 w-24 h-24 text-orange-500/10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="30" cy="30" r="12" />
          <circle cx="70" cy="30" r="12" />
          <circle cx="30" cy="70" r="12" />
          <circle cx="70" cy="70" r="12" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfc] text-[#222] font-sans antialiased px-6 py-20 lg:px-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
    
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-[#f07e13] uppercase tracking-[0.25em] text-[10px] font-black mb-3">
              <span className="text-start w-1.5 h-1.5 border border-[#f07e13] rounded-xs rotate-45 flex-shrink-0" />
              Pricing Plan
            </div>
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[40px] font-light tracking-tight text-slate-900 leading-[1.25]">
              Transparent pricing for <br />
              <span className="text-start font-extrabold block mt-0.5">every solution</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-start text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-md lg:ml-auto font-light">
              We believe in providing clear and upfront pricing to ensure that you understand the value of our services.
            </p>
          </div>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {plans.map((plan) => {
            const isHighlighted = selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setSelectedPlanId(plan.id)}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative overflow-hidden rounded-[36px] p-8 lg:p-10 transition-all duration-300 transform cursor-pointer flex flex-col justify-between ${
                  isHighlighted 
                    ? 'bg-[#f07e13] text-white shadow-xl shadow-orange-500/10 scale-[1.02] z-10' 
                    : 'bg-[#f4f4f4] text-slate-800 hover:bg-[#eaeaea]'
                }`}
              >
                {plan.bgDecoration}

                <div>
                  <div className="flex items-baseline mb-2">
                    <span className={`text-2xl text-start font-bold ${isHighlighted ? 'text-white' : 'text-[#f07e13]'}`}>$</span>
                    <span className="text-5xl font-black text-start tracking-tight mx-0.5">{plan.price}</span>
                    <span className={`text-xs ml-1 text-start font-light ${isHighlighted ? 'text-white/70' : 'text-gray-400'}`}>/month</span>
                  </div>

                  <h3 className={`text-[15px] font-bold text-start tracking-tight mb-8 ${isHighlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex text-start items-center justify-center flex-shrink-0 ${
                          isHighlighted 
                            ? 'bg-white/15 text-white border border-white/20' 
                            : 'bg-white text-[#f07e13] border border-gray-200 shadow-2xs'
                        }`}>
                          {/* Radial badge simulation with custom icon */}
                          <div className={`w-2 h-2 rounded-full ${isHighlighted ? 'bg-white' : 'bg-[#f07e13]'}`} />
                        </div>
                        <span className={`text-[12.5px] text-start tracking-tight ${isHighlighted ? 'text-white/90 font-light' : 'text-slate-700 font-medium'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <button className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                    isHighlighted
                      ? 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#f07e13]'
                      : 'bg-transparent text-slate-800 border-2 border-gray-300 hover:border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}>
                    Purchase Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

  
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12 pt-4">
          <div className="flex items-center gap-2 text-gray-500 font-medium text-[11.5px]">
            <Calendar className="w-4 h-4 text-[#f07e13] stroke-[2]" />
            <span>Get 30 day free trial</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 font-medium text-[11.5px]">
            <ShieldCheck className="w-4 h-4 text-[#f07e13] stroke-[2]" />
            <span>No any hidden fees pay</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 font-medium text-[11.5px]">
            <Clock className="w-4 h-4 text-[#f07e13] stroke-[2]" />
            <span>You can cancel anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
}