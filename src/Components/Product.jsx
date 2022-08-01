import React from 'react'
import '../styles/Product.css'

function Product({ title, image, price, rating}) {
  return (
    <div className='product'>
        <div className="product--info">

            <p>The lean startup.</p>
            <p className="product--price">
                <small>₹</small>
                <strong>199</strong>
            </p>

            <div className="product--rating">
                <p>⭐</p>
            </div>

        </div>

        <img src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="The lean startup" />
        <button>Add to basket</button>
    </div>
  )
}

export default Product