import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle`
  ${normalize()}

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
    --color-primary-100: #f1ffe7;
    --color-primary-200: #a9fdac;
    --color-primary-300: #44cf6c;
    --color-primary-400: #011936;
    --color-primary-500: #32a287;

    --color-text: #000000;
    --color-text-inverted: #ffffff;

    --color-neutral-100: #ffffff;
    --color-neutral-200: #f4f5f7;
    --color-neutral-300: #e1e1e1;
    --color-neutral-400: #737581;
    --color-neutral-500: #4a4b53;
    --color-neutral-600: #000000;

    --color-status-success-100: #529E66;
    --color-status-success-200: #367B48;
    --color-status-success-300: #276738;
  
    --color-status-warning-100: #E1C542;
    --color-status-warning-200: #CAB23F;
    --color-status-warning-300: #B49E35;

    --color-status-error-100: #D0454C;
    --color-status-error-200: #B54248;
    --color-status-error-300: #95353A;
  
    /* === Typography === */
    /* ================== */
    --font-sans: 'Roboto', sans-serif;

    --type-scale-h1: 3.052rem;
    --type-scale-h2: 2.441rem;
    --type-scale-h3: 1.953rem;
    --type-scale-h4: 1.563rem;
    --type-scale-h5: 1.25rem;
    --type-scale-p: 1rem;

    /* ==== Shadows ==== */
    /* ================= */
    --shadow-resting-button: 0 2px 5px 2px rgba(0, 0, 0, 0.25);
    --shadow-active-button: 0 1px 5px 1px rgba(0, 0, 0, 0.25);
    --shadow-modal: 0 5px 16px 0 rgba(0, 0, 0, 0.25);
  }
`;
