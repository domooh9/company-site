import wave2 from "../images/wave2.png";
import React from "react";

export default function Subscribe() {
  return (
    <section id="footer">
      <img src={wave2} alt="" className="footer-img" />
      <div className="container">
        <div className="row"></div>
        <div id="useful-links" className="footer-infos grid">
          <div>
            <h3>Finance Business</h3>
            <ul>
              <li>Some Link</li>
              <li>Some Link</li>
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
                <i className="map marker alternate icon"></i>288 street, 23568
                NY
              </li>
              <li>
                <i className="mail icon"></i>servicepro@yoursite.com
              </li>
              <li>
                <i className="phone volume icon"></i> (808) 08 080 8080
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Created by Runtime AlgoRhythm | &#169; 2023-2024 All&nbsp;Right
          Reserved.
        </p>
      </div>
    </section>
  );
}
