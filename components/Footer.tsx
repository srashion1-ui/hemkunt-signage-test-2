import React from 'react';
import { Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-wide uppercase text-white">Hemkunt</span>
              <span className="text-sm text-brand-500 font-medium tracking-widest uppercase">Signage</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {COMPANY_INFO.tagline}
              <br/>
              Crafting visual identities since {COMPANY_INFO.est}.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-brand-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-500 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-sm">Outdoor 3D Signs</li>
              <li className="text-sm">Stainless Steel Letters</li>
              <li className="text-sm">Neon Signage</li>
              <li className="text-sm">LED Video Walls</li>
              <li className="text-sm">CNC & Laser Cutting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Visit Us</h4>
            <p className="text-sm mb-4 leading-relaxed">
              {COMPANY_INFO.address}
            </p>
            <p className="text-sm mb-1">
              <span className="text-white font-semibold">Phone:</span> {COMPANY_INFO.phone}
            </p>
            <p className="text-sm">
              <span className="text-white font-semibold">Email:</span> {COMPANY_INFO.email}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-industrial-900 hover:bg-brand-600 rounded-full text-white transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;