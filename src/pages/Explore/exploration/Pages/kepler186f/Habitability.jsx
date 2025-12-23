import ExploreWidget from "../../../ExploreWidget";
import "./Habitability.css";
import H1 from "./kepler_img/H1.png";
import H2 from "./kepler_img/H2.png";
import H3 from "./kepler_img/H3.png";

const Habitability = () => {
  return (
    <div className="habitability">
      <ExploreWidget />
      <div className="container1">
        <h1>Kepler-186f</h1>
        <h2>Habitability</h2>
        <div className="slide">
          <div className="slide-show">
            <div className="img-container">
              <img src={H1} />
            </div>
            <div className="img-container">
              <img src={H2} />
            </div>
            <div className="img-container">
              <img src={H3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habitability;
