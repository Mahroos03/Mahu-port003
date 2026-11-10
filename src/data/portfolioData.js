export const personalInfo = {
  name: "Mohammed Mahroos",
  shortName: "Mahroos",
  title: "Software Engineer Intern · Full-Stack Developer",
  email: "mhmdmahroos3622@gmail.com",
  phone: "+94 77 065 1216",
  location: "Colombo, Sri Lanka",
  github: "https://github.com/Mahroos03",
  linkedin: "https://www.linkedin.com/in/mohamed-mahroos",
  resumePdf: "/Mahroos_SE.pdf",
  downloadFileName: "Mahroos_SE.pdf",
  summary:
    "Information Technology student at the University of Moratuwa – Institute of Technology (ITUM) with practical experience building full-stack web applications, REST APIs, and relational database systems using Java, Spring Boot, React, FastAPI, and PostgreSQL. Hands-on with real-time updates (WebSocket), JWT-secured APIs, Docker-based deployment, and AI service integration. Seeking a Software Engineer Intern to contribute clean, reliable code and grow within a collaborative engineering team.",
  about: {
    paragraph1:
      "I am an Information Technology student at the University of Moratuwa – Institute of Technology (ITUM) and an aspiring Software Engineer with practical experience building reliable full-stack applications and backend architectures.",
    paragraph2:
      "My technical foundation centers on object-oriented programming, layered software architectures, and relational database systems. I specialize in backend development using Java (Spring Boot) and Python (FastAPI), complemented by modern frontend experiences built with React.js, Next.js, and Tailwind CSS.",
    paragraph3:
      "I have built production-grade systems incorporating real-time WebSockets, JWT-secured role-based access control, Docker containerization, and AI microservices powered by the Gemini API. Driven by a rigorous problem-solving mindset, I am seeking a Software Engineer Intern role to contribute clean, reliable code and grow within a collaborative engineering team.",
  },
  roles: [
    "Software Engineer Intern",
    "Full-Stack Developer",
    "Java & Spring Boot Engineer",
    "FastAPI & Python Developer",
    "React & Next.js Builder",
  ],
};

export const skillsData = {
  languages: [
    { name: "Java", detail: "Core OOP / Java 17", icon: "java" },
    { name: "JavaScript", detail: "ES6+ / Modern", icon: "javascript" },
    { name: "Python", detail: "FastAPI / AI Microservices", icon: "python" },
    { name: "PHP", detail: "Backend & Web Systems", icon: "php" },
  ],
  frontend: [
    { name: "React.js", detail: "React 19 / Modern SPAs", icon: "react" },
    { name: "Next.js", detail: "SSR / App Router", icon: "nextjs" },
    { name: "HTML5", detail: "Semantic Web", icon: "code" },
    { name: "CSS", detail: "Responsive Styling", icon: "code" },
    { name: "Tailwind CSS", detail: "Utility-First UI", icon: "tailwind" },
    { name: "Vite", detail: "Fast Build Tooling", icon: "vite" },
  ],
  backend: [
    { name: "Spring Boot", detail: "Java 17 REST APIs", icon: "spring" },
    { name: "Node.js", detail: "JavaScript Backend", icon: "node" },
    { name: "WebSocket", detail: "Real-time Live Streaming", icon: "network" },
    { name: "FastAPI", detail: "High-Performance Python APIs", icon: "python" },
  ],
  database: [
    { name: "PostgreSQL", detail: "Relational Modeling & Queries", icon: "database" },
    { name: "MySQL", detail: "RDBMS & Data Integrity", icon: "database" },
    { name: "SQL", detail: "Complex Queries & Schema Design", icon: "database" },
  ],
  mobileApp: [
    { name: "Flutter", detail: "Cross-Platform Mobile App Dev", icon: "smartphone" },
    { name: "Angular", detail: "Component Architecture", icon: "layers" },
  ],
  tools: [
    { name: "IntelliJ IDEA", detail: "Java Enterprise IDE", icon: "terminal" },
    { name: "VS Code", detail: "Full-Stack Development", icon: "terminal" },
    { name: "Figma", detail: "UI/UX Design & Prototyping", icon: "layout" },
    { name: "Docker", detail: "Containerization", icon: "docker" },
    { name: "Docker Compose", detail: "Multi-Service Orchestration", icon: "boxes" },
    { name: "Postman", detail: "API Testing & Automation", icon: "send" },
  ],
  versionControl: [
    { name: "Git", detail: "Distributed Version Control", icon: "git-branch" },
    { name: "GitHub", detail: "Repository Management & Collaboration", icon: "github" },
  ],
  spokenLanguages: [
    { name: "English", fluency: "Professional Working Proficiency" },
    { name: "Tamil", fluency: "Native / Bilingual" },
    { name: "Sinhala", fluency: "Working Proficiency" },
  ],
};

export const projectsData = [
  {
    id: "smart-municipal-council",
    title: "Smart Municipal Council Management System",
    subtitle: "Civic Platform with AI Triage, Dashboards & PayHere",
    category: "Full Stack & AI",
    badge: "Featured Full-Stack & AI",
    image: "/assets/projects/smart-municipal.svg",
    github: "https://github.com/Mahroos03",
    liveDemo: "https://github.com/Mahroos03",
    shortDescription:
      "Built a full-stack civic platform for complaint tracking, service requests, sanitation oversight, admin dashboards, and PayHere online payments.",
    fullDescription:
      "Developed a Spring Boot (Java 17) REST API with Spring Security, JWT, role-based access control, file uploads, and PostgreSQL via Spring Data JPA. Implemented a React 19 frontend with Vite, Tailwind CSS, Chart.js dashboards, and Leaflet / Google Maps integration. Integrated a Python AI microservice using the Gemini API for complaint cleaning, classification, duplicate detection, priority scoring, and a citizen chatbot. Containerized using Docker Compose with automated SQL schema and seed script initialization.",
    techStack: [
      "Java 17",
      "Spring Boot",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Gemini API",
      "PostgreSQL",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
      "Docker Compose",
      "Chart.js",
      "Leaflet / Google Maps",
      "PayHere",
    ],
    features: [
      "Spring Boot (Java 17) REST API with Spring Security, JWT, role-based access control, file uploads, and PostgreSQL via Spring Data JPA.",
      "React 19 frontend with Vite, Tailwind CSS, Chart.js dashboards, and Leaflet / Google Maps integration.",
      "Python AI microservice using the Gemini API for complaint cleaning, classification, duplicate detection, priority scoring, and a citizen chatbot.",
      "PayHere online payment gateway integration for municipal service requests.",
      "Containerized frontend, backend, AI service, and PostgreSQL using Docker Compose with automated SQL schema and seed script initialization.",
    ],
  },
  {
    id: "efl-football-league",
    title: "EFL Season 2 – Football League Management System",
    subtitle: "FastAPI Backend with WebSockets Live Score & Next.js Portals",
    category: "Full Stack & Real-Time",
    badge: "WebSockets & FastAPI",
    image: "/assets/projects/efl-league.svg",
    github: "https://github.com/Mahroos03",
    liveDemo: "https://github.com/Mahroos03",
    shortDescription:
      "Developed a full-stack football league management system with a FastAPI backend, a Next.js live-score website, and a Next.js administration console.",
    fullDescription:
      "Built REST APIs for tournaments, teams, players, fixtures, lineups, standings, statistics, and in-game match events. Implemented WebSockets to stream live scores and real-time match events to the public website. Designed and integrated a PostgreSQL database to store tournament data, team records, player profiles, match events, and statistics.",
    techStack: [
      "FastAPI",
      "Python",
      "Next.js",
      "WebSockets",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
    ],
    features: [
      "FastAPI backend with REST APIs for tournaments, teams, players, fixtures, lineups, standings, statistics, and in-game match events.",
      "WebSockets streaming live scores and real-time match events to the public website without page reloads.",
      "Next.js live-score public website coupled with a dedicated Next.js administration console for league managers.",
      "PostgreSQL database storing tournament data, team records, player profiles, match events, and statistics.",
    ],
  },
  {
    id: "hospital-appointment-system",
    title: "Hospital Appointment Management System",
    subtitle: "Spring Boot & MySQL with Double-Booking Prevention Logic",
    category: "Backend & Architecture",
    badge: "Spring Boot & MySQL",
    image: "/assets/projects/hospital.png",
    github: "https://github.com/Mahroos03/Hospital_Appointment_System",
    liveDemo: "https://github.com/Mahroos03/Hospital_Appointment_System",
    shortDescription:
      "Developed a Spring Boot backend with MySQL to manage patient, doctor, and appointment data with validation logic to prevent double booking.",
    fullDescription:
      "Developed a Spring Boot backend with MySQL to manage patient, doctor, and appointment data. Implemented CRUD operations for patient and doctor records. Built REST APIs for appointment scheduling with added validation logic to prevent double booking. Used object-oriented programming principles and a layered architecture to keep the codebase modular and maintainable.",
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "OOP Principles",
      "Layered Architecture",
    ],
    features: [
      "CRUD operations for patient and doctor records.",
      "REST APIs for appointment scheduling with custom validation logic to prevent double booking.",
      "Object-oriented programming principles and layered architecture keeping the codebase modular and maintainable.",
      "MySQL relational database schema with referential integrity.",
    ],
  },
  {
    id: "erp-finance-module",
    title: "ERP Finance Management Module",
    subtitle: "PostgreSQL Database Schemas, SQL Queries & Automated Payroll",
    category: "Enterprise & Database",
    badge: "PostgreSQL & FinTech",
    image: "/assets/projects/erp-finance.png",
    github: "https://github.com/Mahroos03/erp_finance_module",
    liveDemo: "https://github.com/Mahroos03/erp_finance_module",
    shortDescription:
      "Designed PostgreSQL database schemas for users, budgets, expenses, invoices, and payroll with automated net salary computation logic.",
    fullDescription:
      "Designed PostgreSQL database schemas for users, budgets, expenses, invoices, and payroll. Wrote SQL queries and configured data relationships to support core financial operations. Built the payroll calculation logic to automate net salary computation.",
    techStack: [
      "PostgreSQL",
      "SQL",
      "Database Design & Normalization",
      "Payroll Algorithms",
      "Financial Data Modeling",
    ],
    features: [
      "PostgreSQL database schemas designed for users, budgets, expenses, invoices, and payroll.",
      "Optimized SQL queries and configured data relationships supporting core financial operations.",
      "Payroll calculation logic automating net salary computation.",
      "Robust data integrity for enterprise accounting workflows.",
    ],
  },
];

export const experienceData = [
  {
    position: "Entry-Level Software Developer",
    organization: "Independent Developer",
    location: "Colombo, Sri Lanka",
    period: "Present",
    type: "Practical Experience & Projects",
    highlights: [
      "Acquired practical software development experience through self-directed study and hands-on projects.",
      "Built skills in frontend and backend technologies to support full-stack application development.",
      "Strengthening problem-solving, debugging, and analytical abilities through practical coding tasks.",
      "Used version control tools, standard development workflows, and database management systems.",
      "Continuously expanding my technical knowledge in the fields of software engineering, networking, cloud computing, and DevOps.",
    ],
    tech: ["Java", "Spring Boot", "React.js", "Next.js", "FastAPI", "PostgreSQL", "Docker", "Git", "GitHub"],
  },
];

export const educationData = [
  {
    degree: "National Diploma in Technology (NDT)",
    field: "Information Technology",
    institution: "University of Moratuwa – Institute of Technology (ITUM)",
    period: "2025 – Present",
    status: "Currently Reading",
    details:
      "Comprehensive higher technological education specializing in Information Technology, covering Software Engineering, Object-Oriented Programming, Relational Database Management Systems, Web Technologies, and Computer Networks.",
    badges: ["Software Engineering", "Relational Databases", "Web Technologies", "ITUM"],
  },
  {
    degree: "GCE Advanced Level",
    field: "Mathematics, Physics, Chemistry",
    institution: "P/President Science Collage- - Puttalam",
    period: "2021 – 2023",
    status: "Completed",
    details:
      "Completed secondary education in the Physical Science stream (Mathematics, Physics, and Chemistry) establishing strong analytical, mathematical, and algorithmic reasoning foundations.",
    badges: ["Physical Science", "Mathematics", "Physics", "Chemistry"],
  },
];

export const certificationsData = [
  {
    id: "python-essentials-cisco",
    title: "Python Essentials",
    issuer: "Cisco Networking Academy · OpenEDG Python Institute",
    date: "2025",
    image: "/assets/certificates/Screenshot 2026-06-11 115024.png",
    description: "Cisco Networking Academy & OpenEDG Python Institute certification validating core Python programming, data structures, and algorithmic logic.",
  },
  {
    id: "python-beginners-uom",
    title: "Python for Beginners",
    issuer: "CODL, University of Moratuwa",
    date: "2025",
    code: "TTirvE5X2F",
    image: "/assets/certificates/Screenshot 2026-06-11 115950.png",
    description: "Centre for Open & Distance Learning (CODL), University of Moratuwa e-certificate verifying foundational Python skills. Verification Code: TTirvE5X2F.",
  },
  {
    id: "intro-python-sololearn",
    title: "Introduction to Python",
    issuer: "SoloLearn",
    date: "2025",
    code: "CC-UVJ6RIGO",
    image: "/assets/certificates/Screenshot 2026-06-11 120035.png",
    description: "SoloLearn certificate verifying core Python syntax and computational concepts. Certificate ID: CC-UVJ6RIGO.",
  },
];

export const achievementsData = [
  {
    title: "University Colours – Football",
    organization: "University of Moratuwa",
    year: "2025",
    description: "Awarded University Colours for loyalty, leadership, and outstanding athletic performance representing the University of Moratuwa.",
    category: "Sports & Leadership",
  },
  {
    title: "Second Place – Volleyball (Under 15)",
    organization: "Divisional Sports Meet, Puttalam Educational Zone · P/Al-Aqsa N.S.",
    year: "2016",
    description: "Achieved Second Place at the Divisional Sports Meet in the Under 15 Volleyball Championship.",
    category: "Sports Achievement",
  },
];

export const referencesData = [
  {
    name: "Uthpala Athukorala",
    title: "Acting Head, Division of Information Technology",
    institution: "Institute of Technology, University of Moratuwa (ITUM)",
    email: "epramudini@gmail.com",
    phone: "+94 77 266 6602",
  },
  {
    name: "Pramith Wijethunga",
    title: "Flutter Developer & Lecturer",
    institution: "Institute of Technology, University of Moratuwa",
    email: "wmpkw96@gmail.com",
    phone: "+94 71 788 8714",
  },
];
