import React from 'react';
import logo from './logo.svg';
import './ReactLog.css';

const ReactLog = () => {
  return (
    <div className="ReactLog">
      <header className="log-header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Powered by <b>React</b>
        </p>
        <a
          className="React-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ReactLog;
