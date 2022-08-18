import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* -- CSS Reset Begin -- */

  /* Use a more intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding from all elements */
  * {
    margin: 0;
    padding: 0;
  }

  /* Allow percentage-based heights in the application */
  html, body {
    height: 100%;
  }

  /* Add accessible line-height and improve text rendering */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* Create a root stacking context */
  #root, #__next {
    isolation: isolate;
  }

  /* -- CSS Reset End -- */

  /* -------------------------------------------------- */

  /* Declare global variables here */
  * {
    /* == Color Palette == */
    /* =================== */
    --color-white: #ffffff;
    --color-black: #000000;
    --color-gray: #d9d9d9;
    --color-gray-darker: #878787;
    --color-gray-darkest: #6e6e6e;
  
    /* === Typography === */
    /* ================== */
    --font-sans: 'Roboto', sans-serif;

    /* === Shadows === */
    /* =============== */
    --elevation-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  }
`;
