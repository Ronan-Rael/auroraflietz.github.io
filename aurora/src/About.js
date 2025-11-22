import React from "react";
import "./About.css";
import profileImg from "./assets/about_icon.svg";


const About = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="wrap">
      <aside className="sidebar">
        <div className="donut">
          <div className="ring"></div>
          <img src={profileImg} alt="profile" />
        </div>

        <div className="side-group">
          <div className="nav-circles">
            <div className="circle">CAD</div>
            <div className="circle">
              Digital
              <br />
              Art
            </div>
            <div className="circle">About</div>
          </div>

          <div className="mini-pie">
            <div className="inner"></div>
          </div>

          <button className="back-btn" onClick={goBack}>
            <span className="arrow"></span>
          </button>
        </div>
      </aside>

      <main className="content">
        <div className="card">
          <h1>About Me</h1>
          <div className="body-text">
            <p>
              Hi! I’m Aurora, a digital designer and front-end creator who’s
              passionate about building clean, modern, and user-focused
              experiences. I specialize in visual design, responsive interfaces,
              and turning complex ideas into simple, intuitive layouts.
            </p>
            <p>
              I love experimenting with new styles, exploring unique design
              languages, and helping brands tell compelling stories through
              design.
            </p>
            <p className="contact">
              <strong>Contact</strong>
              <br />
              Email:{" "}
              <a href="mailto:Aurora@example.com">Aurora@example.com</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
