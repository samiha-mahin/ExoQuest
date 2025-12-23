import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Eneterbg from "../assets/pages/bg/eneterbg.png";
import ExoButton from "../components/ExoButton";

const Enter = () => {
  return (
    <Main
      as={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <ButtonWrapper
          as={motion.div}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <ExoButton name="Enter" navigateTo="/home" />
        </ButtonWrapper>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Eneterbg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ButtonWrapper = styled.div``;

export default Enter;
