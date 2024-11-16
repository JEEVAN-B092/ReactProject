import React from 'react'
import './Intro.css';
import { Link } from 'react-router-dom';
export const Intro = () => {
  return (
    <div className='image'>
    <h1 className='head'>Stock Management</h1>
    <h2 className='head2'>Get Started!</h2>
    {/* <h2 className='lo'>
    <Link to='/Login'><li>Login</li></Link>
    <Link to='/SignUp'><li>Sign Up</li></Link>
    </h2>  */}
    <h2 className='lo'>
        {/* <li>Login</li> */}
        <li>Login</li>
        <li>Sign Up</li>
    </h2>
    
    </div>
  )
}


{/* <img src={stpic} alt="" style={{width:'100vw',height:'100vh',filter:'blur(1.5px)'}}/> */}