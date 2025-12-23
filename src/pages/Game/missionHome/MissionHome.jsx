import React, { useState } from "react";
import styled from "styled-components";
import boticon from "../../../assets/games/missionHome/chat-bot.png";
import missionbg from "../../../assets/games/missionHome/missionhomebg.png";
import RedDawnExploration from "../../../assets/games/missionHome/Red-Dawn-Exploration.png";
import GenesisQuest from "../../../assets/games/missionHome/Genesis-Quest.png";
import CrimsonAscent from "../../../assets/games/missionHome/Crimson-Ascent.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import GameNav from "../../../components/GameNav";
import { useNavigate } from "react-router-dom";
import ExoButton from "../../../components/ExoButton";

const MissionHome = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for the pop-up
  const [popupMessage, setPopupMessage] = useState(""); // State for the pop-up message

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const handleLockedMission = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  return (
    <Main>
      <GameNav open={open} toggleDrawer={toggleDrawer} />

      <Container>
        <Headline>
          <h1>Kepler-186f</h1>
        </Headline>
        <Content>
          <MissonCard>
            <img
              src={RedDawnExploration}
              alt="Mission 1"
              onClick={() => navigate("/redwelcome")}
            />
            <Button className="unlock" onClick={() => navigate("/redwelcome")}>
              Mission 1 <ArrowCircleRightOutlinedIcon />
            </Button>
          </MissonCard>
          <MissonCard>
            <img
              src={GenesisQuest}
              alt="Mission 2"
              onClick={() =>
                handleLockedMission(
                  "First complete Mission 1 to play this mission."
                )
              }
            />
            <Button
              onClick={() =>
                handleLockedMission(
                  "First complete Mission 1 to play this mission."
                )
              }
            >
              Mission 2 <LockOutlinedIcon />
            </Button>
          </MissonCard>
          <MissonCard>
            <img
              src={CrimsonAscent}
              alt="Mission 3"
              onClick={() =>
                handleLockedMission(
                  "First complete Mission 2 to play this mission."
                )
              }
            />
            <Button
              onClick={() =>
                handleLockedMission(
                  "First complete Mission 2 to play this mission."
                )
              }
            >
              Mission 3 <LockOutlinedIcon />
            </Button>
          </MissonCard>
        </Content>

        {/* Pop-up component */}
        {showPopup && (
          <Popup>
            <PopupContent>
              <p>{popupMessage}</p>

              <CloseButton onClick={() => setShowPopup(false)}>
                Close
              </CloseButton>
            </PopupContent>
          </Popup>
        )}
      </Container>
    </Main>
  );
};

const Main = styled.div`
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-image: url(${missionbg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(168, 184, 201, 0.25);
  padding: 40px;
  border-radius: 12px;
  margin-right: 30px;
`;

const Headline = styled.div`
  font-size: 20px;
`;

const MissonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .unlock {
    background: #566a86;
  }
  img {
    max-width: 250px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

const Button = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #5c5c5e 0%, #a8a6a6 100%);
  border: 1px solid #a8b8c9;
  width: 130px;
  height: 35px;
  border-radius: 8px;
  color: #fff;
  font-size: 22px;
  font-weight: 900;
  transition: all 500ms ease;
  cursor: pointer;
  margin-right: 10px;

  svg {
    font-size: 18px;
    margin-left: 12px;
    color: #000 !important;
  }

  &:hover {
    background: #454858;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  background: rgba(86, 106, 134, 0.69);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background: #454858;
  border: 1px solid #a4bcbf69;
  border-radius: 8px;
  box-shadow: #a4bcbf69 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 300ms ease;
  min-width: 150px;

  &:hover {
    box-shadow: none;
  }
`;

export default MissionHome;
