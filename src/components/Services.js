import React, { useState, useRef } from 'react';
import './Services.css';
import cardPP from '../assets/cardPP.png';
import cardP from '../assets/cardP.png';
import cardM from '../assets/cardM.png';
import tradicional from '../assets/Tradicional.png';
import Primium from '../assets/Primium.png';
import Brownie from '../assets/Brownie.png';



const Services = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [selectedFlavors, setSelectedFlavors] = useState({});
  const cardContainerRef = useRef(null);

  const cardSets = [
    {
      title: 'Escolha o kit para sua festa',
      cards: [
        {
          img: cardPP,
          title: 'Bolo PP',
          details: 'Bolo de 1kg serve até 10 pessoas. Incluso no pacote: 25 Doces tradicionais + Topo + Velinha.',
          price: 'R$ 130,00'
        },
        {
          img: cardP,
          title: 'Bolo P',
          details: 'Bolo de 1,5kg serve até 15 pessoas. Incluso no pacote: 40 Doces tradicionais + Topo + Velinha',
          price: 'R$ 185,00'
        },
        {
          img: cardM,
          title: 'Bolo M',
          details: 'Bolo de 2kg serve até 20 pessoas. Incluso no pacote: 60 Doces tradicionais + Topo + Velinha',
          price: 'R$ 250,00'
        }
      ]
    },{
            title: 'Kit com Salgado',
            cards: [
              {
                img: cardPP,
                title: 'Bolo PP + 100 Salgados',
                details: 'Bolo de 1kg serve 10 pessoas. Incluso no pacote: 25 Doces tradicionais + Topo + Velinha.',
                price: 'R$ 200,00'
              },
              {
                img: cardP,
                title: 'Bolo tamanho P  + 150 Salgados',
                details: 'Bolo de 1,5kg serve até 15 pessoas. Incluso no pacote: 40 Doces tradicionais + Topo + Velinha',
                price: 'R$ 280,00'
              },
              {
                img: cardM,
                title: 'Bolo M + 200 Salgados',
                details: 'Bolo de 2kg serve até 20 pessoas. Incluso no pacote: 60 Doces tradicionais + Topo + Velinha',
                price: 'R$ 370,00'
              }
            ]
          },
    {
      title: 'Cento de Doces',
      cards: [
        {
          img: tradicional,
          title: 'Tradicional',
          details: 'Quantidade: 100 - Valor:R$ 140,00',
          flavors: ['Brigadeiro', 'Brigadeiro Branco', 'Beijinho', 'Bicho de pé', 'Dois amores', 'Ninho']
        },
        {
          img: Primium,
          title: 'Premium',
          details: 'Quantidade: 100 - Valor:R$ 170,00',
          flavors: ['Brigadeiro Belga', 'Ferreiro', 'Ninho com Nutella', 'Maracujá', 'Surpresa de uva', 'Limão', 'Sensação']
        },
        {
          img: Brownie,
          title: 'Mini Brownies',
          details: 'Quantidade: 100 - Valor:R$ 150,00',
          flavors: ['Brigadeiro', 'Ninho', 'Doce de leite', 'Ninho com Nutella']
        }
      ]
    }
  ];

  const handleChoose = (card) => {
    const selected = selectedFlavors[card.title] || [];
    const flavors = selected.length > 0 ? selected.join(', ') : 'Nenhum sabor selecionado';
    const message = `Olá, gostaria de saber mais sobre o pacote: ${card.title} - ${card.details}. Sabores escolhidos: ${flavors}`;
    const whatsappURL = `https://wa.me/5511959030948?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleFlavorChange = (cardTitle, flavor) => {
    setSelectedFlavors((prev) => {
      const currentSelections = prev[cardTitle] || [];
      const newSelections = currentSelections.includes(flavor)
        ? currentSelections.filter((f) => f !== flavor)
        : [...currentSelections, flavor];
      return { ...prev, [cardTitle]: newSelections };
    });
  };

  const nextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % cardSets.length);
    cardContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const prevSet = () => {
    setCurrentSet((prevSet) => (prevSet - 1 + cardSets.length) % cardSets.length);
    cardContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section">
      <h2>{cardSets[currentSet].title}</h2>
      <div className="card-container" ref={cardContainerRef}>
        {cardSets[currentSet].cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={`Serviço ${index + 1}`} />
            <h3>{card.title}</h3>
            <p>{card.details}</p>
            <p>{card.price}</p>
            {card.flavors && (
              <div className="flavors">
                <h4>Escolha os sabores:</h4>
                {card.flavors.map((flavor) => (
                  <label key={flavor}>
                    <input
                      type="checkbox"
                      onChange={() => handleFlavorChange(card.title, flavor)}
                      checked={selectedFlavors[card.title]?.includes(flavor) || false}
                    />
                    {flavor}
                  </label>
                ))}
              </div>
            )}
            <button className="modern-button" onClick={() => handleChoose(card)}>

              Adicionar pedido
            </button>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={prevSet}>Anterior</button>
        <button onClick={nextSet}>Próximo</button>
      </div>
    </section>
  );
};

export default Services;
