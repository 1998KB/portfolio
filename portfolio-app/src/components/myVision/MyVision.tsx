import React from "react";
import "./MyVision.css";
import { Link } from "react-router-dom";
const MyVision = () => {
  return (
    <div className="myVision-container">
      HACKING MY VISION...
      <div className="links-constainer">
        <div className="about-links-left">
          <Link to="/home/about/my-story" className="links">
            My Story
          </Link>
          <Link to="/home/about/my-expertise" className="links">
            My Expertise
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

export default MyVision;
