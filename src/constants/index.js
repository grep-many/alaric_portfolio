import { About, Contact, Projects } from '../pages';

const navigation = [
  {
    name: 'About',
    path: 'about',
    Page: About,
    nav:true
  },
  {
    name: 'Projects',
    path: 'projects',
    Page: Projects,
    nav:true
  },
  {
    name: 'Contact',
    path: 'contact',
    Page: Contact,
    nav:false
  },
];

export { navigation };
