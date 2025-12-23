import React, { useState } from "react";
import "./ExoMap.css";
import { Ellipse } from "../../../assets/games/ExoPlanets";
import { kepler442b } from "../../../assets/games/ExoPlanets";
import { Gliese } from "../../../assets/games/ExoPlanets";
import { kepler22b } from "../../../assets/games/ExoPlanets";
import { trappist1e } from "../../../assets/games/ExoPlanets";
import { kepler62f } from "../../../assets/games/ExoPlanets";
import { kepler186f } from "../../../assets/games/ExoPlanets";
import GameNav from "../../../components/GameNav";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import Logo from "./map-images/logo.png";

const ExoMap = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const handleNavigate = () => {
    navigate("/missionhome");
  };
  return (
    <div>
      <GameNav open={open} toggleDrawer={toggleDrawer} />
      <div className="main">
        <img className="logo" src={Logo} />
        <div className="trappist-outline">
          <div className="trappist">
            <div className="t-lock"></div>
            <img src={trappist1e} alt="" />
            <p>
              Trappist1e <LockOutlinedIcon />
            </p>
          </div>
        </div>
        <div className="gliese-outline">
          <div className="gliese">
            <img src={Gliese} alt="" />
            <p>
              Gliese <LockOutlinedIcon />
            </p>
          </div>
        </div>
        <div className="k22b-outline">
          <div className="k22b">
            <div className="k22b-lock"></div>
            <img src={kepler22b} alt="" />
            <p>
              Kepler-22b <LockOutlinedIcon />
            </p>
          </div>
        </div>
        <div className="k442b-outline">
          <div className="k442b">
            <div className="k442b-lock"></div>
            <img src={kepler442b} alt="" />
            <p>
              Kepler-442b <LockOutlinedIcon />
            </p>
          </div>
        </div>
        <div className="k186-outline">
          <div className="k186" onClick={handleNavigate}>
            <div className="k86-lock"></div>
            <img src={kepler186f} alt="" />
            <p>Kepler-186f</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExoMap;
