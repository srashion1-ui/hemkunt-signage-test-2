import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Hemkunt Signage</h1>
        <p>Leading the Way in Digital Signage Innovation</p>
      </section>
      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At Hemkunt Signage, we are committed to delivering cutting-edge digital signage solutions
            that transform the way businesses communicate with their audiences.
          </p>
        </div>
        <div className="about-text">
          <h2>Our Values</h2>
          <ul>
            <li>Innovation and Excellence</li>
            <li>Customer Satisfaction</li>
            <li>Reliability and Trust</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
      </section>
      <section className="about-team">
        <h2>Our Team</h2>
        <p>Our experienced professionals are dedicated to providing you with the best service and support.</p>
      </section>
    </div>
  );
};

export default AboutPage;