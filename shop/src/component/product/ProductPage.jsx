import React from 'react'
import ProductItem from './ProductItem'
import './Product.css'
import Navbar from '../navbar/navbar';

export default function ProductPage({Product}) {
    if (!Product || !Array.isArray(Product)) {
        return <p>No products available</p>;
      }
  return (
    <>
    <div className='container'>
    <Navbar/>
    <div>
    <h2>Products List</h2>
    <div className='list'>
      {/* <ul> */}
        {Product.map((product) => (
          <ProductItem key={product.id} Product={product} />
        ))}
      {/* </ul> */}
      </div>
    </div>
    </div>
    
    
    </>
    
  );
}
