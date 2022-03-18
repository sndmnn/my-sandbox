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
    --color-black: #020a17;
    --color-grey: #3e434b;
  
    /* === Typography === */
    /* ================== */
    --font-sans: 'Roboto', sans-serif;
  }
`;
