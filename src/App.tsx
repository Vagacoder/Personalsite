import React from 'react';
import ReactLog from './ReactLog';
import * as MUI from '@material-ui/core';

const App = () => {
  return (
    <div className="App">
      <MUI.Typography variant="h1">Qirui Hu's Personal Site</MUI.Typography>
      <MUI.Typography variant="h4">MainPage</MUI.Typography>
      <ReactLog />
    </div>
  );
}

export default App;
