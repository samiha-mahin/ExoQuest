import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SingleCard from "./SingleCard";
import asteroid from "../puzzle-images/asteroid.png";
import hubble from "../puzzle-images/hubble.png";
import plant from "../puzzle-images/plant.png";
import robot from "../puzzle-images/robot.png";
import robot2 from "../puzzle-images/robot2.png";
import satellite from "../puzzle-images/satellite.png";
import ship from "../puzzle-images/ship.png";
import ufo from "../puzzle-images/ufo.png";

const Cards = ({ isGameActive, isViewing, handleWin }) => {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        img: `${asteroid}`,
        stat: "",
      },
      {
        id: 1,
        img: `${asteroid}`,
        stat: "",
      },
      {
        id: 2,
        img: `${hubble}`,
        stat: "",
      },
      {
        id: 2,
        img: `${hubble}`,
        stat: "",
      },
      { id: 3, img: `${plant}`, stat: "" },
      { id: 3, img: `${plant}`, stat: "" },
      { id: 4, img: `${robot}`, stat: "" },
      { id: 4, img: `${robot}`, stat: "" },
      {
        id: 5,
        img: `${robot2}`,
        stat: "",
      },
      {
        id: 5,
        img: `${robot2}`,
        stat: "",
      },
      {
        id: 6,
        img: `${satellite}`,
        stat: "",
      },
      {
        id: 6,
        img: `${satellite}`,
        stat: "",
      },
      { id: 7, img: `${ship}`, stat: "" },
      { id: 7, img: `${ship}`, stat: "" },
      { id: 8, img: `${ufo}`, stat: "" },
      { id: 8, img: `${ufo}`, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  const [matchedPairs, setMatchedPairs] = useState(0);

  const check = (current) => {
    const newItems = [...items];
    if (newItems[current].id === newItems[prev].id) {
      newItems[current].stat = "correct";
      newItems[prev].stat = "correct";
      setItems(newItems);
      setMatchedPairs(matchedPairs + 1);
      setPrev(-1);
    } else {
      newItems[current].stat = "wrong";
      newItems[prev].stat = "wrong";
      setItems(newItems);
      setTimeout(() => {
        newItems[current].stat = "";
        newItems[prev].stat = "";
        setItems([...newItems]);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (!isGameActive || isViewing) return;
    if (prev === -1) {
      const newItems = [...items];
      newItems[id].stat = "active";
      setItems(newItems);
      setPrev(id);
    } else {
      check(id);
    }

    if (matchedPairs === items.length / 2 - 1) {
      handleWin();
    }
  };

  return (
    <CardContainer>
      <GridContainer>
        {items.map((item, index) => (
          <SingleCard
            key={index}
            item={item}
            id={index}
            handleClick={handleClick}
          />
        ))}
      </GridContainer>
    </CardContainer>
  );
};

export default Cards;

// Styled Components
const CardContainer = styled.div`
  height: 550px;
  width: 550px;
  background: #566a86;
  opacity: 0.6;
  border: 2px solid white;
  border-radius: 5px;
`;

const GridContainer = styled.div`
  height: 500px;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
  margin: 25px;
  cursor: pointer;
  z-index: 2;
`;
