import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Open-Sans", sans-serif;
  }


  h2, p  {
    margin: 0
  }
  h2, p, a {
    letter-spacing: .3px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  #gatsby-focus-wrapper {
    position: relative;
  }

`;

export default GlobalStyles;
