import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { product, onAddToCart } = this.props;
    const { id, name, price, image } = product;

    return (
      <div className="product-card">
        <img 
          src={`https://via.placeholder.com/300x200?text=${name}`} 
          alt={name} 
          className="product-image"
        />
        <div className="product-details">
          <h3>{name}</h3>
          <p>${price.toFixed(2)}</p>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;