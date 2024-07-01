import React from 'react';
import './Services.css';
import image1 from '../assets/image1.png';
import logo from '../assets/Logo.png';

const Services = () => {
  return (
    <section id="services" className="section">
      <h2>Nossos Serviços</h2>
      <div className="card-container">
        <div className="card">
          <img src={image1} alt="Serviço 1" />
          <h3>Serviço 1</h3>
          <p>Descrição do serviço 1.</p>
        </div>
        <div className="card">
          <img src={logo} alt="Serviço 2" />
          <h3>Serviço 2</h3>
          <p>Descrição do serviço 2.</p>
        </div>
        <div className="card">
                  <img src={image1} alt="Serviço 2" />
                  <h3>Serviço 2</h3>
                  <p>Descrição do serviço 2.</p>
                </div>
                <div className="card">
                          <img src={logo} alt="Serviço 2" />
                          <h3>Serviço 2</h3>
                          <p>Descrição do serviço 2.</p>
                        </div>
      </div>

    </section>
  );
};

export default Services;
