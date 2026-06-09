import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail, CheckCircle2, ChevronDown } from 'lucide-react';
import service from "../../assets/service-single-img.jpg.png"
import service2 from "../../assets/service-entry-img-1.jpg.png"
import service3 from "../../assets/service-entry-img-2.jpg.png"

export default function ServicesDetailView() {
  const [activeCategory, setActiveCategory] = useState('Industrial Automation And Robotics');
  
  const [openFaq, setOpenFaq] = useState(1);

  const categories = [
    'Custom Manufacturing Solution',
    'Industrial Automation And Robotics',
    'Product Design And Prototyping',
    'Equipment Maintenance Support',
    'Research And Development'
  ];

  const features = [
    { title: 'Enhanced Efficiency', desc: 'Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.' },
    { title: 'Enhanced Efficiency', desc: 'Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.' },
    { title: 'Enhanced Efficiency', desc: 'Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.' },
    { title: 'Enhanced Efficiency', desc: 'Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.' }
  ];

  const strategies = [
    'Needs Assessment', 'Timeline and Milestones', 'Feasibility and ROI',
    'Technology Selection', 'Process Optimization', 'Scalability Planning'
  ];

  const faqs = [
    { id: 1, q: 'What industries do you serve?', a: 'We deliver comprehensive industrial solutions spanning aerospace, automotive assembly, consumer electronics processing, and sustainable heavy-duty manufacturing infrastructure.' },
    { id: 2, q: 'How do you ensure product quality?', a: 'We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards across all automated pipelines.' },
    { id: 3, q: 'What sustainability practices do you follow?', a: 'Our systems focus on minimized carbon output optimization, energy usage management, and materials recyclability tracking loops.' },
    { id: 4, q: 'Do you offer customized solutions?', a: 'Yes, every mechanical component layout design is tailored precisely to your production volume targets and space constraints.' },
    { id: 5, q: 'How do you handle safety in the workplace?', a: 'All systems are engineered to exceed local regulatory criteria, deploying protective light curtains and automated proximity cutoff controllers.' }
  ];

  return (
    <section className="w-full bg-white text-gray-800 font-sans antialiased py-16 px-16 sm:px-15 lg:px-25">
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          <div className="bg-[#f7f7f7] rounded-3xl p-5 border border-gray-100 shadow-sm">
            <div className="text-start bg-[#f07e13] text-white text-sm font-bold px-5 py-4 rounded-2xl mb-4 tracking-wide">
              Services Category
            </div>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between text-left px-5 py-3.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-white text-[#f07e13] shadow-sm' 
                        : 'text-gray-500 hover:text-black hover:bg-white/50'
                    }`}
                  >
                    <span>{cat}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#f07e13]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          <div 
            className="relative bg-cover bg-center rounded-3xl p-8 text-white overflow-hidden min-h-[300px] flex flex-col justify-between shadow-md"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600')` }}
          >
            <div className="absolute inset-0 bg-[#1e1e1e]/90 mix-blend-multiply z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 z-0" />

            <div className="relative z-10">
              <span className="text-start text-[10px] text-[#f07e13] uppercase font-extrabold tracking-widest block mb-2">● Toplax</span>
              <h3 className="text-start text-2xl font-light leading-snug">
                Need <span className="text-start font-bold text-white">help!</span>
              </h3>
              <p className="text-start text-gray-400 text-xs font-light mt-2 max-w-xs leading-relaxed">
                Got questions or need assistance with your industry needs?
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-3.5 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f07e13] flex items-center justify-center text-white">
                  <Phone className="w-3.5 h-3.5 fill-current" />
                </div>
                <a href="tel:+1840841256" className="text-sm font-bold tracking-wide hover:text-[#f07e13] transition-colors">+1 840 841 256</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#f07e13]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:info@domain.com" className="text-sm font-bold tracking-wide hover:text-[#f07e13] transition-colors">info@domain.com</a>
              </div>
            </div>
          </div>

        </div>

        <div className="lg:col-span-8 flex flex-col">
          
          <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 shadow-sm mb-8">
            <img 
              src={service} 
              alt="Industrial Automation Robotics Assembly Line" 
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-start text-gray-500 text-xs sm:text-[13px] font-light leading-relaxed mb-6">
            Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you're launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.
          </p>
          <p className="text-start text-gray-500 text-xs sm:text-[13px] font-light leading-relaxed mb-10">
            Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable, thriving business.
          </p>

          <h2 className="text-start text-2xl sm:text-3xl font-light tracking-tight text-gray-900 mb-8">
            Why choose <span className="text-start font-extrabold">robotics services</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-12">
            {features.map((feat, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#f07e13] mb-4">
                  <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-start text-[15px] font-bold text-gray-900 mb-2">{feat.title}</h4>
                <p className="text-start text-gray-500 text-xs sm:text-[12.5px] font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-10 mb-12">
            <h3 className="text-start text-xl sm:text-2xl font-light tracking-tight text-gray-900 mb-3">
              Planning & <span className="text-start font-extrabold">strategy</span>
            </h3>
            <p className="text-start text-gray-500 text-xs sm:text-[13px] font-light leading-relaxed mb-6">
              Our Industrial Automation and Robotics planning and strategy services focus on designing tailored automation solutions that align with your business goals.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4 mb-10">
              {strategies.map((strat) => (
                <div key={strat} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <span className="text-start w-2 h-2 rounded-full bg-[#f07e13] flex-shrink-0 animate-pulse" />
                  <span>{strat}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img src={service2} alt="Welding" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img src={service3} alt="Robotic Arm assembly" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <h3 className="text-start text-xl sm:text-2xl font-light tracking-tight text-gray-900 mb-6">
              Frequently asked <span className="text-start font-extrabold">questions</span>
            </h3>

            <div className="flex flex-col gap-3">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                      isOpen 
                        ? 'bg-[#f07e13] border-[#f07e13] text-white' 
                        : 'bg-[#fafafa] border-gray-100 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full flex text-start items-center justify-between text-left px-5 py-4 font-bold text-xs sm:text-sm tracking-tight cursor-pointer focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}`} />
                    </button>
                    
                    <div className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className={`px-5 pb-5 text-start text-xs font-light leading-relaxed ${isOpen ? 'text-white/90' : 'text-gray-500'}`}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}