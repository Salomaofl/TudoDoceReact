import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importa os ícones do react-icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../assets/encomendas.png';
import Img2 from '../assets/bolosEdoces.png';
import Img3 from '../assets/corporativos.png';
import Fundo from '../assets/FundoSite.png';
import img1 from '../assets/002.jpg';
import img2 from '../assets/003.jpg';
import img8 from '../assets/008.jpg';

const WhyUsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: url(${Fundo}) no-repeat center center/cover;
`;

const WhyUsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
  font-family: 'SF Pro Display', sans-serif;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Feature = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 20px;
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureText = styled.div`
  font-size: 18px;
  color: #666;
  font-family: 'SF Pro Display', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap; /* Permite quebra de linha em telas menores */

  @media (max-width: 480px) {
    flex-direction: column; /* Alinha os itens verticalmente em telas muito pequenas */
    align-items: flex-start; /* Alinha os itens à esquerda */
  }
`;

const CarouselContainer = styled.div`
  width: 90%;
  max-width: 600px; /* Tamanho máximo do card */
  .slick-slide img {
    width: 100%;
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 15px;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 30px;
    height: 30px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    color: black;
  }
`;

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const WhyUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <WhyUsContainer className="why-us">
      <WhyUsTitle>Nossos produtos</WhyUsTitle>
      <FeaturesContainer className="features">
        <CarouselContainer>
          <Slider {...settings}>
            <div>
              <img src={img1} alt="Foto 1" />
            </div>
            <div>
              <img src={img2} alt="Foto 2" />
            </div>
            <div>
              <img src={img8} alt="Foto 3" />
            </div>
            <div>
              <img src={Img3} alt="Foto 4" />
            </div>
            <div>
              <img src={Img1} alt="Foto 5" />
            </div>
            <div>
              <img src={Img2} alt="Foto 6" />
            </div>
            <div>
              <img src={Img3} alt="Foto 7" />
            </div>
            {/* Adicione mais imagens conforme necessário */}
          </Slider>
        </CarouselContainer>
        <FeaturesWrapper>
          <Feature className="feature">
            <FeatureText>
              <div>
                <a href="https://www.instagram.com/tudodocee__" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <FaInstagram size={24} color="#E4405F" /> @tudodocee__
                </a>
              </div>
            </FeatureText>
          </Feature>

          <Feature className="feature">
            <FeatureText>
              <div>
                <FaWhatsapp size={24} color="#25D366" /> (11) 95903-0948
              </div>
            </FeatureText>
          </Feature>
        </FeaturesWrapper>
      </FeaturesContainer>
    </WhyUsContainer>
  );
};

export default WhyUs;
