import React from "react";
import styled from "styled-components";

const Popup = ({ message, buttonText, handlePopupAction }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <Message>{message}</Message>
        <ButtonGroup>
          <Button onClick={() => handlePopupAction(buttonText)}>
            {buttonText}
          </Button>

          <Button onClick={() => handlePopupAction("Go to Learn")}>
            Go to Learn
          </Button>
        </ButtonGroup>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  width: 500px;
  background: rgba(86, 106, 134, 0.6);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
