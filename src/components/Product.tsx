import { Product } from '@/hooks/useFetchProduct';
import React from 'react';
interface ProductItemProps{
    product: Product
}
export const ProductItem = (props: ProductItemProps) => {
    const {product} = props;
    return <li key={product.id}>{product.title}</li>
}