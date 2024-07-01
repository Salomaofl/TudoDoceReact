import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background-color: #fff;
  padding: 30px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #e495a9;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  max-width: 400px;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: #e495a9;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d77a8e;
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
