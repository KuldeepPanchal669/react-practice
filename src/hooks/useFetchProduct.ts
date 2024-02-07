import { fetchProductList } from '@/api/fetchProductList';
import { useEffect, useState } from 'react';
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}
interface ProductData {
  products: Array<Product>;
  total: number;
  skip: number;
  limit: number;
}
const useFetchProduct = (page: number) => {
  const [data, setData] = useState<ProductData>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<String>();
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetchProductList<ProductData>();
        setData(response);
      } catch (e) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  return { data, isLoading, error };
};

export default useFetchProduct;
