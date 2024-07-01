import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bem-vindo à Tudo Doce Confeitaria</h1>
        <p>Os melhores doces e confeitos para adoçar sua vida.</p>
        <a href="#services" className="button">Nossos Serviços</a>
      </div>
    </section>
  );
};

export default Hero;
