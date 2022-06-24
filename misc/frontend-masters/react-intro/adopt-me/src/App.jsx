import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';

import SearchParams from './components/SearchParams.jsx';
import Details from './components/Details.jsx';

const App = () => {
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
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
};

render(<App />, document.querySelector('#root'));
