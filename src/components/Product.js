import React from "react";


const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ₱{product.price}</p>
      <img src={product.image} alt={product.name} width="100" />
      <br />
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};


export default Product;