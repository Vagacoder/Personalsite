import React from 'react';
import reactLogo from './react-logo.svg';
import muiLogo from './materialui-logo.png';
// import './ReactLog.css';

const ReactLog = () => {
  return (
    <div id="logs">
      <header className="react-log-header">
        <img src={reactLogo} className="react-logo" alt="react-logo" />
        <p>Powered by <b>React</b></p>
      </header>
      <header className="mui-log-header">
        <img src={muiLogo} className="mui-logo" alt='mui-logo' />
        <p>Powered by <b>Material-UI</b></p>
      </header>
    </div>
  );
}

export default ReactLog;
