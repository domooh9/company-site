import facebooklogo from "../images/facebook-icon.png";
import twitterlogo from "../images/twitter-icon.png";
import instagramlogo from "../images/instagram-icon.png";
import linkedinlogo from "../images/linkedin-icon.png";
import snapchatlogo from "../images/snapchat-icon.png";

const NavSocial = () => {
  const date = new Date();
  return (
    <section id="social-media">
      <div className="container text-center">
        <div className="social-icons">
          {/* <ul className="to-left">
            <li className="date">
              <i className="calendar alternate outline icon"></i>{" "}
              {date.toDateString()}
            </li>
            <li className="phone-num">
              <i className="phone icon"></i> 0710809487
            </li>
          </ul> */}
          <ul className="to-right">
            <a href="#">
              <img src={facebooklogo} alt="facebook" />
            </a>

            <a href="#">
              <img src={instagramlogo} alt="insta" />
            </a>
            <a href="#">
              <img src={twitterlogo} alt="twitter" />
            </a>
            <a href="#">
              <img src={linkedinlogo} alt="linkedin" />
            </a>
            <a href="#">
              <img src={snapchatlogo} alt="snapchat" />
            </a>
          </ul>
          <div className="clear"></div>
        </div>
      </div>
    </section>
  );
};

export default NavSocial;
