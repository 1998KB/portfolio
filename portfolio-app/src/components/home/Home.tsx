import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Constacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="home">
      <div className="links">
        <Link to="/about" className="link-about">
          About
        </Link>
        <Link to="/projects" className="link-project">
          Projects
        </Link>
      </div>
      <div className="home-center-container">
        <>
          <h1 className="motto">
            Nothing is lost
            <br />
            Noting is created
            <br />
            Everything is developed
          </h1>
        </>
        <Constacts />
      </div>
    </div>
  );
};

export default Home;
