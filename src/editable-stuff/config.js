// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ronalda",
  middleName: "",
  lastName: "Johnson",
  message: "Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ronaldajohnson/",
    }
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
  imageLink: require("../editable-stuff/ronalda.png"),
  imageSize: 375,
  message:
    "Ronalda Johnson is a results-driven technology professional with expertise in Data Science, Machine Learning, and Software Engineering. She holds a Master’s in Data Science and a strong foundation in Python, SQL, and R. Experienced in building data-driven systems, predictive models, and automation workflows that connect technical insight to real-world outcomes. Passionate about continuous learning and leveraging data to drive innovation, efficiency, and impact across industries.",
  resume: "https://www.dropbox.com/scl/fi/w74vp8xj98s9mthrbvo4d/Ronalda_Johnson.pdf?rlkey=dn3vor1k7zvh7ka159j3vjozq&st=stb5ondn&dl=0",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Ro0628", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["ai-loan-generator"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ronalda.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ronalda.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
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
    { name: "Python", value: 85 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Go", value: 60 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 50 },
    { name: "HTML/CSS", value: 55 },
    { name: "Java", value: 75 },
    { name: "C#", value: 80 },
    { name: "R", value: 70 },
    { name: "AWS", value: 70 },
    { name: "Google Cloud Platform" , value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
    { name: "Agile Methodology", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "Please feel free to email me if you have any questions or just want to say hi!",
  email: "ronaldalajuan@gmail.com",
};

const experiences = {
  show: false,
  heading: "Professional Experience",
  data: [
    {
      role: 'Software Engineer, USAA', // Here Add Company Name
      companylogo: require('../assets/img/usaa.png'), // Here Add Company Logo
      date: 'Sep 2018 – Present',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
