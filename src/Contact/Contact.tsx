import React from 'react';
import * as MUI from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Contact = React.forwardRef((props: any, ref: any) => {


  return (
    <section id="contact" ref={ref}>
      <div>
        This is Contact
        <MUI.Grid container>
          <MUI.Grid item xs={4}>
            <FontAwesomeIcon icon={faCommentDots} className="MailIcon" />
          </MUI.Grid>
          <MUI.Grid item xs={8} className="Title">
            <MUI.Typography variant="h6">
              This page is currently under construction.
            </MUI.Typography>
            <MUI.Typography variant="h6">
              Please send me email if you need contact with me.
            </MUI.Typography>
          </MUI.Grid>

          <MUI.Grid container className="ContactTable">
            <MUI.Grid item xs={4}>
              <MUI.Typography variant="h6">
                Name *:
              </MUI.Typography>
            </MUI.Grid>
            <MUI.Grid item xs={8}>
              <MUI.TextField required id="SenderName" placeholder="Your name" variant="outlined" />
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Grid>
      </div>
    </section>
  );
}
);

export default Contact;