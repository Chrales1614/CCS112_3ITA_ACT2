import React, { Component } from 'react';


class SearchBar extends Component {
  handleSearchChange = (event) => {
    this.props.onSearchChange(event.target.value);
  }


  render() {
    return (
      <input 
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={this.props.searchTerm}
        onChange={this.handleSearchChange}
      />
    );
  }
}


export default SearchBar;


