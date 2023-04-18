import React from "react";
import "./MyVision.css";
import { Link } from "react-router-dom";
const MyVision = () => {
  return (
    <div className="myVision-container">
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

export default MyVision;
