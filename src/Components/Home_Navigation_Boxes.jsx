import React from "react";
import { Link } from "react-router-dom";

const Home_Navigation_Boxes = () => {
  return (
    <>
      <div className="about-nav">
        <Link to="/about">
          <div className="main-nav-item">
            <p>ABOUT</p>
          </div>
        </Link>
      </div>
      <div className="main-nav">
        <Link to="/multi-media">
          <div className="main-nav-item">
            <p>Mutli-Media</p>
          </div>
        </Link>
        <Link to="/software-development">
          <div className="main-nav-item">
            <p>Software Development</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home_Navigation_Boxes;
