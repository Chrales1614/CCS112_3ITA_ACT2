import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import SearchBar from './SearchBar';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Laptop', price: 999.99, image: 'laptop.jpg' },
        { id: 2, name: 'Smartphone', price: 599.99, image: 'phone.jpg' },
        { id: 3, name: 'Headphones', price: 199.99, image: 'headphones.jpg' },
        { id: 4, name: 'Smart Watch', price: 249.99, image: 'watch.jpg' }
      ],
      cartItems: [],
      searchTerm: ''
    };
  }
  
  componentDidMount() {
    // Simulate data fetching
    console.log('Component mounted. Products loaded.');
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartItems !== this.state.cartItems) {
      const total = this.state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      console.log('Cart updated. Total: $' + total.toFixed(2));
    }
  }


  handleAddToCart = (product) => {
    this.setState(prevState => {
      const existingItem = prevState.cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return {
          cartItems: prevState.cartItems.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          cartItems: [...prevState.cartItems, { ...product, quantity: 1 }]
        };
      }
    });
  }


  handleRemoveFromCart = (productId) => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems
        .map(item => 
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    }));
  }


  handleClearCart = () => {
    this.setState({ cartItems: [] });
  }


  handleSearchChange = (searchTerm) => {
    this.setState({ searchTerm });
  }


  render() {
    const filteredProducts = this.state.products.filter(product => 
      product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );


    return (
      <div className="app">
        <div className="product-section">
          <SearchBar 
            searchTerm={this.state.searchTerm}
            onSearchChange={this.handleSearchChange}
          />
          <ProductList 
            products={filteredProducts}
            onAddToCart={this.handleAddToCart}
          />
        </div>
        <div className="cart-section">
          <Cart 
            cartItems={this.state.cartItems}
            onRemoveFromCart={this.handleRemoveFromCart}
            onClearCart={this.handleClearCart}
          />
        </div>
      </div>
    );
  }
}


export default App;
