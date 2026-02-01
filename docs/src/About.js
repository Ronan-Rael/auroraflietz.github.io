import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import profileImg from "./assets/profile.jpg";

// SVG icons (same as FAB)
import { ReactComponent as HomeIcon } from "./assets/home_icon.svg";
import { ReactComponent as ArtIcon } from "./assets/art_icon.svg";
import { ReactComponent as CadIcon } from "./assets/cad_icon.svg";

import FloatingActionButton from "./components/FloatingActionButton";

const About = () => {
  return (
    <>
      <div className="wrap">
        <div className="left-column">
          <div className="profile-pic">
            <img
              src={profileImg}
              alt="profile"
              onError={(e) => (e.target.src = "https://via.placeholder.com/210")}
            />
          </div>

          <div className="nav-circles">
            <Link to="/" className="circle">
              <HomeIcon className="circle-icon" />
              Home
            </Link>

            <Link to="/drawings" className="circle">
              <ArtIcon className="circle-icon" />
              Digital <br /> Art
            </Link>

            <Link to="/models" className="circle">
              <CadIcon className="circle-icon" />
              CAD
            </Link>
          </div>
        </div>

        <div className="right-column">
          <div className="buttons-and-about">
            <div className="about-section">
              <h1>About</h1>
              <p>
                Hello! I am Aurora Drew Fleitz! I'm a Digital artist, graphic designer, 3D modeler, and occasional animator based in Michigan. I've done work for up-and-coming trading card games and various commissions. I was born and raised in Colorado. I have experience in Procreate, Blender, Illustrator, Photoshop, Solidworks, AutoCAD, Blockbench, and GIMP.
              </p>
              <p>
                <strong>Contact</strong><br/>
                Email: <a href="mailto:Dfleitz12@gmail.com">Dfleitz12@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <FloatingActionButton />
    </>
  );
};

export default About;
