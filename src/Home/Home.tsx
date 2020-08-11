import React from 'react';
import Navbar from './Navbar';

const Home = React.forwardRef((props: any, ref:any) => {

  const { data, ...scrollTos } = props;
  // console.log('Home scollTos:', scrollTos);

  const socialLinks = (data.socials).map((social:any) =>{
    return (
      <li key={social.name}>
        <a href={social.url}>{social.name}</a>
      </li>
    );
  })

  return (
    <section id="home" ref={ref}>
      <Navbar scrollTos={scrollTos} />
      <div className="Banner">
        <div className="BannerText">
          <h1>This is {data.name}</h1>
          <h3>
            I'm a {data.location} based 
            <span>{data.occupation}</span>. {data.description}
          </h3>
          {socialLinks}
        </div>
      </div>

      <div className="ScrollDown">
        <a href="#about">Replace wiht Arrow Down Button</a>
      </div>
    </section>
  );
});

export default Home;
