import "../stylesheets/header.css";
const Header = () => {
  return (
    <header id="home">
      <div id="landing-header">
        <div className="header">
          <h1>ELEVATING TECHNOLOGY</h1>
          <h1>EMPOWERING</h1>
          <h1>LIVES</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
            eveniet.
          </p>
          <a href="#our-services" className="btn btn-primary">
            About us
          </a>
          <a href="#our-services" className="btn btn-secondary">
            Our Services
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
