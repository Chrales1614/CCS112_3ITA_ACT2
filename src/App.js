import React, { Component } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";




// Sample Product Data
const sampleProducts = [
  { id: 1, name: "Laptop", price: 50000, image: "laptop.jpg" },
  { id: 2, name: "Phone", price: 20000, image: "phone.jpg" },
  { id: 3, name: "Headphones", price: 5000, image: "headphones.jpg" },
  { id: 4, name: "Smartwatch", price: 8000, image: "smartwatch.jpg" }
];




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      searchTerm: ""
    };
  }




  componentDidMount() {
    this.setState({ products: sampleProducts });
  }




  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      console.log("Cart updated", this.state.cart);
    }
  }




  handleAddToCart = (product) => {
    this.setState((prevState) => {
      const cartItem = prevState.cart.find((item) => item.id === product.id);
      if (cartItem) {
        return {
          cart: prevState.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        return { cart: [...prevState.cart, { ...product, quantity: 1 }] };
      }
    });
  };




  handleRemoveFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id)
    }));
  };




  handleClearCart = () => {
    this.setState({ cart: [] });
  };




  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };




  render() {
    const filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );




    return (
      <div>
        <h1>E-Commerce App</h1>
        <ProductList products={filteredProducts} onAddToCart={this.handleAddToCart} onSearch={this.handleSearch} />
        <Cart cartItems={this.state.cart} onRemoveFromCart={this.handleRemoveFromCart} onClearCart={this.handleClearCart} />
      </div>
    );
  }
}




export default App;
