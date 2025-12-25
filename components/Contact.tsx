import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', type: 'Outdoor 3D', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log('Form Submitted:', formState);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-industrial-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-500 font-bold uppercase tracking-widest text-sm"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-2 text-4xl md:text-5xl font-display font-bold text-white mb-6"
            >
              Start Your Project
            </motion.h2>
            <p className="text-gray-400 text-lg mb-10">
              Ready to elevate your brand visibility? Contact us for a free consultation and quote. We respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-900/20 p-3 rounded-lg mr-4 border border-brand-500/20">
                  <MapPin className="text-brand-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-400">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-900/20 p-3 rounded-lg mr-4 border border-brand-500/20">
                  <Phone className="text-brand-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone Number</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-400 hover:text-brand-400 transition-colors text-lg">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-900/20 p-3 rounded-lg mr-4 border border-brand-500/20">
                  <Mail className="text-brand-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Address</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-400 hover:text-brand-400 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-industrial-950 p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-industrial-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-industrial-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    placeholder="+91 98XXX XXXXX"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Signage Type</label>
                  <select
                    id="type"
                    className="w-full bg-industrial-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none"
                    value={formState.type}
                    onChange={(e) => setFormState({...formState, type: e.target.value})}
                  >
                    <option>Outdoor 3D Signs</option>
                    <option>Neon Signboards</option>
                    <option>Stainless Steel</option>
                    <option>LED Video Walls</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-industrial-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    placeholder="Tell us about your requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-lg uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(6,182,212,0.39)]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" /> Processing
                    </>
                  ) : (
                    <>
                      Request Callback <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl text-white font-bold mb-2">Request Sent!</h3>
                <p className="text-gray-400">Thank you for contacting Hemkunt Signage. We will call you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-400 underline hover:text-brand-300"
                >
                  Send another request
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;