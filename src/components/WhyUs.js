import React from 'react';
import styled from 'styled-components';

const WhyUsContainer = styled.section`
  padding: 30px 20px;
  text-align: center;
`;

const WhyUsTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #A47240;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const Feature = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WhyUs = () => (
  <WhyUsContainer className="why-us">
    <WhyUsTitle>Por que escolher a Tudo Doce</WhyUsTitle>
    <FeaturesContainer className="features">
      <Feature className="feature">
        <p>Utilizamos os melhores ingredientes</p>
      </Feature>
      <Feature className="feature">
        <p>Doces personalizados para cada ocasião</p>
      </Feature>
      <Feature className="feature">
        <p>Entrega rápida e segura</p>
      </Feature>
    </FeaturesContainer>
  </WhyUsContainer>
);

export default WhyUs;
