import React from "react";


const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ₱{item.price} | Quantity: {item.quantity}</p>
      <button onClick={() => onRemoveFromCart(item.productId)}>Remove</button>
    </div>
  );
};


export default CartItem;