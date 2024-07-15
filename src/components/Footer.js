import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #A47240;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; 2023 Tudo Doce. Todos os direitos reservados.</FooterText>
  </FooterContainer>
);

export default Footer;
