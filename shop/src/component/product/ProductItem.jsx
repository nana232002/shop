import React from 'react'

export default function ProductItem({Product}) {
    console.log({Product});
    
  return (
    <>
    <li>
        <h2>{Product.product}</h2>
        {/* <p>
        <strong>Description</strong>
        {Product.description}
        </p> */}
        <img  className ="productImg" src ={Product.imageURL}/>

    </li>
    </>
  )
}
