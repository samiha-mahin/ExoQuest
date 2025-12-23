import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import QuizIcon from "@mui/icons-material/Quiz";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import storybot from "../../../assets/games/ExoQuiz/icons8-bot-100.png";
import { motion } from "framer-motion";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyADeu7bJX9aVm-jQYKXTWDH3K4zOdDQAzU";

const StoryScreen = ({ planet, onProceed }) => {
  const [story, setStory] = useState("Loading story...");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentHighlightRange, setCurrentHighlightRange] = useState([0, 0]);
  const [lastSpokenIndex, setLastSpokenIndex] = useState(0);

  useEffect(() => {
    const generateStory = async () => {
      try {
        const response = await axios.post(
          GEMINI_API_URL,
          {
            contents: [
              {
                parts: [
                  {
                    text: `Create a short, easy-to-understand storytelling about an exoplanet named ${planet.pl_name}, which was discovered in ${planet.disc_year}. The planet orbits a star called ${planet.hostname} and completes its orbit in ${planet.pl_orbper} days, must include this information.`,
                  },
                ],
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const Response =
          response.data.candidates[0]?.content.parts[0]?.text ||
          "Story generation failed.";

        setStory(Response);
      } catch (error) {
        setStory("Failed to generate story.");
      }
    };

    generateStory();
  }, [planet]);

  const highlightParameters = (text) => {
    const parameterHighlights = {
      [planet.pl_name]: "color: #ffcc00;",
      [planet.disc_year]: "color: #00ccff;",
      [planet.hostname]: "color: #ff66cc;",
      [planet.pl_orbper]: "color: #66ff66;",
    };

    return Object.keys(parameterHighlights).reduce((acc, key) => {
      const colorStyle = parameterHighlights[key];
      const regex = new RegExp(`(${key})`, "g");
      return acc.replace(regex, `<span style="${colorStyle}">$1</span>`);
    }, text);
  };

  const renderStoryWithHighlights = (story, highlightRange) => {
    const startIndex = highlightRange[0];
    const endIndex = highlightRange[1];

    const beforeHighlight = story.slice(0, startIndex);
    const currentHighlight = story.slice(startIndex, endIndex);
    const afterHighlight = story.slice(endIndex);

    return (
      <span>
        <span className="highlight-read">{beforeHighlight}</span>
        <span className="highlight">{currentHighlight}</span>
        {afterHighlight}
      </span>
    );
  };

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(story);
    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentHighlightRange([0, 0]);
      setLastSpokenIndex(0);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentHighlightRange([0, 0]);
      setLastSpokenIndex(story.length);
    };

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        setCurrentHighlightRange([
          event.charIndex,
          event.charIndex + event.charLength,
        ]);
        setLastSpokenIndex(event.charIndex + event.charLength);
      }
    };

    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleGoToQuiz = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    onProceed();
  };

  return (
    <StoryContainer>
      <Heading
        as={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={storybot}
          alt="Story bot"
          initial={{ rotate: -45, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Cosmic Story
        </motion.h1>
      </Heading>
      <StoryText>
        {isSpeaking ? (
          renderStoryWithHighlights(story, currentHighlightRange)
        ) : (
          <span
            dangerouslySetInnerHTML={{ __html: highlightParameters(story) }}
          />
        )}
      </StoryText>
      <ButtonContainer>
        <ProceedButton onClick={handleGoToQuiz}>
          <QuizIcon /> Quiz
        </ProceedButton>
        <SpeakButton onClick={handleSpeak} disabled={isSpeaking}>
          {isSpeaking ? (
            <>
              <GraphicEqIcon style={{ marginRight: 8 }} />
              Speaking...
            </>
          ) : (
            <>
              <SpatialAudioOffIcon style={{ marginRight: 8 }} />
              Play
            </>
          )}
        </SpeakButton>
      </ButtonContainer>
    </StoryContainer>
  );
};

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: #222831;
  border: 1px solid #a8b8c9;
  color: white;
  border-radius: 10px;
  color: #fff;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
  }
`;
const StoryText = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;

  .highlight {
    background-color: #6b6f82;
    color: white;
  }

  .highlight-read {
    background-color: #ccc;
    color: black;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ProceedButton = styled.button`
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

const SpeakButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#a2b9bc" : "#484f4f")};

  border: 1px solid #a8b8c9;
  border-radius: 5px;
  box-shadow: #484f4f 4px 4px 0 0;
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

export default StoryScreen;
