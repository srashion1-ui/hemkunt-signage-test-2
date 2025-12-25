import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import MagneticWrapper from './MagneticWrapper';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      // If we are already on home page, smoothly scroll
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
      // If not on home page, the Link component will handle navigation to /, 
      // and the Home component will handle the scroll via useEffect.
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-600 rounded flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
              <span className="font-display font-bold text-xl text-white">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wide uppercase text-white">Hemkunt</span>
              <span className="text-xs text-brand-400 font-medium tracking-widest uppercase">Signage</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-brand-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MagneticWrapper>
              <Link
                to="/#contact"
                onClick={(e) => handleLinkClick(e, '/#contact')}
                className="block px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-display font-semibold tracking-wide uppercase text-sm rounded transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
              >
                Get Estimate
              </Link>
            </MagneticWrapper>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-4 text-base font-medium text-gray-200 hover:text-brand-400 hover:bg-white/5 rounded transition-colors uppercase tracking-wider border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6">
                 <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center w-full px-5 py-4 bg-brand-600 text-white font-bold uppercase tracking-wider rounded"
                >
                  <Phone className="mr-2" size={18} /> Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;