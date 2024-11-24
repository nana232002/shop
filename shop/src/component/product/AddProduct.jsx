import React, { useState } from 'react'
import './addproduct.css'
import Navbar from '../navbar/navbar';
export default function AddProduct({addproduct}) {

  const [productName,setProductName]=useState("");
  const [description,setDescription]=useState("");
  const [productimg,setProductImg]=useState("");

  function handleSubmit(e){
    e.preventDefault();
    const newProduct = {
      product : productName,
      description: description,
      imageURL: productimg,
    };
    addproduct(newProduct);
    setDescription("");
    setProductImg("");
    setProductName("");
  }
 
  return (
      <>
      <Navbar/>
<form className='form1'  onSubmit={handleSubmit}>
<img className="logo" src="/images/nanaLogo.png" alt="Logo" />
    <div className='form-group'>
    <label>Product Name</label>
    <input type="text" value={productName} onChange={(e)=>{
      setProductName(e.target.value);
    }} />
    </div>
    <div  className='form-group1'>
    <label>description</label>
    <textarea value={description} onChange={(e)=>{
      setDescription(e.target.value);
    }} />
    </div>
    <div  className='form-group'>
    <label>image </label>
    <input type="text"  value ={productimg} onChange={(e)=>{
      setProductImg(e.target.value);
    }} />
    </div>
    <button className='button1' type='submit'> Add product</button>
    </form>

   </>
  )
}
