import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rahul850kr@gmail.com</span>
        <span>+91 8102505329</span>
        <div className="f-icons">
          <a href="https://github.com/Rahul850kr" target="_blank">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/rahul-kumar-a76323230/" target="_blank">
            <Linkedin color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
