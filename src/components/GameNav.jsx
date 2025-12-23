import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import Coin from "../assets/games/missionHome/icon.png";
import Dimond from "../assets/games/missionHome/dimond.png";
import Flash from "../assets/games/missionHome/flash.png";
import plus from "../assets/games/missionHome/roundplus.png";
import ExoDrawer from "./ExoDrawer";
import botIcon from "../assets/games/Exobot/chat-bot.png";
import ExoBot from "./ExoBot/ExoBot";
import { useNavigate } from "react-router-dom";

const GameNav = ({ open, toggleDrawer, pluscoin }) => {
  const navigate = useNavigate();

  const [isExoBotVisible, setIsExoBotVisible] = useState(false);

  const toggleExoBot = () => {
    setIsExoBotVisible((prev) => !prev);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const totalCoins = 100 + (pluscoin || 0);

  return (
    <>
      <NavWrapper>
        <NavCont>
          <ArrowBackIcon onClick={handleGoBack} />
          <NavRigt>
            <Stats>
              <img src={Coin} alt="coin" />
              <p>{totalCoins}</p>
            </Stats>
            <Stats>
              <img src={Dimond} alt="diamond" />
              <p>5</p>
              <img className="roundplus" src={plus} alt="plus icon" />
            </Stats>
            <Stats>
              <img src={Flash} alt="flash" />
              <p>5/5</p>
            </Stats>
            <MenuIcon onClick={() => toggleDrawer(true)} />
            <ExoDrawer open={open} toggleDrawer={toggleDrawer} />
          </NavRigt>
        </NavCont>
      </NavWrapper>

      <ExoCont>
        <img src={botIcon} alt="ExoBot icon" onClick={toggleExoBot} />
        <p>ExoBot</p>
        {isExoBotVisible && <ExoBot />}
      </ExoCont>
    </>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const NavCont = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 40px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
  }
`;

const NavRigt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;

  p {
    font-weight: 400;
    margin-left: 4px;
    color: #fff;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 3px;
  }

  .roundplus {
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

const ExoCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 82%;
  bottom: 40px;
  cursor: pointer;
  z-index: 1000;
  > p {
    padding-left: 5px;
    font-weight: 800;
    letter-spacing: 2px;
  }
  > img {
    position: relative;
    width: 40px;
    animation: scaleAnimation 2s infinite ease-in-out;
    @keyframes scaleAnimation {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export default GameNav;
