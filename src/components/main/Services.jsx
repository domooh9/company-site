import { useContext, useEffect, useState } from "react";
import Service from "./Service";
import { data } from "../../contexts/data";
import "../../stylesheets/service.css";

const Services = () => {
  return (
    <>
      <>
        <div id="our-services" className="main-title">
          <h1>
            Our <span>Services</span>
          </h1>
          <i>
            At Flomitech innovations limited, we're dedicated to harnessing
            technology for innovation and excellence. Our team adapts to
            emerging trends,{" "}
            <p>
              delivering elegant and user-friendly solutions. We prioritize your
              success, serving as your trusted partners in the dynamic digital
              landscape.
            </p>{" "}
            Join us to unlock your full potential and shape the future of
            technology.
          </i>
        </div>
        <section className="services grid">
          {data.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </section>
      </>
    </>
  );
};

export default Services;
