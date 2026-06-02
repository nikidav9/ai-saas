import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => (
  <section className="home">
    <h1>Welcome to AI SaaS</h1>
    <p>Your AI-powered solutions start here.</p>
    <a href="https://github.com/nikidav9/ai-saas" target="_blank" rel="noopener noreferrer">
      View Repository
    </a>
  </section>
);

export default HomePage;
