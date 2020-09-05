import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
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
          school: 'Santa Barbara City College',
          major: 'Computer Science',
          degree: 'N/A',
          year: 'Aug 2017 - May 2020',
          description: 'Three wonderful years study in SBCC as a part-time student. ' +
            'The best learning time so far. Everyday I learned a lot and I do enjoy the ' +
            'the learning in computer science.'
        },
        {
          school: 'University of Hawaii at Manoa',
          major: 'Biomedical Science',
          degree: 'Ph.D',
          year: 'Aug 2001 - Dec 2006',
          description: 'Research on human inherited cardiovascular diseases.'
        },
        {
          school: 'Chinese Academy of Science, Institute of Genetices',
          major: 'Molecular Genetics',
          degree: 'Master of Science',
          year: 'Aug 1998 - Aug 2001',
          description: 'Study gene experssion regulations.'
        },
        {
          school: 'Sichuan University',
          major: 'Biotechnology',
          degree: 'Bachelor of Science',
          year: 'Aug 1994 - July 1998',
          description: 'Four years undergraduate study on biological science and its applications'
        },
      ],
      experiences: [
        {
          company: 'BloomTrac Software',
          location: 'Santa Barbara, CA',
          position: 'Web Developer Intern',
          year: 'Mar 2019 - Jan 2020',
          description: {
            main: 'Web development',
            details: [
              'Develope a new website using React and Firebase',
              'Participated in Agile development',
              'Familiar with React development using ES6, typescript, redux',
              'Hands on experience on tools such as NPM, Storybook, Bit, Netlify and CircleCI',
              'Help manager and customer designing and refining new site concepts and use cases',
              'Assist UI designing using Figma and Canva',
              'Familiar with Material-UI and SASS',
              'Implemented 5 React pages with minimum supervising',
            ]
          },
        },
        {
          company: 'UC Santa Barbara',
          location: 'Santa Barbara, CA',
          position: 'Project Scientist',
          year: 'Apr 2010 - Nov 2016',
          description: {
            main: 'Stem cell therapy for macular degeneration',
            details: [
              'Worked at Center for Stem Cell Biology and Engineering',
              'Pre-clinical and clinical stages of stem cell therapy for macular degeneration',
              'Analysis and visualize large amouts of QPCR/microarray data',
            ]
          },
        },
        {
          company: 'UC Santa Barbara',
          location: 'Santa Barbara, CA',
          position: 'Postdoctoral Fellow',
          year: 'Nov 2007 - Apr 2010',
          description: {
            main: 'Fellow of California Institute for Regenerative Medicine Training program',
            details: [
              'Researcg on human embryonic stem cell and iPS cell',
              'Collaboration with UCSB Center for Bio-Image Informatics to develop a software segregating ' +
              'overlapping cells in fluorescence microscopes',
            ]
          },
        },
      ],
      skills: [
        {
          name: 'React JS',
          level: '65%',
        },
        {
          name: 'Javascript (ES6)',
          level: '60%',
        },
        {
          name: 'Typescript',
          level: '60%',
        },
        {
          name: 'HTML and CSS',
          level: '80%',
        },
        {
          name: 'Node JS',
          level: '40%',
        },
        {
          name: 'Git',
          level: '70%',
        },
        {
          name: 'Java',
          level: '75%',
        },
        {
          name: 'Android',
          level: '50%',
        },
        {
          name: 'Python',
          level: '60%',
        },
        {
          name: 'C#/Unity Engine',
          level: '60%',
        },
        {
          name: 'Linux',
          level: '50%',
        },
        {
          name: 'C/C++',
          level: '50%',
        },
        {
          name: 'NoSQL',
          level: '60%',
        },
        {
          name: 'SQL',
          level: '50%',
        },
        {
          name: 'R',
          level: '40%',
        },
        {
          name: 'Deep Learning',
          level: '30%',
        },
      ]
    },
    projects: [
      {
        name: 'Weather App',
        link: 'https://github.com/Vagacoder/WeatherApp',
        imageUrl: 'images/weatherapp1.png',
        description: 'An experiemental Android app showing weather information in United States. ' +
          'Using Navigation Drawer, RecyclerView etc.',
      },
      {
        name: 'Duck Hunt',
        link: 'https://github.com/Vagacoder/DuckHunt',
        imageUrl: 'images/duckhunt1.png',
        description: 'Remaster 1980\'s Nitendo shooting game made using Unity Engine, with playable link',
      },
      {
        name: 'Space Shooter',
        link: 'https://github.com/Vagacoder/SpaceShooter',
        imageUrl: 'images/spaceshooter1.png',
        description: 'Spaceship shooting game made using Unity Engine, with playable link',
      },
      {
        name: 'Stripe API',
        link: 'https://github.com/Vagacoder/StripeAPIComponents',
        imageUrl: 'images/stripeapi1.png',
        description: 'A small React JS component calling Stripe.com RESTful APIs without using Stripe development tools. ' +
          'Demostrated using Storybook',
      },
      {
        name: 'Calendar Component',
        link: 'https://bit.dev/vagacoder/testing/calendar',
        imageUrl: 'images/calendar1.png',
        description: 'The Calendar is one of major React JS components on the Dashboard.' +
          ' It shows all booked events with some essential information such as event time, ' +
          'event name. It is responsive for desktop and mobile devices.',
      },
      {
        name: 'Algorithm 4th edition exercises',
        link: 'https://github.com/Vagacoder/Algorithms4E',
        imageUrl: 'images/algorithm4.png',
        description: 'Outstanding textbook for students who truely want to learn algorithm. ' +
          'It progressively introduced algorithms from easy to hard, plus a lot of online supplemental information ' +
          'and exercises.',
      },
      {
        name: 'Big Java Early Objects 6th edition',
        link: 'https://github.com/Vagacoder/BigJavaEO',
        imageUrl: 'images/bigjava6.png',
        description: 'A wonderful textbook for entry level students. It covers many aspects of ' +
          'computer science and applications.',
      },
      {
        name: 'Portfolio',
        link: 'https://github.com/Vagacoder/Personalsite',
        imageUrl: 'images/portfolio1.png',
        description: 'The source code of this website',
      },
    ],
    contact: {

    }
  };

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
