import React, { useState } from 'react';
import logo from './assets/logo.png';
import about1 from './assets/AboutHistory1.jpeg';
import about2 from './assets/AboutHistory2.jpg';
import about3 from './assets/AboutHistory3.jpg';
import about4 from './assets/AboutHistory4.jpeg';
import about5 from './assets/AboutHistory5.jpeg';
import about6 from './assets/AboutWeather1.jpeg';
import about7 from './assets/AboutWeather2.jpg';
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
                <div className="Alogo">
                    <img src={logo} alt="Penang Logo" />
                </div>
                <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/header">MAIN</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/TouristSpot">TOURIST SPOTS</a></li>
                        <li><a href="/Food">LOCAL TASTE</a></li>
                        <li><a href="/hotels">HOTELS</a></li>
                    </ul>
                </nav>
                <button className="Ahamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="overlay-boxA"></div>
                <div className="A_TitleName">
                    <h1>About</h1>
                    <h2>Penang</h2>
                </div>
            </header>
            <section className="content1-about">
                <h1>History</h1>
                <div className="card1">
                    <img src={about1} alt="About_history"/>
                        <div className="card-info">
                            <h1>Year of 1786</h1>
                            <p>Captain Francis Light of the British East India Company established Penang as Fort Cornwallis, the first British trading post in the Far East.Light persuaded the Sultan of Kedah to give the island to the British in exchange for military protection.</p>
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
                <h1>Traveling Tips</h1>
                <div className="TravelBox"></div>
                <div className="TravelText">
                    <p>1. Wear light clothing – Penang is hot and humid year-round.</p>
                    <p>2. Bring a power bank – You’ll take lots of photos!</p>
                    <p>3. Use Grab or Rapid Penang – Convenient ways to get around.</p>
                    <p>4. Stay hydrated – It’s easy to get dehydrated when exploring.</p>
                    <p>5. Respect local customs – Especially when visiting religious sites.</p>
                </div>
            </section>
            <section className="content3-about">
            <div className="container">
                {/* Dry Season Section */}
                <div className="Weather_Block">
                <div className="Weather_Text">
                    <h1>Weather</h1>
                    <p className="WeatherText"> Penang has a tropical climate with warm temperatures ranging
                            from 25°C to 32°C throughout the year. The weather is
                            generally hot and humid, with two main seasons:</p>
                    <h3 className="Dry">Dry Season (December to April)</h3>
                    <p className="DryText">Best time to visit with plenty of sunshine. Ideal for outdoor activities, beach visits, and sightseeing.</p>
                </div>
                <div className="Weather_Image">
                    <img className="Dry_Season_Image" src={about7} alt="Dry Season" />
                </div>
                </div>

                {/* Rainy Season Section */}
                <div className="Weather_Block">
                <div className="Weather_Text">
                    <h3 className="Rain">Rainy Season (May to November)</h3>
                    <p className="RainText">Expect frequent showers, especially in the afternoon. The rain is usually short but heavy, so bring an umbrella or raincoat.</p>
                </div>
                <div className="Weather_Image">
                    <img className="Rainy_Season_Image" src={about6} />
                </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default About;