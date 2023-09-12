import { Link } from "react-router-dom";

const Infos = () => {
  return (
    <div id="useful-links" className="footer-infos grid">
      <div>
        <h3>Finance Business</h3>
        <ul>
          <li>
            <Link to="/blog"></Link>Blog
          </li>
          <li>
            <Link to="/products"></Link>Check our store
          </li>
          <li>Some Link</li>
          <li>Some Link</li>
        </ul>
      </div>
      <div>
        <h3>Informations</h3>
        <ul>
          <li>About Us</li>
          <li>How We Work</li>
          <li>Terms And Condition</li>
          <li>Privacy and Policy</li>
        </ul>
      </div>
      <div>
        <h3>Customer services</h3>
        <ul>
          <li>FAQ's</li>
          <li>Orders And Returns</li>
          <li>Contact Us</li>
          <li>Support Center</li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul>
          <li>
            <i className="map marker alternate icon"></i>Kisumu
          </li>
          <li>
            <i className="mail icon"></i>domooh9@.com
          </li>
          <li>
            <i className="phone volume icon"></i> +254710809487
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Infos;
