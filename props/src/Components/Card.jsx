import React from 'react'
import "./Card.css";
const Card = (cards) => {
  return (
    <div className='card'>
        <h1>{cards.title}</h1>
        <p>{cards.description}</p>
    </div>
  )
}

export default Card