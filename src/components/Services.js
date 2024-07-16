import React from 'react';
import './Services.css';
import image1 from '../assets/color.jpg';
import logo from '../assets/oi.jpg';
import cupcake from '../assets/cupcake.jpg';



const Services = () => {

  const handleChoose = (title, details) => {
    const message = `Olá, gostaria de saber mais sobre o pacote: ${title} - ${details}`;
    const whatsappURL = `https://wa.me/5511983922181?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="services" className="section">
      <h2>Escolha o kit para sua festa</h2>
      <div className="card-container">
        <div className="card">
          <img src={cupcake} alt="Serviço 1" />
          <h3>Bolo PP</h3>
          <p>Incluso no pacote: 25 Doces tradicionais + Topo + Velinha.</p>
           <p>R$ 130,00.</p>
          <button onClick={() => handleChoose('Bolo PP', 'Incluso no pacote: 25 Doces tradicionais + Topo + Velinha.')}>Escolher</button>
        </div>
        <div className="card">
          <img src={logo} alt="Serviço 2" />
          <h3>Bolo P</h3>
          <p>Incluso no pacote: 40 Doces tradicionais + Topo + Velinha</p>
          <p>R$ 185,00.</p>
          <button onClick={() => handleChoose('Bolo P', 'Incluso no pacote: 40 Doces tradicionais + Topo + Velinha')}>Escolher</button>
        </div>
        <div className="card">
          <img src={image1} alt="Serviço 3" />
          <h3>Bolo M</h3>
          <p>Incluso no pacote: 60 Doces tradicionais + Topo + Velinha</p>
          <p>R$ 250,00.</p>
          <button onClick={() => handleChoose('Bolo M', 'Incluso no pacote: 60 Doces tradicionais + Topo + Velinha')}>Escolher</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
