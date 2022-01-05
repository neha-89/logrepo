import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <div>
         <ul className="nav-ul">
             {/* <li><Link to="/home">Home </Link></li> */}
             <li><Link to="/login">Login </Link></li>
             <li><Link to="/register">Register </Link></li>
             {/* <li><Link onCLick="" to="/register">Logout</Link></li> */}
            
         </ul>
        </div>
    )
}