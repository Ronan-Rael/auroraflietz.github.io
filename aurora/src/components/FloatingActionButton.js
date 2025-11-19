import React from "react";
import "./FloatingActionButton.css";

// Import SVGs as React Components
import { ReactComponent as HomeIcon } from "../assets/fab-home.svg";
import { ReactComponent as ArtIcon } from "../assets/fab-art.svg";
import { ReactComponent as AboutIcon } from "../assets/fab-about.svg";
import { ReactComponent as CadIcon } from "../assets/fab-cad.svg";

const FloatingActionButton = () => {
  const handleHomeClick = () => {
    alert("Home clicked!");
  };

  const handleArtClick = () => {
    alert("Art clicked!");
  };

  const handleAboutClick = () => {
    alert("About clicked!");
  };

  const handleCadClick = () => {
    alert("CAD clicked!");
  };

  return (
    <div className="fab-container">
      {/* Central Circular Button */}
      <HomeIcon className="fab-btn fab-center" onClick={handleHomeClick} />

      {/* Surrounding Sliver Buttons */}
      <ArtIcon
        className="fab-btn fab-sliver fab-art"
        onClick={handleArtClick}
      />

      <AboutIcon
        className="fab-btn fab-sliver fab-about"
        onClick={handleAboutClick}
      />

      <CadIcon
        className="fab-btn fab-sliver fab-cad"
        onClick={handleCadClick}
      />
    </div>
  );
};

export default FloatingActionButton;
