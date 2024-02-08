import Devicons from "../components/Devicons";

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
              <p className="skills-grid4">Game Design</p>
              <p className="skills-grid5">Typography</p>
              <p className="skills-grid6">Music Production</p>
              <p className="skills-grid7">Software Development</p>
            </div>
            <div className="line-seporator"></div>
            <div className="software-text">Software</div>
            <div className="software">
              <Devicons />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
