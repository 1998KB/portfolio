import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="wrapper">
        <ul className="landing-page-ul">
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
          <li className="landing-page-li">1</li>
          <li className="landing-page-li">0</li>
        </ul>
      </div>
      <Link to="/home" className="home-link-landing">
        {"< ? />"}
      </Link>
    </div>
  );
};

export default LandingPage;
