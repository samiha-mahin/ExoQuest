import React from "react";
import styled, { keyframes } from "styled-components";
import loadexplore from "../../assets/explore/loadexplore.gif";

const LoadExplore = () => {
  return <Main></Main>;
};
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${loadexplore});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

export default LoadExplore;
