import React from 'react';
import Footer from './Footer';
import * as MUI from '@material-ui/core';

const App = () => {
  return (
    <div className="App">
      <MUI.Typography variant="h1">Qirui Hu's Personal Site</MUI.Typography>
      <MUI.Typography variant="h4">MainPage</MUI.Typography>
      <Footer />
    </div>
  );
}

export default App;
