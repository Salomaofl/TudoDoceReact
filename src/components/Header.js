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
      <a className="logo" href="/">
        <img src={logo} alt="Logo da Empresa" />
      </a>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;


