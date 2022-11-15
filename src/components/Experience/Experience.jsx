import React from "react";
import Github from "../GithubCalendar/Githubcalendar";
import "./Experience.css";

const Experience = () => {
  return (
    <div style={{marginTop:"1.5rem"}}>
      <div className="experience">
        <div className="achievement">
          <div className="circle">1200+</div>
          <span>Hours</span>
          <span>Coding</span>
        </div>
        <div className="achievement">
          <div className="circle">300+</div>
          <span>DSA</span>
          <span>Problems</span>
        </div>
        <div className="achievement">
          <div className="circle">5+</div>
          <span>Projects</span>
          <span>Completed</span>
        </div>
        <div className="achievement">
          <div className="circle">200+</div>
          <span>Git</span>
          <span>Commits</span>
        </div>
      </div>
      <div className="stats">
        <img
        
          src="https://github-readme-stats.vercel.app/api?username=rahul850kr&show_icons=true&locale=en"
          alt="rahul850kr"
        />
        <img
       
          src="https://github-readme-streak-stats.herokuapp.com/?user=rahul850kr&"
          alt="rahul850kr"
        />
      </div>
      <Github />
    </div>
  );
};

export default Experience;
