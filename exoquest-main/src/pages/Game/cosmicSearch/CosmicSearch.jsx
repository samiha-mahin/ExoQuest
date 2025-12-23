import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import redbg from "../../../assets/games/cosmicSearch/cosmicSearchbg2.png";
import GameNav from "../../../components/GameNav";
import { useNavigate } from "react-router-dom";
import object1 from "../../../assets/games/cosmicSearch/object1.png";
import object2 from "../../../assets/games/cosmicSearch/object2.png";
import object3 from "../../../assets/games/cosmicSearch/object3.png";

import objecthider1 from "../../../assets/games/cosmicSearch/objecthider1.png";
import objecthider2 from "../../../assets/games/cosmicSearch/objecthider2.png";
import objecthider3 from "../../../assets/games/cosmicSearch/objecthider3.png";
import objecthider4 from "../../../assets/games/cosmicSearch/objecthider4.png";
import objecthider5 from "../../../assets/games/cosmicSearch/objecthider5.png";
const CosmicSearch = () => {
  const [open, setOpen] = useState(false);
  const [matchedObjects, setMatchedObjects] = useState([]);
  const [timeLeft, setTimeLeft] = useState(9);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [clickedObjects, setClickedObjects] = useState([]);
  const [coins, setCoins] = useState(0);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleObjectClick = (object) => {
    if (matchedObjects.includes(object) || gameOver) return;
    setMatchedObjects((prev) => [...prev, object]);

    if (matchedObjects.length + 1 === 3) {
      setGameWon(true);
      setGameOver(true);
      setCoins(coins + 200);
    }

    setClickedObjects((prev) => [...prev, object]);
  };

  const restartGame = () => {
    setMatchedObjects([]);
    setClickedObjects([]);
    setTimeLeft(9);
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <Main>
      <GameNav open={open} toggleDrawer={toggleDrawer} pluscoin={coins} />
      <Container>
        <Heading>
          <h2>Cosmic Search</h2>
          <p>{timeLeft > 0 ? `00:0${timeLeft}` : "Time's up!"}</p>
          <p>Find these objects</p>
        </Heading>
        <GameFrame>
          <ObjectTomatch>
            <ObjectCard glow={matchedObjects.includes("object1")}>
              <img src={object1} alt="Object 1" />
            </ObjectCard>
            <ObjectCard glow={matchedObjects.includes("object2")}>
              <img src={object2} alt="Object 2" />
            </ObjectCard>
            <ObjectCard glow={matchedObjects.includes("object3")}>
              <img src={object3} alt="Object 3" />
            </ObjectCard>
          </ObjectTomatch>
          <ObjectFromMatch>
            <ObjectHiderBox className="objecthider1">
              <img src={objecthider1} alt="Hider 1" />
            </ObjectHiderBox>
            <ObjectHiderBox className="objecthider2">
              <img src={objecthider2} alt="Hider 2" />
            </ObjectHiderBox>
            <ObjectHiderBox className="objecthider3">
              <img src={objecthider3} alt="Hider 3" />
            </ObjectHiderBox>
            <ObjectHiderBox className="objecthider4">
              <img src={objecthider4} alt="Hider 4" />
            </ObjectHiderBox>
            <ObjectHiderBox className="objecthider5">
              <img src={objecthider5} alt="Hider 5" />
            </ObjectHiderBox>

            <ObjectHiderBox className="objecthider6" scaleAnimation>
              <img src={objecthider3} alt="Hider 6" />
            </ObjectHiderBox>

            <ObjectToFindBox
              className={`object1 ${
                clickedObjects.includes("object1") ? "moveUp" : ""
              }`}
              onClick={() => handleObjectClick("object1")}
            >
              <img src={object1} alt="Object 1" />
            </ObjectToFindBox>
            <ObjectToFindBox
              className={`object2 ${
                clickedObjects.includes("object2") ? "moveUp" : ""
              }`}
              onClick={() => handleObjectClick("object2")}
            >
              <img src={object2} alt="Object 2" />
            </ObjectToFindBox>
            <ObjectToFindBox
              className={`object3 ${
                clickedObjects.includes("object3") ? "moveUp" : ""
              }`}
              onClick={() => handleObjectClick("object3")}
            >
              <img src={object3} alt="Object 3" />
            </ObjectToFindBox>
          </ObjectFromMatch>
        </GameFrame>
        {gameOver && (
          <Popup>
            {gameWon ? (
              <div>
                <p>You've Earned 200 Coins!</p>
                <button onClick={() => navigate("/level-2")}>NEXT LEVEl</button>
              </div>
            ) : (
              <div>
                <p>Time's up! Try again.</p>
                <button onClick={restartGame}>Restart</button>
                <button onClick={restartGame} style={{ marginLeft: "10px" }}>
                  Go To Learn
                </button>
              </div>
            )}
          </Popup>
        )}
      </Container>
    </Main>
  );
};

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${redbg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6%;

  h2 {
    font-size: 55px;
    margin: -10px;
    padding: 0;
    font-weight: 1000px;
  }

  p {
    font-size: 30px;
    margin: -10px;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

const GameFrame = styled.div``;

const ObjectTomatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ObjectCard = styled.div`
  background: ${(props) =>
    props.glow ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)"};
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 20px 10px;
  box-shadow: ${(props) =>
    props.glow ? "0 0 10px 5px rgba(168, 184, 201, 1);" : "none"};

  img {
    max-width: 60px;
    object-fit: cover;
  }
`;

const ObjectFromMatch = styled.div`
  width: 100%;
  height: 100%;

  .objecthider1 {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    img {
      width: 300px;
      animation: ${scaleAnimation} 5s infinite;
    }
  }
  .objecthider3 {
    position: absolute;
    bottom: 10%;
    left: 20%;
    z-index: 100;
    animation: ${scaleAnimation} 5s infinite;
    img {
      width: 290px;
    }
  }
  .objecthider2 {
    position: absolute;
    bottom: 0;
    left: 40%;
    z-index: 100;
    img {
      width: 300px;
    }
  }
  .objecthider4 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 200;
    animation: ${scaleAnimation} 7s infinite;
  }
  .objecthider5 {
    position: absolute;
    bottom: 40%;
    left: 62%;
    z-index: 100;
    img {
      width: 120px;
    }
  }

  .objecthider6 {
    position: absolute;
    bottom: 40%;
    left: 63%;
    z-index: 100;
    img {
      width: 280px;
    }
  }

  .object1,
  .object2,
  .object3 {
    position: absolute;
    cursor: pointer;
    transition: all 0.5s ease;

    &.moveUp {
    }
  }

  .object1 {
    bottom: 35%;
    left: 60%;
    img {
      width: 150px;
    }

    &.moveUp {
      bottom: 40%;
    }
  }

  .object2 {
    bottom: 15%;
    left: 42%;
    img {
      width: 200px;
    }

    &.moveUp {
      bottom: 25%;
    }
  }

  .object3 {
    bottom: 15%;
    left: 5%;

    &.moveUp {
      bottom: 20%;
    }
  }
`;

const ObjectHiderBox = styled.div`
  position: relative;
`;

const ObjectToFindBox = styled.div`
  cursor: pointer;
`;

const Popup = styled.div`
  width: 500px;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(86, 106, 134, 0.6);
  padding: 20px;
  border-radius: 8px;
  z-index: 500;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CosmicSearch;
