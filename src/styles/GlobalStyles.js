// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "TrojanPro";
  src: url("/fonts/trajanPro-regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "TrajanPro";
  src: url("/fonts/trajanPro-bold.otf") format("opentype");
  font-weight: 700;
  font-style: bold;
}
@font-face {
  font-family: "Nicholson";
  src: url("/fonts/nicholson-regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Goudy";
  src: url("/fonts/goudy-medium.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Gothic";
  src: url("/fonts/gothic.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Vactory";
  src: url("/fonts/vactory-sans-regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Holland";
  src: url("/fonts/holland-title.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Albertus";
  src: url("/fonts/albertus.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "OpenRunde";
  src: url("/fonts/openrunde-regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "OpenRunde";
  src: url("/fonts/openrunde-bold.otf") format("opentype");
  font-weight: 700;
  font-style: bold;
}
@font-face {
  font-family: "Radiance";
  src: url("/fonts/radiance_regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "RadianceAlt";
  src: url("/fonts/radiance_regular_alt.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Radiance";
  src: url("/fonts/radiance_bold.otf") format("opentype");
  font-weight: 700;
  font-style: bold;
}
@font-face {
  font-family: "GoudyTrajan";
  src: url("/fonts/goudy-trajan-medium.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "AlbertusNova";
  src: url("/fonts/albertusnova.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "AlbertusNovaBold";
  src: url("/fonts/albertusnova-bold.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "AlbertusNovaLight";
  src: url("/fonts/albertusnova-light.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "GoudyTrajanProBold";
  src: url("/fonts/goudy-trajan-pro-bold.otf") format("opentype");
  font-weight: 700;
  font-style: bold;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fadeInUp {
  animation: fadeInUp 1s ease-in-out;
  margin: 0;
}

.hidden-before-animate {
  opacity: 0;
  transform: translateY(40px);
}

 .HeroSelectedFade{
    animation: fadeIn 500ms ease-in-out;
  }

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.text};
    border: 0px;
  }

  body, html, #root{
  font-family: Arial, sans-serif;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
}
  /* Fonte padrão */
  .main-background {
    display: flex;
    flex-direction: column;
    background-image: url('/images/bg_main.png');
    color: #333;
    background-size: cover;       /* estica e mantém proporção */
    background-position: center;  /* centraliza */
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
  }
  .no-background{
    background-image: none;
    background-color: white;
    height: 100vh;
  }

  h1, h2, h3, h4, h5 {
    color: ${(props) => props.theme.colors.text};
  }

  .mainPageText {
  font-family: "TrajanPro", Arial, sans-serif;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
  .textHover:hover {
    color: ${(props) => props.theme.colors.textHover};
  }

  .textSelected {
    border-bottom: 2px solid #E03C1D;
    color: ${(props) => props.theme.colors.textHover};
  }

  .main-hero-selected{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
    padding: 40px;
    animation: fadeIn 500ms ease-in-out;
  }

  a {
    text-decoration: none;
    color: inherit;
    height: max-content;
    position: relative;
  }

  ul {
    list-style: none;
  }

  p {
    font-size: 0.7em;
  }

 

  /* Outros estilos globais que desejar */
`;

export default GlobalStyles;
