import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ExoButton = ({ name, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return <Button onClick={handleClick}>{name}</Button>;
};

const Button = styled.button`
  background: #454858;
  border: 1px solid #a4bcbf69;
  border-radius: 8px;
  box-shadow: #a4bcbf69 4px 4px 0 0;
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
  transition: all 300ms ease;
  min-width: 150px;

  &:hover {
    box-shadow: none;
  }
`;

export default ExoButton;
