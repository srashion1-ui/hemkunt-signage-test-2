import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../constants';

const StatCard: React.FC<{ value: number; suffix: string; label: string; delay: number }> = ({ value, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center p-6 border border-white/5 bg-white/5 backdrop-blur-sm rounded-lg hover:border-brand-500/50 transition-colors duration-300"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
        {count}{suffix}
      </div>
      <div className="text-brand-400 font-medium tracking-wider uppercase text-sm text-center">
        {label}
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="bg-industrial-950 py-12 border-b border-white/5 relative z-20 -mt-20 lg:-mt-24 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-2xl shadow-black/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {STATS.map((stat, index) => (
          <StatCard key={stat.id} {...stat} delay={index * 0.2} />
        ))}
      </div>
    </motion.section>
  );
};

export default Stats;