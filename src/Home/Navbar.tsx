import React from 'react';

const Navbar = () => {

  return (
    <nav id="navbar">
      Nagivation bar is here
      <ul id="nav" className="nav">
        <li className="current"><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;