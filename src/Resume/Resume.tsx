import React from 'react';
import * as MUI from '@material-ui/core';

const Resume = React.forwardRef((props: any, ref: any) => {

  const {data} = props;
  console.log(data);

  const getEducations = data.educations.map((education:any) => {
    return (
      <div key={education.school} className="Education">
        <MUI.Typography variant="h6" className="SchoolName">{education.school}</MUI.Typography>
        <p className="MajorAndDegree">
          <span className="Major">{education.major}, </span>
          <span className="Degree">{education.degree}, </span>
          <span className="SchoolYear">{education.year}</span>
        </p>
        <div className="SchoolDescription">{education.description}</div>
      </div>
    );
  });

  const getExperience = data.experiences.map((exp: any) => {
    return (
      <div key={exp.company} className="Experience">
        <MUI.Typography variant="h6" className="CompanyName">{exp.company}</MUI.Typography>
        <MUI.Typography variant="body1" className="CompanyLocation">{exp.location}</MUI.Typography>
        <p className="PositionAndYear">
          <span className="Position">{exp.position}, </span>
          <span className="CompanyYear">{exp.year}</span>
        </p>
        <div className="CompanyDescription">{exp.description.main}</div>
      </div>
    );
  });

  const getSkills = data.skills.map((skill:any) => {
    return (
    <li key={skill.name} className='Skill'>
      <span className='SkillName'>{skill.name}</span>
      <div className='SkillbarBG'>
        <span className='Skillbar' style={{width:skill.level}}></span>
      </div>
    </li>
    );
  })

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
          <MUI.Grid item xs={8} className="Experiences">
            {getExperience}
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
          <MUI.Grid item xs={5} className="Skills">
            {getSkills}
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