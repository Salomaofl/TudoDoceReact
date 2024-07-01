import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Logo.png';
import image1 from '../assets/image1.png';

const PopularProductsContainer = styled.section`
  padding: 30px 20px;
  text-align: center;
`;

const PopularProductsTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #A47240;
`;

const ProductGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProductImage = styled.img`
  width: 190px; /* Aumentando o tamanho da imagem */
  height: 190px; /* Aumentando o tamanho da imagem */
  margin: 20px; /* Ajustando a margem */
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const PopularProducts = () => (
  <PopularProductsContainer className="popular-products">
    <PopularProductsTitle>Doces populares</PopularProductsTitle>
    <ProductGallery className="product-gallery">
      <ProductImage src={image1} alt="Produto 1" />
      <ProductImage src={image1} alt="Produto 2" />
      <ProductImage src={image1} alt="Produto 3" />
      <ProductImage src={image1} alt="Produto 4" />
    </ProductGallery>
  </PopularProductsContainer>
);

export default PopularProducts;
