import React from "react";
import "./Contacts.scss";

export default function Contacts() {
  return (
    <div className="contacts-container">
      <div className="contact-me-container">
        <h3 className="contanct-me-text">Contact me:</h3>
        <a
          href="mailto:klajdibeqiraj88@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="linkToMail"
        >
          <img src={require("../../images/mail.png")} alt="" className="mail" />
          <img
            src={require("../../images/mailhover.png")}
            alt=""
            className="mailhover"
          />
        </a>
        <div className="phone-switch">
          <img
            src={require("../../images/phone.png")}
            alt=""
            className="phone"
            onClick={() => {
              window.location.href = "tel:+31653329287";
            }}
          />
          <img
            src={require("../../images/phonehover.png")}
            alt=""
            className="phonehover"
            onClick={() => {
              window.location.href = "tel:+31653329287";
            }}
          />
        </div>
      </div>
      <div className="contacts-and-Links-container">
        <ul className="social-networks spin-icon">
          <li>
            <a
              href="https://www.linkedin.com/in/klajdi-beqiraj-654783267/"
              target="_blank"
              rel="noreferrer"
              className="icon-linkedin"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" className="icon-twitter">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" className="icon-facebook">
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/1998KB"
              target="_blank"
              rel="noreferrer"
              className="icon-github"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="https://instagram.com" className="icon-instagram">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
