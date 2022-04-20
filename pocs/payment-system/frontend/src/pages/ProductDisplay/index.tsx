import React, { useCallback } from 'react';
import api from '../../services/api';

import { ProductDisplayContainer, Product, CheckoutButton } from './styles';

const ProductDisplay: React.FC = () => {
  const onCheckoutClick = useCallback(e => {
    e.preventDefault();

    api
      .post('/create-checkout')
      .then(response => {
        if (response.status === 201) {
          window.location.replace(response.data.paymentPageUrl);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ProductDisplayContainer>
      <Product>
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
          className="product-image"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </Product>
      <form>
        <CheckoutButton type="submit" onClick={onCheckoutClick}>
          Checkout
        </CheckoutButton>
      </form>
    </ProductDisplayContainer>
  );
};

export default ProductDisplay;
