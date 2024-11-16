/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import data from '../assets/products.json';
import { Product } from './Product';
import './Home.css';

export const Home = ({ cart, setCart }) => {
  const [products] = useState(data); // All products from JSON
  const [searchTerm, setSearchTerm] = useState(''); // Search input state

  // Function to handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update search term as user types
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
  <div className="table-heading">
  <table className='home-table'>
    <thead>
      <tr>
        <th>Items  </th>
        <th>Name     </th>
        <th>Units in Stock</th>
        <th>Cost<span>(per Unit)</span></th>
        <th>Selling Price</th>
        <th>Delivery  </th>
      </tr>
    </thead>
  </table>
</div>


      {/* Products Display */}
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} cart={cart} setCart={setCart} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      
    </div>
  );
};
