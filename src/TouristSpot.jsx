import React, { useState } from "react";
import logo from "./assets/logo.png";
import GurneyPlaza from "./assets/Gurney_Plaza_at_night.jpg";
import GurneyParagon from "./assets/gurney-paragon-shopping.jpg";
import QBM from "./assets/QBM-banner.jpg";
import Komtar from "./assets/Komtar2.jpg";
import FAM from "./assets/1stAvenue.png";
import PranginMall from "./assets/cropped-Prangin-Mall-Photo.jpg";
import Escape from "./assets/escape.jpg";
import Entopia from "./assets/Entopia.jpg";
import KekLokSi from "./assets/Kek_Lok_Si_at_dusk.jpg";
import Unesco from "./assets/Unesco.jpg";
import StreetArt from "./assets/Art_street.jpg";
import ClanJetty from "./assets/clan_jetty.png";
import FeringghiNightMarket from "./assets/ferringhi-night-market.jpg";
import Macallum from "./assets/macallum street.jpg";
import Jelutong from "./assets/Jelutong.jpg";
import "./TouristSpot.css";

const TS = () => {

    const [showCategories, setShowCategories] = useState(false);
    const toggleCategories = () => {
      setShowCategories(!showCategories);
    };
  
    const scrollToSection = (section) => {
      const element = document.getElementById(section);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState({
    boxes1: 0,
    boxes2: 0,
    boxes3: 0,
    boxes4: 0,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNextSlide = (section, length) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [section]: (prev[section] + 1) % length,
    }));
  };

  const handlePrevSlide = (section, length) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [section]: (prev[section] - 1 + length) % length,
    }));
  };

  const boxes1 = [
    {
      title: "Shopping Mall",
      name: "Gurney Plaza",
      description: "Gurney Plaza is a shopping mall within George Town in the Malaysian state of Penang. Located at Gurney Drive within the city's Central Business District, it was opened in November 2001 and is now managed by CapitaMalls Asia, a subsidiary of the Singapore-based CapitaLand.",
      address: "170, Gurney Dr, Pulau Tikus, 10250 George Town, Penang",
      hours: "10:00 AM - 10:00 PM",
      image: GurneyPlaza,
    },
    {
      title: "Shopping Mall",
      name: "Gurney Paragon",
      description: "Gurney Paragon is a mixed-use complex within George Town in the Malaysian state of Penang. Situated at Gurney Drive within the city's Central Business District, it comprises twin residential towers, an office block and a nine-storey shopping mall forming the podium. Each residential tower stands at a height of 155 m.",
      address: "163d, Gurney Dr, 10250 George Town, Penang",
      hours: "10:00 AM - 10:00 PM",
      image: GurneyParagon,
    },
    {
        title: "Shopping Mall",
        name: "Queensbay Mall",
        description: "Queensbay Mall is a shopping mall within George Town in the Malaysian state of Penang. Located at the suburb of Bayan Lepas, the mall was opened to the public in 2006.",
        address: "Queensbay Mall, 100, Persiaran Bayan Indah, 11900 Bayan Lepas, Pulau Pinang",
        hours: "10:30 AM - 10:30 PM",
        image: QBM
      },
      {
        title: "Shopping Mall",
        name: "Komtar Mall",
        description: "The Tun Abdul Razak Complex (Komtar) is a civic complex of five buildings within the central business district of George Town, Penang. It first opened on 2 December 1976. ",
        address: "Lebuh Tek Soon, George Town, 10100 George Town, Pulau Pinang",
        hours: "11:00 AM - 08:00 PM",
        image: Komtar,
      },
      {
        title: "Shopping Mall",
        name: "1st Avenue Mall",
        description: "1st Avenue Mall is a shopping mall within George Town in the Malaysian state of Penang. It is located at Magazine Road within the city's Central Business District, next to Komtar and Prangin Mall, and is linked to both buildings via overhead bridges.",
        address: "Prangin Mall, No 33, Jalan Dr Lim Chwee Leong, George Town, 10100 George Town, Pulau Pinang",
        hours: "10:00 AM - 10:00 PM",
        image: FAM,
      },
      {
        title: "Shopping Mall",
        name: "Prangin Mall Mall",
        description: "Prangin Mall is a shopping mall within George Town in the Malaysian state of Penang. It is located at Prangin Road within the city's Central Business District (CBD) next to Komtar Tower, and is linked to both Komtar and neighboring 1st Avenue Mall via overhead skybridges.",
        address: "182, Jalan Magazine, 10300 George Town, Pulau Pinang",
        hours: "10:00 AM - 10:00 PM",
        image: PranginMall,
      },
  ];

  const boxes2 = [
    {
      title: "Historical Place",
      name: "Georgetown UNESCO Historic Site",
      description: "The city centre has been inscribed as a UNESCO World Heritage Site since 2008. Today, the city, well known for its cultural diversity, colonial-era architecture and street food, is a booming tourist destination and still serves as the financial centre of northern Malaysia.",
      address: "159, Chulia St, Georgetown, 10200 George Town, Penang",
      hours: "09:00 AM - 05:00 PM",
      image: Unesco,
    },
    {
      title: "Historical Place",
      name: "Clan Jetty",
      description: "Experience the unique charm of the Clan Jetties, where traditional wooden houses on stilts line the waterfront, offering a glimpse into the historic lifestyle of the local Chinese communities.",
      address: "Pengkalan Weld, George Town, 10300 George Town, Pulau Pinang",
      hours: "09:00 AM - 09:00 PM",
      image: ClanJetty,
    },
    {
        title: "Historical Place",
        name: "Street Art",
        description: "These urban murals throughout the UNESCO-listed historic district depict life & culture in Penang.",
        address: "316, Beach St, Georgetown, 10300 George Town, Penang",
        hours: "Open 24/7",
        image: StreetArt,
      },
  ];

  const boxes3 = [
    {
      title: "Top 3 Recommendation",
      name: "Escape Park",
      description: "ESCAPE Penang is a must-visit destination with family and friends when you are in Penang! Try out over 35 thrilling activities such as zip lines, water slides, obstacle courses, and more exciting games here. ESCAPE Penang holds a Guinness World Record of having the Longest Tube Water Slide and the Longest Zip Coaster in the world. Introducing Ski Slope at ESCAPE Penang, the first in Malaysia within a unique tropical setting. You can also enjoy Dead Sea Pool experience to have the experience of natural floatation in the water.",
      address: "828, Jalan Teluk Bahang, Teluk Bahang, 11050 Tanjung Bungah, Pulau Pinang",
      hours: "10:00 AM - 06:00 PM",
      image: Escape,
    },
    {
      title: "Top 3 Recommendation",
      name: "Entopia",
      description: "Entopia is brought to you by Penang Butterfly Farm and it consists of two sections; The Natureland and The Cocoon. The Natureland is a garden vivarium, which is home to more than 15,000 free-flying butterflies and over 200 species of plants.",
      address: "830, Jalan Teluk Bahang, Teluk Bahang, 11050 Tanjung Bungah, Pulau Pinang",
      hours: "09:00 AM - 05:00 PM",
      image: Entopia,
    },
    {
      title: "Top 3 Recommendation",
      name: "Kek Lok Si Temple",
      description: "The Kek Lok Si Temple is a Buddhist temple within the city of George Town in the Malaysian state of Penang. Located at Ayer Itam, it is the largest Buddhist temple in Malaysia and an important pilgrimage centre for Buddhists from Hong Kong, the Philippines, Singapore and other parts of Southeast Asia.",
      address: "Jln Balik Pulau, 11500 Ayer Itam, Pulau Pinang",
      hours: "08:30 AM - 05:30 PM",
      image: KekLokSi,
    },
  ];

  const boxes4 = [
    {
      title: "Night Market",
      name: "Batu Ferringhi Night Market",
      description: "A bazaar of makeshift stalls operated by local traders, Batu Ferringhi night market stretches for 1 KM. Tourists visit the market to buy cheap accessories like clothes, watches, sling bags, magnets, key chains, coloured jewellery and pirated DVDs. The place is good to buy some souvenirs to remember your trip to Penang. ",
      address: "Jalan Pantai Batu, Taman Pantai Batu, 11200 Tanjong Bungah, Pulau Pinang",
      hours: "07:00 PM - 10:00 PM",
      image: FeringghiNightMarket,
    },
    {
      title: "Night Market",
      name: "Macallum Street Night Market",
      description: "Located in Georgetown, Macallum Street Market sells T-shirts, watches, decorative items, phone covers, tables and mats. The price of the good here is usually lesser than in other night markets in Penang. As you walk through the market, you can hear the sizzling sound of Char Kuey Teow and Apam Balik.",
      address: "830, Jalan Teluk Bahang, Teluk Bahang, 11050 Tanjung Bungah, Pulau Pinang",
      hours: "Monday 05:00 PM - 10:30 PM",
      image: Macallum,
    },
    {
      title: "Night Market",
      name: "Jelutong Night Market",
      description: "Located on Jalan Van Pragh, Jelutong Night Market is one of the night markets in Penang that is known for selling delicious local food. Footwear, carpets and other accessories are also sold in the market. The market is crowded as it gets darker, leaving little space to navigate through the narrow lanes.",
      address: "Jln Balik Pulau, 11500 Ayer Itam, Pulau Pinang",
      hours: "Friday 07:00 PM - 11:00 PM",
      image: Jelutong,
    },
  ];

  return (
    <>
    <section id ='main'>
      <header className="TouristSpot">
        <div className="overlay-box"></div>
        <div className="logo">
          <img src={logo} alt="Penang Logo" />
        </div>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#main">MAIN</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#tourist-spots">TOURIST SPOTS</a></li>
            <li><a href="#local-taste">LOCAL TASTE</a></li>
            <li><a href="#hotels">HOTELS</a></li>
          </ul>
        </nav>
        <button className="TShamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <h1 className="TS-title">Tourist Spots</h1>
      </header>
    </section>

    
      <div className="TS-background">
        
        <section className="TScontent-SM">
          <div className="display-box">
            <div className="box-content">
              <h3 className="box-title1">{boxes1[currentSlides.boxes1].title}</h3>
              <p className="box-name">{boxes1[currentSlides.boxes1].name}</p>
              <p className="box-description">{boxes1[currentSlides.boxes1].description}</p>
              <p className="box-address">Address: {boxes1[currentSlides.boxes1].address}</p>
              <p className="box-hours">Business Hours: {boxes1[currentSlides.boxes1].hours}</p>
            </div>
            <div className="box-image">
              <img src={boxes1[currentSlides.boxes1].image} alt={boxes1[currentSlides.boxes1].title} />
            </div>
            <button className="arrow left" onClick={() => handlePrevSlide("boxes1", boxes1.length)}>
              &#8592;
            </button>
            <button className="arrow right" onClick={() => handleNextSlide("boxes1", boxes1.length)}>
              &#8594;
            </button>
          </div>
        </section>
        <section id= "boxes1"></section>


        <section className="TScontent-HP">
          <div className="display-box">
            <div className="box-content">
              <h3 className="box-title2">{boxes2[currentSlides.boxes2].title}</h3>
              <p className="box-name">{boxes2[currentSlides.boxes2].name}</p>
              <p className="box-description">{boxes2[currentSlides.boxes2].description}</p>
              <p className="box-address">Address: {boxes2[currentSlides.boxes2].address}</p>
              <p className="box-hours">Business Hours: {boxes2[currentSlides.boxes2].hours}</p>
            </div>
            <div className="box-image">
              <img src={boxes2[currentSlides.boxes2].image} alt={boxes2[currentSlides.boxes2].title} />
            </div>
            <button className="arrow left" onClick={() => handlePrevSlide("boxes2", boxes2.length)}>
              &#8592;
            </button>
            <button className="arrow right" onClick={() => handleNextSlide("boxes2", boxes2.length)}>
              &#8594;
            </button>
          </div>
        </section>
        <section id= "boxes2"></section>

        <section className="TScontent-Top3">
          <div className="display-box">
            <div className="box-content">
              <h3 className="box-title3">{boxes3[currentSlides.boxes3].title}</h3>
              <p className="box-name">{boxes3[currentSlides.boxes3].name}</p>
              <p className="box-description">{boxes3[currentSlides.boxes3].description}</p>
              <p className="box-address">Address: {boxes3[currentSlides.boxes3].address}</p>
              <p className="box-hours">Business Hours: {boxes3[currentSlides.boxes3].hours}</p>
            </div>
            <div className="box-image">
              <img src={boxes3[currentSlides.boxes3].image} alt={boxes3[currentSlides.boxes3].title} />
            </div>
            <button className="arrow left" onClick={() => handlePrevSlide("boxes3", boxes3.length)}>
              &#8592;
            </button>
            <button className="arrow right" onClick={() => handleNextSlide("boxes3", boxes3.length)}>
              &#8594;
            </button>
          </div>
        </section>
        <section id= "boxes3"></section>
        
        <section className="TScontent-NM">
          <div className="display-box">
            <div className="box-content">
              <h3 className="box-title4">{boxes4[currentSlides.boxes4].title}</h3>
              <p className="box-name">{boxes4[currentSlides.boxes4].name}</p>
              <p className="box-description">{boxes4[currentSlides.boxes4].description}</p>
              <p className="box-address">Address: {boxes4[currentSlides.boxes4].address}</p>
              <p className="box-hours">Business Hours: {boxes4[currentSlides.boxes4].hours}</p>
            </div>
            <div className="box-image">
              <img src={boxes4[currentSlides.boxes4].image} alt={boxes4[currentSlides.boxes4].title} />
            </div>
            <button className="arrow left" onClick={() => handlePrevSlide("boxes4", boxes4.length)}>
              &#8592;
            </button>
            <button className="arrow right" onClick={() => handleNextSlide("boxes4", boxes4.length)}>
              &#8594;
            </button>
          </div>
        </section>
        <section id= "boxes4"></section>

    </div>

    {/* Floating icon with categories */}
      <div className={`floating-icon ${showCategories ? 'active' : ''}`} onClick={toggleCategories}>
        F
        {showCategories && (
          <div className="categories-list">
            <div onClick={() => scrollToSection('main')}>Move to Up</div>
            <div onClick={() => scrollToSection('boxes1')}>Shopping Mall</div>
            <div onClick={() => scrollToSection('boxes2')}>Historical Place</div>
            <div onClick={() => scrollToSection('boxes3')}>Top 3 Recommendation</div>
            <div onClick={() => scrollToSection('boxes4')}>Night Market</div>
            
          </div>
        )}
      </div>
      
    </>
  );
};

export default TS;