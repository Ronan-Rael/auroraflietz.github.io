import React from 'react';
import './FloatingActionButton.css';

const FloatingActionButton = ({ onClick, children }) => {
  return (
    <button className="fab" onClick={onClick}>
      {children}
    </button>
  );
};

export default FloatingActionButton;
