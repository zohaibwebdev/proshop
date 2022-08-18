import React from 'react'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <div className='home'>
        <h1>Latest Products Available</h1>
        <div className="cards">
            {
                products.map(product =>(
                    <Product product={product}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default HomeScreen


                    