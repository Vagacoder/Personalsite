import React from 'react';
import Navbar from './Navbar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  Banner:{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BannerText:{
    color: '#fff',
    margin: 'auto',
  },
  MyName: {
    fontWeight: 500,
  },
  Social: {
    margin: '24px 0',
    fontSize: '48px',
    textShadow: '0px 1px 2px rgba(0, 0, 0, .8)',
    '& li': {
      display: 'inline-block',
      margin: '0 16px',
      '& a': {
        color: '#fff',
        transition: 'color .3s ease-in-out',
      },
      '& a:hover': {
        color: '#328cf3',
      }
    },
  },
  ScrollDown: {
    margin: '24px 0px',
    fontSize: '36px',
    color: '#fff',
    textShadow: '0px 1px 2px rgba(0, 0, 0, .8)',
    transition: 'color .3s ease-in-out',
    '&:hover': {
      color: '#328cf3',
    }
  }
});

const Home = React.forwardRef((props: any, ref: any) => {

  const classes = useStyles();

  const { data, ...scrollTos } = props;
  // console.log('Home scollTos:', scrollTos);

  // ! set Home, About pages height to window height
  // ? reference: https://usehooks.com/useWindowSize/
  React.useEffect(()=>{
    // * run the beginning, to set correct height
    setPageSize();
    // * add listener
    window.addEventListener('resize', setPageSize);
    // * remove listener
    return () => window.removeEventListener('resize', setPageSize);
    // ! only run once at page mount
  }, []);

  // * listener, set Home page height
  const setPageSize = () => {
    let windowHeight = window.innerHeight;
    let homeElement = document.getElementById('home');
    if(homeElement){
      homeElement.style.height = windowHeight + 'px';
    }
  }

  const getFAicons: any = {
    'github' : <FontAwesomeIcon icon={faGithub} />,
    'linkedin' : <FontAwesomeIcon icon={faLinkedin} />,
    'circleDown' : <FontAwesomeIcon icon={faChevronCircleDown} />
  };

  const socialLinks = (data.socials).map((social: any) => {
    return (
      <li key={social.name}>
        <a href={social.url} target="_blank" rel="noopener noreferrer">{getFAicons[social.name]}</a>
      </li>
    );
  })


  return (
    <section id="home" ref={ref}>
      <Navbar scrollTos={scrollTos} />
      <div className={classes.Banner}>
        <div className={classes.BannerText}>
          <Typography variant="h2" className={classes.MyName}>I'm {data.name}.</Typography>
          <Typography variant="h5">
            I'm a Junior <span>{data.occupation}</span> living at {data.location}. 
            <br />{data.description1}
            <br />{data.description2}
          </Typography>
          <br />
          <br />
          <ul className={classes.Social}>
            {socialLinks}
          </ul>
        </div>

        <div className={classes.ScrollDown}>
          <div onClick={scrollTos.scrollToAbout}>{getFAicons['circleDown']}</div>
        </div>
      </div>

    </section>
  );
});

export default Home;
