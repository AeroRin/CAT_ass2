import React, { useState } from 'react';
import logo from './assets/logo.png';
import './Food.css';

const Food = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
      <>
          <header className="Food">
              <div className="overlay-box"></div>
              <div className="logo">
                  <img src={logo} alt="Penang Logo" />
              </div>
              <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                  <ul>
                      <li><a href="#main">MAIN</a></li>
                      <li><a href="#about">ABOUT</a></li>
                      <li><a href="#tourist-spots">TOURIST SPOTS</a></li>
                      <li><a href="#local-taste">LOCAL TASTE</a></li>
                      <li><a href="#hotels">HOTELS</a></li>
                  </ul>
              </nav>
              <button className="hamburger" onClick={toggleMenu}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
              </button>
              <div className="overlay-boxA"></div>
              <div className="F_TitleName">
                <h1>Food and Beverages</h1>
              </div>
          </header>
          
          
      </>
  );
};

export default Food;