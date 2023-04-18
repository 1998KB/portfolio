import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title-link-container">
        <Link to="/home/projects/neuroart" className="neuroArt-link">
          NeuroArt
        </Link>
      </div>
      <Link to="/home" className="link-home">
        Home
      </Link>
    </div>
  );
};

export default Projects;
