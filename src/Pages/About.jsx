import Software from "../Conponents/Software";

const About = () => {
  return (
    <>
      <div className="about-content-flex">
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
                img="https://devicon-website.vercel.app/api/aftereffects/original.svg"
                text="After Effects"
              />
              <Software
                img="https://devicon-website.vercel.app/api/photoshop/plain.svg"
                text="Photoshop"
              />
              <Software
                img="https://devicon-website.vercel.app/api/illustrator/plain.svg"
                text="Illustrator"
              />
              <Software
                img="http://esotericsoftware.com/files/branding/spine_badge.png"
                text="Spine-2D"
              />
              <Software
                img="https://upload.wikimedia.org/wikipedia/commons/d/d7/NicePng_studio-png_1259519.png"
                text="FL-Studio"
              />
              <Software
                img="https://devicon-website.vercel.app/api/maya/original.svg"
                text="Maya Autodesk"
              />
              <Software
                img="https://www.allavio.com/wp-content/uploads/2021/03/davinci_resolve_logo__no_grain_edition__by_who2lu_deef1fd-pre.png"
                text="Davanci Resolve"
              />
              <Software
                img="https://devicon-website.vercel.app/api/visualstudio/plain.svg?color=%23275FBE"
                text="Visual Studio Code"
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
