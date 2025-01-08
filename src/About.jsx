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
            <div className="container">
                <div className="carousel">
                    <input type="radio" name="slides" id="slide-1" defaultChecked />
                    <input type="radio" name="slides" id="slide-2" />
                    <input type="radio" name="slides" id="slide-3" />
                    <input type="radio" name="slides" id="slide-4" />
                    <input type="radio" name="slides" id="slide-5" />
                    <input type="radio" name="slides" id="slide-6" />
                    
                    <ul className="carousel__slides">
                        <li className="carousel__slide">
                            <figure>
                                <div>
                                    <img src={history1} alt="Slide 1" />
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Tim Marshall</span>
                                </figcaption>
                            </figure>
                        </li>
                        {/* Add other slides similarly */}
                        <li className="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1041/800/450" alt="Slide 2" />
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Tim Marshall</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1041/800/450" alt="Slide 3" />
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Tim Marshall</span>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                    
                    <ul className="carousel__thumbnails">
                        <li>
                            <label htmlFor="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""/></label>
                        </li>
                        <li>
                            <label htmlFor="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""/></label>
                        </li>
                        <li>
                            <label htmlFor="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt=""/></label>
                        </li>
                        {/* Add other thumbnails similarly */}
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}

export default About;