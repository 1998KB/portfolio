import React from "react";
import { Link } from "react-router-dom";
import "./MyExpertise.css";

const MyExpertise = () => {
  return (
    <div className="myExpertise-container">
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

export default MyExpertise;
