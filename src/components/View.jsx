/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './View.css';

export const View = ({ cart, setCart }) => {
  const [Total, setTotal] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    phone: '',
    pincode: ''
  });

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => acc + parseInt(curr.price) * curr.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    setCart(cart.map((product) => 
      product.id === productId ? { ...product, quantity: quantity } : product
    ));
  };

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log('Order Details:', orderDetails);
    console.log('Order Items:', cart);
    console.log('Total Amount:', Total);
    // Handle order submission logic here
    alert('Order placed successfully!');
  };

  return (
    <>
      <h2 className="cart-heading">Cart Products</h2>
      <div className="Cart-container">
        {cart.map((product) => (
          <div className="Cart-product" key={product.id}>
            <div className="img">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="Cart-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.price}</p>
              <div>
                <label>Quantity: </label>
                <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                <button className='removebt' onClick={() => removeFromCart(product.id)}>Retain</button>
              </div>
            </div>
            
          </div>
        ))}
        <h2 className="cart-amt">Total amount Rs: {Total}</h2>
        <button className="place-order-btn" onClick={() => setShowOrderForm(!showOrderForm)}>Dispatch</button>
        {showOrderForm && (
          <form className="order-form" onSubmit={handlePlaceOrder}>
            <h3>Order Details</h3>
            <label>
              Name:
              <br></br>
              <input type="text" name="name" value={orderDetails.name} onChange={handleOrderChange} required />
            </label>
            <label>
              Address:
              <br></br>
              <input type="text" name="address" value={orderDetails.address} onChange={handleOrderChange} required />
            </label>
            <label>
              Phone:
              <br></br>
              <input type="text" name="phone" value={orderDetails.phone} onChange={handleOrderChange} required />
            </label>
            <label>
              Pincode:
              <br></br>
              <input type="text" name="pincode" value={orderDetails.pincode} onChange={handleOrderChange} required />
            </label>
            <h3>Order Summary</h3>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.name} - {product.quantity} x Rs {product.price}
                </li>
              ))}
            </ul>
            <h3>Total Amount: Rs {Total}</h3>
            <button type="submit">Submit Order</button>
          </form>
        )}
      </div>
    </>
  );
};
