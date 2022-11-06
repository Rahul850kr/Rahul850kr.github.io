import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Rahul from "../../img/rahull.png";
import Rahul2 from "../../img/rah.jpeg";
import Glassesimogi from "../../img/glassesimoji.png";
import Resume from "./Rahul_Kumar_Resume.pdf";
import { themeContext } from "../../Context";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode ? { color: "white" } : null}>Hey! I Am</span>
          <span>Rahul Kumar</span>
          <span>
            I'm a passionate Full Stack Web Developer.I enjoy developing
            websites and web applications.
          </span>
        </div>
        <a href={Resume} download>
          <button className="button s-button">Download Resume</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/Rahul850kr" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-kumar-a76323230/"
            target="_blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Rahul} alt="" />
        <img
        src={Glassesimogi} alt="" />
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
       
      </div>
      <img className="lastImg" src={Rahul2} alt=""/>
    </div>
  );
};

export default Intro;
