import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/Logo.png'; // Ajuste conforme o nome do arquivo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="#home" className="logo" style={{ backgroundImage: `url(${logo})` }}></a>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#services">Serviços</a>
          <a href="#whyus">Por Que Nós</a>
          <a href="#products">Produtos</a>
          <a href="#contact">Contato</a>
          <a href="#delivery">Entrega & Pagamento</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
