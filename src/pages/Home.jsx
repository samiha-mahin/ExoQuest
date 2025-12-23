import React from "react";
import styled from "styled-components";
import Homebg from "../assets/pages/bg/homebg.png";
import Bglayer from "../assets/pages/bg/bglayer.png";
import Logo from "../assets/pages/logo/ExoQuest.png";
import Planet1 from "../assets/planats/planet1.png";
import Planet2 from "../assets/planats/planet2.png";
import Planet3 from "../assets/planats/planet3.png";
import Planet4 from "../assets/planats/planet4.png";
import Planet5 from "../assets/planats/planet5.png";
import ExoButton from "../components/ExoButton";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <Main>
      <Navbar />
      <Container>
        <LeftSection>
          <PlayCard>
            <img src={Planet5} />
            <img src={Planet3} />
            <img src={Planet4} />
            <TitleBox>
              <h2>
                Exploration <br /> Of <br />
                Exoplanets
              </h2>
            </TitleBox>
            <ButtonBox>
              <ExoButton name="Play" navigateTo="/map" />
            </ButtonBox>
          </PlayCard>
          <LearnCard>
            <img src={Planet1} />
            <img src={Planet2} />
            <img src={Planet3} />
            <img src={Planet4} />
            <TitleBox>
              <h2>
                Learn
                <br />
                About
                <br />
                Exoplanets
                <br />
              </h2>
            </TitleBox>
            <ButtonBox>
              <ExoButton name="Explor" navigateTo="/explor" />
            </ButtonBox>
          </LearnCard>
        </LeftSection>
        <RightSection>
          <LogoImage src={Logo} alt="Logo" />
        </RightSection>
      </Container>
    </Main>
  );
};
const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Homebg});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${Bglayer});
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    z-index: 1;
  }
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient(360deg, #566a86 -6.77%, #142b4d 52.37%);
  border: 1px solid #a8b8c9;
  width: 70%;
  height: 200px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 10px 20px;
  margin-bottom: 20px;

  img:nth-child(1) {
    position: absolute;
    width: 147.88px;
    height: 147.48px;
    top: 0;
    right: 0;
    z-index: 2;
  }

  img:nth-child(2) {
    position: absolute;
    width: 80px;
    height: 80.46px;
    top: 29%;
    right: 15%;
    z-index: 1;
    opacity: 0.8;
  }

  img:nth-child(3) {
    position: absolute;
    width: 58px;
    height: 58px;
    top: 47%;
    right: 26%;
    opacity: 0.7;
  }
`;

const LearnCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient(360deg, #566a86 -6.77%, #142b4d 52.37%);
  border: 1px solid #a8b8c9;
  width: 70%;
  height: 200px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 10px 20px;
  overflow: hidden;
  img:nth-child(1) {
    position: absolute;
    width: 40px;
    height: 40.18px;
    top: 103px;
    left: 470px;
    opacity: 0.6;
  }

  img:nth-child(2) {
    position: absolute;
    width: 80px;
    height: 80.11px;
    top: 13.81px;
    left: 422px;
    opacity: 0.8;
  }

  img:nth-child(3) {
    position: absolute;
    width: 80px;
    height: 80.46px;
    top: -34px;
    left: 317px;
    opacity: 0.7;
  }
  img:nth-child(4) {
    position: absolute;
    width: 58.97px;
    height: 58.76px;
    top: 164px;
    left: 409px;
    opacity: 0.5;
  }
`;
const ButtonBox = styled.div`
  flex: 0.5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 2;

  h2 {
    color: #fff;
    font-size: 35px;
    font-weight: 400;
    text-align: left;
    margin: 0;
    padding: 0;
    line-height: 45px;
  }
`;

const LogoImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: contain;
`;
