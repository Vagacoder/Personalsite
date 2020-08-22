import React from 'react';
import * as MUI from '@material-ui/core';

const Projects = React.forwardRef((props: any, ref: any) => {

  return (
    <section id="projects" ref={ref}>
      <div>
        This is projects
        <MUI.Grid container >

        </MUI.Grid>

      </div>
    </section>
  );
})

export default Projects;
