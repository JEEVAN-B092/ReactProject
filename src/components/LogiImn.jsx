/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

import './Login.css';

export const Login = ({ isSignUp, setPassword, password, username, setUsername, setIsSignUp, email, setEmail, confirmPassword, setConfirmPassword }) => 
{
  const navigate = useNavigate();
  const [access, setAccess] = useState([]);
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setAccess(storedUsers);
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(null); // Reset error state before validation
  
    // Handle sign-in logic
    const user = access.find(user => user.username === username && user.password === password);
    if (user) {
      console.log('Sign In - Username:', username);
      navigate('/Home');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null); // Reset error state before validation

    // Handle sign-up logic
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (access.some(user => user.username === username)) {
      setError('Username already exists');
      return;
    }

    // Add user to local storage
    const newUser = { username, password };
    const updatedAccess = [...access, newUser];
    setAccess(updatedAccess);
    localStorage.setItem('users', JSON.stringify(updatedAccess));

    console.log('Sign Up - Username:', username);
    navigate('/Home');
  };

  return (
    <div className="login-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <div className="underline"></div>
      {error && <div className="error">{error}</div>} {/* Display errors */}
      <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
        <div className='inputs'>
          <div className='input'>
          <img src={user_icon} alt=" " />
        <input
          type="text"
          id="username"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        </div>
        
        
        {isSignUp && (
          <>
            <label htmlFor="email"><br />Email</label>
            <div className='input'>
            <img src={email_icon} alt="" />
            <input
             
              type="email"
              id="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <label htmlFor="confirmPassword"><br />Confirm Password</label>
            <div className='input'>
            <img src={password_icon} alt="" />
            <input
              type="password"
              id="confirmPassword"
             
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            </div>
          </>
      
        )}
        <div className='input'>
        <img src={password_icon} alt="" />
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        {/* {isSignUp ? 'Already have an account? Sign In' : 'New here? Register'} */}
        {isSignUp?
        <div className="forgot-password">Already Have Account? 
            <span>
                <Link to ='/Login'>Click Here!</Link>
            </span>
        </div>:
        <div className="forgot-password">Don't have an Account? 
            <span>
                <Link to ='/SignUp'>Register!</Link>
            </span>
        </div>
        }
        </div>
        {/* Render different buttons based on Sign Up or Sign In */}
        {!isSignUp && (
          <button type="submit">
            Login
          </button>
        )}
        {isSignUp && (
          <button type="submit">
            Register
          </button>
        )}

        <br />
        {/* Toggle between Sign Up and Sign In modes */}
        <button
          type="button"
          className="register"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          
        </button>
      </form>
    </div>
  );
};
 