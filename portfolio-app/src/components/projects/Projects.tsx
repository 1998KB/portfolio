import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="project-title">Projects</h1>
      <div className="projects-link-container">
        <Link to="/projects/neuroart" className="neuroArt-link">
          NeuroArt
        </Link>
      </div>
      <Link to="/" className="link-home">
        Home
      </Link>
    </div>
  );
};

export default Projects;
