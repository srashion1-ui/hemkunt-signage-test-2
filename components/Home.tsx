import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="hero-content">
          <h1>Welcome to Hemkunt Signage</h1>
          <p>Your Premier Destination for Digital Signage Solutions</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>Feature One</h3>
          <p>Description of your first feature</p>
        </div>
        <div className="feature-card">
          <h3>Feature Two</h3>
          <p>Description of your second feature</p>
        </div>
        <div className="feature-card">
          <h3>Feature Three</h3>
          <p>Description of your third feature</p>
        </div>
      </section>
    </div>
  );
};

export default Home;