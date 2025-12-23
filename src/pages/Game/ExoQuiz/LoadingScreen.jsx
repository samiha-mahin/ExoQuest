import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GameNav from "../../../components/GameNav";
import { motion } from "framer-motion";
import quizbg from "../../../assets/games/ExoQuiz/quizbg.png";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const LoadingScreen = () => {
  const [dots, setDots] = useState("");
  const [text, setText] = useState("");

  const loadingMessage =
    "Please wait, Fetching exoplanet data from the NASA API might take a little time. I appreciate your patience!";

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? "" : prevDots + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < loadingMessage.length) {
        setText(loadingMessage.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Main>
      <GameNav />
      <LoadingContainer>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          PREPARING The GA
          <SportsEsportsIcon />E{dots}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.p>
      </LoadingContainer>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${quizbg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(86, 106, 134, 0.48);
  width: 660px;
  min-height: 200px;
  color: white;
  padding: 2rem;
  border: 1px solid #a8b8c9;
  border-radius: 10px;
  svg {
    font-size: 35px;
  }
  h2 {
    font-size: 40px;
    font-weight: 800;
  }
  p {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export default LoadingScreen;
