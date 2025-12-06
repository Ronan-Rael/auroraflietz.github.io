import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import profileImg from "./assets/profile.jpg";
import FloatingActionButton from "./components/FloatingActionButton";

const About = () => {
  return (
    <>
      <div className="wrap">
        
        {/* LEFT SIDE */}
        <div className="left-column">
          <div className="profile-pic">
            <img
              src={profileImg}
              alt="profile"
              onError={(e) => (e.target.src = "https://via.placeholder.com/210")}
            />
          </div>

          <div className="nav-circles">
            <Link to="/models" className="circle">
              <i className="fas fa-cube"></i>
              CAD
            </Link>

            <Link to="/drawings" className="circle">
              <i className="fas fa-paint-brush"></i>
              Digital <br /> Art
            </Link>

            <Link to="/" className="circle">
              <i className="fas fa-home"></i>
              Home
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-column">
          <div className="buttons-and-about">
            <div className="about-section">
              <h1>About Page </h1>

              <p>
                Hello! I am Aurora Drew Fleitz! I'm a Digital artist, graphic designer, 3d modeler, and occasional animator based in Michigan. I've done work for up and coming trading card games, and various commissions! I was born and raised in Colorado.
                I have experience in Procreate, Blender, Illustrator, Photoshop, Solidworks, AutoCAD, Blockbench, and GIMP.
              </p>

              <p>
                <strong>Contact</strong><br/>
                Email: <a href="mailto:Dfleitz12@gmail.com">Dfleitz12@gmail.com</a><br/>
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
