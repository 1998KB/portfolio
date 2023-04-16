import React from "react";
import { Link } from "react-router-dom";
import "./MyExpertise.css";

const MyExpertise = () => {
  return (
    <div className="myExpertise-container">
      <h1 className="title-myExpertise">Backend</h1>
      <div className="backend-container">
        <p className="card">Java</p>
        <p className="card">Spring Boot</p>
        <p className="card">Maven</p>
        <p className="card">PostgreSQL</p>
        <p className="card">MongoDB</p>
        <p className="card">Lombok</p>
        <p className="card">JDBC</p>
        <p className="card">Hibernate</p>
        <p className="card">JUnit 5</p>
      </div>
      <h1 className="title-myExpertise">Frontend</h1>
      <div className="backend-container">
        <p className="card">TypeScript</p>
        <p className="card">React</p>
        <p className="card">HTML</p>
        <p className="card">CSHTML</p>
        <p className="card">CSS</p>
        <p className="card">Node.js</p>
        <p className="card">npm</p>
        <p className="card">Figma</p>
        <p className="card">Bootstrap</p>
        <p className="card">Mocha/Cypress</p>
      </div>
      <h1 className="title-myExpertise">Tools and technologies</h1>
      <div className="backend-container">
        <p className="card">Intellij</p>
        <p className="card">WebStorm</p>
        <p className="card">Visual Studio Code</p>
        <p className="card">Git+GitHub</p>
        <p className="card">Docker</p>
        <p className="card">PgAdmin4</p>
        <p className="card">Azure</p>
        <p className="card">Firebase</p>
      </div>
      <div className="about-linkToHome-container">
        <Link to="/" className="linkToHome">
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
