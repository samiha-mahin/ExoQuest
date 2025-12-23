import React from "react";
import styled from "styled-components";

const SingleCard = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? ` active ${item.stat}` : "";

  return (
    <Card onClick={() => handleClick(id)} className={itemClass}>
      <CardImage src={item.img} alt="" className={itemClass} />
    </Card>
  );
};

export default SingleCard;

const Card = styled.div`
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: rotateY(180deg);
  transition: transform 0.5s;
  animation: 2s hideCard linear;

  &.active {
    transform: rotateY(0);
  }

  &.correct {
    background-color: #4caf50;
  }

  &.wrong {
    background-color: #fd245a;
  }

  @keyframes hideCard {
    0%,
    70% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
`;

const CardImage = styled.img`
  padding-top: 10px;
  width: 100px;
  height: 70px;
  transition: transform 0.5s;
  animation: 5s hideImage linear;
  transform: scale(0);

  &.active {
    transform: scale(1);
  }

  @keyframes hideImage {
    0%,
    70% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
