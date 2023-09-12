import "../stylesheets/nav.css";
import NavBar from "./nav/NavBar";

const Nav = () => {
  return (
    <nav>
      <div className="topnav" id="myTopnav">
        <div className="logo to-left">
          <div class="logo-text">
            <span class="flomi">flomitech</span>
            <span class="slogan">--innovating your tomorrow, today--</span>
          </div>
        </div>
        <NavBar />
        <div className="clear"></div>
      </div>
    </nav>
  );
};

export default Nav;
