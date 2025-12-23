import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import botIcon from "../../assets/games/Exobot/chat-bot.png";
import userIcon from "../../assets/games/Exobot/user.png";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyADeu7bJX9aVm-jQYKXTWDH3K4zOdDQAzU";

const ExoBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        { sender: "bot", text: "Hey I'm Your ExoBot! How can I help you?" },
      ]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);

    const message = `In one line, ${userInput}`;
    setUserInput("");

    try {
      const response = await axios.post(
        GEMINI_API_URL,
        {
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse =
        response.data.candidates[0]?.content.parts[0]?.text ||
        "No response from the bot.";

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I could not retrieve an answer at the moment.",
        },
      ]);
    }
  };

  return (
    <ChatContainer>
      <ChatBox>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            <Icon src={msg.sender === "user" ? userIcon : botIcon} alt="icon" />
            <MessageText>{msg.text}</MessageText>
          </Message>
        ))}
      </ChatBox>
      <InputContainer>
        <Input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Ask me about exoplanets..."
        />
        <Button onClick={handleSend}>
          <SendIcon />
        </Button>
      </InputContainer>
    </ChatContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 20px auto;
  padding: 10px;
  background-color: rgba(55, 49, 57, 0.7);
  border: 1px solid #fff;
  width: 500px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 0px;
  min-height: 100px;
  position: absolute;
  bottom: 100%;
  right: 100%;
  transition: all 300ms ease;
`;

const ChatBox = styled.div`
  flex: 1;
  max-height: 900px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  background: transparent;
  outline: none;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
  margin-bottom: 10px;
  animation: ${fadeIn} 0.2s ease-in-out;
  background: transparent;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: ${(props) => (props.sender === "user" ? "0" : "10px")};
  margin-left: ${(props) => (props.sender === "user" ? "10px" : "0")};
`;

const MessageText = styled.div`
  background-color: ${(props) =>
    props.sender === "user" ? "transparent" : "transparent"};
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  max-width: 250px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  background: transparent;
  color: #7e7e85;
  font-size: 15px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
`;

const Button = styled.div`
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 25px;
  }
`;

export default ExoBot;
