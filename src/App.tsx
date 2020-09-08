import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { data } from './data';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {

  // ! Example: create global theme for whole app, 
  // ! See Home.tsx how to access theme from style
  const theme = createMuiTheme({
    palette: {
      // type: 'dark',
      primary: {
        // light: "#6eaffa", // will be calculated from palette.primary.main,
        main: "#328cf3",
        // dark: "#0c67ce"
      },
      secondary:{
        main: "#80deea",
      }
    }
  })

  // ! Note: the react function component cannot get ref
  // ! must use React.forwardRef(), see Home.tsx implmentation
  let homeRef = React.createRef();
  let aboutRef = React.createRef();
  let resumeRef = React.createRef();
  let projectsRef = React.createRef();
  let contactRef = React.createRef();


  const scrollToRef = (ref: any) => {
    // console.log('ref passed in:',ref);
    // console.log('homeRef:', homeRef);
    // console.log('aboutRef:', aboutRef);
    window.scrollTo(0, ref.current.offsetTop);
  }

  const scrollToHome = () => scrollToRef(homeRef);
  const scrollToAbout = () => scrollToRef(aboutRef);
  const scrollToResume = () => scrollToRef(resumeRef);
  const scrollToProjects = () => scrollToRef(projectsRef);
  const scrollToContact = () => scrollToRef(contactRef);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home ref={homeRef} data={data.home}
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToResume={scrollToResume}
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
        <About ref={aboutRef} data={data.about} />
        <Resume ref={resumeRef} data={data.resume} />
        <Projects ref={projectsRef} data={data.projects} />
        <Contact ref={contactRef} data={data.contact} />
        <Footer scrollToHome={scrollToHome} />
      </div>
    </ThemeProvider>
  );
}

export default App;
