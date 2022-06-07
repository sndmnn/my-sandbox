import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import NavigationBar from '../../components/NavigationBar';
import useProducts from '../../services/swr/useProducts';
import ProductCard from './ProductCard';
import { ProductList } from './ProductsListPage.styles';

const ProductsListPage: React.FC = () => {
  const { products } = useProducts();

  return (
    <>
      <NavigationBar />

      <ContentWrapper>
        <ProductList>
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductList>
      </ContentWrapper>
    </>
  );
};

export default ProductsListPage;
