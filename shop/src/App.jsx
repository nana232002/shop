import React, { useEffect } from "react";
import { useState } from 'react';
import './App.css';
import Loginpage from './component/login/LoginPage';
import AddProduct from './component/product/AddProduct';
import { addUserToMockAPI ,postNewProduct,fetchProduct} from './api';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./component/product/ProductPage";
import Navbar from "./component/navbar/navbar";
function App() {

  const handleAddUser = async () => {
    try {
      const newUser = await addUserToMockAPI("nana", "1234");
      console.log("Added User:", newUser);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const [Name ,setName] =useState("");
  const [password ,setPassword] =useState("");
  const [Product,setProduct]= useState([]);
  
useEffect(()=>{
  fetchProduct().then((data)=>{
  setProduct(data);
  });
  },[]);
  
    function addproduct(newproduct){
      postNewProduct(newproduct).then((data)=>{
        setProduct((prevProduct)=>[...prevProduct,data]);
      });
      
    }
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={ <Loginpage setName={setName} setPassword={setPassword} userName={Name} password={password}/>} />
        <Route path="/ProductPage" element={ <ProductPage Product={Product}/>} />
        <Route path="/AddProduct" element={ <AddProduct addproduct={addproduct}/>} />
      </Routes>
    </Router> 
   {/* <ProductPage Product={Product}/> */}
   {/* <Navbar/> */}
    
    </>
  )
}

export default App
