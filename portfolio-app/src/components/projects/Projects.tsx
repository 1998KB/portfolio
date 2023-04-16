import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title-link-container">
        <Link to="/projects/neuroart" className="neuroArt-link">
          NeuroArt
        </Link>
      </div>
      <Link to="/" className="link-home">
        <img
          src={require("../../images/homeLinkLeft.png")}
          alt=""
          className="homeLinkLeft"
        />
      </Link>
    </div>
  );
};

export default Projects;
