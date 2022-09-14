import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

/**
 * Instead of using `render`, we use `hydrate` to tell React that we
 * have already taken care of rendering the markup on the server, and
 * now we just want React to take over and make it interactive.
 */
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
