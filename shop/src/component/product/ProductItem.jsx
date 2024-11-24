import React, { useEffect, useState } from 'react'
import style1 from './style1.module.css';
import style2 from './style2.module.css';
import { deleteProduct } from '/src/api.js';

export default function ProductItem({ Product ,setProduct}) {
  const handleDelete = async (productId) => {
    setProduct(prevProducts => prevProducts.filter(product => product.id !== productId));

    try {
      await deleteProduct(productId);
    } catch (error) {
      console.error('Error deleting product:', error);
      setProduct(prevProducts => [...prevProducts, Product]);
    }
  };
  const [isPAGE, setIsPage] = useState(true);
    console.log({isPAGE});
    const handleClick = () => {
      console.log("is clicked");
      console.log(isPAGE);
      
       setIsPage(!isPAGE)
   
    };
   
    
    const styles = isPAGE ? style1 : style2;


  return (
    <>
     <div  onClick={handleClick}>
    <li className={styles.container}>
        <h2>{Product.product}</h2>
        <p className={styles.decription}>
        <strong>Description</strong>
        {Product.description}
        </p>
        <img  className ={styles.productImg} src ={Product.imageURL}/>
        <button  className={styles.delete} onClick={(event)=>{
           event.stopPropagation();
           handleDelete(Product.id);
        }}>Delete</button>
    </li>
    </div>
    </>
  )
}
