import React from 'react';
import './Services.css';
import image1 from '../assets/color.jpg';
import logo from '../assets/oi.jpg';
import cupcake from '../assets/cupcake.jpg';

const Services = () => {
  return (
    <section id="services" className="section">
      <h2>Nossos Serviços</h2>
      <div className="card-container">
        <div className="card">
          <img src={cupcake} alt="Serviço 1" />
          <h3>Serviço 1</h3>
          <p>Descrição do serviço 1.</p>
        </div>
        <div className="card">
          <img src={logo} alt="Serviço 2" />
          <h3>Serviço 2</h3>
          <p>Descrição do serviço 2.</p>
        </div>
        <div className="card">
          <img src={image1} alt="Serviço 3" />
          <h3>Serviço 3</h3>
          <p>Descrição do serviço 3.</p>
        </div>
        <div className="card">
          <img src={logo} alt="Serviço 4" />
          <h3>Serviço 4</h3>
          <p>Descrição do serviço 4.</p>
        </div>
        <div className="card">
          <img src={image1} alt="Serviço 5" />
          <h3>Serviço 5</h3>
          <p>Descrição do serviço 5.</p>
        </div>
        <div className="card">
          <img src={logo} alt="Serviço 6" />
          <h3>Serviço 6</h3>
          <p>Descrição do serviço 6.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
