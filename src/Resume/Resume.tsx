import React from 'react';
import * as MUI from '@material-ui/core';

const Resume = React.forwardRef((props: any, ref: any) => {

  const {data} = props;
  console.log(data);

  const getEducations = data.educations.map((education:any) => {
    return (
      <div key={education.school} className="Education">
        <MUI.Typography variant="h6" className="SchoolName">{education.school}</MUI.Typography>
        <p className="MajorAndDegree">{education.major}, {education.degree}, <em className="SchoolYear">{education.year}</em></p>
        <div className="SchoolDescription">{education.description}</div>
      </div>
    );
  });

  return (
    <section id="resume" ref={ref}>
      <div>
        <MUI.Grid container >

          <MUI.Grid item xs={4}>
            <div className="category">
              <MUI.Typography variant="h6" className="categoryName">
                Education
              </MUI.Typography>
            </div>
          </MUI.Grid>
          <MUI.Grid item xs={8} className="Educations">
            {getEducations}
          </MUI.Grid>

          <MUI.Grid item xs={12}>
            <MUI.Divider className="dividor"/>
          </MUI.Grid>

          <MUI.Grid item xs={4}>
            <div className="category">
              <MUI.Typography variant="h6" className="categoryName">
                Professional experience
              </MUI.Typography>
            </div>
          </MUI.Grid>
          <MUI.Grid item xs={8} >
            <div>Company</div>
          </MUI.Grid>

          <MUI.Grid item xs={12}>
            <MUI.Divider className="dividor"/>
          </MUI.Grid>

          <MUI.Grid item xs={4}>
          <div className="category">
              <MUI.Typography variant="h6" className="categoryName">
              Skills
              </MUI.Typography>
            </div>
          </MUI.Grid>
          <MUI.Grid item xs={8} >
            <div>Skills</div>
          </MUI.Grid>

          <MUI.Grid item xs={12}>
            <MUI.Divider className="dividor"/>
          </MUI.Grid>

        </MUI.Grid>

        </div>
    </section>
  );
});

export default Resume;