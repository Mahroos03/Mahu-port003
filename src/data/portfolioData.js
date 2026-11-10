export const personalInfo = {
  name: "Mohammed Mahroos",
  shortName: "Mahroos",
  title: "Software Engineer Intern · Full-Stack Developer",
  email: "mhmdmahroos3622@gmail.com",
  phone: "+94 77 065 1216",
  location: "Palavi, Sri Lanka",
  github: "https://github.com/mahroos03",
  linkedin: "https://www.linkedin.com/in/mohamed-mahroos-1b3787293/",
  resumePdf: "/Mohammed_Mahroos_CV.pdf",
  summary:
    "Information Technology student at the University of Moratuwa – Institute of Technology (ITUM) with practical experience building full-stack web applications, REST APIs, and relational database systems using Java, Spring Boot, React, FastAPI, and PostgreSQL. Experienced with real-time updates (WebSocket), JWT-secured APIs, Docker-based deployment, and AI service integration. Seeking a Software Engineer Intern to contribute clean, reliable code and grow within a collaborative engineering team.",
  about: {
    paragraph1:
      "I am an Information Technology student at the University of Moratuwa – Institute of Technology (ITUM) and an aspiring Software Engineer with hands-on experience engineering reliable full-stack applications and backend architectures.",
    paragraph2:
      "My technical foundation centers on object-oriented programming, layered software architectures, and scalable database systems. I specialize in backend development using Java (Spring Boot) and Python (FastAPI), complemented by modern frontend experiences built with React 19, Next.js, and Tailwind CSS.",
    paragraph3:
      "I have built production-grade systems incorporating real-time WebSockets, JWT-secured role-based access control (RBAC), Docker containerization, and AI microservices powered by the Google Gemini API. Driven by a rigorous problem-solving mindset, I am eager to contribute clean, high-standard code as a Software Engineer Intern.",
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
  programmingLanguages: [
    { name: "Java", level: "Java 17 / Core OOP", icon: "java" },
    { name: "JavaScript", level: "ES6+ / Modern", icon: "javascript" },
    { name: "Python", level: "FastAPI / AI Microservices", icon: "python" },
    { name: "SQL", level: "PostgreSQL / MySQL", icon: "database" },
    { name: "PHP", level: "Backend / MVC", icon: "php" },
  ],
  frontend: [
    { name: "React.js", detail: "React 19 / Hooks / SPA", icon: "react" },
    { name: "Next.js", detail: "App Router / SSR", icon: "nextjs" },
    { name: "Tailwind CSS", detail: "Modern Responsive UI", icon: "tailwind" },
    { name: "Vite", detail: "Fast Build Tooling", icon: "vite" },
    { name: "HTML5 / CSS3", detail: "Semantic Web & Styling", icon: "code" },
  ],
  backend: [
    { name: "Spring Boot", detail: "Java 17 Enterprise REST APIs", icon: "spring" },
    { name: "FastAPI", detail: "High-Performance Python APIs", icon: "python" },
    { name: "Spring Security & JWT", detail: "Authentication & RBAC", icon: "shield" },
    { name: "Spring Data JPA", detail: "ORM & Transactional Queries", icon: "database" },
    { name: "Node.js & Express.js", detail: "REST APIs & Middleware", icon: "node" },
    { name: "WebSockets", detail: "Real-time Live Event Streaming", icon: "network" },
    { name: "RESTful APIs", detail: "API Design & Documentation", icon: "server" },
  ],
  databases: [
    { name: "PostgreSQL", detail: "Relational Modeling & Complex Queries", icon: "database" },
    { name: "MySQL", detail: "RDBMS, Indexes, Stored Data", icon: "database" },
    { name: "Database Design & Normalization", detail: "Schema Architecture (3NF)", icon: "layers" },
    { name: "Data Relationships", detail: "One-to-Many / Many-to-Many Integrity", icon: "git-commit" },
  ],
  devopsCloud: [
    { name: "Docker", detail: "Containerization & Multi-stage Builds", icon: "docker" },
    { name: "Docker Compose", detail: "Multi-container Service Orchestration", icon: "boxes" },
    { name: "Automated SQL Schema Seeding", detail: "Database Initialization Scripts", icon: "file-code" },
  ],
  architecture: [
    { name: "Object-Oriented Programming (OOP)", detail: "Polymorphism, Abstraction, SOLID", icon: "cpu" },
    { name: "Layered Architecture", detail: "Controller → Service → Repository", icon: "layers" },
    { name: "Role-Based Access Control (RBAC)", detail: "Granular Security & Permissions", icon: "shield-check" },
    { name: "AI Microservice Integration", detail: "Gemini API & LLM Service Pipeline", icon: "sparkles" },
  ],
  tools: [
    { name: "Git & GitHub", detail: "Version Control & Branching Workflows", icon: "github" },
    { name: "Postman", detail: "API Testing & Automation", icon: "send" },
    { name: "IntelliJ IDEA", detail: "Java Enterprise Development", icon: "terminal" },
    { name: "VS Code", detail: "Full-Stack Development", icon: "terminal" },
    { name: "Figma", detail: "UI/UX & Prototyping", icon: "layout" },
  ],
  spokenLanguages: [
    { name: "English", fluency: "Professional Working Proficiency" },
    { name: "Sinhala", fluency: "Professional / Working Proficiency" },
    { name: "Tamil", fluency: "Native / Bilingual" },
  ],
};

export const projectsData = [
  {
    id: "smart-municipal-council",
    title: "Smart Municipal Council Management System",
    subtitle: "Full-Stack Civic Platform with AI Complaint Triage",
    category: "Full Stack & AI",
    badge: "Featured Full-Stack & AI",
    image: "/assets/projects/smart-municipal.svg",
    github: "https://github.com/mahroos03",
    liveDemo: "https://github.com/mahroos03",
    shortDescription:
      "A full-stack civic platform built for complaint tracking, service requests, sanitation oversight, real-time admin dashboards, and PayHere online payment integration.",
    fullDescription:
      "Engineered an enterprise-grade civic management portal designed to streamline municipal governance. Features a secure Spring Boot (Java 17) backend with Spring Security and JWT, integrated with a React 19 frontend and an intelligent Python AI microservice using Google Gemini API to eliminate duplicates and score complaint urgency.",
    techStack: [
      "Java 17",
      "Spring Boot",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Gemini AI API",
      "PostgreSQL",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
      "Docker Compose",
      "Chart.js",
      "Leaflet Maps",
      "PayHere",
    ],
    features: [
      "Spring Boot (Java 17) REST API with Spring Security, JWT authentication, and Role-Based Access Control (RBAC).",
      "React 19 frontend built with Vite and Tailwind CSS, featuring Chart.js analytics dashboards and Leaflet/Google Maps geospatial mapping.",
      "Python AI microservice utilizing Google Gemini API for automatic complaint cleaning, classification, duplicate detection, priority scoring, and a citizen-facing AI chatbot.",
      "Seamless integration with PayHere online payment gateway for instant municipal service fees and digital receipts.",
      "Containerized frontend, backend, AI service, and PostgreSQL using Docker Compose with automated schema and seed script initialization.",
    ],
  },
  {
    id: "efl-football-league",
    title: "EFL Season 2 – Football League Management System",
    subtitle: "Real-Time Match Live-Score & League Management",
    category: "Full Stack & Real-Time",
    badge: "WebSockets & FastAPI",
    image: "/assets/projects/efl-league.svg",
    github: "https://github.com/mahroos03",
    liveDemo: "https://github.com/mahroos03",
    shortDescription:
      "A full-stack football league management system with a high-performance FastAPI backend, a Next.js live-score public website, and a Next.js administration console.",
    fullDescription:
      "Engineered a scalable sports management solution capable of streaming in-game events in real time. The FastAPI backend dispatches match events over WebSockets to public Next.js interfaces, while maintaining deep relational integrity across tournaments, teams, player profiles, and cumulative league statistics in PostgreSQL.",
    techStack: [
      "FastAPI",
      "Python",
      "Next.js",
      "WebSockets",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
      "TypeScript",
    ],
    features: [
      "High-performance FastAPI REST APIs for tournaments, teams, player profiles, fixtures, lineups, standings, and in-game match events.",
      "Real-time WebSocket streaming broadcasting live scores, card alerts, and match commentary directly to public web clients without refresh.",
      "Dual Next.js portals: an ultra-responsive public live-score interface and an administrative management dashboard for referees and organizers.",
      "Comprehensive PostgreSQL relational database schema storing tournament history, head-to-head records, and automated goal differential calculations.",
    ],
  },
  {
    id: "hospital-appointment-system",
    title: "Hospital Appointment Management System",
    subtitle: "Modular Healthcare Booking & Medical Records",
    category: "Backend & Architecture",
    badge: "Spring Boot & OOP",
    image: "/assets/projects/hospital.png",
    github: "https://github.com/Mahroos03/Hospital_Appointment_System",
    liveDemo: "https://github.com/Mahroos03/Hospital_Appointment_System",
    shortDescription:
      "A robust healthcare backend system to manage patient, doctor, and appointment data with strict schedule validation logic to eliminate double booking.",
    fullDescription:
      "Developed a reliable Spring Boot backend coupled with MySQL to handle patient admissions, physician schedules, and appointment reservations. Implemented a clean, layered architecture adhering to object-oriented programming principles to ensure high maintainability, validation safety, and modularity.",
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Object-Oriented Programming",
      "Layered Architecture",
      "Postman",
    ],
    features: [
      "Full CRUD operations for patient records, medical staff profiles, and clinical departments.",
      "REST APIs for appointment scheduling with custom time-conflict validation logic preventing overlapping doctor appointments.",
      "Strict layered architecture (Controller, Service, Repository) ensuring separation of concerns and maintainable code.",
      "Comprehensive database indexing and relational foreign key constraints in MySQL for data consistency.",
    ],
  },
  {
    id: "erp-finance-module",
    title: "ERP Finance Management Module",
    subtitle: "Enterprise Accounting, Relational DB & Payroll Engine",
    category: "Enterprise & Database",
    badge: "PostgreSQL & FinTech",
    image: "/assets/projects/erp-finance.png",
    github: "https://github.com/Mahroos03/erp_finance_module",
    liveDemo: "https://github.com/Mahroos03/erp_finance_module",
    shortDescription:
      "Enterprise financial database module and backend computation engine handling department budgets, expenses, invoices, and automated employee payroll.",
    fullDescription:
      "Architected a comprehensive normalized PostgreSQL schema to support mission-critical enterprise financial operations. Configured relational constraints and optimized SQL queries, accompanied by backend calculation algorithms that automate gross-to-net salary computations, allowances, and tax withholding.",
    techStack: [
      "PostgreSQL",
      "SQL",
      "Java / Spring Boot",
      "Database Normalization (3NF)",
      "Financial Algorithms",
      "REST APIs",
    ],
    features: [
      "Designed normalized PostgreSQL database schemas for users, department budgets, operational expenses, invoices, and payroll.",
      "Wrote complex analytical SQL queries and structured data relationships to support financial audits and reporting.",
      "Built reliable payroll calculation logic to automate gross-to-net salary computation, bonuses, deductions, and tax calculation.",
      "Transactional integrity checks ensuring zero ledger discrepancies across financial reporting periods.",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-Commerce Platform",
    subtitle: "Complete Online Store with Auth & Product Catalog",
    category: "Full Stack",
    badge: "Full Stack & Docker",
    image: "/assets/projects/e-commerce.png",
    github: "https://github.com/Mahroos03/E-Commerce-Book-store",
    liveDemo: "https://github.com/Mahroos03/E-Commerce-Book-store",
    shortDescription:
      "A complete e-commerce solution with user authentication, product management, shopping cart, order processing, and Docker container deployment.",
    fullDescription:
      "Designed and deployed a full-stack digital storefront featuring Spring Boot REST APIs, secure JWT authentication, MySQL persistence, and a responsive frontend interface. Containerized using Docker for cross-environment reproducibility.",
    techStack: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Docker",
      "Spring Security",
      "Hibernate",
      "Tailwind CSS",
    ],
    features: [
      "User authentication and authorization using Spring Security and JWT.",
      "Product catalog browsing with category filtering, search, and inventory management.",
      "Responsive shopping cart, checkout workflow, and order history tracking.",
      "Containerized deployment using Docker for standardized development and production environments.",
    ],
  },
];

export const experienceData = [
  {
    position: "Entry-Level Software Developer",
    organization: "Independent Developer",
    location: "Palavi, Sri Lanka",
    period: "2023 – Present",
    type: "Practical Engineering & Projects",
    highlights: [
      "Acquired practical software development experience through self-directed study and direct, production-grade projects.",
      "Built end-to-end skills across frontend and backend technologies (Java, Spring Boot, React 19, FastAPI, PostgreSQL) to support full-stack application development.",
      "Strengthened problem-solving, debugging, and analytical abilities through complex real-world coding tasks.",
      "Implemented version control tools (Git/GitHub), standard development workflows, and relational database management systems.",
      "Continuously expanding technical knowledge across software engineering, networking, cloud computing, and DevOps practices.",
    ],
    tech: ["Java 17", "Spring Boot", "React 19", "FastAPI", "PostgreSQL", "Docker", "WebSockets", "Git"],
  },
];

export const educationData = [
  {
    degree: "National Diploma in Technology (NDT)",
    field: "Information Technology",
    institution: "University of Moratuwa – Institute of Technology (ITUM)",
    location: "Diyagama, Sri Lanka",
    period: "2023 – Present",
    status: "Currently Reading",
    details:
      "Specializing in Information Technology with rigorous coursework in Software Engineering, Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, Web Application Development, and Computer Networks.",
    badges: ["Software Engineering", "Relational Databases", "Web Technologies", "OOP & System Design"],
  },
];

export const certificationsData = [
  {
    id: "python-essentials-cisco",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    organization: "Networking Academy & OpenEDG Python Institute",
    date: "August 17, 2025",
    image: "/assets/certificates/Screenshot 2026-06-11 115024.png",
    description: "Cisco Networking Academy certification validating core algorithmic problem solving, Python syntax, data structures, and foundational programming techniques.",
  },
  {
    id: "python-beginners-uom",
    title: "Python for Beginners",
    issuer: "Centre for Open & Distance Learning (CODL)",
    organization: "University of Moratuwa, Sri Lanka",
    date: "August 17, 2025",
    code: "TTirvE5X2F",
    image: "/assets/certificates/Screenshot 2026-06-11 115950.png",
    description: "Official e-certificate awarded by University of Moratuwa CODL verifying proficiency in Python programming fundamentals and practical coding.",
  },
  {
    id: "python-essentials-achievement",
    title: "Python Essentials 1 – Statement of Achievement",
    issuer: "Cisco Networking Academy & OpenEDG",
    organization: "OpenEDG Python Institute",
    date: "August 17, 2025",
    image: "/assets/certificates/Screenshot 2026-06-11 120011.png",
    description: "Official Statement of Achievement recognized internationally for Python programming competence and modular code structuring.",
  },
  {
    id: "intro-python-sololearn",
    title: "Introduction to Python",
    issuer: "SoloLearn",
    organization: "SoloLearn Inc.",
    date: "August 29, 2025",
    code: "CC-UVJ6RIGO",
    image: "/assets/certificates/Screenshot 2026-06-11 120035.png",
    description: "Course certification validating proficiency in Python programming, functional constructs, and problem-solving exercises.",
  },
  {
    id: "ethical-hacking-ceh",
    title: "Certified Ethical Hacker (CEH v11)",
    issuer: "Marstech",
    organization: "Marstech – Modern Technology Solutions",
    date: "August 15, 2023",
    certificateNumber: "CC-MT/CEH-B002/SR-0393",
    image: "/assets/certificates/Screenshot 2026-06-11 114925.png",
    description: "Certified Ethical Hacker (CEH v11) training covering network security fundamentals, vulnerability analysis, and secure software development practices.",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "SimpliLearn",
    organization: "SimpliLearn / Cloud Academy",
    date: "2025",
    image: "/assets/certificates/Moha.png",
    description: "Certification covering cloud computing architecture, core AWS cloud services, security best practices, and billing models.",
  },
];

export const referencesData = [
  {
    name: "Wathsala Bandara",
    title: "Lecturer (Probationary)",
    institution: "Institute of Technology, University of Moratuwa",
    affiliation: "Wayamba University of Sri Lanka",
    email: "wathsalab@itum.mrt.ac.lk",
  },
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
