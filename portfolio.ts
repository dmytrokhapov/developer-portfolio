import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Dmytro Khlapov",
  title: "Hi all, I'm Dmytro",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "dmytrokhapov",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  github: "https://github.com/dmytrokhapov",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "DEDICATED FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive SPA & PWA in React, Vue and Angluar"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs & PHP and Python Framework"),
        emoji("⚡ Building RESTful APIs Javascript Framework such as Express.js and Nest.js"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Back-End",
    progressPercentage: "95",
  },
  {
    Stack: "Front-End",
    progressPercentage: "90",
  },
  {
    Stack: "DevOps", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Maastricht University",
    subHeader: "Bachelor of Computer Science (BCompSc)",
    duration: "September 2010 - April 2014",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Maastricht University",
    subHeader: "Master of Computer Science (MSCS), Computer",
    duration: "September 2014 - April 2016",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Adyen",
    companyLogo: "/img/icons/common/Adyen.png",
    date: "Oct 2016 - Feb 2022",
    desc: "Adyen is a software development company that emphasizes transparency \
          in communication and delivering products that clients love. I worked as \
          a full stack developer. Tech Stack: PHP/Laravel, JQuery, React, NodeJS, \
          and React Native.",
  },
  {
    role: "Frontend & Mobile Developer",
    company: "MKSK Consulting",
    companyLogo: "/img/icons/common/mksk.webp",
    date: "Feb 2022 - May 2023",
    desc: "I have contributed to the serveral projects as a frontend developer. \
          The projects were almost related to React/Redux, Tailwind CSS, and React Native. \
          Tauri framework, Laravel.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Backend Developer",
    company: "Reson",
    companyLogo: "/img/icons/common/reson.png",
    date: "Jun 2023 - Feb 2024",
    desc: "This project is a social website that lets \
          local job seekers and job posters connect with \
          each other. I had been charged with the communication \
          engine of the project as a backend developer. \
          I used the NextJS API and Socket.io for this role.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Implementation of the Voice/Video call",
    desc: "The task is the implementation of the voice/video call. \
          I implemented peer-to-peer real-time voice/video call using WebRTC, \
          and I secure the connections using SSL, as well as private and public chat.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://reson.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at MKSK Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Konstantin Pohodin",
    role: "CEO at Reson",
    feedback:
      "Dmytro has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "PM at Adyen Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Dmytro Khlapov",
  description: greetings.description,
  author: "Dmytro Khlapov",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Dmytro Khlapov",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Dmytro Khlapov Portfolio",
  ],
};
