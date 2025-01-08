import React, { useState } from 'react';
import logo from './assets/logo.png';
import about1 from './assets/AboutHistory1.jpeg';
import about2 from './assets/AboutHistory2.jpg';
import about3 from './assets/AboutHistory3.jpg';
import about4 from './assets/AboutHistory4.jpeg';
import about5 from './assets/AboutHistory5.jpeg';
import './About.css';

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="about">
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
                <div className="card1">
                    <img src={about1} alt="About_history"/>
                        <div className="card-info">
                            <h1>Year of 1786</h1>
                            <p>Captain Francis Light of the British East India Company established Penang as Fort Cornwallis, the first British trading post in the Far East.Light persuaded the Sultan of Kedah to give the island to the British in exchange for military protection. </p>
                        </div>
                </div>
                <div className="card2">
                    <img src={about2} alt="About_history"/>
                        <div className="card-info">
                            <h1>Year of 1832</h1>
                            <p>Penang became part of the Straits Settlements, a British crown colony that also included Malacca and Singapore.</p>
                        </div>
                </div>
                <div className="card3">
                    <img src={about3} alt="About_history"/>
                        <div className="card-info">
                            <h1>Year of 1945</h1>
                            <p>The British regained control of Penang after Japan occupied it during World War II.</p>
                        </div>
                </div>
                <div className="card4">
                    <img src={about4} alt="About_history"/>
                        <div className="card-info">
                            <h1>Year of 1957</h1>
                            <p>Penang gained independence and became part of the Federation of Malaya, which later became Malaysia.</p>
                        </div>
                </div>
                <div className="card5">
                    <img src={about5} alt="About_history"/>
                        <div className="card-info">
                            <h1>Year of 2008</h1>
                            <p>Penang&apos;s economy shifted from entrepôt trade to electronics manufacturing and the tertiary sector.</p>
                        </div>
                </div>
            </section>
            <section className="content2-about">
                <h1>T</h1>
                <h2>RAVELING</h2>
                <h3>K</h3>
                <h4>IT</h4>
                <div className="TravelBox"></div>
            </section>
        </>
    );
};

export default About;