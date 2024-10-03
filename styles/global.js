import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=SUSE:wght@100..800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, san sans-serif;
}
:root {
  --black: #2a2a2a;
  --roxo: #6f42d3;
  --roxoEscuro: #3e2197;
  --cinza: #e8e8e8;
  --lilas: #cfbef4;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

button{
    cursor: pointer;
}
a{
  text-decoration: none;
}
`;

export default GlobalStyle;
