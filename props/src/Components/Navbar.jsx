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

</div>
</> 
 )
}

export default Navbar;