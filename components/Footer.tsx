import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Hemkunt Signage provides innovative digital signage solutions for businesses worldwide.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@hemkuntignage.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Signage Street, Tech City, TC 12345</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook" className="social-link">Facebook</a>
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#linkedin" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Hemkunt Signage. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;