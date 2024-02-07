import useFetchProduct from '@/hooks/useFetchProduct';
import React, { useState } from 'react';
import { ProductItem } from './Product';
const ProductList = () => {
  const [page, setPage] = useState<number>(0);
  const { data: productData, isLoading: isLoadingProductData } = useFetchProduct(page);

  const handleSetPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <button type="button" onClick={handleSetPage}>
        Update Page {page}
      </button>
      {isLoadingProductData && <p>Loading ....</p>}
      {!isLoadingProductData && <ul>{productData?.products.map((product) => <ProductItem key={product.title} product={product} />)}</ul>}
    </>
  );
};

export default ProductList;
