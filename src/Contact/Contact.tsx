import React from 'react';
import * as MUI from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Contact = React.forwardRef((props: any, ref: any) => {


  return (
    <section id="contact" ref={ref}>
      <div>
        <MUI.Grid container className="ContactContainer">
          <MUI.Grid item xs={12} sm={4} className="LeftColumn">
            <FontAwesomeIcon icon={faCommentDots} className="MailIcon" />
          </MUI.Grid>
          <MUI.Grid item xs={12} sm={8} className="Title RightColumn">
            <MUI.Typography variant="h6">
              This page is currently under construction.
            </MUI.Typography>
            <MUI.Typography variant="h6">
              Please send me email if you need contact with me.
            </MUI.Typography>
          </MUI.Grid>

          <MUI.Grid container className="ContactTable">
            <MUI.Grid item xs={4} className="LeftColumn">
              <MUI.Typography variant="h6">
                Name *
              </MUI.Typography>
            </MUI.Grid>
            <MUI.Grid item xs={8} className="RightColumn">
              <MUI.TextField required id="SenderName" placeholder="Your name" variant="outlined" />
            </MUI.Grid>

            <MUI.Grid item xs={4} className="LeftColumn">
              <MUI.Typography variant="h6">
                Email *
              </MUI.Typography>
            </MUI.Grid>
            <MUI.Grid item xs={8} className="RightColumn">
              <MUI.TextField required id="SenderEmail" placeholder="Your Email" variant="outlined" />
            </MUI.Grid>

            <MUI.Grid item xs={4} className="LeftColumn">
              <MUI.Typography variant="h6">
                Subject
              </MUI.Typography>
            </MUI.Grid>
            <MUI.Grid item xs={8} className="RightColumn">
              <MUI.TextField id="Subject" variant="outlined" />
            </MUI.Grid>

            <MUI.Grid item xs={4} className="LeftColumn">
              <MUI.Typography variant="h6">
                Message *
              </MUI.Typography>
            </MUI.Grid>
            <MUI.Grid item xs={8} className="RightColumn">
              <MUI.TextField required multiline id="SenderName" variant="outlined" />
            </MUI.Grid>

            <MUI.Grid item xs={4} className="LeftColumn"></MUI.Grid>
            <MUI.Grid item xs={8} className="RightColumn">
              <MUI.Button>Submit</MUI.Button>
            </MUI.Grid>

          </MUI.Grid>
        </MUI.Grid>
      </div>
    </section>
  );
}
);

export default Contact;