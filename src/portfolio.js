/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation'; // Rename to your file name for custom animation

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
  /* Your Summary And Greeting Section */
  username: "Miguel G.",
  title: "Hola, soy Miguel",
  subTitle: emoji("Ing. Civil en Informática 🖥️, con experiencia en desarrollo de aplicaciones móviles y web. Poseo conocimientos en JavaScript / Node.js / TypeScript / PHP / ionic."),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  // Instagram and Twitter are also supported in the links!
  github: "https://github.com/MiguelGonzalezAravena",
  linkedin: "https://www.linkedin.com/in/miguel-gonz%C3%A1lez-aravena-82878327/",
  gmail: "contacto@miguelgonzaleza.com",
  gitlab: "https://gitlab.com/MiguelGonzalezAravena",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  display: true,
  title: "Habilidades",
  subTitle: "Algunas tecnologías con las cuales he trabajado.",
  skills: [
    emoji("🌐 Desarrollo de páginas webs personales y para empresas"),
    emoji("📱 Desarrollo de aplicaciones móviles híbridas"),
    emoji("🔌 Integración de servicios de terceros como Firebase / OneSignal / Heroku / Sendgrid"),
    emoji("📨 Publicidad mediante correos masivos a través de Mailchimp / SendinBlue")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MSSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  title: "Educación",
  schools: [
    {
      schoolName: "Universidad de Valparaíso",
      logo: require("./assets/images/uv_logo.png"),
      subHeader: "Ingeniería Civil en Informática",
      duration: "Marzo 2012 - Diciembre 2017",
      desc: "Mención en Gestión de Proyectos de Software",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ionic",
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Front-end/Diseño",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Back-end",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  title: "Experiencia",
  experience: [
    {
      role: "Desarrollador web",
      company: "Datactil",
      companylogo: require("./assets/images/datactil_logo.jpg"),
      date: "Feb 2015 – Oct 2016",
      desc: "Primera práctica profesional de Ingeniería Civil en Informática.",
      descBullets: [
        "Proyecto Nimbu.travel: Desarrollo de dashboard, donde se muestran estadísticas de uso de tótem interactivo Nimbu.travel. Proyecto usado en turismo, trabajando en conjunto al Servicio Nacional de Turismo de Aysén.",
      ]
    },
    {
      role: "Desarrollador web",
      company: "Universidad de Valparaíso",
      companylogo: require("./assets/images/uv_logo.png"),
      date: "Oct 2016 – Jun 2017",
      desc: "Ayudante",
      descBullets: [
        "Proyecto 30mil ideas del Ministerio de Obras Públicas.",
        "Proyecto UVA 1409: STEM. Diseño e implementación de una estrategia para la evaluación y fortalecimiento continuo de competencias STEM."
      ]
    },
    {
      role: "Ingeniero de Software",
      company: "Universidad de Valparaíso",
      companylogo: require("./assets/images/uv_logo.png"),
      date: "Jul 2017 – Feb 2021",
      desc: "Desarrollador de aplicaciones móviles, y páginas webs referentes a la Universidad. Trabajo en conjunto al Banco Santander.",
      descBullets: [
        "Proyecto Observatorio TUI: Centro de Innovación de la Universidad de Valparaíso.",
        "Proyecto AppTUI UV: Aplicación móvil para estudiantes de pregrado.",
        "Proyecto AppTUI Académicos UV: Aplicación móvil para académicos."
      ]
    },
    {
      role: "Full-stack Developer",
      company: "ACID Labs",
      companylogo: require("./assets/images/acidlabs_logo.jpeg"),
      date: "Feb 2021 – Mar 2022",
      desc: "Desarrollador de back-end y front-end para cliente BancoEstado.",
      descBullets: [
        "Desarrollo del flujo de login de la Nueva Web Minorista de BancoEstado.",
        "Desarrollo del nuevo flujo de primera conexión de cliente + integración de servicios de autenticación.",
        "Integración de servicios externos SMS(Salesforce).",
        "Integración de servicios internos del Banco(trazas)."
      ]
    },
    {
      role: "Technical Lead",
      company: "Empresas Gasco S.A.",
      companylogo: require("./assets/images/gasco_logo.png"),
      date: "Mar 2022 – Actualidad",
      desc: "Líder técnico en proyectos de Desarrollo de Software.",
      descBullets: [
        "Liderar y redactar tareas técnicas a nivel de back-end y front-end.",
        "Automatización de tareas repetitivas.",
        "Diseño de soluciones técnicas.",
        "Integración de servicios de proveedores externos.",
        "Integración con interfaces en SAP.",
        "Desarrollo de proyectos base de front-end.",
        "Desarrollo de arquetipo de proyectos.",
        "Desarrollo de jobs a nivel de back-end.",
        // "Proyecto GascoPacks: Plataforma integrada para la gestión de descuentos en recargas de gas, que automatiza procesos de compra, contabilidad y pagos a distribuidores mediante la conexión con sistemas como Gasconnect y SAP.",
        "Proyecto GascoPacks.",
        //"Proyecto Gascontigo: Plataforma digital que ofrece descuentos a clientes residenciales, integrando sistemas externos y servicios de SMS para la entrega de cupones de descuento en el flujo de compra de recargas de gas.",
        "Proyecto Gascontigo.",
        // "Proyecto Gascontigo PYME: Plataforma de descuentos para recargas de gas dirigida a pymes, que valida datos con el SII, envía cupones por SMS, y utiliza webhooks de Datamart para garantizar la autenticidad de la información, permitiendo a las empresas aplicar estos descuentos en su flujo de compra.",
        "Proyecto Gascontigo PYME.",
        // "Proyecto Validación de Identidad: Plataforma que verifica la identidad de clientes mediante RUT, número de serie, OTP, y preguntas de seguridad del Registro Civil y SII a través de TransUnion, permitiendo un acceso seguro a los descuentos de Gasco."
        "Proyecto Validación de Identidad."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  title: "Proyectos GitHub",
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "MiguelGonzalezAravena", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle: "Cuéntame de tu proyecto, o tu idea y vemos cómo llevarla a cabo.",
  number: false,
  email_address: socialMediaLinks.gmail
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", // Replace "twitter" with your twitter username without @
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