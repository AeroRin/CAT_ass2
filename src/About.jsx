import React, { useState } from 'react';
import logo from './assets/logo.png';
import history1 from './assets/AboutHistory1.jpeg';
import './About.css'

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
        <header className='about'>
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
            <div className="A_TitleName">
                <h1>A</h1>
                <h2>BOUT</h2>
                <h3>P</h3>
                <h4>ENANG</h4>
            </div>
        </header>
        <section className="content1-about">
            <h1>H</h1>
            <h2>ISTORY</h2>
            
        </section>
        </>
    );
}

export default About;