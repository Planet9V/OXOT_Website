import React, { useEffect, useRef } from 'react';
import './HomePage.css';

const HomePage = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (cardsRef.current) {
        cardsRef.current.forEach((card) => {
          if (card) {
            observer.unobserve(card);
          }
        });
      }
    };
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <video autoPlay loop muted className="hero-video">
          <source src="https://static.videezy.com/system/resources/previews/000/037/383/original/Cyber-security-digital-and-AI-00357.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>OXOT</h1>
          <p>Cybernetic Serenity, Delivered.</p>
        </div>
      </div>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>To provide our clients with the most advanced cyber security services, ensuring the integrity, confidentiality, and availability of their most critical assets. We are committed to delivering innovative solutions that are tailored to the unique needs of each client, enabling them to operate with confidence in an increasingly complex digital world.</p>
      </section>
      <section className="solutions-section">
        <h2>Our Solutions for Critical Infrastructure</h2>
        <div className="solutions-grid">
          <div className="solution-card" ref={(el) => (cardsRef.current[0] = el)}>
            <h3>Breach Disclosure Mitigation</h3>
            <p>Transforming Incident Response Through Legal-Grade Privacy...</p>
          </div>
          <div className="solution-card" ref={(el) => (cardsRef.current[1] = el)}>
            <h3>Digital Twin for Operational Resilience</h3>
            <p>Bridging Operations and Security Through Advanced Visualization...</p>
          </div>
          <div className="solution-card" ref={(el) => (cardsRef.current[2] = el)}>
            <h3>Cyber Defender Program</h3>
            <p>Protecting Critical Infrastructure Through Advanced Cybersecurity...</p>
          </div>
          <div className="solution-card" ref={(el) => (cardsRef.current[3] = el)}>
            <h3>Confidential SOC-as-a-Service</h3>
            <p>Your Privacy-First Security Partner...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
