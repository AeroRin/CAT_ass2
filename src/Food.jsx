import React, { useState, useEffect, useRef } from 'react';
import logo from './assets/logo.png';
import './Food.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nightMarket from "./assets/nightmarketbg.png";
import kopitiamCrowd from "./assets/kopitiamcrowdbg.png";
import charKueyTeow from "./assets/charkueyteow.jpg";
import hokkienMee from "./assets/hokkienmee.png";
import asamLaksa from "./assets/laksa.jpg";
import oysterOmelette from "./assets/oysterOmelette.png";
import wanTanMee from "./assets/wantanmee.png";
import cendol from "./assets/cendol.jpg";

const Food = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init({
        duration: 1000, // Adjust timing
        offset: 120,    // Adjust scroll offset
        easing: 'ease-in-out', // Smooth easing
    });
  }, []);


  const foodItems = [
    {
      name: 'Char Kuey Teow',
      description: 'A flavorful stir-fried noodle dish with prawns, eggs, bean sprouts, and Chinese chives.',
      famousLocations: [
        {
          name: 'Penang Road Char Kuey Teow',
          address: 'Penang Road, George Town, Penang',
          locationLink: 'https://www.google.com/maps?q=Penang+Road+Char+Kuey+Teow+Penang'
        },
        {
          name: 'Siam Road Char Kuey Teow',
          address: 'Siam Road, George Town, Penang',
          locationLink: 'https://www.google.com/maps?q=Siam+Road+Char+Kuey+Teow+Penang'
        }
      ],
      image: charKueyTeow,
    },
    {
      name: 'Hokkien Mee',
      description: 'Prawn noodle soup with a spicy and savory broth, served with prawns, pork, egg, and bean sprouts.',
      famousLocations: [
        {
          name: 'Kim’s Hokkien Mee',
          address: 'Lorong Selamat, George Town, Penang',
          locationLink: 'https://www.google.com/maps?q=Kim%E2%80%99s+Hokkien+Mee+Penang'
        }
      ],
      image: hokkienMee,
    },
    {
      name: 'Asam Laksa',
      description: 'A tangy fish-based noodle soup with mackerel, tamarind, and fresh vegetables.',
      famousLocations: [
        {
          name: 'Air Itam Asam Laksa',
          address: 'Air Itam, Penang',
          locationLink: 'https://www.google.com/maps?q=Air+Itam+Asam+Laksa+Penang'
        }
      ],
      image: asamLaksa,
    },
    {
      name: 'Oyster Omelette',
      description: 'A savory omelette made with oysters, starch, and eggs, fried to perfection.',
      famousLocations: [
        {
          name: 'Kek Seng Restaurant',
          address: 'Chulia Street, George Town, Penang',
          locationLink: 'https://www.google.com/maps?q=Kek+Seng+Restaurant+Penang'
        }
      ],
      image: oysterOmelette,
    },
    {
      name: 'Wantan Mee',
      description: 'Noodles served with dumplings filled with seasoned pork or shrimp, in a savory broth.',
      famousLocations: [
        {
          name: 'Chung Ling Wantan Mee',
          address: 'Chung Ling Road, George Town, Penang',
          locationLink: 'https://www.google.com/maps?q=Chung+Ling+Wantan+Mee+Penang'
        }
      ],
      image: wanTanMee,
    },
    {
      name: 'Cendol',
      description: 'A sweet dessert made with shaved ice, coconut milk, palm sugar, and green rice flour jelly.',
      famousLocations: [
        {
          name: 'Penang Road Cendol',
          address: 'Penang Road, George Town, Penang',
          locationLink: 'https://www.google.com/maps?q=Penang+Road+Cendol+Penang'
        }
      ],
      image: cendol,
    }
  ];  

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          } else {
            entry.target.classList.remove('aos-animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((card) => observer.observe(card));
    return () => {
      cardRefs.current.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <header className="Food">
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
        <div className="overlay-boxA"></div>
        <div className="F_TitleName">
        <h1>Local Taste</h1>
        </div>
      </header>

      <div className="food-container">
        <div className="food-list">
          {foodItems.map((food, index) => (
            <div
              className={`food-card ${index % 2 === 0 ? 'left' : 'right'}`}
              ref={(el) => (cardRefs.current[index] = el)}
              key={index}
              data-aos="fade-up"
            >
              <div className="food-image-container">
                <img src={food.image} alt={food.name} className="food-image" />
              </div>
              <div className="food-text">
                <h2>{food.name}</h2>
                <p>{food.description}</p>
                {food.famousLocations.map((location, locIndex) => (
                <div key={locIndex}>
                <p>{location.name} {location.address}</p>
                <a href={location.locationLink} target="_blank" rel="noopener noreferrer">Find Location</a>
              </div>
            ))}
          </div>
        </div>
      ))}
        </div>
      </div>
      <div className="bottom-text-container">
        <div className="text-group">
          <div className="bottom-text-1">Explore the Local Taste</div>
          <div className="bottom-text-2">Experience the unique flavors of Penang’s culinary delights.</div>
        </div>
        <div className="text-group">
          <div className="bottom-text-3">A Taste of Tradition</div>
          <div className="bottom-text-4">Discover the stories behind each dish and its rich heritage.</div>
        </div>
      </div>

    </>
  );
};

export default Food;
