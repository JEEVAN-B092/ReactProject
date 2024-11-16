/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';
import { Footer } from './footer';

export const Product = ({ product, cart, setCart }) => {
  const name = product.name.length > 21 ? product.name.substring(0, 20) + '..' : product.name;

  const toggleCart = () => {
    if (cart.some((c) => c.id === product.id)) {
      console.log('Removing from cart:', product);
      setCart(cart.filter((c) => c.id !== product.id));
    } else {
      console.log('Adding to cart:', product);
      setCart([...cart, { ...product, quantity: 1 }]);
    } 
  };

  return (
    <>
    <div className='con'>
    <div className="product">
    <div className="product-table-container">
  <table className='product-table'>
    <thead>
      <tr>
        <th> <div className="img">
                  <img src={product.imageUrl} alt={product.name} />
             </div>
        </th>
        <th> <h3>{name}</h3></th>
        <th><p>{product.stock}</p></th>
        <th>{product.unitprice}</th>
        <th><p>{product.price}</p> </th>
        <th>{cart.some((c) => c.id === product.id) ? (
          <button className="btnRemove" onClick={toggleCart}>Retain</button>
        ) : (
          <button className='btn' onClick={toggleCart}>Dispatch Item</button>
        )} 
        </th>
      </tr>
    </thead>
  </table>
</div>
      {/* <div className="img">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>{product.stock}</p>
        <p>{product.unitprice}</p> 
        <p>{product.price}</p> */}
{/*         
        {cart.some((c) => c.id === product.id) ? (
          <button className="btnRemove" onClick={toggleCart}>Retain</button>
        ) : (
          <button className='btn' onClick={toggleCart}>Dispatch Item</button>
        )} */}
      </div>
    </div>
    
    </>
  );
};
