import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import MyStory from "../myStory/MyStory";
import MyVision from "../myVision/MyVision";
import Footer from "../footer/Footer";
import NeuroArt from "../neuroArt/NeuroArt";
import MyExpertise from "../myExpertise/MyExpertise";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/neuroart" element={<NeuroArt />} />
        <Route path="/about/my-vision" element={<MyVision />} />
        <Route path="/about/my-story" element={<MyStory />} />
        <Route path="/about/my-expertise" element={<MyExpertise />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
