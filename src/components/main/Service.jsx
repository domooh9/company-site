import React, { useState } from "react";

const Service = ({ service }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <figure className="service">
      <img src={service.image} alt="service" />
      <div className="service-info">
        <h4>{service.title}</h4>
        <p>
          {showFullDesc ? service.desc : `${service.desc.slice(0, 100)}...`}
        </p>
        <button
          className="button"
          onClick={() => setShowFullDesc(!showFullDesc)}>
          {showFullDesc ? "Read Less" : "Read More"}
        </button>
      </div>
    </figure>
  );
};

export default Service;
