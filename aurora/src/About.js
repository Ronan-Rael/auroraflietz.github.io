import React from "react";
import { Link } from "react-router-dom"; 
import "./About.css";
import profileImg from "./assets/profile.jpg"; 
import FloatingActionButton from "./components/FloatingActionButton";

const About = () => {
  return (
    <>
      <div className="wrap">
        {/* Left column */}
        <div className="left-column">
          <div className="profile-pic">
            <img
              src={profileImg}
              alt="profile"
              onError={(e) => (e.target.src = "https://via.placeholder.com/210")}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="right-column">
          <div className="buttons-and-about">
            <div className="nav-circles">
              <Link to="/models" className="circle">CAD</Link>
              <Link to="/drawings" className="circle">
                Digital
                <br />
                Art
              </Link>
              <Link to="/" className="circle">Home</Link> 
            </div>

            {/* About Me box */}
            <div className="about-section">
              <h1>About Me</h1>
              <p>
                Hi! I’m Aurora, a digital designer and front-end creator passionate about building clean, modern, and user-focused experiences. I specialize in visual design, responsive interfaces, and turning complex ideas into simple, intuitive layouts.
              </p>
              <p>
                Over the years, I’ve worked on a variety of projects, from web apps and interactive media to branding and illustration. I enjoy collaborating with teams, mentoring junior designers, and constantly learning new tools to stay ahead in the fast-evolving digital space.
              </p>
              <p>
                In my free time, I explore new artistic mediums, experiment with motion design, and contribute to creative projects that inspire me. My goal is to craft designs that are not only beautiful but also solve real problems and delight users.
              </p>
              <p className="contact">
                <strong>Contact</strong>
                <br />
                Email: <a href="mailto:aurora.fake@example.com">aurora.fake@example.com</a>
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </>
  );
};

export default About;
