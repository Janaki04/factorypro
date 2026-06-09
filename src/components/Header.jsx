import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import logo from "../assets/Group 4.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { 
      name: 'Services', 
      to: '/services', 
    },
    { name: 'Blog', to: '/blog' },
    { name: 'Projects', to: '/projects' },
     { name: 'Pricing', to: '/pricing' },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <div className="w-full">
      <header className="w-full py-6 flex items-center justify-between border-b border-white/10 relative z-50">
        
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center space-x-7 text-[13px] font-semibold tracking-wide">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                  className="transition-colors duration-200 flex items-center gap-1 py-2 text-gray-300 hover:text-[#f07e13] cursor-pointer"
                >
                  {link.name}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-200 py-2 block ${
                      isActive ? 'text-[#f07e13]' : 'text-gray-300 hover:text-[#f07e13]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}

              {link.hasDropdown && (
                <div className={`absolute left-0 top-full mt-1 w-48 bg-[#222] border border-white/5 rounded-xl p-2 shadow-2xl transition-all duration-200 origin-top ${
                  openDropdown === link.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'
                }`}>
                  {link.subLinks.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.to}
                      className="block px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#f07e13] rounded-lg transition-all duration-150"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden sm:flex items-center space-x-2.5 text-[13px] font-bold">
          <span className="text-[#f07e13] bg-white/10 w-8 h-8 rounded-full flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 fill-current" />
          </span>
          <a href="tel:+01123456789" className="text-white/90 hover:text-[#f07e13] transition-colors">+01 123456789</a>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-300 hover:text-white">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#161616] z-40 lg:hidden p-6 pt-24 flex flex-col justify-between">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium border-b border-white/5 pb-2 block ${
                    isActive ? 'text-[#f07e13] font-bold' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;