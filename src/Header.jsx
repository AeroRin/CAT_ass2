import React from 'react';
import logo from './assets/logo.png';
import food1 from './assets/food1.jpg';
import food2 from './assets/food2.jpg';
import food3 from './assets/food3.jpg';
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
            <div className="line"></div>
            <div className="C_TitleContent">
                <p>Penang, is famed for its cultural diversity, heritage sites, and vibrant street food in George Town.</p>
            </div> 
            <div className="container">
                    <input type="radio" name="slider" id="item-1" defaultChecked></input>
                    <input type="radio" name="slider" id="item-2"></input>
                    <input type="radio" name="slider" id="item-3"></input>
                <div className="cards">
                    <label className="card" htmlFor="item-1" id="image-1">
                        <img src={food1} alt="Penang" />
                    </label>
                    <label className="card" htmlFor="item-2" id="image-2">
                        <img src={food2} alt="Penang" />
                    </label>
                    <label className="card" htmlFor="item-3" id="image-3">
                        <img src={food3} alt="Penang" />
                    </label>
                </div>
                <div className="player">
                    <div className="upper-part">
                        <div className="play-icon">
                            <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" strokeLinejoin="round" strokeWidth="2" className="feather feather-play" viewBox="0 0 24 24">
                                <defs/>
                                <path d="M5 3l14 9-14 9V3z"/>
                            </svg>
                        </div>
                        <div className="info-area" id="test">
                            <label className="image-info" id="image-info-1">
                                <div className="title">Image 1</div>
                            </label>
                            <label className="image-info" id="image-info-2">
                                <div className="title">Image 2</div>
                            </label>
                            <label className="image-info" id="image-info-3">
                                <div className="title">Image 3</div>
                            </label>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <span className="progress"></span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Header;