import React from 'react';
import * as MUI from '@material-ui/core';

const Projects = React.forwardRef((props: any, ref: any) => {

  const {data} = props;

  console.log(data);

  const getProjects = data.map((project:any)=>{
    return (
      <MUI.Grid item xs={4} key={project.name}>
        <span>{project.name}</span>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img alt={project.name} src={project.imageUrl} />
          <div className="ProjectOverlay">
            {project.description}
          </div>
        </a>
      </MUI.Grid>
    );
  });


  return (
    <section id="projects" ref={ref}>
      <div>
        This is projects
        <MUI.Grid container spacing={2} >
            {getProjects}
        </MUI.Grid>

      </div>
    </section>
  );
})

export default Projects;
