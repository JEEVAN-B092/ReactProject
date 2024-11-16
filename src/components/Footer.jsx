/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <p>© {year} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};
