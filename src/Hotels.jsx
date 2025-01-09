import React, { useState } from 'react';
import logo from './assets/logo.png';
import './Hotels.css'

const Hotels = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <header className='hotels'>
            <div className="overlay-box"></div>
            <div className="logo">
                <img src={logo} alt="Penang Logo" />
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/header">MAIN</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/TouristSpot">TOURIST SPOTS</a></li>
                    <li><a href="/local-taste">LOCAL TASTE</a></li>
                    <li><a href="/hotels">HOTELS</a></li>
                </ul>
            </nav>
                <button className="hotelshamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="hotelscontent">
                    <h1 className="hotels-title">HOTELS</h1>
                    <div className="boxes">
                        <div className="white-box">


                        </div>
                        <div className="gray-box"></div>
                        <div className="white-box"></div>
                        <div className="gray-box"></div>
                    </div>
                </div>
        </header>
        </>
    );
}

export default Hotels;