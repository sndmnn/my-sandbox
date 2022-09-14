/**
 * When using a Server Side Rendering approach, we need to segregate
 * the code that runs on the server from the code that runs on the
 * client. Things imported from `react-dom`, like `render`  are likely
 * to want to communicate with the DOM, which is only available on the
 * browser.
 */
// import { render } from 'react-dom';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

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
        {/* BrowserRouter is also a "browser thing" */}
        {/* <BrowserRouter> */}
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
        {/* </BrowserRouter> */}
      </ThemeContext.Provider>
    </div>
  );
};

export default App;

// render(<App />, document.querySelector('#root'));
