import React, { useState } from 'react';
import logo from './assets/logo.png';
import './Hotels.css';
import ParkRoyal1 from './assets/HotelAssets/ParkRoyal1.jpg';
import ParkRoyal2 from './assets/HotelAssets/ParkRoyal2.jpg';
import ParkRoyal3 from './assets/HotelAssets/ParkRoyal3.jpg';
import ParkRoyal4 from './assets/HotelAssets/ParkRoyal4.jpg';
import HR1 from './assets/HotelAssets/HardRock1.jpg';
import HR2 from './assets/HotelAssets/HardRock2.jpg';
import HR3 from './assets/HotelAssets/HardRock3.jpg';
import HR4 from './assets/HotelAssets/HardRock4.jpg';
import G1 from './assets/HotelAssets/Granite1.jpg';
import G2 from './assets/HotelAssets/Granite2.jpg';
import G3 from './assets/HotelAssets/Granite3.jpg';
import G4 from './assets/HotelAssets/Granite4.jpg';
import EO1 from './assets/HotelAssets/EO1.jpg';
import EO2 from './assets/HotelAssets/EO2.jpg';
import EO3 from './assets/HotelAssets/EO3.jpg';
import EO4 from './assets/HotelAssets/EO4.jpg';
import B1 from './assets/HotelAssets/Bayview1.jpg';
import B2 from './assets/HotelAssets/Bayview2.jpg';
import B3 from './assets/HotelAssets/Bayview3.jpg';
import B4 from './assets/HotelAssets/Bayview4.jpg';
import GS1 from './assets/HotelAssets/GS1.jpg';
import GS2 from './assets/HotelAssets/GS2.jpg';
import GS3 from './assets/HotelAssets/GS3.jpg';
import GS4 from './assets/HotelAssets/GS4.jpg';
import RS1 from './assets/HotelAssets/RS1.jpg';
import RS2 from './assets/HotelAssets/RS2.jpg';
import RS3 from './assets/HotelAssets/RS3.jpg';
import RS4 from './assets/HotelAssets/RS4.jpg';

const hotels = [
    {
        id: 'parkroyalpenang',
        name: 'PARKROYAL Penang Resort ',
        images: [ParkRoyal1, ParkRoyal2, ParkRoyal3, ParkRoyal4],
        paragraphs: [
            "ParkRoyal Penang Resort beckons discerning travelers to an idyllic beachfront escape on the stunning shores of Batu Ferringhi. Nestled amidst lush tropical landscapes, this luxurious resort seamlessly blends contemporary elegance with the natural beauty of its surroundings, creating an oasis of tranquility and rejuvenation. Whether you are seeking a romantic getaway, a memorable family vacation, or simply a tranquil retreat to unwind and recharge, ParkRoyal Penang Resort offers a captivating blend of comfort, luxury, and impeccable service that will exceed your expectations.", 
            "Indulge in a range of world-class amenities designed to enhance your stay. Spacious and elegantly appointed rooms and suites provide a haven of comfort, each thoughtfully designed to offer breathtaking views of the ocean or the lush tropical gardens. Relax by the inviting swimming pools, rejuvenate with a soothing spa treatment, and savor delectable dining experiences showcasing the finest in local and international cuisine. With its prime beachfront location, the resort provides effortless access to a plethora of activities, from water sports and beachside relaxation to exploring the vibrant local culture and discovering the hidden gems of Penang.",
            "Beyond the resort's luxurious offerings, ParkRoyal Penang Resort offers a unique opportunity to immerse yourself in the beauty of the surrounding nature. Explore the vibrant local culture, discover hidden gems in nearby towns, and experience the magic of Batu Ferringhi, a renowned destination for its pristine beaches and vibrant atmosphere."
        ],
    },
    {
        id: 'hardrockpenang',
        name: 'Hard Rock Hotel Penang',
        images: [HR1, HR2, HR3, HR4],
        paragraphs: [
            "Hard Rock Hotel Penang invites you to a rockin' getaway on the stunning shores of Batu Ferringhi. This iconic hotel seamlessly blends the energy of rock and roll with the beauty of the Malaysian coastline, creating an unforgettable experience for music lovers and travelers alike.",
            "Indulge in a world of rock and roll luxury with stylishly appointed rooms featuring signature Hard Rock amenities, such as Fender guitars and exclusive Rock Shop merchandise. Relax by the largest free-form swimming pool in Northern Malaysia, enjoy live music performances by local and international artists, and savor delectable dining experiences at a variety of restaurants and bars. Whether you're seeking adventure, relaxation, or simply a unique and exciting travel experience, Hard Rock Hotel Penang offers something for everyone.",
            "Beyond the vibrant music scene and luxurious amenities, Hard Rock Hotel Penang offers easy access to the best of Batu Ferringhi. Explore the pristine beaches, indulge in thrilling water sports, or venture out to discover the vibrant local culture and hidden gems of Penang.",
            "Hard Rock Hotel Penang is more than just a hotel; it's a destination for those who live life to the fullest. Immerse yourself in the vibrant energy, embrace the rock and roll spirit, and create unforgettable memories that will last a lifetime."
        ],
    },
    {
        id: 'graniteluxurypenang',
        name: 'Granite Luxury Hotel Penang',
        images: [G1, G2, G3, G4],
        paragraphs: [
            "The Granite Luxury Hotel Penang offers a sophisticated and stylish haven in the heart of George Town, perfectly positioned to explore the vibrant city and its rich cultural tapestry. This contemporary hotel seamlessly blends modern elegance with the charm of its surroundings, providing a comfortable and convenient base for both business and leisure travelers.",
            "Indulge in a range of thoughtfully designed rooms and suites, each offering a haven of comfort and modern amenities. Relax in the stylishly appointed spaces, unwind with breathtaking city views, and enjoy the convenience of being within easy reach of Penang's iconic landmarks, bustling markets, and renowned street food scene. Whether you're exploring the UNESCO World Heritage Site of George Town, immersing yourself in the local culture, or simply seeking a comfortable and stylish retreat, The Granite Luxury Hotel Penang offers an unforgettable experience.",
            "Beyond the luxurious accommodations, The Granite Luxury Hotel Penang provides a gateway to the vibrant heart of George Town. Immerse yourself in the rich cultural tapestry of the city, explore the UNESCO World Heritage Site, and discover hidden gems within walking distance of the hotel. Indulge in the renowned street food scene, sample local delicacies, and experience the vibrant pulse of this captivating city.",
            "The Granite Luxury Hotel Penang is more than just a place to stay; it's an invitation to experience the magic of George Town."
        ],
    },
    {
        id: 'eastern&orientalpenang',
        name: 'Eastern & Oriental Hotel',
        images: [EO1, EO2, EO3, EO4],
        paragraphs: [
            "The Eastern & Oriental Hotel, a legendary landmark in George Town, Penang, invites you on a journey through time. Steeped in history, this iconic hotel has graced the shores of Penang for over a century, welcoming dignitaries, celebrities, and discerning travelers from around the globe.",
            "Step into a world of timeless elegance where colonial grandeur seamlessly blends with modern luxury. Indulge in the opulence of elegantly appointed rooms and suites, each exuding a unique charm and offering breathtaking views of the Straits of Malacca. Savor exquisite dining experiences at renowned restaurants, unwind by the refreshing pool, and immerse yourself in the hotel's rich history and heritage.",
            "The Eastern & Oriental Hotel is more than just a place to stay; it's a captivating journey into the heart of Penang's past. Explore the hotel's storied history, wander through its elegant corridors, and soak in the ambiance of a bygone era. From the moment you arrive, you'll be transported to a world of timeless elegance and unforgettable experiences.",
            "The Eastern & Oriental Hotel is not just a hotel; it's an institution, a living legend that continues to enchant and inspire travelers from all corners of the globe."
        ],
    },
    {
        id: 'bayviewpenang',
        name: 'Bayview Hotel Georgetown',
        images: [B1, B2, B3, B4],
        paragraphs: [
            "The Bayview Hotel Georgetown Penang stands as a prominent landmark in the heart of the city, offering a unique blend of contemporary comfort and convenient accessibility. Strategically located within walking distance of the UNESCO World Heritage Site of George Town, the hotel provides an ideal base for exploring the vibrant city's rich cultural tapestry, historical landmarks, and bustling markets.",
            "Experience a stay enhanced by well-appointed rooms and suites, each thoughtfully designed with modern amenities to ensure a comfortable and relaxing stay. Unwind by the refreshing outdoor pool, rejuvenate in the soothing jacuzzi, or indulge in delectable dining options at the hotel's diverse restaurants, including the iconic Three Sixty Revolving Restaurant, offering breathtaking panoramic views of the city as you savor an international buffet.",
            "Beyond the hotel's comforts, the Bayview Hotel Georgetown Penang provides a gateway to the vibrant pulse of George Town. Immerse yourself in the rich cultural tapestry of the city, explore the UNESCO World Heritage Site, and discover hidden gems within walking distance of the hotel. Indulge in the renowned street food scene, sample local delicacies, and experience the vibrant pulse of this captivating city.",
            "The Bayview Hotel Georgetown Penang is more than just a place to stay; it's an invitation to experience the vibrant heart of George Town, a unique blend of modern comfort and cultural immersion."
        ],
    },
    {
        id: 'goldensandspenang',
        name: 'Shangri-La Golden Sands Resort',
        images: [GS1, GS2, GS3, GS4],
        paragraphs: [
            "The Golden Sands Resort by Shangri-La Penang beckons you to an idyllic escape along the breathtaking shores of Batu Ferringhi. Nestled amidst lush tropical landscapes, this 4-star resort seamlessly blends contemporary elegance with the vibrant spirit of Penang, offering a truly unforgettable experience for discerning travelers.",
            "Imagine waking up to the gentle rhythm of the waves lapping against the shore, with the sun casting a golden hue over the horizon. The resort features spacious and elegantly appointed rooms and suites, each thoughtfully designed with modern amenities and a touch of local charm to ensure a comfortable and relaxing stay. Whether you're lounging by the pool, enjoying a sunset cocktail on your private balcony, or indulging in rejuvenating spa treatments, the resort offers a myriad of ways to unwind and recharge.",
            "Beyond the resort's luxurious offerings, guests have easy access to a plethora of exciting attractions. Just a short distance away, you can immerse yourself in the vibrant atmosphere of the Penang Night Market, where you can savor delicious street food, shop for unique souvenirs, and experience the pulse of local life. For nature lovers, the Penang Butterfly Farm offers a delightful encounter with thousands of colorful butterflies fluttering amongst lush greenery.",
            "Golden Sands Resort by Shangri-La Penang is more than just a place to stay; it's an invitation to experience the magic of Batu Ferringhi and the captivating island of Penang. Discover the beauty of the surrounding nature, indulge in the resort's luxurious amenities, and create unforgettable memories that will last a lifetime."
        ],
    },
    {
        id: 'rasasayangpenang',
        name: 'Shangri-La Rasa Sayang Resort',
        images: [RS1, RS2, RS3, RS4],
        paragraphs: [
            "Shangri-La's Rasa Sayang Resort & Spa invites you to an idyllic escape on the breathtaking shores of Batu Ferringhi, Penang. Nestled amidst lush tropical gardens, this iconic resort seamlessly blends timeless elegance with modern luxury, offering a truly unforgettable experience for discerning travelers.",
            "Imagine waking up to the gentle rhythm of the waves lapping against the pristine sands, with the sun casting a golden hue over the horizon. Indulge in the resort's luxurious accommodations, featuring spacious and elegantly appointed rooms and suites, each thoughtfully designed with contemporary comforts and breathtaking views of the ocean or the lush tropical gardens.",
            "Unwind by the resort's inviting swimming pools, rejuvenate with a soothing spa treatment at Chi, The Spa, and savor delectable dining experiences at a variety of restaurants showcasing the finest in local and international cuisine. Whether you're seeking adventure, relaxation, or a perfect blend of both, Shangri-La's Rasa Sayang Resort & Spa offers a myriad of activities to suit every preference.",
            "Beyond the resort's luxurious offerings, guests have easy access to a plethora of exciting attractions. Explore the vibrant local culture, discover hidden gems in nearby towns, and experience the magic of Batu Ferringhi, a renowned destination for its pristine beaches and vibrant atmosphere.",
            "Shangri-La's Rasa Sayang Resort & Spa is more than just a place to stay; it's an invitation to experience the true essence of a luxurious and unforgettable getaway. Immerse yourself in the beauty of the surrounding nature, indulge in the resort's world-class amenities, and create memories that will last a lifetime."
        ],
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
            <div className="Hlogo">
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
            <button className="hotelmain-hamburger" onClick={toggleMenu}>
                <span className="hotelmain-bar"></span>
                <span className="hotelmain-bar"></span>
                <span className="hotelmain-bar"></span>
            </button>
            <div className="hotel-hold-title">
                    <h1 className="hotels-title">HOTELS</h1>
            </div>
        </header>
        <div className="hotels-container">
            <nav className={`hotels-nav ${isHotelMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#introduction">Introduction</a></li>
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

                <section id="introduction" style={{ display: 'block', marginBottom: '20px' }}>
                    <h1 style={{ display: 'block', marginBottom: '10px', fontSize: '1.9rem' }}>Introduction</h1>
                    <p style={{ display: 'block', fontSize: '1rem', lineHeight: '1.5' }}>
                    Penang, a captivating island where East meets West, offers a diverse tapestry of accommodations to suit every 
                    traveler's desires. From luxurious resorts nestled amidst lush tropical landscapes, offering unparalleled 
                    relaxation and world-class amenities, to charming boutique hotels tucked away in the heart of George Town's 
                    historic streets, exuding character and a unique ambiance, the island presents a wealth of choices.                            
                    </p>
                    <p style={{ display: 'block', fontSize: '1rem', lineHeight: '1.5' }}>
                    For those seeking an authentic cultural experience, traditional guesthouses and homestays provide a glimpse 
                    into local life, offering warm hospitality and a chance to connect with the vibrant community. Whether you 
                    prefer the tranquility of a beachfront retreat, the convenience of a city center location, or the charm of a 
                    heritage building, Penang's hotels cater to every preference.
                    </p>
                    <p style={{ display: 'block', fontSize: '1rem', lineHeight: '1.5' }}>
                    Many establishments boast an array of amenities designed to enhance your stay, including inviting swimming pools, 
                    rejuvenating spa treatments, delectable dining options, and rooftop bars offering panoramic views of the city or 
                    the ocean. Some even feature unique touches like traditional Malaysian architecture, lush rooftop gardens, or 
                    private balconies overlooking the bustling streets below.
                    </p>
                    <p style={{ display: 'block', fontSize: '1rem', lineHeight: '1.5' }}>
                    Choosing the right hotel can significantly elevate your Penang experience. Consider your travel style, budget, 
                    and desired location. Are you seeking a romantic getaway, a family-friendly retreat, or an adventurous exploration 
                    of the island? By carefully considering your priorities, you can select the perfect accommodation to create a 
                    memorable and enriching stay in this captivating destination.
                    </p>
                </section>
                {hotels.map(hotel => (
                    <section key={hotel.id} id={hotel.id} className="hotels-section">
                        <h2 style={{ fontSize: '1.9rem' }}>{hotel.name}</h2>

                        {/* Render the images */}
                        <div className="hotels-image">
                            {hotel.images && hotel.images.map((image, index) => (
                                <div key={index} className="hotel-image">
                                    <img 
                                        src={image} 
                                        alt={`Image ${index + 1}`} 
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Render the paragraphs */}
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