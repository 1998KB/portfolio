import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="home">
      <div className="projects-link-container">
        <Link to="/home/projects" className="link-projects">
          Projects
        </Link>
      </div>
      <div className="home-center-container">
        <div className="motto-container">
          <h1 className="motto">
            Nothing is lost
            <br />
            Noting is created
            <br />
            Everything is developed
          </h1>
          <Link to="/home/about" className="link-about">
            About Me
          </Link>
        </div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
