import React from "react";
import "./FloatingActionButton.css";
import { useNavigate } from "react-router-dom";

// SVG imports
import { ReactComponent as HomeIcon } from "../assets/fab-home.svg";
import { ReactComponent as ArtIcon } from "../assets/fab-art.svg";
import { ReactComponent as AboutIcon } from "../assets/fab-about.svg";
import { ReactComponent as CadIcon } from "../assets/fab-cad.svg";

const FloatingActionButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fab-container">
      <HomeIcon
        className="fab-btn fab-center"
        onClick={() => navigate("/")}
      />
      <ArtIcon
        className="fab-btn fab-sliver fab-art"
        onClick={() => navigate("/drawings")}
      />
      <AboutIcon
        className="fab-btn fab-sliver fab-about"
        onClick={() => navigate("/about")}
      />
      <CadIcon
        className="fab-btn fab-sliver fab-cad"
        onClick={() => navigate("/models")}
      />
    </div>
  );
};

export default FloatingActionButton;
