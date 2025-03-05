import React, { Component } from 'react';
import Product from './Product';


class ProductList extends Component {
  render() {
    const { products, onAddToCart } = this.props;


    return (
      <div className="product-list">
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    );
  }
}


export default ProductList;


