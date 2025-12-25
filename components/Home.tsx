import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Stats from './Stats';
import Services from './Services';
import Features from './Features';
import Gallery from './Gallery';
import Contact from './Contact';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;