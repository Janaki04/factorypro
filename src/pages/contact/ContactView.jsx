import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import map from "../../assets/Iframe - London Eye, London, United Kingdom.png"

export default function ContactView() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section className="w-full bg-[#fcfcfc] text-gray-800 font-sans antialiased py-16">
      <div className="max-w-7xl mx-auto px-20 sm:px-20 lg:px-22">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          

          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#f07e13] uppercase mb-3">
              <span className="text-start w-1.5 h-1.5 bg-[#f07e13] rounded-full inline-block" />
              Contact Us
            </div>
            
            <h2 className="text-start text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-gray-900 leading-tight mb-4">
              Get in touch <span className="text-start font-extrabold">with us</span>
            </h2>
            
            <p className="text-start text-gray-500 text-sm font-light leading-relaxed mb-10 max-w-sm">
              Reach out for any inquiries, support, or to discuss how we can meet your industrial needs.
            </p>

            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f07e13] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="text-start text-sm font-bold text-gray-900 mb-0.5">Contact</h4>
                  <a href="tel:+1809120670" className="text-start text-xs sm:text-sm text-gray-500 hover:text-[#f07e13] font-medium transition-colors">+1.809.120.670</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f07e13] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-start text-sm font-bold text-gray-900 mb-0.5">E-mail</h4>
                  <a href="mailto:info@domainname.com" className="text-start text-xs sm:text-sm text-gray-500 hover:text-[#f07e13] font-medium transition-colors">info@domainname.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f07e13] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-start text-sm font-bold text-gray-900 mb-0.5">Our Address</h4>
                  <p className="text-start text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                    37 San Juan Lane Graaf Florisstraat 22A, 3021 CH
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-10 border border-gray-100 shadow-2xl shadow-gray-100/60 relative">
            <h3 className="text-start text-2xl font-light text-gray-900 mb-8">
              Contact <span className="font-extrabold">me</span>
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    required
                    className="w-full text-xs sm:text-sm px-4 py-3.5 bg-white border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:border-[#f07e13] focus:ring-1 focus:ring-[#f07e13]/20 transition-all font-medium"
                  />
                </div>
                <div className="flex flex-col">
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    required
                    className="w-full text-xs sm:text-sm px-4 py-3.5 bg-white border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:border-[#f07e13] focus:ring-1 focus:ring-[#f07e13]/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your e-mail"
                  required
                  className="w-full text-xs sm:text-sm px-4 py-3.5 bg-white border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:border-[#f07e13] focus:ring-1 focus:ring-[#f07e13]/20 transition-all font-medium"
                />
              </div>

              <div className="flex flex-col">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone no."
                  className="w-full text-xs sm:text-sm px-4 py-3.5 bg-white border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:border-[#f07e13] focus:ring-1 focus:ring-[#f07e13]/20 transition-all font-medium"
                />
              </div>

              <div className="flex flex-col">
                <textarea 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write Message"
                  required
                  className="w-full text-xs sm:text-sm px-4 py-3.5 bg-white border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:border-[#f07e13] focus:ring-1 focus:ring-[#f07e13]/20 transition-all font-medium resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 border-2 border-gray-200 hover:border-[#f07e13] text-gray-700 hover:text-white hover:bg-[#f07e13] text-xs font-bold rounded-xl tracking-wide uppercase transition-all duration-200 focus:outline-none cursor-pointer"
                >
                  Submit Message
                </button>
              </div>

            </form>

            {isSubmitted && (
              <div className="absolute inset-x-6 bottom-6 bg-emerald-500 text-white rounded-xl p-4 text-xs font-bold tracking-wide animate-fade-in text-center shadow-lg">
                ✔ message dispatched successfully! A service specialist will reach out shortly.
              </div>
            )}
          </div>

        </div>
              <div className="w-full h-[380px] sm:h-[450px] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm relative">
                  <iframe
                      title="Industrial HQ Geolocation Map Layer"
                      src="https://maps.google.com/maps?q=Graaf%20Florisstraat%2022A,%20Rotterdam&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0  opacity-90 contrast-115"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  />
              </div>

      </div>
    </section>
  );
}