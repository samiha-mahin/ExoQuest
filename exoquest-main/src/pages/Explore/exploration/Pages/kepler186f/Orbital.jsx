import { Explore } from "@mui/icons-material";
import "./Orbital.css";
import o1 from "./kepler_img/o1.png";
import o2 from "./kepler_img/o2.png";
import o3 from "./kepler_img/o3.png";
import ExploreWidget from "../../../ExploreWidget";

const Orbital = () => {
  return (
    <div className="orbital">
      <ExploreWidget />
      <div className="container1">
        <h1>Kepler-186f</h1>
        <h2>Orbital & Physical Characteristics</h2>
        <div className="slide">
          <div className="slide-show">
            <div className="img-container">
              <img src={o1} />
            </div>
            <div className="img-container">
              <img src={o2} />
            </div>
            <div className="img-container">
              <img src={o3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orbital;
