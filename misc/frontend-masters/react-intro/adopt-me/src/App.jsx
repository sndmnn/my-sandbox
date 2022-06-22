import React from 'react';
import { render } from 'react-dom';

import SearchParams from './components/SearchParams.jsx';

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
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.querySelector('#root'));
