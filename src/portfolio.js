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
  username: "Shahid Shaikh",
  title: "Hi all, I'm Shahid",
  subTitle: emoji(
    "I am a third-year Computer Science and Finance student at Northeastern University with a strong passion for building scalable software systems and exploring the future of financial technology. My experience spans full-stack development, data engineering, and cybersecurity, enabling me to bridge the gap between technology and business innovation. Beyond academics, I thrive on collaborative problem-solving and continuously seek opportunities to apply technical solutions to real-world challenges."
  ),
  resumeLink:
    "/Shahid_Shaikh_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShahidShaikh13",
  linkedin: "https://www.linkedin.com/in/shahid-shaikh-ab1405352/",
  gmail: "shahus6003@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTER SCIENCE & FINANCE STUDENT PASSIONATE ABOUT SOFTWARE DEVELOPMENT AND CYBERSECURITY",
  skills: [
    emoji(
      "⚡ Engineered scalable web and backend applications to support thousands of daily transactions, improving system reliability and performance"
    ),
    emoji("⚡ Developed and deployed iOS apps using Swift and SwiftUI, delivering seamless user experiences with modern UI components"),
    emoji(
      "⚡ Built and automated ETL pipelines to process 50–80 data records daily, reducing manual effort by 60%"
    ),
    emoji("⚡ Conducted security testing and vulnerability assessments using Burp Suite and Python scripts, improving system security posture")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: "images/northeastern.png",
      subHeader: "Bachelor of Science in Computer Science & Finance",
      duration: "September 2023 – Present",
      desc: "Khoury College of Computer Sciences"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming Languages", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Data & Analytics",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Workflow Automation Developer Intern",
      company: "Innovive Health",
      date: "May 2024 – May 2025",
      desc: "Developed Java-based ETL pipeline for automated CSV ingestion, achieving 60% time savings. Implemented SQL scripts in PostgreSQL for data reconciliation, improving data accuracy to 99%.",
      descBullets: [
        "Developed Java-based ETL pipeline for automated CSV ingestion (60% time savings)",
        "Implemented SQL scripts in PostgreSQL for data reconciliation",
        "Improved data accuracy to 99% through robust validation",
        "Documented workflows and error-handling procedures"
      ]
    },
    {
      role: "Cybersecurity Intern",
      company: "Eslinger Consulting",
      date: "Sept 2022 – Jan 2023",
      desc: "Performed security testing using Burp Suite and developed Python scripts for vulnerability scanning. Assisted in penetration testing and audits.",
      descBullets: [
        "Performed security testing using Burp Suite",
        "Developed Python scripts for vulnerability scanning",
        "Assisted in penetration testing and audits",
        "Documented security findings and remediation strategies"
      ]
    },
    {
      role: "Computer Applications Intern",
      company: "Woburn Public Schools",
      date: "Mar 2023 – Jun 2023",
      desc: "Diagnosed and fixed hardware/software issues, reducing interruptions by 40%. Partnered with leadership to maintain campus computer labs and technology infrastructure.",
      descBullets: [
        "Diagnosed and fixed hardware/software issues, reducing interruptions by 40%",
        "Partnered with leadership to maintain campus computer labs and tech",
        "Lowered overall downtime by 25%"
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

// Projects Section

const projects = [
  {
    name: "DocuFlow",
    image: "images/projects/docuflow.png",
    tagline: "Document Automation Platform",
    description: "Built a full-stack platform for automated document processing using Next.js, Node.js, and Express.",
    tech: ["Next.js", "Node.js", "Express", "Netlify", "Render"],
    github: "https://github.com/ShahidShaikh13/DocuFlow",
    demo: "https://docuflow-demo.vercel.app"
  },
  {
    name: "NutriLens",
    image: "images/projects/nutrilens.png",
    tagline: "AI-Powered Nutrition Tracker",
    description: "iOS app for barcode scanning and food image recognition with SwiftUI and Core Data.",
    tech: ["Swift", "SwiftUI", "Core Data", "Vision API"],
    github: "https://github.com/ShahidShaikh13/NutriLens",
    demo: "https://apps.apple.com/app/nutrilens"
  }
];

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Notable Accomplishments",

  achievementsCards: [
    {
      title: "Northeastern University Dean's List",
      subtitle:
        "Consistently maintained high academic performance with GPA above 3.5",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Dean's List Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Cybersecurity Club Member",
      subtitle:
        "Active member of Northeastern University Cybersecurity Club, participating in CTF competitions and security workshops.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Cybersecurity Club",
      footerLink: [
        {
          name: "Club Website",
          url: ""
        }
      ]
    },

    {
      title: "Hackathon Participant",
      subtitle: "Participated in multiple hackathons, winning recognition for innovative solutions in healthcare and fintech.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Hackathon",
      footerLink: [
        {name: "Projects", url: ""},
        {
          name: "GitHub",
          url: "https://github.com/ShahidShaikh13"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write about technology, software development, and my learning journey.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Building Scalable ETL Pipelines with Java",
      description:
        "My experience developing automated data processing workflows and the lessons learned from building production-ready ETL systems."
    },
    {
      url: "",
      title: "SwiftUI vs UIKit: Modern iOS Development",
      description:
        "A comparison of SwiftUI and UIKit for iOS development, exploring the benefits and trade-offs of each approach."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCES WITH THE COMMUNITY 😅"
  ),

  talks: [
    {
      title: "Introduction to Cybersecurity for Beginners",
      subtitle: "Northeastern University Cybersecurity Club Workshop",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY AND SOFTWARE DEVELOPMENT",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (617) 708-4524",
  email_address: "shahus6003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
  projects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
