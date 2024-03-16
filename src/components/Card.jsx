import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({book}) => {
  return (
    <div className='card shadow p-1'>
         <img  src={book.image} alt="" />
   <div>
    <h4>{book.title}</h4>
    <h3>{book.author}</h3>
   </div>

    <Link to ={`/ürün/${book.id}`} className='btn btn-primary w-100'> Detay Gör</Link>

    </div>



  )
}

export default Card