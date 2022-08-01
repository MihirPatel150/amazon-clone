import React from 'react'
import '../styles/Checkout.css';

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout--left">
            <img src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt="" className="checkout--ad" />
            <div className="checkout--title">
                <h2>Your Shopping Basket</h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            </div>
        </div>

        <div className="checkout--right">
            <h2>The subtotal will go here.</h2>
        </div>

    </div>
  )
}

export default Checkout