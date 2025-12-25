import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

const App: React.FC = () => {
  return (
    <div className="bg-industrial-950 min-h-screen text-gray-200 font-sans selection:bg-brand-500 selection:text-white pb-24 md:pb-0">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Gallery />
        <Contact />
      </main>
      
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default App;