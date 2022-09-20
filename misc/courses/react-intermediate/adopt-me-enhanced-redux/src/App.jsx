import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import SearchParams from './components/SearchParams.jsx';
import Details from './components/Details.jsx';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

render(<App />, document.querySelector('#root'));
