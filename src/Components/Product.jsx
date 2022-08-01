import React from "react";
import "../styles/Product.css";

function Product({id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product--info">
        <p>{title}</p>
        <p className="product--price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="product--rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
