import React from 'react';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import NavigationBar from '../../components/NavigationBar';
import useProducts from '../../services/swr/useProducts';
import ProductCard from './ProductCard';
import { ProductList } from './ProdutsListPage';

const ProductListPage: React.FC = () => {
  const { products } = useProducts();

  return (
    <>
      <NavigationBar />
      <ContentWrapper>
        <ProductList>
          {products.map((product) => (
            <ProductCard key={product.id} productInfo={product} />
          ))}
        </ProductList>
      </ContentWrapper>
    </>
  );
};

export default ProductListPage;
