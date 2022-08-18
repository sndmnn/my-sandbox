import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import ProductsListPage from './pages/ProductsListPage';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsListPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
