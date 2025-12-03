import { About, Contact, Projects } from "../pages";
import { dialog1, dialog2, dialog3, dialog4 } from "./dialogContents";
import { experiences } from "./experience";
import { skills } from "./skills";
import { projects } from "./projects";
import { socialLinks } from "./social";

const navigation = [
  {
    name: "About",
    path: "about",
    Component: About,
    nav: true,
  },
  {
    name: "Projects",
    path: "projects",
    Component: Projects,
    nav: true,
  },
  {
    name: "Contact",
    path: "contact",
    Component: Contact,
    nav: false,
  },
];

const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const publicId = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const DialogContent = {
  1: dialog1,
  2: dialog2,
  3: dialog3,
  4: dialog4,
};

export {
  navigation,
  DialogContent,
  serviceId,
  templateId,
  publicId,
  socialLinks,
  skills,
  projects,
  experiences,
};
