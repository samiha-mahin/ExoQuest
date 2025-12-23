import React from "react";
import styled from "styled-components";
import quizbg from "../../../assets/games/ExoQuiz/quizbg.png";
import ExoButton from "../../../components/ExoButton";
import { useNavigate } from "react-router-dom";

const ResultScreen = ({ coins }) => {
  const navigate = useNavigate();
  return (
    <Main>
      <ResultContainer>
        <h2>Congratulations!</h2>
        <p>You have completed the game.</p>
        <p>
          Earned Coins: <h2>{coins}</h2>
        </p>
        <NextLevelButton onClick={() => navigate("/level-3")}>
          Next Level
        </NextLevelButton>
      </ResultContainer>
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

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(86, 106, 134, 0.69);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 550px;
  min-height: 300px;
  h2 {
    font-size: 45px;
    margin: 0px;
    color: #ffaf00;
  }
  p {
    font-size: 30px;
    margin: 0px;
  }
`;

const NextLevelButton = styled.button`
  background: #454858;
  border: 1px solid #a8b8c9;
  border-radius: 5px;
  box-shadow: #454858 4px 4px 0 0;
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
  transition: all 200ms ease;
  min-width: 150px;

  &:hover {
    box-shadow: none;
  }
`;

export default ResultScreen;
