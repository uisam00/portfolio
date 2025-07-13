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
  username: "Ui Sam",
  title: "Olá, sou Ui Sam",
  subTitle: emoji(
    "Desenvolvedor Full Stack apaixonado por tecnologia 🚀 com experiência em Angular, React, .NET, Django, Docker, APIs REST e bancos de dados. Atuo remotamente na Hapvida NotreDame em projetos de autenticação, biometria e soluções para saúde. Tenho passagens por Stefanini e Nota Control, sempre focado em desenvolvimento web, autonomia e resolução de problemas."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/uisam00",
  linkedin: "https://www.linkedin.com/in/uisam00/",
  gmail: "uisam.santos@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR FULL STACK APAIXONADO POR TECNOLOGIA",
  skills: [
    "Desenvolvimento de sistemas web completos, do backend ao frontend, com foco em performance e segurança.",
    "Experiência em autenticação SSO, integração biométrica e soluções para área da saúde.",
    "Atuação com APIs REST, WebSocket, bancos de dados relacionais e não relacionais, e automação de processos."
  ],
  softwareSkills: [
    {skillName: ".NET", fontAwesomeClassname: "fab fa-dotnet"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Angular", fontAwesomeClassname: "fab fa-angular"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Next.js", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git"},
    {skillName: "SQL Server", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-database"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Estácio",
      logo: require("./assets/images/estacioLogo.png"),
      subHeader: "Graduação em Ciência da computação",
      duration: "2023 - 2025",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Universidade Federal do Mato Grosso do Sul",
      logo: require("./assets/images/UFMS.png"),
      subHeader: "Graduação em Engenharia de software",
      duration: "2019 - 2022",
      desc: "Interrompido devido a conflito de horários com atividades profissionais.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Exibir barra de proficiência
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "100%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Banco de Dados",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps/Cloud",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Não exibir badges do CodersRank
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Desenvolvedor Full Stack",
      company: "Hapvida NotreDame",
      companylogo: require("./assets/images/hapvida.png"),
      date: "mai 2021 – presente",
      desc: "Atuação em projetos de autenticação SSO, integração biométrica, soluções para área da saúde, SCRUM (Azure) e uso avançado de GIT.",
      descBullets: [
        "Desenvolvimento de sistemas web com .NET, Angular e React",
        "Integração de APIs REST, WebSocket e biometria",
        "Automação de processos e foco em segurança da informação"
      ]
    },
    {
      role: "Analista desenvolvedor",
      company: "Stefanini",
      companylogo: require("./assets/images/stefanini.png"),
      date: "dez 2021 – mai 2022",
      desc: "Responsável pelo desenvolvimento e manutenção de aplicações web para grandes clientes do setor financeiro e industrial, atuando em times multidisciplinares e ambientes ágeis.",
      descBullets: [
        "Implementação de interfaces modernas, responsivas e acessíveis utilizando Angular e React",
        "Aprimoramento da experiência do usuário (UX/UI) e integração com APIs REST",
        "Participação ativa em reuniões de planejamento, revisão e retrospectiva (SCRUM)"
      ]
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Nota Control",
      companylogo: require("./assets/images/NotaControlLogo.png"),
      date: "jul 2021 – dez 2021",
      desc: "Desenvolvimento de soluções para gestão eletrônica de documentos, automação de processos e digitalização de fluxos internos para clientes do setor público e privado.",
      descBullets: [
        "Criação de módulos para controle, consulta e tramitação de processos e documentos",
        "Integração de sistemas legados com bancos de dados e APIs externas",
        "Contribuição para a redução do uso de papel e aumento da eficiência operacional"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos de destaques",
  subtitle: "ALGUMAS STARTUPS E EMPRESAS QUE AJUDEI A DESENVOLVER SUA TECNOLOGIA.",
  projects: [
    {
      image: "https://www.utillab.net/assets/images/logo.png",
      projectName: "Utillab",
      projectDesc:
        "O UtilLab (utillab.net) é uma plataforma online com ferramentas gratuitas para o dia a dia, como conversores de unidades, calculadoras, formatador de texto, contador de palavras e corretor gramatical com IA. Com interface simples e eficiente, foi desenvolvido em Next.js e integra recursos de inteligência artificial para oferecer resultados rápidos e inteligentes diretamente no navegador.",
      footerLink: [
        {
          name: "Visitar site",
          url: "https://www.utillab.net"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://omni.wachannel.com.br/brand-assets/logo.svg",
      projectName: "WaChannel",
      projectDesc:
        "Sistema baseado em chatwoot, com integração da evolution api para conectar ao WhatsApp. Permite atendimento, automação e gestão de conversas de forma eficiente.",
      footerLink: [
        {
          name: "Visitar site",
          url: "https://omni.wachannel.com.br/"
        }
      ]
    },
    {
      image:
        "https://media.seudinheiro.com/uploads/2020/09/hapvida-e-intermedica-e1610134787351.jpg",
      projectName: "Siga",
      projectDesc:
        "Sistema assistencial, otimizando o fluxo hospitalar. Funcionalidades: aprazamento, controle de equipamentos, diagnósticos, prescrição, checagem, formulários assistenciais, biometria, segurança via JWT."
    },
    {
      image:
        "https://www.notacontrol.com.br/home/assets/img/gescon1x.jpg",
      projectName: "GESCON",
      projectDesc:
        "Sistema de gestão eletrônica de processos e documentos. Funcionalidades: consulta por CPF/processo, abertura online, redução de papel, status em tempo real, impressão de modelos e padronização de fluxo.",
      footerLink: [
        {
          name: "Visitar app",
          url: "https://play.google.com/store/apps/details?id=com.gesconmobile&hl=pt_BR"
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
        {name: "Certification", url: ""},
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
  subtitle: "Fique à vontade para baixar meu currículo.",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Fale comigo ☎️"),
  subtitle:
    "Quer conversar sobre um projeto ou só dar um oi? Minha caixa de entrada está sempre aberta.",
  email_address: "uisam.santos@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
