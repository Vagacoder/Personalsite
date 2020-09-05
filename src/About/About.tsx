import React from 'react';
import * as MUI from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

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
            <div className="Biography">
              {data.biography}
            </div>
            <MUI.Grid container spacing={2} className="AboutContentContainer">
              <MUI.Grid item xs={6} className="AboutContentTexts" >
                <MUI.Typography variant="h4">Contact Me</MUI.Typography>
                <MUI.Typography variant="body1" className="EmailAddress">{data.email}</MUI.Typography>
              </MUI.Grid>
              <MUI.Grid item xs={6} className="AboutContentResume">
                <div className="ResumeDownload">
                  <a href="https://drive.google.com/file/d/18_UDc7a7wHQ44AUjTex2QEKq1s_qdfPC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFileDownload} className="Icon" />
                    Download Resume
                  </a>
                </div>
                <div className="CVtitle">
                  <MUI.Typography color="primary" variant="body1">If you are interested in my previous background in biomedical science, please check my academia CV</MUI.Typography>
                </div>
                <div className="CVDownload">
                  <a href="https://drive.google.com/file/d/12P0fpiy6sIgSgfG_rfasaHubU8VJRk8L/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFileDownload} className="Icon" />
                    Download Academia CV
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
