import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';

import ThemeContext from './contexts/ThemeContext.js';

import SearchParams from './components/SearchParams.jsx';
import Details from './components/Details.jsx';

const App = () => {
  const theme = useState('darkblue');

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <div
          className="p-0 m-0"
          style={{
            background:
              'url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)',
          }}
        >
          <BrowserRouter>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

render(<App />, document.querySelector('#root'));
