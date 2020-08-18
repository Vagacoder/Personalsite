import React from 'react';
import Home from './Home';
import About from './About';
import Footer from './Footer';

const App = () => {

  const data = {
    name: 'Qirui Hu',
    location: 'Santa Barbara',
    occupation: 'Web developer/Software engineer',
    description1: 'I am studying hard on the way to be an awesome programmer.',
    description2: 'I keep practicing and coding something meaningful daily.',
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
    biography: 'I have been a part-time student of Santa Barbara City College ' + 
    'studying computer science for three years. I have taken all lower division ' + 
    'courses and several upper division courses including Software Engineer, ' + 
    'Design Pattern and Android Programming with an excellent grades (GPA 4.0).\n' +
    
    '    I also like to study the computer science and mathematics on my own. ' + 
    'I spent most spare time on studying many cs and math courses including ' + 
    'Operating System, Computer Network, Discrete Mathematics, Calculus, Statistics, ' + 
    'Linear Algebra, Linux, Git and Database. Currently I am studying Machine ' + 
    'Learning. I have worked on a few interesting software projects, including ' + 
    'Unity game projects and Android apps. They are all open source and available ' + 
    'on Github. In past two years, I keep practicing and coding on a daily basis. ' + 
    'Very luckily, I got a Github badge of Arctic Code Vault Contributor.\n' +
    
    '    I have work as web development intern at a local company, BloomTrac ' + 
    'Software, for about one year. My work is to develop a new version SaaS for ' + 
    'flower shop management using React JS and Firebase, as well as many other ' + 
    'tools like Redux, Storybook, Bit, Netlify and CircleCI.\n' +
    
    '    My previous background was on biomedical science, it took me great efforts ' + 
    'to switch career direction. I have done many part-time jobs in cafeteria, ' + 
    'dinning hall and labs. I have never stopped, or thought to stop pursuing my ' + 
    'goal, to be a good programmer. Although I am not a real programmer yet, I ' + 
    'believe I can do it in a not so far future.',
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
