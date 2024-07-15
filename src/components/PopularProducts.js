import React from 'react';
import styled from 'styled-components';
import color from '../assets/color.jpg';
import oi from '../assets/oi.jpg';
import cupcake from '../assets/cupcake.jpg';

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
  gap: 40px;
`;

const ProductCard = styled.div`
  width: 250px; /* Largura fixa do card */
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const PopularProducts = () => (
  <PopularProductsContainer className="popular-products">
    <PopularProductsTitle>Doces populares</PopularProductsTitle>
    <ProductGallery className="product-gallery">
      <ProductCard>
        <ProductImage src={color} alt="Produto 1" />
      </ProductCard>
      <ProductCard>
        <ProductImage src={oi} alt="Produto 2" />
      </ProductCard>
      <ProductCard>
        <ProductImage src={oi} alt="Produto 3" />
      </ProductCard>
      <ProductCard>
        <ProductImage src={cupcake} alt="Produto 4" />
      </ProductCard>
    </ProductGallery>
  </PopularProductsContainer>
);

export default PopularProducts;
