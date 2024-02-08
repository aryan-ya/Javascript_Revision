import React from 'react'
import "./Card.css";
 export  const  Card = ({title , description , img }) => {
  return (
    <div className='card'>
         {/* <img src="https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg" alt="" width={333} style={{border:"2px solid black"}} srcset="" /> */}

         <img src={img}alt="" srcset="" />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export  const  Buttons = ({title    }) => {
  return (
    <button>{title}</button>
  )
}

export const Heading =({heading}) =>{
    return(
      <h1>{heading}</h1>
    )
}

