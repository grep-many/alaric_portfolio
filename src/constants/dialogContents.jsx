/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router";
import { arrow } from "../assets/icons";
import { name } from "~/config";

export const dialog1 = () => (
  <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
    Hi, I'm
    <span className="font-semibold mx-2 text-white">{name}</span>
    👋
    <br />A Software Engineer from Croatia 🇭🇷
  </h1>
);

const InfoBox = ({ paragraphs = [], linkText, path }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">
      {paragraphs.map((line, i) => (
        <span key={i}>
          {line}
          {i < paragraphs.length - 1 && <br />}
        </span>
      ))}
    </p>

    <Link to={path} className="neo-brutalism-white neo-btn">
      {linkText}
      <img src={arrow} alt="arrow" className="size-4 object-contain" />
    </Link>
  </div>
);

const info = {
  1: {
    paragraphs: [
      "Worked with many companies",
      "and picked up many skills along the way",
    ],
    linkText: "Learn more",
    path: "/about",
  },

  2: {
    paragraphs: [
      "Led multiple projects to success over the years.",
      "Curious about the impact?",
    ],
    linkText: "Visit my portfolio",
    path: "/projects",
  },

  3: {
    paragraphs: [
      "Need a project done or looking for a dev?",
      "I'm just a few keystrokes away",
    ],
    linkText: "Let's talk",
    path: "/contact",
  },
};

export const dialog2 = () => <InfoBox {...info[1]} />;
export const dialog3 = () => <InfoBox {...info[2]} />;
export const dialog4 = () => <InfoBox {...info[3]} />;
