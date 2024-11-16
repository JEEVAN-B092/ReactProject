// src/App.js
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Intro } from './components/Intro';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { View } from './components/View';
import { Login } from './components/Login';
import { useState } from 'react';
import { Profile } from './components/Profile';
import { Footer } from './components/footer';

function App() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  // Function to check if the user is authenticated
  const isAuthenticated = !!username; // Assuming if username exists, the user is logged in

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <div className='container'>
          <Routes>
          <Route path="/" element={<Intro />} />
            {/* Redirect to Login if the user is not authenticated */}
            {!isAuthenticated ? (
             <Route path="*" element={<Navigate to="/Login" />} />
            ) : (
              <>
                <Route path="/Home" element={<Home cart={cart} setCart={setCart} />} />
                <Route path="/View" element={<View cart={cart} setCart={setCart} />} />
                <Route path="/Profile" element={<Profile username={username} email={email} />} />
              </>
            )}

           {/* Login Route  */}
            <Route
              path="/Login"
              element={
                <Login
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  isSignUp={isSignUp}
                  setIsSignUp={setIsSignUp}
                />
              }
            />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    
      
    </>
  );
}

export default App;
