import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';

import ThemeContext from './contexts/ThemeContext.js';

import SearchParams from './components/SearchParams.jsx';
import Details from './components/Details.jsx';

const App = () => {
  const theme = useState('darkblue');

  /*
   * The implicit contract of a React function component it that it
   * must return a product of `React.createElement`.
   *
   * It is also important to note that React re-renders the component
   * A LOT, so these function components must run fast. In functional
   * terms: they must be pure (not have side effects).
   */
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
};

render(<App />, document.querySelector('#root'));
