import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    ecomgroup,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    sba,
    elkafi,
    elkafigroup,
    kayakigroup,
    idmc,
    firebase,
    flutter,
    django,
    mysql, xml, prigra, jarvis, djangoo, esiway
    //firebase,
   
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
      title: "Flutter Developer",
      icon: flutter,
    },
    {
      title: "React Js Developer",
      icon: reactjs,
    },
    {
      title: "Django Developer",
      icon: djangoo,
    },
    {
      title: "Databases Administration",
      icon: mysql,
    },
  ];
  
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
    
    
    {
      name: "Django",
      icon: djangoo,
    },
    {
      name:"Mysql",
      icon: mysql,
    },
    {
      name:"XML",
      icon: xml,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "Node JS",
      icon: nodejs,
    },
   
    {
      name:"GitHub",
      icon: github,
    },

     {
      name:"Firebase",
      icon: firebase,
    },
   
    
    
  ];
  
  const experiences = [
    {
      id:1,
      title: "Ecole supérieure en informatique/ higher school of computer science",
      company_name: "Diplome d'ingénieur",
      icon: sba,
      iconBg: "#E6DEDD",
      date: "September 2020 - Jun 2023",
      points: [
        "first year student 2020-2021",
        "second year student 2021-2022",
        "Passing the entrance exam for grandes Higher School.",
        "first year of second cycle 2022-2023",
      ],
    },
    {
      id:2,
      title: "Institut des sciences du Digital, Management & Cognition Nancy",
      company_name: "Licence MIAGE",
      icon: idmc,
      iconBg: "#E6DEDD",
      date: "September 2023 - Now ",
      points: [
        "3rd year of Bachelor's degree in Computer Science MIAGE",
        
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
      name: "Prigra ",
      description:
        "Prigra is a web and mobile platform designed to track and manage projects of the form 'Diploma-Stratup/Diploma-Patent' following the guidelines of the Ministry of Higher Education and Scientific Research (Ministerial Order 1275). Key features: • Project submission capability for students... ",
      tags: [
        { 
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
      ],
      image: prigra,
      source_code_link: "https://github.com/Leyna911/kayaki.git",
      project_link:'https://kayakrenti.netlify.app/'
    },
    {
      name: "Jarvis",
      description:
        "Jarvis, a forward-thinking tech startup, empowers users to achieve their project goals within set timeframes by addressing common hurdles like motivation,time management... We achieve this through user behavior tracking and a sophisticated NLP model with reinforcement learning.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "nodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: jarvis,
      source_code_link: "https://github.com/Leyna911/ELKAFI_Training-.git",
      project_link:'https://elkafi-training.netlify.app/'
    },
    {
      name: "Esiway",
      description:
        " Esiway a mobile app using Flutter to simplify school administrative tasks. 🏫 Our goal: streamline processes and make things user-friendly. As part of our collaborative effort, we leveraged Flutter Clean Architecture principales to build a seamless and efficient solution. 💡",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        
      ],
      image: esiway,
      source_code_link: "https://github.com/",
      project_link:''
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };