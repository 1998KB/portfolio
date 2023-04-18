import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import MyStory from "../myStory/MyStory";
import MyVision from "../myVision/MyVision";
import Footer from "../footer/Footer";
import NeuroArt from "../neuroArt/NeuroArt";
import MyExpertise from "../myExpertise/MyExpertise";
import LandingPage from "../landingPage/LandingPage";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/home/projects" element={<Projects />} />
        <Route path="/home/projects/neuroart" element={<NeuroArt />} />
        <Route path="/home/about/my-vision" element={<MyVision />} />
        <Route path="/home/about/my-story" element={<MyStory />} />
        <Route path="/home/about/my-expertise" element={<MyExpertise />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
