import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';

import ThemeContext from './contexts/ThemeContext.js';

/**
 * Using a dynamic import is somewhat of a hint for our bundler to split our
 * code into chunks. An `import()` call returns a promise that resolves to a
 * module.
 *
 * The `lazy()` call transforms our promise (that resolves to a module that
 * exports a React component) into a component that can be used in code just
 * like any other.
 */
const SearchParams = lazy(() => import('./components/SearchParams.jsx'));
const Details = lazy(() => import('./components/Details.jsx'));

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
      {/* Suspense can be used at any level of the component tree as long as you place
       * it above the lazy components. It'll show a fallback component while child lazy
       * components are loading.
       */}
      <Suspense fallback={<h1>Loading page ...</h1>}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              {/* In this case, we're using code splitting to split code into chunks
               * that are only needed for a specific route. Note that `Details` is
               * still just a component because of the `lazy` call.
               */}
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </div>
  );
};

render(<App />, document.querySelector('#root'));
