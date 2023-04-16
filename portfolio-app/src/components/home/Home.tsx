import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="home">
      <div className="projects-link-container">
        <Link to="/projects" className="link-projects">
          <img
            src={require("../../images/projectsLinkRight.png")}
            alt=""
            className="projectsLinkRight"
          />
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
          <Link to="/about" className="link-about">
            <img
              src={require("../../images/aboutMeLinkLeft.png")}
              alt=""
              className="aboutMeLinkLeft"
            />
          </Link>
        </div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
