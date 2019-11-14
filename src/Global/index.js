import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: linear-gradient(to bottom, #5c6a7d 0%, #34465d 100%), transparent;
    background-size: 100% 100%, 100%;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: fixed;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
  button{
    cursor: pointer;
  }
`;
