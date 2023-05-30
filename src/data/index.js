import { BsFillPersonFill, BsTwitter } from "react-icons/bs";
import { FaLightbulb, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

export const landingPageSections = new Map([
   [
      "about",
      {
         link: "#about",
         Icon: BsFillPersonFill,
      },
   ],
   [
      "projects",
      {
         link: "#projects",
         Icon: FaLightbulb,
      },
   ],
   [
      "skills",
      {
         link: "#skills",
         Icon: GiBrain,
      },
   ],
]);

export const mySocialMedias = [
   ["linkedin", { link: "https://www.linkedin.com/in/el-mehdi-essaadi", Icon: FaLinkedinIn }],
   ["github", { link: "https://github.com/EL-MEHDI-ESSAADI", Icon: FaGithubAlt }],
   ["twitter", { link: "https://twitter.com/Von__Mehdi", Icon: BsTwitter }],
];

export const myEmailLink = "mehdiessaadion@gmail.com";

export const projectsData = {
   primary: [
      {
         name: "Voneet",
         descriptiveName: "Twitter Tool",
         projectSectionId: "twitter-tool",
         description: `Voneet is a Twitter tool that has some new Twitter features, like configuring welcome messages and 
         searching for spaces. I 
         <a target="_blank" rel="noreferrer" href="https://devpost.com/software/voneet">participated</a>
         with it in the 
         <a target="_blank" rel="noreferrer" href="https://chirpdevchallenge.devpost.com">Chirp challenge</a>.`,
         usedTechnologies:
            "Twitter Api - React - NodeJS - Express - MonogoDB - Styled Componets - Bootstrap - React Bootstrap - React Testing Library",
         demoLink: "https://voneet.mehdiessaadi.live",
         githubRepoLink: "https://github.com/EL-MEHDI-ESSAADI/Voneet",
         imgName: "voneetProject",
         imgWidth: "1115",
         imgHight: "689",
         showAsLinkInAboutSection: true,
         id: 0,
      },
      {
         name: "Quran For You",
         descriptiveName: "Quran Player",
         projectSectionId: "quran-player",
         description:
            "Quran For You is a web app for reading and listening to Qur'an, the app has several translations and reciters.",
         usedTechnologies: "React js - React Router Dom - Scss",
         demoLink: "https://quran.mehdiessaadi.live",
         githubRepoLink: "https://github.com/EL-MEHDI-ESSAADI/Quran-Player",
         imgName: "quranProject",
         imgWidth: "1351",
         imgHight: "683",
         showAsLinkInAboutSection: true,
         id: 1,
      },
   ],
   secondary: [
      {
         name: "Get Recipe",
         description: "A web app that lets you search for your desired recipe by the meal's name.",
         projectSectionId: "get-recipe",
         usedTechnologies: "React Js - Scss",
         demoLink: "https://get-recipe-now.netlify.app",
         githubRepoLink: "https://github.com/EL-MEHDI-ESSAADI/Recipe_App",
         id: 2,
      },
      {
         name: "Coffee Shop",
         descriptiveName: "Coffee Shop",
         projectSectionId: "coffee-shop",
         description: "A landing page for a coffee shop",
         usedTechnologies: "Vanilla Js - Scss",
         demoLink: "https://coffee.mehdiessaadi.live",
         githubRepoLink: "https://github.com/EL-MEHDI-ESSAADI/Coffee-Shop",
         showAsLinkInAboutSection: true,
         id: 3,
      },
      {
         name: "SUBLIME",
         description: "A dark theme template designed for creative agencies.",
         projectSectionId: "sublime",
         usedTechnologies: "Vanilla Js - Scss",
         demoLink: "https://sublime.mehdiessaadi.live",
         githubRepoLink: "https://github.com/EL-MEHDI-ESSAADI/SUBLIME-TEMPLATE",
         id: 4,
      },
   ],
};

export const mentionedProjectsInAbout = [
   ...projectsData.primary.filter(({ showAsLinkInAboutSection }) => showAsLinkInAboutSection),
   ...projectsData.secondary.filter(({ showAsLinkInAboutSection }) => showAsLinkInAboutSection),
];

export const mySkills = [
   {
      name: "HTML5",
      imgName: "html",
   },
   {
      name: "CSS3",
      imgName: "css",
   },
   {
      name: "Sass",
      imgName: "sass",
   },
   {
      name: "JavaScript",
      imgName: "javascript",
   },
   {
      name: "TypeScript",
      imgName: "typescript",
   },
   {
      name: "React JS",
      imgName: "react",
   }
   ,{
      name: "Next JS",
      imgName: "next",
   }
   ,{
      name: "React Native",
      imgName: "react",
   }
   ,{
      name: "Tailwind",
      imgName: "tailwind",
   },
   {
      name: "Bootstrap",
      imgName: "bootstrap",
   },
   {
      name: "Styled Components",
      imgName: "styled-components",
   },
   {
      name: "Git",
      imgName: "git",
   },
]
