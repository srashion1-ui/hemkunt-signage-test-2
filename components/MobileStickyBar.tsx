import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-industrial-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
        >
          <div className="flex gap-3 max-w-sm mx-auto">
            <Link
              to="/#contact"
              onClick={handleContactClick}
              className="flex-1 flex items-center justify-center py-3 bg-white/5 active:bg-white/10 text-white rounded-lg border border-white/10 font-medium text-sm transition-colors"
            >
              <MessageSquare size={18} className="mr-2 text-brand-400" />
              Get Quote
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex-[1.5] flex items-center justify-center py-3 bg-brand-600 active:bg-brand-700 text-white rounded-lg font-bold uppercase tracking-wider shadow-lg shadow-brand-500/20 transition-all"
            >
              <Phone size={18} className="mr-2 fill-current" />
              Call Us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyBar;