import React from 'react';
import logo from './assets/logo.png';
import './Header.css';

function Header() {
    return (
        <>
        <header className="header">
            <div className="overlay-box">
            </div>
            <div className="logo">
                <img src={logo} alt="Penang Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#main">MAIN</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#tourist-spots">TOURIST SPOTS</a></li>
                    <li><a href="#local-taste">LOCAL TASTE</a></li>
                    <li><a href="#hotels">HOTELS</a></li>
                </ul>
            </nav>
            <div className="H_TitleName">
                <h1>DISCOVER</h1>
                <h2>W</h2>
                <h4>ONDERS OF</h4>
                <h5>ENANG</h5>
                <h3>P</h3>
            </div>
        </header>
        <section className="content-section">
            <div className="box-section">
            </div>
            <div className="C_TitleName">
                <h1>A</h1>
                <h2>BOUT</h2>
            </div>
        </section>
        </>
    );
}

export default Header;