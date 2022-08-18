import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './contexts/CartContex';
import CheckoutPage from './pages/CheckoutPage';
import ProductListPage from './pages/ProductListPage';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
