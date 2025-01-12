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
        description: 'Char Kuey Teow is a smoky, stir-fried noodle dish beloved for its savory flavors and rich aroma. Made with flat rice noodles, prawns, cockles, Chinese sausage, and eggs, it’s a true classic of Penang street food.',
        famousLocations: [
            {
                name: 'Siam Road Charcoal Char Kway Teow',
                address: 'Siam Road, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Siam+Road+Charcoal+Char+Kway+Teow+Penang'
            },
            {
                name: 'Lorong Selamat Char Kway Teow',
                address: 'Lorong Selamat, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Lorong+Selamat+Char+Kway+Teow+Penang'
            }
        ],
        image: charKueyTeow
    },
    {
        name: 'Hokkien Mee',
        description: 'Hokkien Mee is a hearty noodle soup that combines a flavorful prawn-based broth with yellow noodles, rice vermicelli, prawns, pork slices, boiled eggs, and crispy fried shallots. It’s a breakfast favorite in Penang.',
        famousLocations: [
            {
                name: 'Green House Hokkien Mee',
                address: 'Lorong Abu Siti, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Green+House+Hokkien+Mee+Penang'
            },
            {
                name: '888 Hokkien Mee',
                address: 'Lebuh Presgrave, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=888+Hokkien+Mee+Penang'
            }
        ],
        image: hokkienMee
    },
    {
        name: 'Penang Laksa',
        description: 'Penang Laksa is a tangy, fish-based noodle soup that perfectly balances sour, spicy, and savory flavors. The dish features rice noodles, tamarind broth, shredded fish, cucumber, onions, and fresh mint leaves.',
        famousLocations: [
            {
                name: 'Pasar Air Itam Laksa',
                address: 'Air Itam, Penang',
                locationLink: 'https://www.google.com/maps?q=Pasar+Air+Itam+Laksa+Penang'
            },
            {
                name: 'Joo Hooi Cafe Laksa',
                address: 'Jalan Penang, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Joo+Hooi+Cafe+Laksa+Penang'
            }
        ],
        image: asamLaksa
    },
    {
        name: 'Oyster Omelette',
        description: 'Oyster Omelette is a delicious mix of eggs, potato starch, and fresh oysters, pan-fried to crispy perfection. This dish is served with a tangy chili sauce for a delightful contrast in flavor.',
        famousLocations: [
            {
                name: 'Kedai Kopi Seng Thor',
                address: 'Jalan Carnarvon, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Kedai+Kopi+Seng+Thor+Penang'
            },
            {
                name: 'New Lane Hawker Centre',
                address: 'Lorong Baru, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=New+Lane+Hawker+Centre+Penang'
            }
        ],
        image: oysterOmelette
    },
    {
        name: 'Wantan Mee',
        description: 'Wantan Mee is a comforting noodle dish topped with succulent char siu (barbecued pork), flavorful dumplings, and leafy greens, served either dry with soy sauce or in a light broth.',
        famousLocations: [
            {
                name: 'Tai Wah Wantan Mee',
                address: 'Lebuh Campbell, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Tai+Wah+Wantan+Mee+Penang'
            },
            {
                name: 'Chulia Street Wantan Mee',
                address: 'Lebuh Chulia, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Chulia+Street+Wantan+Mee+Penang'
            }
        ],
        image: wanTanMee
    },
    {
        name: 'Cendol',
        description: 'Cendol is a refreshing dessert made with shaved ice, coconut milk, green rice flour jelly, red beans, and gula Melaka (palm sugar syrup). It’s perfect for Penang’s warm weather.',
        famousLocations: [
            {
                name: 'Penang Road Famous Teochew Cendol',
                address: 'Lebuh Keng Kwee, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Penang+Road+Famous+Teochew+Cendol+Penang'
            },
            {
                name: 'Kimberley Street Cendol',
                address: 'Lebuh Kimberley, George Town, Penang',
                locationLink: 'https://www.google.com/maps?q=Kimberley+Street+Cendol+Penang'
            }
        ],
        image: cendol
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
        <div className="Flogo">
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
        <button className="Fhamburger" onClick={toggleMenu}>
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
                <p>
                {food.description}   You can try it at{" "}
                {food.famousLocations.map((location, locIndex) => (
                <span key={locIndex}>
                  <a
                   href={location.locationLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   title={`Find ${food.name} at ${location.name}`}
                   className="food-card-link"
                  >
                    {location.name}
                  </a>
                  {locIndex < food.famousLocations.length - 1 ? ", " : "."}
                  </span> 
                ))}
                </p>
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
