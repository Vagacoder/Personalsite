import React from 'react';
import ReacLoag from './ReactLog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = (props: any) => {

  const { scrollToHome } = props;

  return (
    <div>
      <div className="ScrollHome">
        <div onClick={scrollToHome}>
          <FontAwesomeIcon className="ScrollHomeButton" icon={faChevronCircleUp} />
        </div>
      </div>
      <ReacLoag />
    </div>
  );
};

export default Footer;