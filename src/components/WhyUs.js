import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgTeste from '../assets/LogoTeste.png';

const WhyUsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #f5f5f7;
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

const FeatureText = styled.p`
  font-size: 18px;
  color: #666;
  font-family: 'SF Pro Display', sans-serif;
`;

const CarouselContainer = styled.div`
  width: 90%;
  max-width: 400px; /* Tamanho máximo do card */
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
      <WhyUsTitle>Por que escolher a Tudo Doce</WhyUsTitle>
      <FeaturesContainer className="features">
        <CarouselContainer>
          <Slider {...settings}>
            <div>
              <img src={ImgTeste} alt="Foto 1" />
            </div>
            <div>
              <img src={ImgTeste} alt="Foto 2" />
            </div>
            <div>
              <img src={ImgTeste} alt="Foto 3" />
            </div>
            {/* Adicione mais imagens conforme necessário */}
          </Slider>
        </CarouselContainer>

        <Feature className="feature">
          <FeatureText>Utilizamos os melhores ingredientes</FeatureText>
        </Feature>
      </FeaturesContainer>
    </WhyUsContainer>
  );
};

export default WhyUs;
