/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

export const Header = ({ cart }) => {
  return (
    <div className='navbar'>

        <div className='logo'><b><i>
            Stock Management
            
          </i></b></div>
        <ul>
            <li>
                <Link to={"/Login"}>
                <FontAwesomeIcon icon={faSignInAlt } size="1x" /></Link>
            </li>
            <li>
                 <Link to={"/Home"}>
                 <FontAwesomeIcon icon={faHome} size="1x" /></Link>
            </li>
            <li>
                 <Link to={"/View"}>
                 <span className='cart-count'>{cart.length} </span><FontAwesomeIcon icon={faShoppingCart } size="1x" />
                 </Link>
            </li>
            <li>
              <Link to={"/Profile"}>
                  <FontAwesomeIcon icon={faUser} size="1x" />
              </Link>
              
            </li>
           
        </ul>
    </div>
  );
}
