import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jovani de Souza',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Jovani de Souza',
  subtitle: ' ',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'My name is Jovani de Souza, I have a BSc degree in Computer Science at Federal University of Fronteira Sul (UFFS). I currently work as Quality Assurance Analyst and Software Developer.',
  paragraphTwo:
    'I have interest in Software Development and Project Management. I also like to work with Data Analytics and Internet of Things, especially with Hardware Prototype and Smart Devices',
  paragraphThree: 'To know more, check my Socials and Portfolio below.',
  resume: 'https://github.com/jovanidesouza',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RaspLogo.png',
    title: 'RaspBox',
    info:
      "RaspBox is a Open Source Home Theater Personal Computer (HTPC) Powered by Raspberry PI. It's a Smart Device, which can be used as SmartTV, NAS Server, Retro Game Console and more.",
    info2: '',
    url: 'https://jovanidesouza.github.io/raspbox/',
    repo: 'https://github.com/jovanidesouza/raspbox',
  },
  // {
  //  id: nanoid(),
  //  img: 'project.jpg',
  //  title: 'Project Title',
  //  info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
  //  info2: '',
  //  url: '#!',
  //  repo: 'https://github.com/jovanidesouza',
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: "Let's Talk",
  email: '',
};
