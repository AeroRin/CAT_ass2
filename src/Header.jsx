import React, {useState} from 'react';
import logo from './assets/logo.png';
import food1 from './assets/hokkienmee.png';
import food2 from './assets/hokkienmee.png';
import food3 from './assets/hokkienmee.png';
import about1 from './assets/about1.jpeg';
import about2 from './assets/about2.jpg';
import about3 from './assets/about3.jpg';
import './Header.css';
import './Food.css';  // Adjust this path as per your project structure
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleExploreClick = () => {
        window.location.href = "/TouristSpot"; // Replace with the actual URL
      };

    
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    const foodNavigationButton = () => {
        window.location.href = "/Food"; // Replace with the actual URL
    };

    const hotelNavigationButton = () => {
        window.location.href = "/hotels"; // Replace with the actual URL
    };


    return (
        <>
        <header className="header">
            <div className="overlay-box">
            </div>
            <div className="logo">
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
            <button className="Mhamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className="H_TitleName">
                <h1>DISCOVER</h1>
                <h2>WONDERS OF PENANG</h2>
            </div>
        </header>

        <section className="content1-section">
            <div className="content1_Wrapper">
                <div className="box-section">
                    <div className="C_TitleName">
                        <h1>ABOUT</h1>
                        <h2>PENANG</h2>
                    </div>
                    <div className="line"></div>
                    <div className="C_TitleContent">
                        <p>Penang, is famed for its cultural diversity, heritage sites, and vibrant street food in George Town.</p>
                    </div>
                    <section className="About_Content">
                        <article>
                            <figure className="snip0016">
                                <img src={about1} alt="sample41" />
                                <figcaption>
                                    <h2>Do you know <span>History</span> of Penang</h2>
                                    <p>Penang was once a strategic trading hub and a melting pot of diverse ethnicities and is founded by Francis Light</p>
                                    <a href="/about"></a>
                                </figcaption>
                            </figure>
                        </article>
                        <article>
                            <figure className="snip0016">
                                <img src={about2} alt="sample42" />
                                <figcaption>
                                    <h2>Worry about your <span>Traveling Plans</span></h2>
                                    <p>Make sure you gather all your travel requirements to ensure a smooth and enjoyable journey. </p>
                                    <a href="/about"></a>
                                </figcaption>
                            </figure>
                        </article>
                        <article>
                            <figure className="snip0016">
                                <img src={about3} alt="sample43" />
                                <figcaption>
                                    <h2>Learn more about the<span> Weather</span> of Penang </h2>
                                    <p>Penang has a tropical climate, with warm temperatures and high humidity throughout the year.</p>
                                    <a href="/about"></a>
                                </figcaption>
                            </figure>
                        </article>
                    </section>
                </div>
            </div>
        </section>

        {/* <section className="content2-section">
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
                                <defs/>
                                <path d="M5 3l14 9-14 9V3z"/>
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
                </div>
            </div>
        </section> */}


<div className="FoodMainBackground">
  <section className="FoodMainContainer">
    <div className="FoodMainContent">
      <h2>Local Taste of Penang</h2>
      <p>
        Discover the rich culinary traditions of Penang! Explore the diverse flavors, local delicacies, and must-try dishes that make Penang a food lover's paradise. Get ready for a gastronomic adventure that takes you through the island's best-kept secrets and hidden gems.
      </p>
    </div>

    <div className="FoodMainInfo">
      <h1>Explore Penang with Us!</h1>
      <button className="foodNavigateButton" onClick={foodNavigationButton}>Explore Local Taste</button>
    </div>
  </section>
</div>



            <div className='TSMainBackground'>
                <section className="TSMaincontainer">
            <div>
                <div className="TSMaincontent">
                <h2>Shopping Mall</h2>
                <span>I like shopping !</span>
                </div>
            </div>
            <div>
                <div className="TSMaincontent">
                <h2>Historical Locations</h2>
                <span>I super duper like Playing !</span>
                </div>
            </div>
            <div>
                <div className="TSMaincontent">
                <h2>Top 3 Attractions</h2>
                <span>Oops ! Where is it !</span>
                </div>
            </div>
            <div>
                <div className="TSMaincontent">
                <h2>Night Market</h2>
                <span>12 AM already? Night Time !</span>
                </div>
            </div>
            </section>
            <div className="TSMainInfo">
                    <h1>Explore the Penang with Us!</h1>
                    <button onClick={handleExploreClick}>Explore Now!</button>
                </div>
            </div>

            <div className="hotelMainBackground">
                <section className="hotelMainContainer">
                    <div className="hotelMainContent">
                    <h2>Don't Wanna Leave yet? Find a Stay!</h2>
                    <p>
                    Penang, the Pearl of the Orient, combines culture, history, and beauty. Our selected hotels, from beachfront resorts to heritage stays, offer comfort and charm for a memorable stay while you explore the island's attractions.
                    </p>
                    </div>
                    <button className="hotelNavigateButton" onClick={hotelNavigationButton}>>>Scout Out Hotels Now!</button>
                </section>
            </div>
        </>
    );
}

export default Header;