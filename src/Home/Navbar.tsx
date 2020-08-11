import React from 'react';
import { Box, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = ({scrollTos}: any) => {

  // console.log('Navbar scrollTos:', scrollTos);
  const {scrollToHome, scrollToAbout} = scrollTos;
  // console.log('Navbar scrollToHome:', scrollToHome);

  return (
    <nav id="navbar">
      {/* Nagivation bar is here
      <ul id="nav" className="nav">
        <li className="current"><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}
      <Box>
        {/* <Typography>MUI navigation box</Typography> */}
        <Box>
          {/* <Button color="primary" href="#home" >Home</Button>
          <Button color="primary" href="#about">About</Button> */}
          <Button color="primary" onClick={scrollToHome} >Home</Button>
          <Button color="primary" onClick={scrollToAbout} >About</Button>
          <Button color="secondary" >Resume</Button>
          <Button>Project</Button>
          <Button>Contact</Button>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;