import { About, Contact, Projects } from '../pages';
import { dialog1, dialog2, dialog3, dialog4 } from './dialogContents';

const navigation = [
  {
    name: 'About',
    path: 'about',
    Page: About,
    nav: true,
  },
  {
    name: 'Projects',
    path: 'projects',
    Page: Projects,
    nav: true,
  },
  {
    name: 'Contact',
    path: 'contact',
    Page: Contact,
    nav: false,
  },
];

const InfoContent = {
  1: {
    paragraphs: [
      'Worked with many companies',
      'and picked up many skills along the way',
    ],
    linkText: 'Learn more',
    path: '/about',
  },

  2: {
    paragraphs: [
      'Led multiple projects to success over the years.',
      'Curious about the impact?',
    ],
    linkText: 'Visit my portfolio',
    path: '/projects',
  },

  3: {
    paragraphs: [
      'Need a project done or looking for a dev?',
      "I'm just a few keystrokes away",
    ],
    linkText: "Let's talk",
    path: '/contact',
  },
};

const DialogContent = {
  1: dialog1,
  2: dialog2,
  3: dialog3,
  4: dialog4,
};

export { navigation, DialogContent };
