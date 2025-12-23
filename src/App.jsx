import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./pages/Home";
import MissionHome from "./pages/Game/missionHome/MissionHome";
import ExoBot from "./components/ExoBot/ExoBot";
import ExoMap from "./pages/Game/map/ExoMap";
import CosmicSearch from "./pages/Game/cosmicSearch/CosmicSearch";
import CosmicWelcome from "./pages/Game/cosmicSearch/CosmicWelcome";
import Puzzle from "./pages/Game/puzzle/Puzzle";
import RedWelcome from "./pages/Game/redDawnExploration/RedWelcome";
import WelcomeExoQuiz from "./pages/Game/ExoQuiz/WelcomeExoQuiz";
import ExoQuiz from "./pages/Game/ExoQuiz/ExoQuiz";
import ResultScreen from "./pages/Game/ExoQuiz/ResultScreen";
import Lavel1 from "./pages/Game/redDawnExploration/Lavels/Lavel1";
import Lavel2 from "./pages/Game/redDawnExploration/Lavels/Lavel2";
import Lavel3 from "./pages/Game/redDawnExploration/Lavels/Lavel3";
import Lavel4 from "./pages/Game/redDawnExploration/Lavels/Lavel4";
import PlanetHub from "./pages/Explore/PlanetHub";
import Explore from "./pages/Explore/exploration/Explore";
import Kepler186f from "./pages/Explore/exploration/Pages/kepler186f/Kepler186f";
import Habitability from "./pages/Explore/exploration/Pages/kepler186f/Habitability";
import Orbital from "./pages/Explore/exploration/Pages/kepler186f/Orbital";
import Enter from "./pages/Enter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<ExoMap />} />
        <Route path="/missionhome" element={<MissionHome />} />
        <Route path="/bot" element={<ExoBot />} />
        <Route path="/level-1" element={<Lavel1 />} />
        <Route path="/cosmicwelcome" element={<CosmicWelcome />} />
        <Route path="/cosmicsearch" element={<CosmicSearch />} />
        <Route path="/level-2" element={<Lavel2 />} />
        <Route path="/exoquiz" element={<ExoQuiz />} />
        <Route path="/level-3" element={<Lavel3 />} />
        <Route path="/exo-grid" element={<Puzzle />} />
        <Route path="/level-4" element={<Lavel4 />} />
        <Route path="/redwelcome" element={<RedWelcome />} />
        <Route path="/quizwelcome" element={<WelcomeExoQuiz />} />

        <Route path="/planethub" element={<PlanetHub />} />
        <Route path="/explor" element={<Explore />} />
        <Route path="/kepler186f" element={<Kepler186f />} />
        <Route path="/habitability" element={<Habitability />} />
        <Route path="/orbital" element={<Orbital />} />
      </Routes>
    </>
  );
};

export default App;
