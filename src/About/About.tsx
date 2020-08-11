import React from 'react';
import * as MUI from '@material-ui/core';

const About = React.forwardRef((props: any, ref:any) => {

  const { data } = props;
  // console.log(data);

  return (
    <section id="about" ref={ref}>
      <div>
        This is About
        <img className="ProfileImage" src={data.profImageUrl} alt="my profile" />
        <MUI.Typography variant="h4">About Me</MUI.Typography>
        <div className="Biography">{data.biography}</div>
        <MUI.Typography variant="h4">Contact Me</MUI.Typography>
        <div className="EmailAddress">{data.email}</div>
        <div className="ResumeDownload">
          <a href="https://drive.google.com/file/d/18_UDc7a7wHQ44AUjTex2QEKq1s_qdfPC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-download"></i> 
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
});

export default About;
