import React, { useState, useEffect } from "react";
import "../stylesheets/header.css";

const backgroundImages = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1623998021930-8029ef1f382a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBhY2Nlc3NvcmllcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://media.istockphoto.com/id/1673833683/photo/quantum-computer-chip-with-digital-lock-internet-security-and-privacy-network-technology.webp?b=1&s=170667a&w=0&k=20&c=6hDiAmMvThEC7PfochCmohNvAWa7VtKI-u6g5mRPNLs=",
  "https://media.istockphoto.com/id/935930118/photo/business-table-top-with-mock-up-office-supplies-on-white-background-flat-lay-design.webp?b=1&s=170667a&w=0&k=20&c=gqWwLv8qgPvgPxNLrzHytA_7XvcPPn7EDQcFOPRULf0=",
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the background image index
  const updateBackgroundImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % backgroundImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(updateBackgroundImage, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      id="home"
      className="header-container"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}>
      <div id="landing-header" className="landing-header">
        <div className="header" id="typing-animation">
          <h1 className="header-title">ELEVATING TECHNOLOGY</h1>
          <h1 className="header-title">EMPOWERING</h1>
          <h1 className="header-title">LIVES</h1>
          <p className="typing-animation">
            Transforming possibilities into reality through innovative
            technology solutions.
          </p>
          <div className="button-container">
            <a href="#about-us" className="btn btn-primary header-btn">
              Discover Our Story
            </a>
            <a href="#our-services" className="btn btn-secondary header-btn">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
