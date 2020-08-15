import React from 'react';
import Navbar from './Navbar';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Home = React.forwardRef((props: any, ref: any) => {

  const { data, ...scrollTos } = props;
  // console.log('Home scollTos:', scrollTos);

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
      <div className="Banner">
        <div className="BannerText">
          <Typography variant="h2">I'm {data.name}.</Typography>
          <Typography variant="h5">
            I'm a Junior <span>{data.occupation}</span> living at {data.location}. <br />{data.description}
          </Typography>
          <br />
          <br />
          <ul className="Social">
            {socialLinks}
          </ul>
        </div>

        <div className="ScrollDown">
          <a href="#about">{getFAicons['circleDown']}</a>
        </div>
      </div>

    </section>
  );
});

export default Home;
