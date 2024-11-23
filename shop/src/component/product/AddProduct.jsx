import React from 'react'
import './addproduct.css'
export default function AddProduct() {
  return (
   <>
<form className='form1' >
<img className="logo" src="/images/nanaLogo.png" alt="Logo" />
    <div className='form-group'>
    <label>Product Name</label>
    <input type="text" />
    </div>
    <div  className='form-group1'>
    <label>description</label>
    <textarea  />
    </div>
    <div  className='form-group'>
    <label>image </label>
   <button className='button1'>import</button>
    </div>
    <button className='button1' type='submit'> Add product</button>
    </form>
   


   </>
  )
}
