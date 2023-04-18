import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="wrapper">
        <ul className="landing-page-ul">
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
          <li className="landing-page-li"></li>
        </ul>
      </div>
      <Link to="/home" className="neuroArt-link">
        Curious?
      </Link>
    </div>
  );
};

export default LandingPage;
