import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contacts-container">
      <h3>Contancts and Links:</h3>
      <div className="contacts-and-Links-container">
        <a
          href="mailto:klajdibeqiraj88@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="linkToMail"
        >
          <img src={require("../../images/mail.png")} alt="" className="mail" />
        </a>

        <img
          src={require("../../images/phone.png")}
          alt=""
          className="phone"
          onClick={() => {
            window.location.href = "tel:+31653329287";
          }}
        />
        <a
          href="https://github.com/1998KB"
          target="_blank"
          rel="noreferrer"
          className="linkToGithub"
        >
          <img
            src={require("../../images/github.png")}
            alt=""
            className="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/klajdi-beqiraj-654783267/"
          target="_blank"
          rel="noreferrer"
          className="linkToLinkedln"
        >
          <img
            src={require("../../images/linkedin.png")}
            alt=""
            className="linkedin"
          />
        </a>
      </div>
    </div>
  );
}
