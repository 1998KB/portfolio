import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-link-container">
        <Link to="/home/about/my-vision" className="myVision-link">
          My Vision
        </Link>
        <Link to="/home/about/my-Story" className="myStory-link">
          My Story
        </Link>
        <Link to="/home/about/my-Expertise" className="myExpertise-link">
          My Expertise
        </Link>
      </div>
      <div className="about-linkToHome-container">
        <Link to="/home" className="linkToHome">
          <img
            src={require("../../images/homeLinkRight.png")}
            alt=""
            className="homeLinkRight"
          />
        </Link>
      </div>
    </div>
  );
};

export default About;
