import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => (
  <section className="home">
    <h1 className="home__title">Добро пожаловать в AI SaaS</h1>
    <p className="home__subtitle">Инновационные решения на базе искусственного интеллекта для вашего бизнеса.</p>
    <button className="home__cta">Начать сейчас</button>
  </section>
);

export default HomePage;
