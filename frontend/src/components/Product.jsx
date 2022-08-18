import React from 'react'
import Rating from './Rating'
import { NavLink } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className="card" key={product.id}>
        <NavLink  to={`/product/${product._id}`}>
            <img src={product.image} alt="image" className='card-image' />
        </NavLink>
        <NavLink  to={`/product/${product._id}`}>
        <h3 className="card-name">{product.name}</h3>
        </NavLink>
        
        <p className="card-detail">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#841B2D'} />
        </p>
        <h4 className="card-price">${product.price}</h4>
    </div>
  )
}

export default Product

