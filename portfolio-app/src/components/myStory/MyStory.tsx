import React from "react";
import "./MyStory.scss";
import { Link } from "react-router-dom";
const MyStory = () => {
  return (
    <div className="myStory-container">
      HACKING...
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

export default MyStory;
