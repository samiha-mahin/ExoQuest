import React, { useState } from "react";
import styled from "styled-components";
import redbg from "../../../../assets/games/redDawnExploration/redcleanbg.png";
import GameNav from "../../../../components/GameNav";
import lavle1 from "../../../../assets/games/redDawnExploration/Level1.png";
import lavle2 from "../../../../assets/games/redDawnExploration/Level2.png";
import lavle3 from "../../../../assets/games/redDawnExploration/Level3.png";
import LevelB2 from "../../../../assets/games/level/LevelB2.png";
import LevelB3 from "../../../../assets/games/level/LevelB3.png";
import Level4 from "../../../../assets/games/level/Level4.png";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Lavel3 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [x, setX] = useState(0);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const slideLeft = () => {
    setX((prev) => prev + 300);
  };

  const slideRight = () => {
    setX((prev) => prev - 300);
  };

  return (
    <Main>
      <GameNav open={open} toggleDrawer={toggleDrawer} />
      <Container>
        <Headline>
          <h1>Red Dawn Exploration</h1>
        </Headline>
        <SliderContainer>
          <ArrowLeft onClick={slideLeft}>
            <ArrowCircleLeftOutlinedIcon style={{ fontSize: "40px" }} />
          </ArrowLeft>
          <Slider>
            <motion.div
              animate={{ x }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              onAnimationComplete={() => {
                if (x <= -900) {
                  setX(0);
                } else if (x >= 300) {
                  setX(-600);
                }
              }}
            >
              <Content>
                <MissonCard>
                  <img
                    src={lavle1}
                    alt="lavle1"
                    onClick={() => navigate("/cosmicwelcome")}
                  />
                  <p>Cosmic Search</p>
                </MissonCard>
                <MissonCard>
                  <img
                    src={LevelB2}
                    alt="Exo Quiz"
                    onClick={() => navigate("/exoquiz")}
                  />
                  <p>Exo Quiz</p>
                </MissonCard>
                <MissonCard>
                  <img
                    src={LevelB3}
                    alt="lavle3"
                    onClick={() => navigate("/exo-grid")}
                  />
                  <p>Exo Grid</p>
                </MissonCard>
                <MissonCard>
                  <img src={Level4} alt="lavle3" />
                  <p>UFO Glide</p>
                </MissonCard>
              </Content>
            </motion.div>
          </Slider>
          <ArrowRight onClick={slideRight}>
            <ArrowCircleRightOutlinedIcon style={{ fontSize: "40px" }} />
          </ArrowRight>
        </SliderContainer>
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
  color: #fff;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

const Headline = styled.div`
  font-size: 20px;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 40px;
`;

const Slider = styled.div`
  width: 60%;
  overflow: hidden;
  margin: 0 20px;
`;

const Content = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
`;

const MissonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    max-width: 300px;
    transition: transform 0.3s ease;
    margin-top: 40px;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  p {
    color: white;
    margin-top: 10px;
  }
`;

const ArrowLeft = styled.div`
  cursor: pointer;
  position: absolute;
  left: -50px;
  z-index: 10;
`;

const ArrowRight = styled.div`
  cursor: pointer;
  position: absolute;
  right: -50px;
  z-index: 10;
`;

export default Lavel3;
