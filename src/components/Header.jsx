import "../stylesheets/header.css";
const Header = () => {
  return (
    <header id="home">
      <div id="landing-header">
        <div className="header" id="typing-animation">
          <h1>ELEVATING TECHNOLOGY</h1>
          <h1>EMPOWERING</h1>
          <h1>LIVES</h1>
          <p className="typing-animation">
            Transforming possibilities into reality through innovative
            technology solutions.
          </p>
          <a href="#about-us" className="btn btn-primary">
            Learn About Us
          </a>
          <a href="#our-services" className="btn btn-secondary">
            Explore Our Services
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
