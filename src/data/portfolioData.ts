import { UserProfile, ExperienceItem, SkillCategory, Project, CertificateItem, SocialLink, MilestoneItem, GalleryItem } from "@/types";

export const USER_PROFILE: UserProfile = {
  name: "Omprakash Dwivedi",
  title: "Generative AI Engineer",
  heading: "Building Practical, Intelligent Applications via GenAI & AI-Assisted Development.",
  subtitle: "B.Tech graduate in Computer Science Engineering (AI & ML) with hands-on GenAI exposure, Anthropic API integration, LLM fundamentals, and data analytics.",
  tagline: "Generative AI Engineer | AI-Assisted Development | Data Analytics",
  statusBadge: "GEN_AI_ENGINEER // Intelligence Node",
  bio: [
    "B.Tech graduate in Computer Science Engineering (AI & ML) building toward a career as a Generative AI / AI Engineer. Hands-on GenAI exposure includes integrating the Anthropic API into a working Python script and completing a GenAI-focused data analytics simulation with Tata Group (Forage), applying generative AI to exploratory data analysis and designing an agentic-AI-driven strategy for a financial-services use case.",
    "Comfortable across the full build cycle — API integration, data processing with Python and Pandas, forecasting fundamentals, and SQL/Power BI-driven analytics — demonstrated through an AI-powered demand-forecasting platform, a content analytics application, and a full-stack carpooling platform.",
    "Seeking an entry-level Generative AI Engineer role to apply LLM concepts and AI-assisted development to build practical, intelligent applications."
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering (AI & ML)",
    institution: "Baderia Global Institute of Engineering and Management, Jabalpur",
    period: "2022 – 2026"
  },
  careerObjective: "Seeking an entry-level Generative AI Engineer role to apply LLM concepts and AI-assisted development to build practical, intelligent applications.",
  location: "Indore, India",
  email: "dwivediomprakash450@gmail.com",
  phone: "+91 9993330294",
  github: "https://github.com/omdwivedi45",
  linkedin: "https://linkedin.com/in/omprakashdwivedi45",
  avatarUrl: "/assets/suit-photo.jpg",
  resumeUrl: "/assets/resume-omprakash.pdf",
  stats: [
    { label: "Specialization", value: "B.Tech AI & ML", subtext: "Class of 2022–2026 (CGPA 7.7)" },
    { label: "Core Focus", value: "GenAI & LLMs", subtext: "Anthropic API & AI-Assisted Dev" },
    { label: "Build Stack", value: "Python & APIs", subtext: "FastAPI, Pandas, SQL & Power BI" },
    { label: "Certifications", value: "8+", subtext: "Tata GenAI, Deloitte, MS, Cisco & More" }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/omdwivedi45", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/omprakashdwivedi45", icon: "Linkedin" },
  { name: "Email", url: "mailto:dwivediomprakash450@gmail.com", icon: "Mail" },
  { name: "Phone", url: "tel:+919993330294", icon: "Phone" }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-mittsure",
    role: "Relationship Manager",
    company: "Mittsure Technologies",
    location: "Indore / On-site",
    period: "Oct 2025 – Jan 2026",
    description: "Managed client relationships and tracked performance metrics to support informed, data-backed business decisions.",
    achievements: [
      "Managed client relationships and tracked performance metrics to support informed, data-backed business decisions.",
      "Communicated with stakeholders to identify needs and translate them into actionable follow-ups, strengthening client-facing communication and problem-solving skills."
    ],
    skills: ["Client Relationship Management", "Performance Metrics", "Stakeholder Communication", "Data-Backed Decision Making", "Problem Solving"],
    image: "/assets/mittsure-photo.png"
  },
  {
    id: "exp-tata",
    role: "Data Analytics Using GenAI (Job Simulation)",
    company: "Tata Group (Forage)",
    location: "Virtual / Forage",
    period: "2026",
    description: "Performed GenAI-assisted exploratory data analysis, designed a no-code predictive framework to assess customer delinquency risk, and outlined an agentic-AI strategy.",
    achievements: [
      "Performed GenAI-assisted exploratory data analysis and risk profiling to assess customer delinquency risk.",
      "Designed a no-code predictive framework to evaluate financial risk indicators.",
      "Outlined an agentic-AI-driven collections strategy for a financial-services use case."
    ],
    skills: ["Generative AI", "Agentic AI Strategy", "Exploratory Data Analysis", "Predictive Analytics", "Delinquency Risk Assessment"]
  },
  {
    id: "exp-deloitte",
    role: "Data Analytics Job Simulation",
    company: "Deloitte Australia (Forage)",
    location: "Virtual / Forage",
    period: "2026",
    description: "Applied data analysis and forensic-technology workflows to support investigative, evidence-based business scenarios.",
    achievements: [
      "Applied data analysis and forensic-technology workflows to support investigative, evidence-based business scenarios.",
      "Performed data cleaning and data manipulation on complex operational datasets.",
      "Delivered business analysis summaries and executive reporting models."
    ],
    skills: ["Data Analysis", "Forensic Technology Workflows", "Data Cleaning", "Investigative Analysis", "Business Reporting"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "genai-llm",
    title: "Generative AI & LLM",
    icon: "Cpu",
    description: "Prompt Engineering, LLM & NLP fundamentals, AI-Assisted development, and Anthropic API integration.",
    skills: [
      { name: "Prompt Engineering", level: "Advanced", featured: true },
      { name: "Generative AI Concepts", level: "Advanced", featured: true },
      { name: "LLM Fundamentals", level: "Advanced", featured: true },
      { name: "NLP Fundamentals", level: "Intermediate", featured: true },
      { name: "AI-Assisted Development", level: "Advanced", featured: true },
      { name: "Anthropic API", level: "Advanced", featured: true }
    ]
  },
  {
    id: "programming-ml",
    title: "Programming & Machine Learning",
    icon: "BarChart3",
    description: "Python development, data manipulation with Pandas & NumPy, ML fundamentals, and time-series forecasting.",
    skills: [
      { name: "Python (Pandas, NumPy)", level: "Advanced", featured: true },
      { name: "Machine Learning Fundamentals", level: "Intermediate", featured: true },
      { name: "Time-Series Forecasting", level: "Intermediate", featured: true },
      { name: "SES / Holt's Linear / Moving Average", level: "Intermediate" },
      { name: "Ensemble Forecasting Methods", level: "Intermediate" }
    ]
  },
  {
    id: "apis-dev",
    title: "APIs & Application Development",
    icon: "Wrench",
    description: "FastAPI services, REST APIs, TMDB API integration, and Anthropic API workflows.",
    skills: [
      { name: "FastAPI", level: "Intermediate", featured: true },
      { name: "REST APIs", level: "Advanced", featured: true },
      { name: "TMDB API", level: "Intermediate" },
      { name: "Anthropic API", level: "Advanced", featured: true }
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    icon: "PieChart",
    description: "SQL query optimization, interactive Power BI dashboards, and Advanced Excel modeling.",
    skills: [
      { name: "SQL (Joins, Window Functions)", level: "Advanced", featured: true },
      { name: "Power BI (Data Modeling & Dashboards)", level: "Advanced", featured: true },
      { name: "Advanced Excel (Pivot Tables, Lookups)", level: "Advanced", featured: true }
    ]
  },
  {
    id: "tools",
    title: "Development & Tools",
    icon: "Database",
    description: "Database systems, version control, and team collaboration software.",
    skills: [
      { name: "MongoDB", level: "Intermediate", featured: true },
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate", featured: true }
    ]
  }
];

export const MILESTONES: MilestoneItem[] = [
  { id: "m1", title: "B.Tech in CSE (AI & ML) — CGPA 7.7", icon: "🎓", category: "Education" },
  { id: "m2", title: "Data Analytics Using GenAI – Tata Group", icon: "🤖", category: "Certification" },
  { id: "m3", title: "Data Analytics Simulation – Deloitte Australia", icon: "📊", category: "Forage" },
  { id: "m4", title: "AI Tools and ChatGPT Workshop – be10x", icon: "⚡", category: "Workshop" },
  { id: "m5", title: "Python Essentials (PCAP) – Cisco Academy", icon: "🐍", category: "Certification" },
  { id: "m6", title: "Get Started Building with Power BI – Microsoft", icon: "💡", category: "Certification" },
  { id: "m7", title: "Relationship Manager – Mittsure Technologies", icon: "💼", category: "Experience" }
];

export const PROJECTS: Project[] = [
  {
    id: "data-analyst-portfolio",
    title: "Data Analyst Portfolio Project",
    category: "Web Application & BI Showcase",
    description: "Personal Data Analyst Portfolio web application built to showcase analytics projects, skills matrix, interactive dashboards, and professional experience.",
    longDescription: "A high-performance personal portfolio website designed to present data analytics capabilities, live embedded dashboards, interactive certificates, and career background.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Data Analytics"],
    liveUrl: "https://portfolio-omprakash-dwivedi.vercel.app/",
    githubUrl: "https://github.com/omdwivedi45",
    role: "Lead Developer & Data Analyst",
    year: "2026",
    featured: true,
    architectureHighlights: [
      "Live interactive dashboard streaming and full-screen preview capability.",
      "Custom dark cyber theme with ambient grid aesthetics and micro-animations.",
      "Comprehensive data analytics skills, certificates, and experience showcase."
    ]
  },
  {
    id: "retail-intelligence",
    title: "Retail Intelligence Dashboard",
    category: "Business Intelligence",
    description: "A complete business intelligence solution developed using SQL, Python, Excel, and Power BI that analyzes retail sales performance, customer behavior, profit trends, and operational KPIs through interactive dashboards.",
    longDescription: "Retail Intelligence Dashboard provides an end-to-end analytical framework for retail enterprise data. Ingests transactional records via SQL, processes data cleaning with Python, computes KPIs in Excel, and delivers interactive visual storytelling in Power BI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["SQL", "Python", "Power BI", "Excel"],
    role: "Data Analyst",
    year: "2026",
    featured: true,
    architectureHighlights: [
      "Customer segment behavior analysis and purchasing frequency mapping.",
      "Profit trend forecasting and regional sales performance breakdown.",
      "Interactive Power BI slicers and automated DAX KPI measures."
    ]
  },
  {
    id: "netflix-analytics",
    title: "Netflix Data Analytics Dashboard",
    category: "Enterprise BI & Interactive Analytics",
    description: "Fortune 500 Enterprise BI & AI Intelligence Engine performing comprehensive data analysis on Netflix's 8,807 content release records. Features interactive 3D visualizations, content velocity trajectories, demographic split, and global localization maps.",
    longDescription: "An end-to-end Enterprise Data Analytics Hub built to visualize and analyze Netflix's global content strategy, content production velocity, rating distributions, and demographic audience segments across 8,807 movies and TV shows. Ingests raw catalog datasets, cleans missing metadata via Python & SQL, and delivers high-performance interactive visualizations with real-time cross-filtering capabilities.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python", "SQL", "Power BI / Tableau", "Next.js", "React", "Data Analytics"],
    liveUrl: "https://netflix-data-analysis-dashboard-lyn.vercel.app/",
    githubUrl: "https://github.com/omdwivedi45",
    role: "Lead Data Analyst & BI Developer",
    year: "2026",
    featured: true,
    architectureHighlights: [
      "Full catalog analysis covering 8,807 movie & TV show titles with metadata cleaning and normalization.",
      "Content Release Velocity Trajectory tracking production acceleration across decades.",
      "Interactive 3D Genre & Demographic Audience splits with dynamic cross-element filtering.",
      "Top 5 Content Hubs performance breakdown and global country-wise distribution maps.",
      "Direct interactive live dashboard visualization embedded seamlessly inside the portfolio."
    ]
  },
  {
    id: "splitfare",
    title: "SplitFare",
    category: "Web Application",
    description: "Developed a carpooling platform enabling users to connect with travelers on similar routes and share travel costs efficiently, with location-based matching, real-time seat tracking, secure authentication, and integrated payment gateways.",
    longDescription: "SplitFare optimizes commuter travel expenses by calculating per-seat costs, providing route matching, real-time seat tracking, secure authentication, and integrated payment gateways.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "UPI", "Leaflet", "Vercel"],
    liveUrl: "https://splitfare-app-1ms4.vercel.app/",
    githubUrl: "https://github.com/omdwivedi45",
    role: "Full-Stack & Analytics Developer",
    year: "Jun/25-Aug/25",
    featured: true,
    architectureHighlights: [
      "Location-based route matching and travel fare sharing optimization.",
      "Real-time seat tracking, secure authentication, and integrated payment gateways.",
      "Deployed on Vercel & Render with interactive React.js UI."
    ]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-tata",
    title: "Data Analytics Using GenAI — Tata Group, Forage",
    issuer: "Tata Group (via Forage)",
    date: "2026",
    credentialId: "Tata-GenAI-2026",
    credentialUrl: "#",
    image: "/assets/cert-tata.png",
    skills: ["Generative AI", "Exploratory Data Analysis", "Predictive Delinquency Risk", "Agentic AI Strategy"],
    description: "Performed GenAI-assisted exploratory data analysis, designed a no-code predictive framework to assess customer delinquency risk, and outlined an agentic-AI-driven collections strategy for a financial-services use case."
  },
  {
    id: "cert-deloitte",
    title: "Data Analytics Job Simulation — Deloitte Australia",
    issuer: "Deloitte Australia (via Forage)",
    date: "2026",
    credentialId: "Deloitte-DA-2026",
    credentialUrl: "#",
    image: "/assets/cert-deloitte.png",
    skills: ["Data Analysis", "Forensic Technology Workflows", "Data Cleaning", "Investigative Analysis"],
    description: "Applied data analysis and forensic-technology workflows to support investigative, evidence-based business scenarios."
  },
  {
    id: "cert-be10x",
    title: "AI Tools and ChatGPT Workshop — be10x",
    issuer: "be10x",
    date: "2026",
    credentialId: "BE10X-AI-2026",
    credentialUrl: "#",
    image: "/assets/cert-be10x.png",
    skills: ["AI Tools", "ChatGPT", "GenAI Workflows", "Prompt Engineering"],
    description: "Hands-on session on practical GenAI workflows for analysis and productivity."
  },
  {
    id: "cert-powerbi-ms",
    title: "Get Started Building with Power BI — Microsoft Learn",
    issuer: "Microsoft Learn",
    date: "2025",
    credentialId: "MS-PBI-2025",
    credentialUrl: "#",
    image: "/assets/cert-ms-powerbi.png",
    skills: ["Power BI", "Data Modeling", "Business Intelligence", "Dashboards"],
    description: "Successfully completed Get started building with Power BI certification issued by Microsoft Learn."
  },
  {
    id: "cert-skill-nation",
    title: "Advanced Power BI – Skill Nation",
    issuer: "Skill Nation (Mr. Jatan Shah)",
    date: "2025",
    credentialId: "2D169D5AF720-2D169D4C9FAC-2D08AACCC861",
    credentialUrl: "#",
    image: "/assets/cert-skillnation-powerbi.png",
    skills: ["Power BI Masterclass", "DAX Formulas", "Interactive Dashboards", "KPI Reporting"],
    description: "Awarded Certificate of Completion for Advanced Masterclass on Basic to Advanced Microsoft Power BI."
  },
  {
    id: "cert-cisco-python",
    title: "Python Essentials (PCAP) — Cisco Networking Academy",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialId: "CISCO-PCAP-2024",
    credentialUrl: "#",
    image: "/assets/cert-cisco-python.png",
    skills: ["Python", "Data Analysis", "Algorithms", "Problem Solving"],
    description: "Completed Programming Essentials in Python through Cisco Networking Academy program."
  },
  {
    id: "cert-cisco-networking",
    title: "Networking Essentials – Cisco",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialId: "CISCO-NET-2024",
    credentialUrl: "#",
    image: "/assets/cert-cisco-python.png",
    skills: ["Networking Essentials", "Protocols", "Infrastructure"],
    description: "Completed Networking Essentials certification through Cisco Networking Academy program."
  },
  {
    id: "cert-titans",
    title: "Soft Skills – Titans Learning, Nagpur",
    issuer: "Baderia Global & Titans Learning",
    date: "September 2025",
    credentialId: "TITANS/CRT/TRNGY25/BGIEM/JBP/118",
    credentialUrl: "#",
    image: "/assets/cert-titans.png",
    skills: ["Pre-Placement Training", "Problem Solving", "Analytical Thinking"],
    description: "Completed 108 hours of intensive Pre-Placement and soft skills training conducted by Baderia Global Institute in collaboration with Titans Learning Nagpur."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-suit-photo",
    title: "Omprakash Dwivedi",
    caption: "Professional Portrait — Generative AI Engineer",
    image: "/assets/suit-photo.jpg",
    category: "Professional"
  },
  {
    id: "gal-mittsure",
    title: "Mittsure Technologies Experience",
    caption: "Relationship Manager at Mittsure Technologies Office",
    image: "/assets/mittsure-photo.png",
    category: "Workplace"
  },
  {
    id: "gal-deloitte-cert",
    title: "Deloitte Job Simulation Certificate",
    caption: "Data Analytics Simulation Completion",
    image: "/assets/cert-deloitte.png",
    category: "Certificates"
  },
  {
    id: "gal-tata-cert",
    title: "Tata Group GenAI Simulation Certificate",
    caption: "GenAI Powered Data Analytics Completion",
    image: "/assets/cert-tata.png",
    category: "Certificates"
  }
];

