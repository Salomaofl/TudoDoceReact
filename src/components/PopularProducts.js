import React from 'react';
import styled from 'styled-components';
import feira from '../assets/feirinha.png';
import encomenda from '../assets/encomendas.png';
import corporativo from '../assets/corporativos.png';
import bolos from '../assets/bolosEdoces.png';

const PopularProductsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #f5f5f7;
`;

const PopularProductsTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 40px;
  color: #333;
  font-family: 'SF Pro Display', sans-serif;
`;

const ProductGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const ProductCard = styled.div`
  width: 250px;
  height: 350px; /* Define uma altura fixa para os cards */
  margin: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 60%; /* Define uma altura máxima para a imagem */
  object-fit: cover;
  border-radius: 10px;
`;

const ProductButton = styled.a`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #555;
  }
`;

const PopularProducts = () => (
  <PopularProductsContainer id="products" className="popular-products">
    <PopularProductsTitle>Produtos</PopularProductsTitle>
    <ProductGallery className="product-gallery">
      <ProductCard>
        <ProductImage src={corporativo} alt="Produto 1" />
        <h3>Doces Corporativos</h3>
        <ProductButton href="https://wa.me/p/26643003818624345/5511959030948" target="_blank" rel="noopener noreferrer">Abrir</ProductButton>
      </ProductCard>
      <ProductCard>
        <ProductImage src={feira} alt="Produto 2" />
        <h3>Feirinha de condomínios</h3>
        <ProductButton href="https://wa.me/p/7829212287134562/5511959030948" target="_blank" rel="noopener noreferrer">Abrir</ProductButton>
      </ProductCard>
      <ProductCard>
        <ProductImage src={encomenda} alt="Produto 3" />
        <h3>Doces para encomendas</h3>
        <ProductButton href="https://wa.me/p/8425452167485436/5511959030948" target="_blank" rel="noopener noreferrer">Abrir</ProductButton>
      </ProductCard>
       <ProductCard>
         <ProductImage src={bolos} alt="Produto 4" />
         <h3>Catálogo de bolos e doces</h3>
          <ProductButton href="https://wa.me/p/7536936153016210/5511959030948" target="_blank" rel="noopener noreferrer">Abrir</ProductButton>
      </ProductCard>
    </ProductGallery>
  </PopularProductsContainer>
);

export default PopularProducts;
