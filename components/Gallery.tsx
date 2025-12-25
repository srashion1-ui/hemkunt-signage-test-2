import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-industrial-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-brand-500 font-bold uppercase tracking-widest text-sm">Our Portfolio</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold text-white">Recent Work</h2>
          </div>
          <div className="mt-4 md:mt-0">
             <button className="text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1">View All Projects</button>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PORTFOLIO.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-400 text-xs font-bold uppercase tracking-wider mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-white font-display text-xl font-bold">{item.title}</h3>
              </div>

              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="text-white" size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <div className="bg-industrial-900 p-4 absolute bottom-0 w-full border-t border-white/10">
                <h3 className="text-white font-display text-xl">{selectedImage.title}</h3>
                <p className="text-brand-400 text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;