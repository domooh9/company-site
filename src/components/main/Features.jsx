import React from "react";
import "../../stylesheets/features.css";

const Features = () => {
  return (
    <section id="features" className="features grid">
      <div>
        <i className="lightbulb outline big icon"></i>
        <h5>Innovative Solutions</h5>
        <p>We provide innovative solutions tailored to your needs.</p>
      </div>
      <div>
        <i className="users big icon"></i>
        <h5>Customer-Centric</h5>
        <p>Our focus is on delivering exceptional customer experiences.</p>
      </div>
      <div>
        <i className="shield alternate big icon"></i>
        <h5>Data Security</h5>
        <p>Your data is safeguarded with our top-notch security measures.</p>
      </div>
      <div>
        <i className="handshake outline big icon"></i>
        <h5>Trusted Partnerships</h5>
        <p>
          We build long-lasting partnerships based on trust and reliability.
        </p>
      </div>
    </section>
  );
};

export default Features;
