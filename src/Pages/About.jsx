import Software from "../Conponents/Software";
import Aos from "aos";
Aos.init();
import 'aos/dist/aos.css'; // You can also use <link> for styles



const About = () => {
  return (
    <>
      <div className="about-content-flex" data-aos="fade-up" data-aos-duration="3000">
        <section className="about-section2-bg">
          <div className="about-section-content">
            <h1>About Me</h1>
            <p>
              I've studied Multimedia and Music since 2018. My journey started
              very early when I attended many coding and game design camps in my
              youth. One notable program was ID Tech that hosted a game design
              program at Georgia Tech. This was my first time interacting with
              software such as Maya and this was where I found my passion for
              creativity and digital design. The name Austral Lunaris was later
              created in my love for the moon and the stars and base many of my
              creations off of it.
            </p>
            <p>
              I started off making a music promotion channel on YouTube that was
              suggested by a friend. This lead to me learning the basics of
              digital aspects such as picture dimensions for video editing. This
              eventually led to me learning animations and edits in order to
              make my my videos stand out.
            </p>
            <p>
              My goal is to make what I'm doing into a full time career and to
              give back to the art community. It's always satisfying to see how
              excited artists become when they are able to see their creations
              come to life.
            </p>
            <p>All Links: https://linktr.ee/Austral.Lunaris</p>
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



              <div className="devicon">
                <p>Adobe In-Design</p>
              </div>
            </div>
          </div>
        </section>
       
      </div>
      
    </>
  );
};

export default About;
