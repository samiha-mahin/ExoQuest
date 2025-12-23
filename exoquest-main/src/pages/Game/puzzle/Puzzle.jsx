import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./puzzle-images/logo(exo-grid).png";
import Cards from "./components/Cards";
import Popup from "./components/Popup";
import puzzleBg from "../../../assets/games/puzzle/grid.png";
import GameNav from "../../../components/GameNav";
import { useNavigate } from "react-router-dom";

const Puzzle = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [coins, setCoins] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [viewTime, setViewTime] = useState(5);
  const [gameTime, setGameTime] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isViewing, setIsViewing] = useState(true);
  useEffect(() => {
    if (viewTime > 0) {
      const timer = setTimeout(() => setViewTime(viewTime - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsViewing(false);
      setIsGameActive(true);
    }
  }, [viewTime]);

  useEffect(() => {
    if (isGameActive && gameTime > 0) {
      const timer = setTimeout(() => setGameTime(gameTime - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameTime === 0) {
      handleLoss();
    }
  }, [gameTime, isGameActive]);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const pluscoin = (amount) => {
    setCoins((prevCoins) => prevCoins + amount);
  };

  const handleWin = () => {
    pluscoin(200);
    setShowPopup(true);
    setPopupMessage("You've Earned 200 Coins!");
    setButtonText("Next Level");
    setIsGameActive(false);
  };

  const handleLoss = () => {
    setShowPopup(true);
    setPopupMessage("Time's up! Try again.");
    setButtonText("Restart");
    setIsGameActive(false);
  };

  const handlePopupAction = (action) => {
    if (action === "Next Level") {
      navigate("/level-4");
    } else if (action === "Restart") {
      window.location.reload();
    } else if (action === "Go to Learn") {
      console.log("Go to Learn section!");
    }
  };

  return (
    <PuzzleContainer>
      <GameNav open={open} toggleDrawer={toggleDrawer} pluscoin={coins} />
      <Logo src={logo} alt="Puzzle Logo" />
      {!isGameActive && viewTime > 0 && (
        <Message>Memorize the grid: {viewTime}s</Message>
      )}
      {isGameActive && <Message>Time left to solve: {gameTime}s</Message>}
      <Cards
        isGameActive={isGameActive}
        isViewing={isViewing}
        handleWin={handleWin}
      />
      {showPopup && (
        <Popup
          message={popupMessage}
          buttonText={buttonText}
          handlePopupAction={handlePopupAction}
        />
      )}
    </PuzzleContainer>
  );
};

export default Puzzle;

const PuzzleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${puzzleBg}) !important;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled.img`
  width: 120px;
`;

const Message = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 800;
`;
