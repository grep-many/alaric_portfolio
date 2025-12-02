import React from "react";

const Home = React.lazy(() => import("./Home"));
const Contact = React.lazy(() => import("./Contact"));
const About = React.lazy(() => import("./About"));
const Projects = React.lazy(() => import("./Projects"));

export { Home, Contact, About, Projects };
