import React from "react";
import { useState } from 'react';
import './App.css';
import Loginpage from './component/login/LoginPage';
import AddProduct from './component/product/AddProduct';
import { addUserToMockAPI } from './api';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  console.log(Name);
  console.log(password);
  
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={ <Loginpage setName={setName} setPassword={setPassword} userName={Name} password={password}/>} />
        <Route path="/AddProduct" element={ <AddProduct/>} />
      </Routes>
    </Router> 
   
    
    </>
  )
}

export default App
