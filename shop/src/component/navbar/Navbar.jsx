import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const nivigate = useNavigate();
  return (
   <>
   <nav className="navbar">
      <img className="logo1" src="/images/nanaLogo.png" alt="Logo" />
      <div className="nav-buttons">
        <button className="nav-button" onClick={()=>{
        nivigate("/ProductPage");
        }}>Home</button>
        <button className="nav-button" onClick={()=>{
            nivigate("/AddProduct");
        }}>Add</button>
        {/* <button className="nav-button">Products</button>
        <button className="nav-button">Contact</button> */}
      </div>
    </nav>
   </>
  )
}
