import React from "react";
import { Link } from "react-router-dom";
import "./MyExpertise.css";

const MyExpertise = () => {
  return (
    <div className="myExpertise-container">
      HACKING MY EXPERTISE...
      <div className="links-constainer">
        <div className="about-links-left">
          <Link to="/home/about/my-story" className="links">
            My Story
          </Link>
          <Link to="/home/about/my-vision" className="links">
            My Vision
          </Link>
        </div>
        <div className="about-links-right">
          <Link to="/home" className="linkToHome">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyExpertise;
