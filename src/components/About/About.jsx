import React from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Experience from "../Experience/Experience";
import "./About.css";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about" id="About" >
      <div className="p-heading" style={{ height: "auto" }}>
        <span style={darkMode ? { color: "white" } : null}>About </span>
        <span>Myself</span>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur s-blur1"
          style={
            darkMode
              ? { display: "none" }
              : { background: "#ABF1FF94", zIndex: 1 }
          }
        ></div>
      </div>
      <div className="card about-card">
        Software professional with expertise in JavaScript, React.js,Angular MongoDB,
        and experience in solving more than 200 Ds&Algo problems.Looking forward
        to being a part of an organization that allows
        constant learning and development of my technical and management skills.
        Experience in working on various projects through remote collaboration.
      </div>
      <Experience />
    </div>
  );
};

export default About;
