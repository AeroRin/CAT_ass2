import React, {useState} from 'react';
import logo from './assets/logo.png';
import food1 from './assets/food1.jpg';
import food2 from './assets/food2.jpg';
import food3 from './assets/food3.jpg';
import about1 from './assets/about1.jpeg';
import about2 from './assets/about2.jpg';
import about3 from './assets/about3.jpg';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleExploreClick = () => {
        window.location.href = "/TouristSpot"; // Replace with the actual URL
      };
    
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
        <header className="header">
            <div className="overlay-box">
            </div>
            <div className="logo">
                <img src={logo} alt="Penang Logo" />
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/header">MAIN</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/TouristSpot">TOURIST SPOTS</a></li>
                    <li><a href="/Food">LOCAL TASTE</a></li>
                    <li><a href="/hotels">HOTELS</a></li>
                </ul>
            </nav>
            <button className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className="H_TitleName">
                <h1>DISCOVER</h1>
                <h2>W</h2>
                <h4>ONDERS OF</h4>
                <h5>ENANG</h5>
                <h3>P</h3>
            </div>
        </header>

        <section className="content1-section">
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
            <div className="About_Content">
                <figure className="snip0016">
                    <img src={about1} alt="sample41" />
                    <figcaption>
                        <h2>I think <span>nighttime</span> is dark</h2>
                        <p>So you can imagine your fears with less distraction.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
                <figure className="snip0016">
                    <img src={about2} alt="sample42" />
                    <figcaption>
                        <h2>I suppose if we couldn <span>laugh</span></h2>
                        <p>At things that make sense, we couldn react to a lot of life.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
                <figure className="snip0016">
                    <img src={about3} alt="sample43" />
                    <figcaption>
                        <h2>I think the <span>surest</span> sign </h2>
                        <p>That intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                        <a href="#"></a>
                    </figcaption>
                </figure>
            </div>
        </section>

        <section className="content2-section">
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
        </section>

        <div className='TSMainBackground'>
    <section className="TSMaincontainer">
  <div>
    <div class="TSMaincontent">
      <h2>Shopping Mall</h2>
      <span>I like shopping !</span>
    </div>
  </div>
  <div>
    <div class="TSMaincontent">
      <h2>Histotical Place</h2>
      <span>I super duper like Playing !</span>
    </div>
  </div>
  <div>
    <div class="TSMaincontent">
      <h2>Top 3 recommend</h2>
      <span>Oops ! Where is it !</span>
    </div>
  </div>
  <div>
    <div class="TSMaincontent">
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
        </>
    );
}

export default Header;