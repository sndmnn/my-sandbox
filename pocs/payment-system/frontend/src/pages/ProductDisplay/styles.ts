import styled from 'styled-components';

export const ProductDisplayContainer = styled.section`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 112px;
  border-radius: 6px;
  justify-content: space-between;
`;

export const Product = styled.div`
  display: flex;

  .product-image {
    border-radius: 6px;
    margin: 10px;
    width: 54px;
    height: 57px;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3,
    h5 {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.154px;
      color: #242d60;
      margin: 0;
    }

    h5 {
      opacity: 0.5;
    }
  }
`;

export const CheckoutButton = styled.button`
  height: 36px;
  background: #556cd6;
  color: white;
  width: 100%;
  font-size: 14px;
  border: 0;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.6;
  border-radius: 0 0 6px 6px;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);

  :hover {
    opacity: 0.8;
  }
`;
