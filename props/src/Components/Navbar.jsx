import React, { useState } from 'react'
import "./Navbar.css";



const Navbar = () =>{
  const [name , setname ] =useState("aryabt");
  function setimg(){
    <h1>aryaggg</h1>
  }
 return(
<>
<div>
  <nav>
    <ul>
     <li>Home</li>
     <li>{name}</li>

     <li>Contact</li>
     
   <input type="text" />
    </ul>
  </nav>
  <form className="form-horizontal">
{/*                
                <input type="text" className="form-control"  name="title" />
                
            </form>
          
            <button type="button" onClick= className="btn">Save</button> */}
</div>
</> 
 )
}

export default Navbar;