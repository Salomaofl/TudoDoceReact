import React from 'react';
import styled from 'styled-components';

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
  justify-content: center;
  flex-wrap: wrap;
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

const WhyUs = () => (
  <WhyUsContainer className="why-us">
    <WhyUsTitle>Por que escolher a Tudo Doce</WhyUsTitle>
    <FeaturesContainer className="features">
      <Feature className="feature">
        <FeatureText>Utilizamos os melhores ingredientes</FeatureText>
      </Feature>
      <Feature className="feature">
        <FeatureText>Doces personalizados para cada ocasião</FeatureText>
      </Feature>
      <Feature className="feature">
        <FeatureText>Entrega rápida e segura</FeatureText>
      </Feature>
    </FeaturesContainer>
  </WhyUsContainer>
);

export default WhyUs;
