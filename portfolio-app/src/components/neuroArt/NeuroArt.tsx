import React from "react";
import { Link } from "react-router-dom";
import "./NeuroArt.css";

const NeuroArt = () => {
  return (
    <div className="neuroArt-container">
      <div className="content-container">
        <h1 className="neuroart-title">NeuroArt</h1>
        <h2 className="neuroArt-subtitle">
          {" "}
          Unleash Your Inner Artist with AI-Powered Creations
        </h2>
        <div className="buttons">
          <button
            className="btn"
            onClick={() =>
              window.open("https://github.com/1998KB/portfolio.git", "_blank")
            }
          >
            Git Repo
            <img src={require("../../images/code.png")} alt="" />
          </button>
          <button
            className="btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1IZoZ_ku9NMlmE8tKW2zDpf2KiQOT2NG6/view?usp=sharing",
                "_blank"
              )
            }
          >
            App Demo
            <img src={require("../../images/video.png")} alt="" />
          </button>
          <button
            className="btn"
            onClick={() =>
              window.open(
                "https://blue-sky-0e47a0403.2.azurestaticapps.net",
                "_blank"
              )
            }
          >
            Website
            <img src={require("../../images/website.png")} alt="" />
          </button>
        </div>
        <p className="neuroArt-description">
          Get ready to unleash your creativity with NeuroArt, a cutting-edge
          website that produces stunning AI art. Built with other three amazing
          developers in just 10 days, NeuroArt uses the latest technology stack
          including postgreSQL, Java, SpringBoot, Typescript, React, and Azure.
          With our state-of-the-art AI technology, you can experiment with
          various styles, colors, and themes to bring your vision to life.
          Whether you're an artist, designer, or simply someone who loves to
          create, NeuroArt provides an easy-to-use interface and intuitive
          controls to generate beautiful images in just a few clicks. With our
          gallery showcasing a diverse range of styles and techniques, you can
          get inspired and let your imagination take flight. So sign up now,
          explore your creativity, and create stunning art that's uniquely you.
        </p>
      </div>
      <div className="neuroart-links-container">
        <Link to="/home/projects" className="linkToProjects">
          Projects
        </Link>
        <Link to="/home" className="linkToHome">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NeuroArt;
