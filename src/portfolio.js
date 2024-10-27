/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naman",
  title: "Hi,I'm Naman Jain",
  subTitle: emoji(
    "A passionate Software and Product Developer 🌟 skilled in gathering requirements, leading stakeholder meetings, and developing prototypes with a customer-centric approach. With strong communication skills and a solid foundation in finance, I'm well-prepared to bring value in roles like finance advisor, combining strategic insights with hands-on development."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=18O37Zp3c0tvGpZNTVs9S6JxqJH-0ficZ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jain-Naman-V",
  linkedin: "https://www.linkedin.com/in/naman-jain-7bab08225/",
  gmail: "namanvjain456@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  instagram: "https://www.instagram.com/___naman__jain/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate software developer eager to explore diverse tech stacks, adapt at understanding user requirements, and skilled in persuading stakeholders to align with innovative solutions for impactful and efficient project outcomes",
  skills: [
    emoji(
      "⚡ Develop highly interactive software with customer centric approach and also able to  take critical decision for business requirements"
    ),
    emoji("⚡ Highly motivated and  passionate about learning new technologies"),
    emoji(
      "⚡ Integration of third party services and libraries with checking their flaws which cause security concern also"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fa-solid fa-c++"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/VITLOGO.png"),
      subHeader: "B.Tech in Computer Science",
      duration: "Sep 2021 - May 2025",
      desc: "CGPA:8.98",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Hebron Secondary  and Higher Secondary School",
      logo: require("./assets/images/Hebron.jpeg"),
      subHeader: "Higher Secondary Certificate (HSC) - Science",
      duration: "2021",
      desc: "Percentage:81.69%",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DSA",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer and Data Analytics Intern",
      company: "Archplus Pvt  Ltd",
      companylogo: require("./assets/images/arch.png"),
      date: "Aug 2023 – Oct 2023",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Engineered a healthcare web app using HTML, CSS, JS, and React, solving complex integration challenges and  leading to a 30% increase in sales and a 25% boost in operational efficiency",
        "Developed a predictive analytics model to forecast sales and revenue utilizing linear regression, XGBoost, and LSTM models, aiding strategic planning.",
        "Presented data-driven insights to stakeholders, influencing key business decisions and optimizing processes."
      ]
    },
    {
      role: "Secure Message and File Passing Over Insecure Channel",
      company: "VITSHARE",
      companylogo: require("./assets/images/crypt.png"),
      date: "JAN 2024 – APR 2024",
      descBullets: [
        "Developed a web application to securely pass messages and files using end-to-end encryption based on the RSA cryptosystem",
        "Implemented key pair generation for secure communication and ensured data integrity by allowing verification of files from untrusted sources.",
        "Ensured CIA (Confidentiality, Integrity, Availability) principle and mitigated privacy risks when sharing files/messages over insecure channels"
      ]
      
    },
    {
      role: "WebProgramming Project",
      company: "VITBNB",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "MAR 2024 – MAY 2024",
      descBullets: [
        "Designed and developed a platform inspired by Airbnb, enabling users to list, rent, and purchase product for VIT",
        "Integrated secure transaction processing and real-time communication, increasing reliability and user engagement",
        "Optimized the platform’s performance, resulting in a 20% improvement in load times and user engagement"
      ]
    
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH AND HELP IN THEIR FINANCES",
  projects: [
    {
      image: require("./assets/images/vaizar.png"),
      projectName: "Vaizar",
      projectDesc: "Empowering Trade to Connect Millions.Your trusted platform to connect with reliable manufacturers and clients.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.vaizar.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/medisynch.png"),
      projectName: "Medisynch",
      projectDesc: "Medi-Synch provides standardized doctor patient information delivery making healthcare more accessible and hassle free for consumers and doctors alike",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.medisynch.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Winner of BigBangBoom Cyber Hackathon",
      subtitle:
        "First position among  participants of four campus of VIT in the BigBangBoom Cyber Hackathon",
      image: require("./assets/images/bigbang.avif"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLX"
        },
        
      ]
    },
    {
      title: "Data Analytics  with Python ",
      subtitle:
        "Complete Data Analytics with Python in IIT Madras through NPTEL with ⚡Elite Certificate",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1cBcA7Sz_0yMhcQRcfTg5UMxk83jh6FL_/view?usp=drive_link"
        }
      ]
    },

    {
      title: "C++,C,Python",
      subtitle: "Completed Certification from IIT-Bombay for c,c++,python",
      image: require("./assets/images/iitbomb.png"),
      imageAlt: "IITBOMBAY",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1j7635hU9Gm08InatfnCSD-Rd3AcZxM2r/view?usp=drive_link"},
        {
          name: "Certificates",
          url: "https://drive.google.com/file/d/1ZgrjFnZo8vvzACpzbt-LZMwSot-8PMgI/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing software ,I would  love to read financial blogs and book also.Some of my fav books are 'How I made $2million' ,'The Hard Things About Hard Thing','Rich Dad Poor Dad'.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "HealthTrack: Integrated Lifestyle Monitoring and AI-Powered Healthcare",
      subtitle: "YUVA VIT's CODE 2 CAREER",
      slides_url: "https://bit.ly/code2career",
      event_url: "https://www.facebook.com"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};
const contactInfo = {
  display: true, // Set to true to display contact info
  title: "Get in Touch",
  subtitle: "Feel free to reach out!",
  subtitle:"Number:7990451522", // Ensure this is a valid string
  //subtitle:"email_address: namanvjain456@gmail.com", // Ensure this is a valid string
};
/*const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7990451522",
  email_address: "namanvjain456@gmail.com",
  display:true
};*/

// Twitter Section

const twitterDetails = {
  userName: "cryptdarkhorse", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
