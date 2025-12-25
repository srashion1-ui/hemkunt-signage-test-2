import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-industrial-950 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <span className="text-brand-500 font-bold uppercase tracking-widest text-sm">
              Our Expertise
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-white">
              Premium Signage Solutions
            </h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto mt-6" />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative p-8 bg-industrial-900 border border-white/5 rounded-xl hover:bg-industrial-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="w-14 h-14 bg-industrial-950 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-500/50 transition-colors">
                <service.icon className="text-gray-400 group-hover:text-brand-400 transition-colors" size={28} />
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-bold text-gray-500 group-hover:text-white uppercase tracking-wider transition-colors">
                Learn More <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;