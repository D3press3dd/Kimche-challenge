import { createGlobalStyle } from 'styled-components';
import { colors } from '../theme/colors';

export default createGlobalStyle` *,
*::after,
*::before {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html {
 font-size:62.5%;
 font-smooth: always;
 -webkit-font-smoothing: antialiased;
 scroll-behavior: smooth;
}

img {
  max-width: 100%;
  display: block;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: ${colors.background};
  color: ${colors.textColor};
  min-height: 100vh;
  position: relative;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: ${colors.whiteText} ${colors.whiteText};
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: ${colors.buttonColor};
}

*::-webkit-scrollbar-thumb {
  background-color: ${colors.buttonColor};
  border-radius: 10px;
  border: 2px solid ${colors.whiteText};
}

::-moz-selection {
  color: ${colors.lightText};
  background: ${colors.buttonColor};
}
::selection {
  color: ${colors.lightText};
  background: ${colors.buttonColor};
}

/* dibuja el texto seleccionado en un parrafo de color blanco y negro*/
p::-moz-selection {
  color: ${colors.lightText};
  background: ${colors.buttonColor};
}
p::selection {
  color: ${colors.lightText};
  background: ${colors.buttonColor};
}

 
`;
