import React from 'react';
import * as MUI from '@material-ui/core';

const Contact = React.forwardRef((props: any, ref: any) => {


  return (
    <section id="contact" ref={ref}>
      <div>
        This is Contact
        <MUI.Grid container>
          <MUI.Grid item xs={12}>
            <div>
              Icon
            </div>
            <div>
              Please leave your information and message below
            </div>
          </MUI.Grid>
          <MUI.Grid container>
            <MUI.Grid item xs={4}>
              Side bar
            </MUI.Grid>
            <MUI.Grid item xs={8}>
              Form here
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Grid>
      </div>
    </section>
  );
}
);

export default Contact;