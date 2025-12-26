import React, { useState, useEffect } from 'react';

const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`mobile-sticky-bar ${isVisible ? 'visible' : 'hidden'}`}>
      <button className="sticky-btn">Call Now</button>
      <button className="sticky-btn">Message</button>
      <button className="sticky-btn">Book Demo</button>
    </div>
  );
};

export default MobileStickyBar;