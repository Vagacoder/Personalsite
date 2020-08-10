import React from 'react';
import Home from './Home';
import Footer from './Footer';
import * as MUI from '@material-ui/core';

const App = () => {

  const data = {
    name: 'Qirui Hu',
    location: 'Santa Barbara',
    occupation: 'Web developer/Software engineer',
    description: 'I am studying hard on the way to an awesome programmer.',
    socials: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/qirui-hu-1b974413/',
      },
      {
        name: 'github',
        url: 'https://github.com/Vagacoder',
      }
    ]
  };

  return (
    <div className="App">
      <Home data={data} />
      <MUI.Typography variant="h1">Qirui Hu's Personal Site</MUI.Typography>
      <MUI.Typography variant="h4">MainPage</MUI.Typography>
      <Footer />
    </div>
  );
}

export default App;
