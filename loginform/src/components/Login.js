import React, { useState } from "react";
import axios from "axios";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function login(){
        axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffLogin", {
        email: email,
        password : password
    }).then((response)=>{
        console.log(response);
        try {
         if(response.status === 200){
            window.location="/home";
            }
        } catch (error) {
            console.log(error);
           
        }
        
      
        
     });
            
    }

    return(
        <div className = "col-sm-6 offset-sm-3">
        <h1>Login Form</h1>

        <input type="email" value={email} onChange= {(e)=>setEmail(e.target.value)} className = "form-control" placeholder="Enter Email"/>

        <input type="password" value={password} onChange= {(e)=>setPassword(e.target.value)} className = "form-control" placeholder="Enter Password"/>

        
        <button onClick={login} className="btn btn-primary" >Login</button>

       </div>
    )
}