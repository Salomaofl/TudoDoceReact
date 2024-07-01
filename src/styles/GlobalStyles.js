import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    color: #333;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
