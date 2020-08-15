import React from 'react';
import Home from './Home';
import About from './About';
import Footer from './Footer';

const App = () => {

  const data = {
    name: 'Qirui Hu',
    location: 'Santa Barbara',
    occupation: 'Web developer/Software engineer',
    description: 'I am studying hard on the way to be an awesome programmer.',
    socials: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/qirui-hu-1b974413/',
      },
      {
        name: 'github',
        url: 'https://github.com/Vagacoder',
      }
    ],
    profImageUrl: 'https://avatars1.githubusercontent.com/u/30400336?s=460&u=b4677559a01f461ba66dae3f04178fb24c343a09&v=4',
    biography: 'Entry level web developer/software engineer',
    email: 'qiruiuh[at]gmail[.]com',
    resumeUrl: 'https://drive.google.com/file/d/18_UDc7a7wHQ44AUjTex2QEKq1s_qdfPC/view?usp=sharing'
  };

  // ! Note: the react function component cannot get ref
  // ! must use React.forwardRef(), see Home.tsx implmentation
  let homeRef = React.createRef();
  let aboutRef = React.createRef();


  const scrollToRef = (ref:any) => {
    // console.log('ref passed in:',ref);
    // console.log('homeRef:', homeRef);
    // console.log('aboutRef:', aboutRef);
    window.scrollTo(0, ref.current.offsetTop);
  }

  const scrollToHome = () => scrollToRef(homeRef);
  const scrollToAbout = () => scrollToRef(aboutRef);

  return (
    <div className="App">
      {/* <button onClick={scrollToAbout}>GO ABOUT</button> */}
      <Home ref={homeRef} data={data} 
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          />
      <About ref={aboutRef} data={data} />
      <Footer />
    </div>
  );
}

export default App;
