import React from "react";
import "../../stylesheets/work.css";

const Work = () => {
  const works = [
    { item: "Innovative Ideas", value: "Unlimited" },
    { item: "Passionate Team", value: "Dedicated" },
    { item: "Projects on the Horizon", value: "Countless" },
    { item: "Dreams to Achieve", value: "Endless" },
  ];

  return (
    <section id="work" className="work grid">
      <div>
        <h2>
          Fueling Your <br />
          <span>Startup Aspirations</span>
        </h2>
        <p>
          At the heart of our startup journey lies an abundance of innovative
          ideas and a passionate team eager to turn them into reality. Our
          vision knows no bounds, we are on a mission to bring countless
          projects to life and achieve endless dreams.
        </p>
        <button className="button">Learn More</button>
      </div>
      <ul id="nbrs" className="grid">
        {works.map((work) => (
          <li key={work.item}>
            <span className="nbr">{work.value}</span>
            <p>{work.item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Work;
