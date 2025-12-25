import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import MagneticWrapper from './MagneticWrapper';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-950/90 to-industrial-950/40 z-10" />
        <img
          src="https://picsum.photos/id/249/1920/1080" 
          alt="Neon Signage Workshop"
          className="w-full h-full object-cover object-center opacity-60 scale-105 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="h-[2px] w-12 bg-brand-500" />
            <span className="text-brand-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Est. {COMPANY_INFO.est}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6"
          >
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">
              Brand Identity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            Trusted by businesses since 1982. High-quality 3D, Neon, and Steel signage crafted with traditional expertise and modern technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <MagneticWrapper>
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-brand-600 text-white font-display font-bold uppercase tracking-wider overflow-hidden rounded-sm inline-flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                <span className="relative flex items-center justify-center gap-2">
                  Get a Quote <ArrowRight size={20} />
                </span>
              </a>
            </MagneticWrapper>
            
            <a
              href="#gallery"
              className="px-8 py-4 border border-white/20 hover:border-brand-400 hover:bg-white/5 text-white font-display font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2"
            >
              View Our Work <ChevronRight size={20} />
            </a>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;