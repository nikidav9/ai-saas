import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => (
  <section className="home">
    <h1>Добро пожаловать в AI SaaS</h1>
    <p>Инновационные решения искусственного интеллекта для вашего бизнеса.</p>
    <a href="https://github.com/nikidav9/ai-saas" target="_blank" rel="noopener noreferrer" className="repo-link">
      Перейти к репозиторию
    </a>
  </section>
);

export default HomePage;
