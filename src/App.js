import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import PopularProducts from './components/PopularProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contactForm');

    if (cards) {
      cards.forEach(card => {
        card.addEventListener('click', () => {
          cards.forEach(c => c.classList.remove('clicked'));
          card.classList.add('clicked');
        });
      });
    }

    if (menuIcon) {
      menuIcon.addEventListener('click', () => {
        if (navLinks) {
          navLinks.classList.toggle('active');
        }
      });
    }

    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const phoneNumber = '5511983922181'; // Substitua pelo número de telefone da loja.

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=Nome: ${encodeURIComponent(name)}%0ADúvida: ${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
      });
    }

    return () => {
      if (cards) {
        cards.forEach(card => {
          card.removeEventListener('click', () => {});
        });
      }

      if (menuIcon) {
        menuIcon.removeEventListener('click', () => {});
      }

      if (contactForm) {
        contactForm.removeEventListener('submit', () => {});
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <PopularProducts />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
