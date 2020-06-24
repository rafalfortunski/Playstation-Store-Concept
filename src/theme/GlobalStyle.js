import { createGlobalStyle } from "styled-components";
import { theme, font } from "./mainTheme";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');

@font-face {
  font-family: 'SF Pro';
  font-style: normal;
  font-weight: 300;
  src: url('./SFProThin.ttf'); /* IE9 Compat Modes */
  src: local('SF Pro'), local('SF Pro'),
       url('../fonts/open-sans-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
}

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  color: ${theme.dark};
  font-weight: ${font.thin};
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;

}

ul, li {
  padding: 0;
  margin: 0;
}

button, a {
  outline: 0;
}

a {
  text-decoration: none;
  color: ${theme.dark};
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: ${font.thin};
  font-family: ${font.poppins};
}

h1 {
  font-size: ${font.fs120};
  font-weight: ${font.bold};
}
h2 {
  font-size: ${font.fs40};
}
h3 {
  font-size: ${font.fs22};
}
h4 {
  font-size: ${font.fs16};
}
.no-scroll {
  height: 100%;
  overflow: hidden;
}
.slick-list {margin: 0 -25px;}
.slick-slide>div {padding: 0 25px;}
`;

export default GlobalStyle;
