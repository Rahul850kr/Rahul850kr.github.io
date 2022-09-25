import React from "react";
import "./TechnicalSkills.css";

const TechnicalSkills = () => {
  return (
    <div className="works" id="Tech" >
      <div className="awesome" style={{top:"3rem"}} >
        <span>My Awesome</span>
        <span>Technical Skills</span>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right" style={{left:"-6rem"}}>
        <div className="w-maincircle">
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/html-5--v1.png"
              alt=""
            />
          </div>
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/css3.png"
              alt=""
            />
          </div>
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/javascript.png"
              alt=""
            />
          </div>
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/react-native.png"
              alt=""
            />
          </div>
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/redux.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>
      <div className="w-right" style={{left:"20rem"}}>
        <div className="w-maincircle" >
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/html-5--v1.png"
              alt=""
            />
          </div>
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/css3.png"
              alt=""
            />
          </div>
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/javascript.png"
              alt=""
            />
          </div>
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/react-native.png"
              alt=""
            />
          </div>
          <div className="w-seccircle">
            <img
              src="https://img.icons8.com/color/480/000000/redux.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
