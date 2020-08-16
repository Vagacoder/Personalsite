import React from 'react';
import * as MUI from '@material-ui/core';

const About = React.forwardRef((props: any, ref: any) => {

  const { data } = props;
  // console.log(data);

  return (
    <section id="about" ref={ref}>
      <div>
        <MUI.Grid container spacing={2} className="AboutContainer" >
          <MUI.Grid item xs={4} className="ProfileImageGrid">
            <img className="ProfileImage" src={data.profImageUrl} alt="my profile" />
          </MUI.Grid>
          <MUI.Grid item xs={8} className="AboutContent">
            <MUI.Typography variant="h4">About Me</MUI.Typography>
            <div className="Biography">{data.biography}</div>
            <MUI.Grid container spacing={2} className="AboutContentContainer">
              <MUI.Grid item xs={6} className="AboutContentTexts" >
                <MUI.Typography variant="h4">Contact Me</MUI.Typography>
                <div className="EmailAddress">{data.email}</div>
              </MUI.Grid>
              <MUI.Grid item xs={6} className="AboutContentResume">
                <div className="ResumeDownload">
                  <a href="https://drive.google.com/file/d/18_UDc7a7wHQ44AUjTex2QEKq1s_qdfPC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-download"></i>
                Download Resume
              </a>
                </div>
              </MUI.Grid>
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Grid>
      </div>
    </section>
  );
});

export default About;
