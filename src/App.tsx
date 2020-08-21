import React from 'react';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Footer from './Footer';

const App = () => {

  const data = {
    home: {
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
      ]
    },
    about: {
      profImageUrl: 'https://avatars1.githubusercontent.com/u/30400336?s=460&u=b4677559a01f461ba66dae3f04178fb24c343a09&v=4',
      biography: 'I have been a part-time student of Santa Barbara City College ' +
        'studying computer science for three years. I have taken all lower division ' +
        'courses and several upper division courses including Software Engineer, ' +
        'Design Pattern and Android Programming with excellent grades (GPA 4.0).\n' +

        '    I also like to study the computer science and mathematics on my own. ' +
        'I spent most of spare time on studying many cs and math courses including ' +
        'Operating System, Computer Network, Discrete Mathematics, Calculus, Statistics, ' +
        'Linear Algebra, Linux, Git and Database. Currently I am studying Machine ' +
        'Learning. I have worked on a few interesting software projects, including ' +
        'Unity game projects and Android apps. They are all open source and available ' +
        'on Github. In the past two years, I keep practicing and coding on a daily basis. ' +
        'Very luckily, I got a Github badge of Arctic Code Vault Contributor.\n' +

        '    I have work as web development intern at a local company, BloomTrac ' +
        'Software, for about one year. My work is to develop a new version SaaS for ' +
        'flower shop management using React JS and Firebase, as well as many other ' +
        'tools like Redux, Storybook, Bit, Netlify and CircleCI.\n' +

        '    My previous background was in biomedical science, it took me great efforts ' +
        'to switch career direction. I have done many part-time jobs in cafeteria, ' +
        'dinning hall and labs. I have never stopped or thought to stop pursuing my ' +
        'goal, to be a good programmer. Although I am not a real programmer yet, I ' +
        'believe I can do it in a not so far future.',
      email: 'qiruihu[at]gmail[.]com',
      resumeUrl: 'https://drive.google.com/file/d/18_UDc7a7wHQ44AUjTex2QEKq1s_qdfPC/view?usp=sharing'
    },
    resume: {
      educations: [
        {
          school:'Santa Barbara City College',
          major: 'Computer Science',
          degree: 'N/A',
          year: 'Aug 2017 - May 2020',
          description: 'Three wonderful years study in SBCC as a part-time student. '+ 
          'The best learning time in my life. Everyday I learned a lot.'
        },
        {
          school:'University of Hawaii at Manoa',
          major: 'Biomedical Science',
          degree: 'Ph.D',
          year: 'Aug 2001 - Dec 2006',
          description: 'Study human inherited cardiovascular diseases'
        },
        {
          school:'Chinese Academy of Science, Institute of Genetices',
          major: 'Molecular Genetics',
          degree: 'Master of Science',
          year: 'Aug 1998 - Aug 2001',
          description: 'Study gene experssion regulation'
        },
        {
          school:'Sichuan University',
          major: 'Biotechnology',
          degree: 'Bachelor of Science',
          year: 'Aug 1994 - July 1998',
          description: ''
        },
      ],
      experiences:[
        {
          company:'BloomTrac Software',
          location:'Santa Barbara, CA',
          position:'Web Developer Intern',
          year:'Mar 2019 - Jan 2020',
          description:{
            main: 'Web development',
            details:[
              'React and Firebase',
              'ES6, typescript, redux',
            ]
          },
        },
        {
          company:'UC Santa Barbara',
          location:'Santa Barbara, CA',
          position:'Project Scientist',
          year:'Apr 2010 - Nov 2016',
          description:{
            main: 'Stem cell therapy',
            details:[
              'Center for Stem Cell Biology and Engineering',
              'Visualize QPCR/microarray data',
            ]
          },
        },
        {
          company:'UC Santa Barbara',
          location:'Santa Barbara, CA',
          position:'Postdoctoral Fellow',
          year:'Nov 2007 - Apr 2010',
          description:{
            main: 'Fellow of California Institute for Regenerative Medicine Training program',
            details:[
              'UCSB Center for Bio-Image Informatics',
              'Human embryonic stem cell and iPS cell',
            ]
          },
        },
      ],
      skill:[

      ]
    },
    projects: {

    },
  };

  // ! Note: the react function component cannot get ref
  // ! must use React.forwardRef(), see Home.tsx implmentation
  let homeRef = React.createRef();
  let aboutRef = React.createRef();
  let resumeRef = React.createRef();


  const scrollToRef = (ref: any) => {
    // console.log('ref passed in:',ref);
    // console.log('homeRef:', homeRef);
    // console.log('aboutRef:', aboutRef);
    window.scrollTo(0, ref.current.offsetTop);
  }

  const scrollToHome = () => scrollToRef(homeRef);
  const scrollToAbout = () => scrollToRef(aboutRef);
  const scrollToResume = () => scrollToRef(resumeRef);

  return (
    <div className="App">
      {/* <button onClick={scrollToAbout}>GO ABOUT</button> */}
      <Home ref={homeRef} data={data.home}
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToResume={scrollToResume}
      />
      <About ref={aboutRef} data={data.about} />
      <Resume ref={resumeRef} data={data.resume} />
      <Footer />
    </div>
  );
}

export default App;
