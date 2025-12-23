import React from "react";
import styled, { keyframes } from "styled-components";
import explorebg from "../../assets/explore/explorebg.gif";
import { useNavigate } from "react-router-dom";

const ExploreWidget = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/planethub");
  };

  return (
    <Main onClick={handleClick}>
      <h2>AI PlanetHub</h2>
      <p>Let's take you to space</p>
    </Main>
  );
};

const hoverAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 150px;
  background-image: url(${explorebg});
  background-size: cover;
  z-index: 900;
  background-repeat: no-repeat;
  border-radius: 8px;
  cursor: pointer;

  p {
    margin: 0;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
    font-weight: 800;
  }

  h2 {
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }

  &:hover {
    animation: ${hoverAnimation} 0.6s ease-in-out;
  }
`;

export default ExploreWidget;
