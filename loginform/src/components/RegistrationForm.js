import React, {useState} from 'react';
//import {useNavigate} from "react-router-dom";

import axios from "axios";

export default function RegistrationForm(props) {
    const [email , setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
  // const navigate = useNavigate();


//    useEffect(() => {
//     (() => {
//       if(setSubmitted) {
//         navigate("/home");
//       }
//     })()
//   }, [setSubmitted])

 function register(){
    
     axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffRegister", {
        email: email,
        password : password,
        name : name,
        mobile : mobile
       }).then((response)=>{
       console.log(response);
       setSubmitted(true);
       window.location="/home";
       }).catch(err => {
       setError(true);
      });


      
};            



const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
const handleMobile = (e) => {
    setMobile(e.target.value);
    setSubmitted(false);
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };  


  return(
        <div className = "col-sm-6 offset-sm-3">
         <h1>Registration Form</h1>

        <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

         <input type="email" value={email} onChange= {handleEmail } className = "form-control" placeholder="Enter Email"/>

         <input type="password" value={password} onChange= {handlePassword} className = "form-control" placeholder="Enter Password"/>

         <input type="text" value={name} onChange= {handleName} className = "form-control" placeholder="Enter Name"/>

         <input type="number" value={mobile} onChange= {handleMobile} className = "form-control" placeholder="Enter Mobile"/>

         <button onClick={register} className="btn btn-primary" >Register</button>

        </div>
    )
}