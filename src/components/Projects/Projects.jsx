import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import lumen5 from "../../img/Lumen5.png";
import gear from "../../img/GearBest.png";
import shopbop from "../../img/ShopBop.png"
import { useContext } from "react";
import { themeContext } from "../../Context";
import credo from "../../img/credobeauty.png"

const Projects = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="Project">
      <div className="p-heading projectHead ">
        <span style={darkMode?{color:"white"}:null} >My </span>
        <span>Projects</span>
        <div className="blur s-blur2" style={{background:"var(--purple)"}} ></div>
        <div className='blur s-blur1' style={{background:"#ABF1FF94"}} ></div>

        {/* <div className='blur s-blur1' style={{background:"#ABF1FF94",zIndex:1}} ></div> */}
      </div>
      <div className="p-mainDiv">
      <ProjectCard
          live="https://toggltrack521.netlify.app/"
          git="https://github.com/Rahul850kr/TogglTrack"
          tech={["HTML", "CSS", "Javascript", "React", "Redux", "Chakra UI","NodeJS","Express","MongoDB"]}
          desc="Toggl Track (formerly Toggl) is a time tracking software operated by Toggl OÜ that offers online time tracking and reporting services through their website along with mobile and desktop applications."
          pFName="TogglTrack"
          pLName="Clone"
          image="https://github.com/Rahul850kr/habitual-oatmeal-3228/raw/master/Frontend/TogglTrack%20Screenshots/Homepage1.png?raw=true"
        />
        <ProjectCard
          live="https://lumen5-clone-project.netlify.app/"
          git="https://github.com/Rahul850kr/synonymous-wall-8152"
          tech={["HTML", "CSS", "Javascript", "React", "Redux", "Chakra UI"]}
          desc=" Lumen5 combines powerful A.I. with a simple drag and drop
              interface to help you create professional video content in
              minutes.It is a collaborative project and i have completed this project in 5 days."
          pFName="Lumen5"
          pLName="Clone"
          image={lumen5}
        />
        <ProjectCard
          live="https://gearbest-project.vercel.app/"
          git="https://github.com/Rahul850kr/unadvised-ducks-1309/tree/master/gear_best_clone"
          tech={["HTML", "CSS", "Javascript", "React", "Redux", "Chakra UI"]}
          desc="Gearbest is a Chinese online e-commerce website.It is my first and individual react project completed in 5
          days."
          pFName="Gearbest"
          pLName="Clone"
          image={gear}
        />
        <div className="blur s-blur2" style={{background:"var(--purple)",left:"70%",top:"50%"}} ></div>
        <ProjectCard
          live="https://enchanting-banoffee-050dd5.netlify.app/"
          git="https://github.com/Rahul850kr/ShopBob-Clone-Project"
          tech={["HTML", "CSS", "Javascript","Local Storage"]}
          desc="Shopbop is a US online fashion apparel and accessories shop opened in 1999.It is a collaborative project and i completed this project in 5 days."
          pFName="Shopbop"
          pLName="Clone"
          image={shopbop}
        />
        <ProjectCard
          live="https://credo-beauty-clone.netlify.app/"
          git="https://github.com/Rahul850kr/Credo-beauty-clone-project"
          tech={["HTML", "CSS", "Javascript","Local Storage"]}
          desc="Credobeauty is an online e-commerce cosmetic products website.It is a collaborative project and i completed this project in 5 days."
          pFName="Credobeauty"
          pLName="Clone"
          image={credo}
        />
        
      </div>
    </div>
  );
};

export default Projects;
