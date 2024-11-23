import React from 'react'
import './loginpage.css'
import '../../api.js'
import { addUserToMockAPI, fetchUsers } from '../../api.js';
import { useNavigate } from 'react-router-dom';
export default function loginpage(props) {
    const navigate = useNavigate();
   
      
const handleSubmit = async (e) => {
        e.preventDefault(); 
        try{
            const users = await fetchUsers();
            const user = users.find(
                (u) => u.userName === props.userName && u.password === props.password
            );
        
            if (user) {
                navigate("/ProductPage");
            } else {
          alert("invalid userName or Password")
            }
        }
        catch(error){
            console.error("Error during login:", error);

        }
    
}


  return (
    <>
  <div className="background"></div>
  <form className="login-form">
    <img className="logo" src="/images/nanaLogo.png" alt="Logo" />
    <div className="form-group">
      <label>Name</label>
      <input type="text" value ={props.userName} onChange={(e)=>{
        props.setName(e.target.value);
      }}/>
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password"  value ={props.password} onChange={(e)=>{
        props.setPassword(e.target.value);
      }}/>
    </div>
    <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
  </form>
</>

  )
}
