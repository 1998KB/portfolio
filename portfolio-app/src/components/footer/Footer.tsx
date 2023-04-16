import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={require("../../images/fullstack-developer.png")}
        alt=""
        className="footer-img"
      />
    </div>
  );
};

export default Footer;
