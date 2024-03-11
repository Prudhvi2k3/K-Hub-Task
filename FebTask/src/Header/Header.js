import React from 'react';
import './Header.css';
import a from"../logo.png"  // Adjust the path 

const Header = () => {

  return (
    <>
    <header className="header">
      <div className="logo-container">
        <img src={a} alt="Logo" className="logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <div className="menu-links">
        <a href="#home" className="menu-link">Home</a>
        <a href="#about" className="menu-link">About</a>
        <a href="#contact" className="menu-link">Contact</a>
      </div>


    </header></>
  );
};

export default Header;
