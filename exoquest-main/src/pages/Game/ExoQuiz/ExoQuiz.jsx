import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";
import StoryScreen from "./StoryScreen";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";
import quizbg from "../../../assets/games/ExoQuiz/quizbg.png";
import GameNav from "../../../components/GameNav";
import ipaclogo from "../../../assets/games/ExoQuiz/ipaclogo.png";
import nasalogo from "../../../assets/games/ExoQuiz/nasalogo.png";

const ExoQuiz = () => {
  const [loading, setLoading] = useState(true);
  const [exoplanetData, setExoplanetData] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [coins, setCoins] = useState(0);
  const [showStory, setShowStory] = useState(true);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [open, setOpen] = useState(false);

  //FOR LOCAl
  // useEffect(() => {
  //   const fetchExoplanetData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "/api/TAP/sync?query=select+top+100+pl_name,hostname,disc_year,pl_orbper+from+ps&format=json"
  //       );

  //       const randomData = getRandomEntries(response.data, 5);
  //       setExoplanetData(randomData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching exoplanet data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchExoplanetData();
  // }, []);

  //FOR PRODUCTION
  useEffect(() => {
    const fetchExoplanetData = async () => {
      try {
        const response = await axios.get("/api/fetchExoplanetData");
        const randomData = getRandomEntries(response.data, 5);
        setExoplanetData(randomData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exoplanet data:", error);
        setLoading(false);
      }
    };

    fetchExoplanetData();
  }, []);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  const getRandomEntries = (array, n) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const totalRounds = exoplanetData.length;

  const handleNextRound = () => {
    setShowFeedback(false);
    if (currentRound < totalRounds - 1) {
      setCurrentRound(currentRound + 1);
      setShowStory(true);
    } else {
      setGameCompleted(true);
    }
  };

  const handleQuizCompletion = (isCorrect) => {
    if (isCorrect) {
      setCoins(coins + 20);
    }
    setShowFeedback(true);
  };

  if (gameCompleted) {
    return <ResultScreen coins={coins} />;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Main>
      <GameNav open={open} toggleDrawer={toggleDrawer} pluscoin={coins} />
      <Container>
        <RoundIndicator>
          ROUND <h1>{currentRound + 1}</h1> OF <h1>{totalRounds}</h1>
        </RoundIndicator>
        {showStory ? (
          <StoryScreen
            planet={exoplanetData[currentRound]}
            onProceed={() => setShowStory(false)}
          />
        ) : (
          <QuizScreen
            exoplanet={exoplanetData[currentRound]}
            onAnswer={(isCorrect) => {
              handleQuizCompletion(isCorrect);
            }}
            currentRound={currentRound}
          />
        )}
        {showFeedback && (
          <NextStoryButton onClick={handleNextRound}>
            Go to Next Story
          </NextStoryButton>
        )}
        <PoweredBy>
          <p>Data Source</p>
          <img src={nasalogo} />
          <img src={ipaclogo} />
        </PoweredBy>
      </Container>
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

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  position: relative;
`;

const RoundIndicator = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  h1 {
    margin: 0 4px 20px 4px;
    font-size: 50px;
    color: #ffaf00;
  }
`;

const NextStoryButton = styled.button`
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
const PoweredBy = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 20px;
  img {
    width: 60px;
  }
`;
export default ExoQuiz;
