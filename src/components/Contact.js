import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background-color: #fff;
  padding: 60px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 40px auto;
  max-width: 600px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
  font-family: 'SF Pro Display', sans-serif;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInput = styled.input`
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:focus {
    border-color: #e495a9;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContactButton = styled.button`
  padding: 15px 30px;
  background-color: #e495a9;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #d77a8e;
    transform: scale(1.05);
  }
`;

const Contact = () => (
  <ContactContainer className="contact">
    <ContactTitle>Tem alguma pergunta?</ContactTitle>
    <ContactForm id="contactForm">
      <ContactInput type="text" id="name" placeholder="Seu Nome" required />
      <ContactInput type="text" id="message" placeholder="Sua Pergunta" required />
      <ContactButton type="submit" className="button">Enviar</ContactButton>
    </ContactForm>
  </ContactContainer>
);

export default Contact;
