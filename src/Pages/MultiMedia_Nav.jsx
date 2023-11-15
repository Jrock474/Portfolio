import React from "react";
import { Link } from "react-router-dom";

const MultiMedia = () => {
  return (
    <>
      <h1>MultiMedia</h1>
      <div className="gallery-section">
        <div className="main-nav-container">
          <Link to="/animations">
            <div className="about-nav">
              <div className="main-nav-item">
                <p>Animations</p>
              </div>
            </div>
          </Link>
          <div className="main-nav">
            <Link to="/designs">
              <div className="main-nav-item">
                <p>Designs</p>
              </div>
            </Link>
            <Link to="/music">
              <div className="main-nav-item">
                <p>Music</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiMedia;
