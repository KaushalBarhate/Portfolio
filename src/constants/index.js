import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 bosch,bhai,surya,
  carrent,
  jobit,
  threejs,
  python,
  firebase
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "ML Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Summer Intern",
    company_name: "Bosch India",
    icon: bosch, // You need to provide the appropriate icon
    date: "May 2023 - June 2023",
    points: [
      "Developed a graph conversion tool using VBA to automate the plotting of graphs for millions of data points.",
      "Implemented a comprehensive table generation feature with knee point and jump calculations for data analysis.",
      "Streamlined iSTAR request tracking and reporting through Automation Anywhere, extracting data, processing it in Excel, generating reports, and emailing stakeholders.",
      "Worked on the Zeegma project to digitalize checklists using JavaScript.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Backend Helping AI",
    icon: bhai, // You need to provide the appropriate icon
    date: "Jan 2022 – May 2023",
    points: [
      "Led the development of a web3 game marketplace for a US-based client using React, Redux, and Sanity, allowing users to buy games with crypto, featuring separate game pages, bookmarks, and a unique carousel for featured games.",
      "Developed decentralized application with real-time graph database and express-based relay nodes, utilizing Svelte for frontend and svelte-web3 for Metamask integration and NFT retrieval.",
      "Spearheaded an experimental project called Lipi, a smart contract deployer for Ethereum/Polygon mainnet and testnet.",
      "Implemented Family Tree NFT generator with Nextjs and breadth-first search algorithm to store tree structure, using Firebase to convert generated tree images to NFTs.",
      "Integrated Tilt Five SDK in Unity to develop an augmented reality application for immersive viewing of AI-generated images using C#.",
      "Web scraped 40-50k images with icrawler and filtered out similar images with difOy package using data mining and machine learning techniques.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Surya Nestbuild Limited",
    icon: surya, // You need to provide the appropriate icon
    date: "May 2021 – July 2021",
    points: [
      "Developed a dynamic and user-friendly website to showcase all construction projects, including news and blog articles relevant to the company.",
      "Created a secure admin page to allow existing staff to easily edit projects, blogs, and news articles on the website.",
      "Developed a super admin page to generate and revoke login credentials for the admin page, providing additional security and control over website content management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AiBlocks",
    description:
      "Developed a web-based AI image generator that utilizes stable diffusion models to generate unique and artistic images. Implemented a credit system and token gating system for exclusive model access.",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "Chakra UI", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "Web3", color: "blue-text-gradient" },
      { name: "Deep Learning", color: "green-text-gradient" },
      // Add other technologies if needed
    ],
    image: "./demo/aiblocksdemo.png", // Replace with the correct variable or URL
    source_code_link: "https://aiblocks.app",
  },
  {
    name: "BlockSafe",
    description:
      "A Web3 app built in 48 hours during the HackKnight Hackathon to minimize fraudulent certificates by deploying them as NFTs in the Blockchain.",
    tags: [
      { name: "NodeJS", color: "blue-text-gradient" },
      { name: "ExpressJS", color: "green-text-gradient" },
      { name: "Solidity", color: "pink-text-gradient" },
    ],
    image: "./demo/blocksafedemo.png", // Replace with the correct variable or URL
    source_code_link: "https://github.com/KaushalBarhate/BlockSafe", // Update with correct link
  },
  {
    name: "EcoScript Programming Language",
    description:
      "A pioneering programming language designed with sustainability in mind. Supports arithmetic operations, control flow, and calculates energy consumption and carbon footprint.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
    ],
    image: "./demo/ecoscriptdemo.png", // Replace with the correct variable or URL
    source_code_link: "https://ecoscript.vercel.app/",
  },
  {
    name: "Chalkmomentlogger",
    description:
      "A lightweight Node.js module that provides easy logging functionalities, allowing output to console and optional save to a log file.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      // Add other technologies if needed
    ],
    image: "./demo/chalkmomentdemo.png", // Replace with the correct variable or URL
    source_code_link: "https://www.npmjs.com/package/chalkmomentlogger",
  },
  {
    name: "Mstar-sar",
    description:
      "Achieved maximum accuracy for mstar dataset using 5 deep learning pre-trained models.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Deep Learning", color: "green-text-gradient" },
    ],
    image: "./demo/mstardemo.jpg", 
    source_code_link: "https://github.com/KaushalBarhate/MStar-SAR",
  },
  {
    name: "Family Tree",
    description:
      "NFT generator with Nextjs and a breadth-first search algorithm to store tree structure, using Firebase to convert generated tree images to NFTs.",
    tags: [
      { name: "Nextjs", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      
    ],
    image: "./demo/familytreedemo.png", // Replace with the correct variable or URL
    source_code_link: "https://github.com/KaushalBarhate/Family-Tree-NFT",
  },
  {
    name: "TeamsOCR",
    description:
      "Python project to automatically capture screenshots of Microsoft Teams meetings, crop images with OpenCV, and extract text with pytesseract for OCR.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "OCR", color: "pink-text-gradient" },
    ],
    image: "./demo/teamsocrdemo.png", // Replace with the correct variable or URL
    source_code_link: "https://github.com/KaushalBarhate/TeamsOCR",
  }
  
 ];


export { services, technologies, experiences, testimonials, projects };
