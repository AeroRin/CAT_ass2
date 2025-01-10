import React, { useState } from 'react';
import logo from './assets/logo.png';
import './Hotels.css'

const hotels = [
    {
        id: 'first',
        name: 'PARKROYAL Penang Resort ',
        image: 'first-hotel.jpg',
        paragraphs: ['First Hotel Paragraph1', 'First Hotel Paragraph2'],
    },
    {
        id: 'second',
        name: 'Second Hotel',
        image: 'second-hotel.jpg',
        paragraphs: ['Second Hotel Paragraph1', 'Second Hotel Paragraph2'],
    },
    {
        id: 'third',
        name: 'Third Hotel',
        image: 'third-hotel.jpg',
        paragraphs: ['Third Hotel Paragraph1', 'Third Hotel Paragraph2'],
    },
    {
        id: 'fourth',
        name: 'Fourth Hotel',
        image: 'fourth-hotel.jpg',
        paragraphs: ['Fourth Hotel Paragraph1', 'Fourth Hotel Paragraph2'],
    },
    {
        id: 'fifth',
        name: 'Fifth Hotel',
        image: 'fifth-hotel.jpg',
        paragraphs: ['Fifth Hotel Paragraph1', 'Fifth Hotel Paragraph2'],
    },
    {
        id: 'SIXTH',
        name: 'WADWADWAD Hotel',
        image: 'fourth-hotel.jpg',
        paragraphs: ['Fourth Hotel Paragraph1', 'Fourth Hotel Paragraph2'],
    },
    {
        id: 'SEVENTH',
        name: 'HOSHOSHOS Hotel',
        image: 'fourth-hotel.jpg',
        paragraphs: ['Fourth Hotel Paragraph1', 'Fourth Hotel Paragraph2'],
    },
];

const Hotels = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHotelMenuOpen, setIsHotelMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleHotelMenu = () => {
        setIsHotelMenuOpen(!isHotelMenuOpen);
    };
    
    return (
        <>
        <header className='hotelsbackground'>
            <div className="overlay-box"></div>
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
            <div className="hotel-hold-title">
                    <h1 className="hotels-title">HOTELS</h1>
            </div>
        </header>
        <div className="hotels-container">
            <nav className={`hotels-nav ${isHotelMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#intro">Intro</a></li>
                {hotels.map(hotel => (
                    <li key={hotel.id}>
                        <a href={`#${hotel.id}`}>{hotel.name}</a>
                    </li>
                ))}
                </ul>
            </nav>
            <button className="hotelshamburger" onClick={toggleHotelMenu}>
                <span className="hotelsbar"></span>
                <span className="hotelsbar"></span>
                <span className="hotelsbar"></span>
            </button>

            <article className="hotels-article">
                <h1>Stays of Penang</h1>
                <div className="hotels-subheading">Crafted for Your Comfort, Inspired by its Culture.</div>

                <section id="intro" style={{ display: 'block', marginBottom: '20px' }}>
                    <h2 style={{ display: 'block', marginBottom: '10px', fontSize: '1.5rem' }}>Intro</h2>
                    <p style={{ display: 'block', fontSize: '1rem', lineHeight: '1.5' }}>
                        Penang, a vibrant island that blends heritage, culture, and modernity. Known as the Pearl
                        of the Orient, Penang offers visitors a unique experience of colonial architecture,
                        tantalizing cuisines, and breathtaking landscapes. Whether you're here for a relaxing
                        getaway, a cultural adventure, or a luxurious retreat, Penang's hotels provide the
                        perfect sanctuary to complement your journey. Discover four of the finest accommodations
                        that promise comfort, elegance, and unforgettable memories.
                    </p>
                </section>
                    {hotels.map(hotel => (
                        <section key={hotel.id} id={hotel.id} className="hotels-section">
                        <h2>{hotel.name}</h2>
                        <img src={hotel.image} alt={hotel.name} className="hotels-image" />
                        {hotel.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                </section>
                ))}
            </article>
        </div>
        </>
    );
}

export default Hotels;