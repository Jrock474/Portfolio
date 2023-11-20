import { useContext } from "react";
import Software from "../Conponents/Software";
import { AboutState } from "./Home_Navigation";

const About = () => {

  const [isAboutActive, setIsAboutActive] = useContext(AboutState)
  const handleClick = (e) =>{
    // Checks if the Banner Section is Clicked and if it's active
    if (e == "Start"){
      if (isAboutActive === true) {
        setIsAboutActive(false)
      } else {
        setIsAboutActive(true)
      }
    }
  }

  return (
    <>
      <div className="banner">
        <div className="about-header">Welcome to my Portfolio!</div>
        <div className="about-subheading">Here you will find all of my previous works from Software Development to Multi-media</div>
        <button name="About Me">About Me</button>
        <button name="Start" onClick={(e) =>{handleClick(e.target.name)}}>Start</button>
      </div>

      <div className="about-content-flex">
        <h1>About Me</h1>
        <section className="about-section2-bg">
          <div className="about-section-content">
            <p>
              I've studied Multimedia and Software Development since 2018 while still in college. At the time I was studing Computer Science but I needed an outlet
              This led me to teaching myself Graphic Design and later Web Design to showcase the former.
              This eventually turned into a passion where I would forever be in a perpetual state of learning as 
              as technology is constantly evolving.   My goal is to combine my knowlege of Software Development with my passion with Multi Media and contribute to the Art and Software Development Community. 
            </p>
            <p>
              All Links: <a href="https://linktr.ee/Jordan474">Linktree</a>
            </p>
            <div className="line-seporator"></div>
            <div className="skills-text">Skills</div>
            <div className="skills">
              <p className="skills-grid1">Video Editing</p>
              <p className="skills-grid2">Graphic Design</p>
              <p className="skills-grid3">Animations</p>
              <p className="skills-grid4">HTML & CSS</p>
              <p className="skills-grid5">Typography</p>
              <p className="skills-grid6">Music Production</p>
              <p className="skills-grid7">Java Script</p>
            </div>
            <div className="line-seporator"></div>
            <div className="software-text">Software</div>
            <div className="software">
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg"
                text="After Effects"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                text="Photoshop"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                text="Illustrator"
              />
              <Software
                img="http://esotericsoftware.com/files/branding/spine_badge.png"
                text="Spine-2D"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg"
                text="Maya Autodesk"
              />
              <Software
                img="https://www.allavio.com/wp-content/uploads/2021/03/davinci_resolve_logo__no_grain_edition__by_who2lu_deef1fd-pre.png"
                text="Davanci Resolve"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                text="Visual Studio Code"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                text="Node.js"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" 
                text="Sequelize"
              />
              <Software 
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                text="Postgres"
              />
              <Software 
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                text="Javascript"
              />  
              <Software 
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                text="React.js"
              />
              <Software 
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                text="Github"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                text="Git"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                text="HTML 5"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                text="Jquery"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                text="NPM"
              />
              <Software
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                text="Express.js" 
              />
              <Software 
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                text="CSS 3"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
