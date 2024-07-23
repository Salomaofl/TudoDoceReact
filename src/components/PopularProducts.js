import React from 'react';
import styled from 'styled-components';
import cardP from '../assets/cardP.png';


const PopularProductsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #f5f5f7;
`;

const PopularProductsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
  font-family: 'SF Pro Display', sans-serif;
`;

const ProductGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Reduzi o espaçamento entre os cards para telas menores */

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Quebra para várias linhas em telas menores */
    gap: 10px; /* Ajuste o espaçamento entre os cards para telas menores */
  }
`;

const ProductCard = styled.div`
  width: 250px;
  margin: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px); /* 50% do espaço disponível menos o espaçamento */
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px); /* Utiliza todo o espaço disponível */
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const PopularProducts = () => (
  <PopularProductsContainer className="popular-products">
    <PopularProductsTitle>Doces para encomendas</PopularProductsTitle>
    <ProductGallery className="product-gallery">
      <ProductCard>
        <ProductImage src={cardP} alt="Produto 1" />
      </ProductCard>
      <ProductCard>
        <ProductImage src={cardP} alt="Produto 2" />
      </ProductCard>
      <ProductCard>
        <ProductImage src={cardP} alt="Produto 3" />
      </ProductCard>
    </ProductGallery>
  </PopularProductsContainer>
);

export default PopularProducts;
