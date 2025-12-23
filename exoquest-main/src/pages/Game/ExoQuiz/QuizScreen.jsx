import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import framer-motion
import storybot from "../../../assets/games/ExoQuiz/icons8-quiz-100.png";

const QuizScreen = ({ exoplanet, onAnswer, currentRound }) => {
  const { pl_name, disc_year, hostname, pl_orbper } = exoplanet;
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const generateQuestion = () => {
    const questions = [
      {
        question: `In what year was the exoplanet ${pl_name} discovered?`,
        options: [1956, disc_year, 2010, 2015],
        correct: disc_year,
      },
      {
        question: `Which star does the exoplanet ${pl_name} orbit?`,
        options: [hostname, "bet Pib", "HD 1023985", "WASP-df"],
        correct: hostname,
      },
      {
        question: `What is the orbital period of ${pl_name}?`,
        options: [5.453, 7482.5, pl_orbper, 237.6],
        correct: pl_orbper,
      },
      {
        question: `How many days does ${pl_name} take to orbit its star?`,
        options: [178.2, pl_orbper, 3.104278, 7352.5],
        correct: pl_orbper,
      },
    ];

    return questions[Math.floor(Math.random() * questions.length)];
  };

  const { question, options, correct } = generateQuestion();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === correct) {
      setIsCorrect(true);
      setFeedbackMessage(`✨ You are right! You earn 20 🥇coins.`);
      onAnswer(true);
    } else {
      setIsCorrect(false);
      setFeedbackMessage(
        `❌ Incorrect! The correct answer is ${correct}. In the year ${disc_year}, the exoplanet ${pl_name} was discovered.`
      );
      onAnswer(false);
    }
  };

  const questionVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <QuizContainer>
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
          Exo Quiz
        </motion.h1>
      </Heading>

      <QBoz>
        <h2>
          <span>0{currentRound + 1}.</span>{" "}
          {question.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {char}
            </motion.span>
          ))}
        </h2>
      </QBoz>

      {!isAnswered ? (
        <OptionContainer>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionContainer>
      ) : (
        <Feedback isCorrect={isCorrect}>
          <h4>{feedbackMessage}</h4>
        </Feedback>
      )}
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
  }
`;

const QBoz = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #a8b8c9;
  background-color: rgba(55, 49, 57, 0.7);
  padding: 0 20px;
  border-radius: 8px;
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
  margin-top: 20px;
  height: 300px;
`;

const Option = styled.button`
  margin: 5px;
  font-size: 1em;
  min-width: 100px;
  height: 100px;
  cursor: pointer;
  border: 1px solid #fff;
  background-color: rgba(55, 49, 57, 0.7);
  transition: all 200ms ease;
  &:hover {
    box-shadow: #fff 0px 4px 8px;
  }
`;

const Feedback = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  background: #fff;
  border-radius: 8px;
  padding: 0 12px;
  h4 {
    color: ${(props) => (props.isCorrect ? "#6EC207" : "red")};
    font-weight: 800;
    font-size: 23px;
  }
`;

export default QuizScreen;
