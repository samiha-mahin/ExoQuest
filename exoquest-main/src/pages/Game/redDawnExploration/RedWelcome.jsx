import React, { useState, useEffect } from "react";
import styled from "styled-components";
import redbg from "../../../assets/games/redDawnExploration/redcleanbg.png";
import GameNav from "../../../components/GameNav";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RedWelcome = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/level-1");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Main>
      <GameNav open={open} toggleDrawer={toggleDrawer} />
      <Container>
        <WelcomeBox
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <p>
            Welcome <br /> To <br /> Red Dawn Exploration!
          </p>
        </WelcomeBox>
      </Container>
    </Main>
  );
};

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
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const WelcomeBox = styled(motion.div)`
  background: rgba(113, 104, 104, 0.4);
  min-width: 550px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  text-align: center;
  font-weight: bolder;
  border-radius: 8px;
`;

export default RedWelcome;
