import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-industrial-950 min-h-screen text-gray-200 font-sans selection:bg-brand-500 selection:text-white pb-24 md:pb-0">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        
        <Footer />
        <MobileStickyBar />
      </div>
    </Router>
  );
};

export default App;