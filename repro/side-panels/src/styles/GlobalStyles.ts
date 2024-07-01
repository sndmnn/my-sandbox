import { createGlobalStyle } from 'styled-components';
import { COLOR_MAP } from './colors';

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

  /* Avoid text overflows and define default text color */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    color: var(--color-black-200);
  }

  /* Add default font size with var to account for print media */
  p, td, th, li, input, button, textarea, select {
    font-size: var(--font-size-p);
  }

  /* Create a root stacking context */
  #root, #__next {
    isolation: isolate;
  }

  /* -- CSS Reset End -- */

  /* -------------------------------------------------- */

  body {
    background-color: var(--color-white-200);

    @media print {
      background-color: unset;
    }
  }

  * {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6, p, span, button, a, label, input, select, textarea, table, svg {
    color: var(--color-black-200);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
  }
  
  p, span, button, a, label, input, select, textarea, table {
    font-family: var(--font-sans);
  }

  button:hover {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  /* Declare global variables here */
  * {
    /* == Color Palette == */
    /* =================== */
    ${Object.entries(COLOR_MAP).map(
      ([color, value]) => `--color-${color}: #${value};`,
    )}
  
    /* === Type Faces === */
    /* ================== */
    --font-sans: 'Lato', sans-serif;
    --font-serif: 'Noto Serif', serif;

    /* === Type Scale === */
    /* ================== */
    --font-size-h1: 2.027rem;
    --font-size-h2: 1.802rem;
    --font-size-h3: 1.602rem;
    --font-size-h4: 1.424rem;
    --font-size-h5: 1.266rem;
    --font-size-h6: 1.125rem;
    --font-size-p: 1rem;
    --font-size-s1: 0.889rem;
    --font-size-s2: 0.79rem;
  }
`;
