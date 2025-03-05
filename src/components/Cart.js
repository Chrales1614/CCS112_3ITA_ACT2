import React, { Component } from 'react';
import CartItem from './CartItem';


class Cart extends Component {
  calculateTotal() {
    return this.props.cartItems.reduce((total, item) => 
      total + (item.price * item.quantity), 0);
  }


  render() {
    const { cartItems, onRemoveFromCart, onClearCart } = this.props;
    const total = this.calculateTotal();


    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
            <div className="cart-summary">
              <p>Total: ${total.toFixed(2)}</p>
              <button 
                className="clear-cart-btn"
                onClick={onClearCart}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}


export default Cart;
