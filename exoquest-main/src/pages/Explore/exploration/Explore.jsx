import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";
import Card1 from "./explore_img/Card 1.png";
import Card2 from "./explore_img/Card 2.png";
import Card3 from "./explore_img/Card 3.png";
import Card4 from "./explore_img/Card 4.png";
import Card5 from "./explore_img/Card 5.png";
import Card6 from "./explore_img/Card 6.png";
import Card7 from "./explore_img/Card 7.png";
import Card8 from "./explore_img/Card 8.png";
import Card9 from "./explore_img/Card 9.png";
import Card10 from "./explore_img/Card 10.png";
import ExploreWidget from "../ExploreWidget";

const images = [
  { src: Card1, route: "/kepler186f" },
  { src: Card2, route: "" },
  { src: Card3, route: "" },
  { src: Card4, route: "" },
  { src: Card5, route: "" },
  { src: Card6, route: "" },
  { src: Card7, route: "" },
  { src: Card8, route: "" },
  { src: Card9, route: "" },
  { src: Card10, route: "" },
];

const Explore = () => {
  return (
    <div className="banner">
      <ExploreWidget />
      <h1>Explore The Planates</h1>
      <div className="slider" style={{ "--quantity": images.length }}>
        {images.map((image, index) => (
          <div key={index} className="item" style={{ "--position": index + 1 }}>
            <Link to={image.route}>
              <img src={image.src} alt={`Card ${index + 1}`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
