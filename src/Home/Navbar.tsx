import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  NavBar: {
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    color: '#fff',
    backgroundColor: '#050408',
  }
})

const Navbar = ({ scrollTos }: any) => {

  const classes = useStyles();

  const { scrollToHome, scrollToAbout, scrollToResume,
    scrollToProjects, scrollToContact } = scrollTos;

  return (
    <nav className={classes.NavBar}>
      <Box>
        <Button color="secondary" onClick={scrollToHome} >
          <Typography variant="h5">Home</Typography>
        </Button>
        <Button color="primary" onClick={scrollToAbout} >
          <Typography variant="h5">About</Typography>
        </Button>
        <Button color="primary" onClick={scrollToResume} >
          <Typography variant="h5">Resume</Typography>
        </Button>
        <Button color="primary" onClick={scrollToProjects}>
          <Typography variant="h5">Projects</Typography>
        </Button>
        <Button color="primary" onClick={scrollToContact}>
          <Typography variant="h5">Contact</Typography>
        </Button>
        {/* <IconButton>
            <MenuIcon />
          </IconButton> */}
      </Box>
    </nav>
  );
};

export default Navbar;