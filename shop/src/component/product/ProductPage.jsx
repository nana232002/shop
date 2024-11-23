import React from 'react'
import ProductItem from './ProductItem'
import './Product.css'

export default function ProductPage({Product}) {
    if (!Product || !Array.isArray(Product)) {
        return <p>No products available</p>;
      }
  return (
    <>
    <h2>Products List</h2>
      <ul>
        {Product.map((product) => (
          <ProductItem key={product.id} Product={product} />
        ))}
      </ul>
    </>
    
  );
}
