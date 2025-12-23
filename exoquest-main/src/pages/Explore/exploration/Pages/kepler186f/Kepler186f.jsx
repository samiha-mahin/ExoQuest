import { Link } from "react-router-dom";
import "./Kepler186F.css";
import image1 from "./kepler_img/image1.png";
import image2 from "./kepler_img/image2.png";
import image3 from "./kepler_img/image3.png";
import ExploreWidget from "../../../ExploreWidget";

const Kepler186f = () => {
  return (
    <div className="kepler186f">
      <ExploreWidget />
      <h1>Kepler-186f</h1>

      <div className="container1">
        <div className="buttons">
          <Link to="/habitability">
            <button>Habitability</button>{" "}
          </Link>
          <Link to="/orbital">
            <button>Characteristis</button>
          </Link>
        </div>
        <h2>Expected Enviroment</h2>
        <div className="slide">
          <div className="slide-show">
            <div className="img-container">
              <img src={image1} />
            </div>
            <div className="img-container">
              <img src={image2} />
            </div>
            <div className="img-container">
              <img src={image3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kepler186f;
