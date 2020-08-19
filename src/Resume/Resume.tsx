import React from 'react';
import * as MUI from '@material-ui/core';

const Resume = React.forwardRef((props: any, ref: any) => {

  const {data} = props;
  console.log(data);

  return (
    <section id="resume" ref={ref}>
      <div>
        Resume is here
        <MUI.Grid container >
          <MUI.Grid item xs={5}>
            <div>Education</div>
          </MUI.Grid>
          <MUI.Grid item xs={7}>
            <div>University</div>
          </MUI.Grid>
        </MUI.Grid>

        </div>
    </section>
  );
});

export default Resume;