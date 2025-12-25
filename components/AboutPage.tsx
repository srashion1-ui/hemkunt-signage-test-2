import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Target, Rocket } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-industrial-950 min-h-screen pt-24 pb-12">
      {/* Header Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            Legacy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">
              Light & Steel
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            Since 1982, Hemkunt Signage has been at the forefront of visual branding in Delhi. 
            From humble hand-painted beginnings to state-of-the-art CNC and Neon technologies, 
            our journey is defined by adaptation, precision, and an unwavering commitment to quality.
          </p>
        </motion.div>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-2xl overflow-hidden relative group"
          >
            <img 
              src="https://picsum.photos/id/250/800/800" 
              alt="Workshop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
               <p className="text-white font-display font-bold text-xl">The Workshop</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-[400px] rounded-2xl overflow-hidden relative group"
          >
            <img 
              src="https://picsum.photos/id/201/800/800" 
              alt="Neon Crafting" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
               <p className="text-white font-display font-bold text-xl">Modern Technology</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-industrial-900 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-industrial-950 p-8 rounded-xl border border-white/5 hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-brand-900/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-brand-500" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Precision First</h3>
              <p className="text-gray-400">
                We believe a sign is the face of a brand. There is no room for error. Every curve of neon and cut of steel is measured to perfection.
              </p>
            </div>
            <div className="bg-industrial-950 p-8 rounded-xl border border-white/5 hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-brand-900/20 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-brand-500" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-400">
                While we respect tradition, we embrace the future. Our adoption of 3D printing and advanced LED modules keeps our clients ahead of the curve.
              </p>
            </div>
            <div className="bg-industrial-950 p-8 rounded-xl border border-white/5 hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 bg-brand-900/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-brand-500" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Client Partnership</h3>
              <p className="text-gray-400">
                We don't just sell signs; we build relationships. Many of our clients have been with us for over two decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Team Note */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Rocket className="w-12 h-12 text-brand-500 mx-auto mb-6" />
        <blockquote className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-8">
          "Our mission is simple: To ensure that when the sun goes down, your brand shines the brightest."
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-1 bg-brand-600"></div>
          <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold">The Hemkunt Team</span>
          <div className="w-12 h-1 bg-brand-600"></div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;