import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="home">
      <div className="projects-link-container">
        <Link to="/home/projects" className="link-projects">
          Projects
        </Link>
      </div>
      <div className="home-center-container">
        <div className="motto-container">
          <div className="motto-disappear">
            <ul className="motto-letters">
              <li className="motto-letter">N</li>
              <li className="motto-letter">o</li>
              <li className="motto-letter">t</li>
              <li className="motto-letter">h</li>
              <li className="motto-letter">i</li>
              <li className="motto-letter">n</li>
              <li className="motto-letter">g</li>
              <li className="motto-letter">&nbsp;</li>
              <li className="motto-letter">i</li>
              <li className="motto-letter">s</li>
              <li className="motto-letter">&nbsp;</li>
              <li className="motto-letter">l</li>
              <li className="motto-letter">o</li>
              <li className="motto-letter">s</li>
              <li className="motto-letter">t</li>
            </ul>
            <ul className="motto-letters">
              <li className="motto-letter">N</li>
              <li className="motto-letter">o</li>
              <li className="motto-letter">t</li>
              <li className="motto-letter">h</li>
              <li className="motto-letter">i</li>
              <li className="motto-letter">n</li>
              <li className="motto-letter">g</li>
              <li className="motto-letter">&nbsp;</li>
              <li className="motto-letter">i</li>
              <li className="motto-letter">s</li>
              <li className="motto-letter">&nbsp;</li>
              <li className="motto-letter">c</li>
              <li className="motto-letter">r</li>
              <li className="motto-letter">e</li>
              <li className="motto-letter">a</li>
              <li className="motto-letter">t</li>
              <li className="motto-letter">e</li>
              <li className="motto-letter">d</li>
            </ul>
            <ul className="motto-letters">
              <li className="motto-letter">E</li>
              <li className="motto-letter">v</li>
              <li className="motto-letter">e</li>
              <li className="motto-letter">r</li>
              <li className="motto-letter">y</li>
              <li className="motto-letter">t</li>
              <li className="motto-letter">h</li>
              <li className="motto-letter">i</li>
              <li className="motto-letter">n</li>
              <li className="motto-letter">g</li>
              <li className="motto-letter">&nbsp;</li>
              <li className="motto-letter">i</li>
              <li className="motto-letter">s</li>
              <li className="motto-letter">&nbsp;</li>
              <li className="motto-letter">d</li>
              <li className="motto-letter">e</li>
              <li className="motto-letter">v</li>
              <li className="motto-letter">e</li>
              <li className="motto-letter">l</li>
              <li className="motto-letter">o</li>
              <li className="motto-letter">p</li>
              <li className="motto-letter">e</li>
              <li className="motto-letter">d</li>
            </ul>
          </div>
          <h1 className="motto">
            Nothing is lost
            <br />
            Noting is created
            <br />
            Everything is developed
          </h1>
          <Link to="/home/about" className="link-about">
            About Me
          </Link>
        </div>
        <div className="contacts-home">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
