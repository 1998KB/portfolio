import React, { useEffect } from "react";
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

  useEffect(() => {
    const cursorRounded = document.querySelector(".rounded") as HTMLElement;
    const cursorPointed = document.querySelector(".pointed") as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      requestAnimationFrame(() => {
        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="App">
      <div className="pointed"></div>
      <div className="rounded"></div>
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
