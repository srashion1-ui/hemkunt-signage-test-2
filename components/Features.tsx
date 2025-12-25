import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-industrial-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose Hemkunt</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Craftsmanship That <br />
              <span className="text-gray-500">Stands The Test of Time</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We combine traditional techniques with cutting-edge technology to deliver signage that is not only beautiful but durable. Your brand deserves the best.
            </p>
            
            <div className="space-y-6">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-brand-500" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white font-display">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] w-full bg-industrial-950 rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
             <img 
              src="https://picsum.photos/id/192/800/1200" 
              alt="Quality Craftsmanship" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute bottom-8 left-8 z-20 max-w-xs">
              <div className="p-4 bg-brand-600/90 backdrop-blur rounded border-l-4 border-white">
                <p className="text-white font-display font-bold text-lg">"Quality is never an accident. It is always the result of intelligent effort."</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;