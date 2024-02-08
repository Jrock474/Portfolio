import Software from "../components/Software";

const About = () => {
  return (
    <>
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
                img="devicons/After Effects.svg"
                text="After Effects"
              />
              <Software
                img="devicons/Adobe Illustrator.svg"
                text="Illustrator"
              />
              <Software
                img="devicons/Adobe Photoshop.svg"
                text="Photoshop"
              />
              <Software
                img="public/devicons/Jira.svg"
                text="Jira"
              />
              <Software
                img="public/devicons/Git.svg"
                text="Git"
              />
              <Software
                img="public/devicons/GitHub.svg"
                text="GitHub"
              />
              <Software
                img="public/devicons/AWS.svg"
                text="AWS(EC2)"
              />
              <Software
                img="public/devicons/HTML5.svg"
                text="HTML"
              />
              <Software
                img="public/devicons/CSS3.svg"
                text="CSS"
              />
              <Software
                img="public/devicons/JavaScript.svg"
                text="JavaScript"
              />
              <Software
                img="public/devicons/JSON.svg"
                text="JSON"
              />
              <Software
                img="public/devicons/React.svg"
                text="React.js"
              />
              <Software
                img="public/devicons/TypeScript.svg"
                text="Typescript.js"
              />
              <Software
                img="public/devicons/Node.js.svg"
                text="Node.js"
              />
              <Software
                img="public/devicons/Express.svg"
                text="Express.js"
              />
              <Software
                img="public/devicons/Jest.svg"
                text="Jest.js"
              />
              <Software
                img="public/devicons/Sequelize.svg"
                text="Sequelize.js"
              />
              <Software
                img="public/devicons/NPM.svg"
                text="NPM"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
