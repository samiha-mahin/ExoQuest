import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import axios from "axios";
import LoadExplore from "./LoadExplore";
import aiexplorebg from "../../assets/explore/aiexplorebg.webp";
import storybot from "../../assets/games/ExoQuiz/icons8-bot-100.png";
import ipaclogo from "../../assets/games/ExoQuiz/ipaclogo.png";
import nasalogo from "../../assets/games/ExoQuiz/nasalogo.png";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyADeu7bJX9aVm-jQYKXTWDH3K4zOdDQAzU";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); 
  }
  100% {
    transform: scale(1); 
  }
`;

const PlanetHub = () => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [bgOpacity, setBgOpacity] = useState(0);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [story, setStory] = useState("");

  //ForLoacl
  // useEffect(() => {
  //   const fetchExoplanetData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "/api/TAP/sync?query=select+top+300+pl_name+from+ps&format=json"
  //       );
  //       const data = response.data;
  //       setPlanets(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching exoplanet data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchExoplanetData();
  // }, []);

  // FOR PRODUCTION
  useEffect(() => {
    const fetchExoplanetData = async () => {
      try {
        const response = await axios.get("/api/fetchExoplanetName");
        const data = response.data;
        setPlanets(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exoplanet data:", error);
        setLoading(false);
      }
    };

    fetchExoplanetData();
  }, []);

  useEffect(() => {
    if (!loading) {
      setBgOpacity(1);
    }
  }, [loading]);

  useEffect(() => {
    const generateInfo = async () => {
      try {
        const response = await axios.post(
          GEMINI_API_URL,
          {
            contents: [
              {
                parts: [
                  {
                    text: `Create a fun and simple fact about ${selectedPlanet} that kids can easily understand. Use emojis to make it engaging and interactive!`,
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

        const generatedStory =
          response.data.candidates[0]?.content.parts[0]?.text ||
          "Insights generation failed.";

        setStory(generatedStory);
      } catch (error) {
        setStory("Failed to generate insights .");
      }
    };

    if (selectedPlanet) {
      generateInfo();
    }
  }, [selectedPlanet]);

  const handlePlanetClick = (name) => {
    setSelectedPlanet(name);
  };

  if (loading) {
    return <LoadExplore />;
  }

  return (
    <Main $bgOpacity={bgOpacity}>
      <Container>
        <Sidebar>
          <Heading>
            <img src={storybot} />
            <h2>AI PlanetHub</h2>
          </Heading>
          <h2>
            Choose any exoplanet, and let the AI share fascinating insights
            about it!
          </h2>
          {selectedPlanet && (
            <>
              <GloveContainer>
                <Glove color={getGloveColor()} />
                <PlanetName>{selectedPlanet}</PlanetName>
              </GloveContainer>
              <StoryText>{story}</StoryText>
            </>
          )}
        </Sidebar>
        <CanvasContainer>
          <Canvas shadows camera={{ position: [0, 0, 70], fov: 75 }}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} />
            <PlanetDisplay
              planets={planets}
              onPlanetClick={handlePlanetClick}
            />
          </Canvas>
        </CanvasContainer>
        <PoweredBy>
          <p>Data Source</p>
          <img src={nasalogo} />
          <img src={ipaclogo} />
        </PoweredBy>
      </Container>
    </Main>
  );
};

const getGloveColor = () => {
  return Math.random() < 0.5 ? "#B7CADB" : "#FFFBE6";
};

const PlanetDisplay = ({ planets, onPlanetClick }) => {
  return (
    <>
      {planets.map((planet, index) => (
        <Planet
          key={index}
          index={index}
          name={planet.pl_name}
          onClick={onPlanetClick}
        />
      ))}
    </>
  );
};

const Planet = ({ index, name, onClick }) => {
  const radius = 20;
  const distance = radius + Math.random() * 15;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(Math.random() * 2 - 1);
  const x = distance * Math.sin(phi) * Math.cos(theta);
  const y = distance * Math.sin(phi) * Math.sin(theta);
  const z = distance * Math.cos(phi);

  const hasGlow = Math.random() < 0.5;

  return (
    <mesh
      position={[x, y, z]}
      onClick={() => onClick(name)}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={getGloveColor()} transparent={false} />
      {hasGlow && <AnimatedGlow />}
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.4}
        color={"#F9E400"}
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        {name}
      </Text>
    </mesh>
  );
};

const AnimatedGlow = () => {
  const ref = React.useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.material.emissiveIntensity =
        1 + Math.sin(Date.now() * 0.002) * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial
        color={"#5d9b93"}
        emissive={"#5d9b93"}
        emissiveIntensity={1.5}
        transparent={false}
      />
    </mesh>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${aiexplorebg});
  background-size: cover;
  opacity: ${({ $bgOpacity }) => $bgOpacity};
  transition: opacity 1s ease-in-out;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Sidebar = styled.div`
  color: #fff;
  position: absolute;
  left: 20px;
  top: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
  width: 200px;
`;

const GloveContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const Glove = styled.div`
  width: 40px;
  height: 35px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-right: 10px;
  color: #fff;
  animation: ${pulseAnimation} 2s infinite;
`;

const PlanetName = styled.h3`
  margin: 0;
  color: #fff;
`;

const StoryText = styled.p`
  color: #fff;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  img {
    width: 60px;
    height: 60px;
  }
`;

const PoweredBy = styled.div`
  display: flex;
  position: absolute;
  left: 20px;
  bottom: 20px;
  img {
    width: 60px;
  }
`;
export default PlanetHub;
