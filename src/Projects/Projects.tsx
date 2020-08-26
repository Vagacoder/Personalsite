import React from 'react';
import * as MUI from '@material-ui/core';

const Projects = React.forwardRef((props: any, ref: any) => {

  const { data } = props;

  // console.log(data);

  const getProjects = data.map((project: any) => {
    return (
      <MUI.Grid item xs={4} key={project.name} className="Project">
        <div className="ProjectContainer">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img alt={project.name} src={project.imageUrl} />
            <div className="ProjectOverlay">
              <MUI.Typography variant="h6">{project.name}</MUI.Typography>
              <div className="ProjectDesciption">{project.description}</div>
            </div>
          </a>
        </div>
      </MUI.Grid>
    );
  });


  return (
    <section id="projects" ref={ref}>
      <div>
        <MUI.Typography variant="h6" className="ProjectsTitle">CHECK OUT MY WORKS</MUI.Typography>
        <MUI.Grid container spacing={4} >
          {getProjects}
        </MUI.Grid>

      </div>
    </section>
  );
})

export default Projects;
