import React, { useState, useEffect, useRef } from 'react';
import logo from './assets/logo.png';
import './Food.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Food = () => {
  // State hook to track the open/closed status of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the visibility of the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Initialize AOS (Animate On Scroll) with a duration of 1000ms
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Array of food items with details like name, description, location, and image
  const foodItems = [
    {
      name: 'Char Kuey Teow',
      description: 'A flavorful stir-fried noodle dish with prawns, eggs, and bean sprouts.',
      location: 'https://www.google.com/maps?q=Char+Kuey+Teow+Penang',
      image: 'images/char_kuey_teow.jpg',
    },
    {
      name: 'Hokkien Mee',
      description: 'Prawn noodle soup with a spicy and savory broth.',
      location: 'https://www.google.com/maps?q=Hokkien+Mee+Penang',
      image: 'images/hokkien_mee.jpg',
    },
    {
      name: 'Assam Laksa',
      description: 'A tangy fish-based noodle soup with fresh vegetables.',
      location: 'https://www.google.com/maps?q=Assam+Laksa+Penang',
      image: 'images/assam_laksa.jpg',
    },
    {
      name: 'Oyster Omelette',
      description: 'A savory omelette made with oysters and starch.',
      location: 'https://www.google.com/maps?q=Oyster+Omelette+Penang',
      image: 'images/oyster_omelette.jpg',
    },
    {
      name: 'Wantan Mee',
      description: 'Noodles served with dumplings in a savory broth.',
      location: 'https://www.google.com/maps?q=Wantan+Mee+Penang',
      image: 'images/wantan_mee.jpg',
    },
    {
      name: 'Cendol',
      description: 'A sweet dessert made with shaved ice, coconut milk, and palm sugar.',
      location: 'https://www.google.com/maps?q=Cendol+Penang',
      image: 'images/cendol.jpg',
    },
  ];

  // Ref to store references for each food card to track visibility
  const cardRefs = useRef([]);

  // Intersection Observer setup to animate food cards when they come into view while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add or remove animation class based on visibility of the card
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          } else {
            entry.target.classList.remove('aos-animate');
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the card is visible
      }
    );

    // Start observing each food card for visibility changes
    cardRefs.current.forEach((card) => observer.observe(card));

    // Cleanup the observer when the component is unmounted
    return () => {
      cardRefs.current.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <header className="Food">
        {/* Overlay effect for the header */}
        <div className="overlay-box"></div>
        
        {/* Logo section */}
        <div className="logo">
          <img src={logo} alt="Penang Logo" />
        </div>
        
        {/* Mobile navigation menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#main">MAIN</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#tourist-spots">TOURIST SPOTS</a></li>
            <li><a href="#local-taste">LOCAL TASTE</a></li>
            <li><a href="#hotels">HOTELS</a></li>
          </ul>
        </nav>
        
        {/* Hamburger button for mobile menu toggle */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Overlay effect for mobile menu */}
        <div className="overlay-boxA"></div>

        {/* Title for the food and beverages section */}
        <div className="F_TitleName">
          <h1>Food and Beverages</h1>
        </div>
      </header>

      {/* Food items display container */}
      <div className="food-container">
        <div className="food-list">
          {/* Map over each food item and display it */}
          {foodItems.map((food, index) => (
            <div
              className={`food-card ${index % 2 === 0 ? 'left' : 'right'}`} // Alternate card position (left or right)
              ref={(el) => (cardRefs.current[index] = el)} // Assign a reference to each card for visibility tracking
              key={index}
              data-aos="fade-up" // AOS animation effect
            >
              <div className="food-image-container">
                {/* Display food image */}
                <img src={food.image} alt={food.name} className="food-image" />
              </div>
              <div className="food-text">
                {/* Display food name */}
                <h2>{food.name}</h2>
                {/* Display food description */}
                <p>{food.description}</p>
                {/* Link to the location of the food on Google Maps */}
                <a href={food.location} target="_blank" rel="noopener noreferrer">
                  Find Location
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Food;
