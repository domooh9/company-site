import wave2 from "../images/wave2.png";
import React from "react";
import NavSocial from "../nav/NavSocial";
import { Link } from "react-router-dom";

export default function Subscribe() {
  return (
    <section id="footer">
      <img src={wave2} alt="" className="footer-img" />
      <div className="container" id="cont">
        <div className="row"></div>
        <div id="useful-links" className="footer-infos grid">
          <div>
            <h3>Our Services</h3>
            <ul>
              <li>Software Development</li>
              <li>Web Design</li>
              <li>Penetration Testing</li>
              <li>IT Consultancy</li>
            </ul>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>About Us</li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/products">Check our store</Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>FAQs</li>
              <li>Customer Support</li>
              <li>Contact Information</li>
              <li>Support Center</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="map marker alternate icon"></i>KISUMU KE
              </li>
              <li>
                <i className="mail icon"></i>domooh9@gmail.com
              </li>
              <li>
                <i className="phone volume icon"></i> +254710809487
              </li>
            </ul>
          </div>
        </div>
        <NavSocial />
        <hr />
        <p className="copyright" id="copy">
          FLOMITECH INNOVATIONS LIMITED | &#169; 2023-2024 All&nbsp;Right
          Reserved.
        </p>
      </div>
    </section>
  );
}
