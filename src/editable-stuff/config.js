// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sudip",
  middleName: "",
  lastName: "Adhikari",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/adhikarisudip",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/adhk.sudip",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_sudipadhikari/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sudip-adhikari/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/sudipadhk/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sudip.png"),
  imageSize: 375,
  message:
    "My name is Hashir Shoaib. I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "adhikarisudip", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/sudip.png"), 
      label: "First slide label", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/sudip.png"), 
      label: "Second slide label", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "The services I offer are web development, mobile app development, UI/UX designs, electronics designs, technical content writing, and other related fields. ",
  email: "contact@sudip-adhikari.com.np",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Technical Writer at Copenned',// Here Add Company Name
      companylogo: require('../assets/img/copenned.png'),
      date: 'November 2022 – Present',
    },
    {
      role: 'CTO at Maadhyams',
      companylogo: require('../assets/img/maadhyams.png'),
      date: 'August 2020 – Present',
    },
        {
      role: 'Technical Manager at Refald Nepal',// Here Add Company Name
      companylogo: require('../assets/img/refald.png'),
      date: 'March 2021 – November 2022',
    },
        {
      role: 'Engineering intern at Nepal Telecom',// Here Add Company Name
      companylogo: require('../assets/img/ntc.png'),
      date: 'November 2019 – January 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
