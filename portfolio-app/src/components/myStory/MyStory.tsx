import React from "react";
import "./MyStory.scss";
import { Link } from "react-router-dom";
const MyStory = () => {
  return (
    <div className="myStory-container">
      HACKING MY STORY...
      <div className="links-constainer">
        <div className="about-links-left">
          <Link to="/home/about/my-vision" className="links">
            My Vision
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

export default MyStory;
