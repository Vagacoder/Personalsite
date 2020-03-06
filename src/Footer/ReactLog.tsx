import React from 'react';
import logo from './react-logo.svg';
import './ReactLog.css';

const ReactLog = () => {
  return (
    <div className="ReactLog">
      <header className="log-header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Powered by <b>React</b>
        </p>
      </header>
    </div>
  );
}

export default ReactLog;
