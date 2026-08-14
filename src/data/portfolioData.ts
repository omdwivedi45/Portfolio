import { UserProfile, ExperienceItem, SkillCategory, Project, CertificateItem, SocialLink, MilestoneItem, GalleryItem } from "@/types";

export const USER_PROFILE: UserProfile = {
  name: "Om Prakash Dwivedi",
  title: "Data Analyst",
  heading: "Turning Data into Insights That Drive Better Decisions.",
  subtitle: "I analyze data, build interactive dashboards, and transform complex datasets into meaningful business insights using Dashboards and analytics, Python, and Excel.",
  tagline: "Transforming complex datasets into actionable business intelligence & interactive dashboards.",
  statusBadge: "DATA_ANALYST // Insights Node",
  bio: [
    "I am Om Prakash Dwivedi, a Data Analyst passionate about transforming raw data into actionable business insights. I recently completed my Bachelor of Technology in Artificial Intelligence & Machine Learning and enjoy solving real-world problems through analytics, visualization, and data-driven decision making.",
    "My expertise includes Dashboards and analytics, Python, and Advanced Excel. Through hands-on projects and industry simulations, I have developed practical experience in data cleaning, dashboard development, KPI reporting, and business intelligence.",
    "I continuously improve my skills by building real-world analytics projects and learning modern data technologies to deliver measurable business value."
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Machine Learning",
    institution: "Baderia Global Institute of Engineering and Management",
    period: "2022 – 2026"
  },
  careerObjective: "To obtain a challenging role as a Data Analyst in a reputed organization that allows me to leverage my academic knowledge, practical experience in SQL, Power BI, and Python, and acquired analytical skills to contribute to the company's growth while fulfilling organizational goals and advancing my professional career.",
  location: "Jabalpur, Madhya Pradesh, India",
  email: "dwivediomprakash450@gmail.com",
  phone: "+91 9993330294",
  github: "https://github.com/omdwivedi45",
  linkedin: "https://linkedin.com/in/omprakashdwivedi45",
  avatarUrl: "/assets/suit-photo.jpg",
  resumeUrl: "/assets/resume-omprakash.pdf",
  stats: [
    { label: "B.Tech Specialization", value: "AI & ML", subtext: "Class of 2022–2026" },
    { label: "Core Analytics Stack", value: "Excel and Power BI", subtext: "Python & Analytics Expertise" },
    { label: "Simulations & Projects", value: "5+", subtext: "Deloitte, Tata & Custom BI" },
    { label: "Certifications Earned", value: "7+", subtext: "Microsoft, Cisco, Forage" }
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
    id: "exp-deloitte",
    role: "Data Analytics Job Simulation",
    company: "Deloitte (Forage)",
    location: "Virtual / Forage",
    period: "June 2026",
    description: "Completed practical job simulation tasks focused on data analysis, forensic technology, and business reporting.",
    achievements: [
      "Performed data cleaning and data manipulation on complex financial and operational datasets.",
      "Conducted forensic technology data investigation to identify anomalies and pattern trends.",
      "Developed business analysis summaries and executive dashboard reporting models."
    ],
    skills: ["Data Cleaning", "Business Analysis", "Dashboard Reporting", "Forensic Technology"]
  },
  {
    id: "exp-tata",
    role: "GenAI Powered Data Analytics Simulation",
    company: "Tata Group (Forage)",
    location: "Virtual / Forage",
    period: "June 2026",
    description: "Participated in an AI-assisted analytics simulation to perform risk profiling, predictive delinquency analysis, and collections strategy reporting.",
    achievements: [
      "Executed exploratory data analysis and risk profiling to uncover hidden customer behavioral patterns.",
      "Utilized AI-assisted predictive analytics to forecast delinquency trends.",
      "Delivered business reports and data storytelling for collections and executive strategy."
    ],
    skills: ["Exploratory Data Analysis", "AI Assisted Analytics", "Business Reporting", "Predictive Analysis"]
  },
  {
    id: "exp-mittsure",
    role: "Relationship Manager",
    company: "Mittsure Technologies",
    location: "On-site / Operations",
    period: "2024",
    description: "Managed client relationships, business operations, and customer communication processes.",
    achievements: [
      "Strengthened customer relationship management (CRM) workflows and client rapport.",
      "Streamlined sales process understanding and customer support operations.",
      "Analyzed operational communications to improve client retention metrics."
    ],
    skills: ["Customer Relationship Management", "Client Communication", "Business Operations", "Sales Process"],
    image: "/assets/mittsure-photo.png"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: "BarChart3",
    description: "Core analytical methods, data wrangling, and statistical tools.",
    skills: [
      { name: "SQL", level: "Intermediate", featured: true },
      { name: "Python", level: "Intermediate", featured: true },
      { name: "Power BI", level: "Advanced", featured: true },
      { name: "Excel", level: "Advanced", featured: true },
      { name: "Tableau", level: "Intermediate" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational and document databases for analytical query execution.",
    skills: [
      { name: "MySQL", level: "Intermediate", featured: true },
      { name: "MongoDB", level: "Intermediate" }
    ]
  },
  {
    id: "data-viz",
    title: "Data Visualization & BI",
    icon: "PieChart",
    description: "Building interactive dashboards, executive reports, and visual data stories.",
    skills: [
      { name: "Power BI Dashboards", level: "Advanced", featured: true },
      { name: "Excel Dashboards", level: "Advanced", featured: true },
      { name: "Business Reporting", level: "Advanced", featured: true },
      { name: "Dashboard Design", level: "Advanced" },
      { name: "Data Storytelling", level: "Advanced", featured: true }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environment",
    icon: "Wrench",
    description: "Development environments, version control, and productivity tools.",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate", featured: true },
      { name: "VS Code", level: "Advanced", featured: true },
      { name: "MS Office Suite", level: "Advanced", featured: true }
    ]
  }
];

export const MILESTONES: MilestoneItem[] = [
  { id: "m1", title: "B.Tech in AIML", icon: "🎓", category: "Education" },
  { id: "m2", title: "Data Analytics Using GenAI – TataIQ", icon: "🤖", category: "Certification" },
  { id: "m3", title: "Deloitte Data Analytics Job Simulation", icon: "📊", category: "Forage" },
  { id: "m4", title: "Advanced Power BI – Skill Nation", icon: "💡", category: "Certification" },
  { id: "m5", title: "Python Essentials (PCAP) – Cisco", icon: "🐍", category: "Certification" },
  { id: "m6", title: "Networking Essentials – Cisco", icon: "🌐", category: "Certification" },
  { id: "m7", title: "Soft Skills – Titans Learning, Nagpur", icon: "🏅", category: "Training" },
  { id: "m8", title: "Vice Captain, Kabaddi Team – Inter College", icon: "🏆", category: "Achievement" },
  { id: "m9", title: "Community Volunteer – Baderia Global Institute", icon: "🤝", category: "Achievement" },
  { id: "m10", title: "Headboy – VN Convent School, Beohari", icon: "⭐", category: "Achievement" }
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
    title: "Data Analytics Using GenAI – TataIQ",
    issuer: "Tata Group (via Forage)",
    date: "2026",
    credentialId: "NgAco5vCCLB77DfSj",
    credentialUrl: "#",
    image: "/assets/cert-tata.png",
    skills: ["Exploratory Data Analysis", "AI Analytics", "Predictive Modeling"],
    description: "Executed practical tasks in exploratory data analysis, risk profiling, AI-driven predictive delinquency analysis, and business reporting."
  },
  {
    id: "cert-deloitte",
    title: "Data Analytics – Deloitte (Forage Job Simulation)",
    issuer: "Deloitte (via Forage)",
    date: "2026",
    credentialId: "jeq2ftdMQG5cr4oiX",
    credentialUrl: "#",
    image: "/assets/cert-deloitte.png",
    skills: ["Data Analysis", "Forensic Technology", "Data Cleaning"],
    description: "Completed practical tasks in data analysis, data manipulation, and forensic technology data investigations."
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
    title: "Python Essentials (PCAP) – Cisco/Python Institute",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialId: "CISCO-PCAP-2024",
    credentialUrl: "#",
    image: "/assets/cert-cisco-python.png",
    skills: ["Python", "Data Analysis", "Algorithms", "Problem Solving"],
    description: "Completed Partner: PCAP - Programming Essentials in Python through Cisco Networking Academy program."
  },
  {
    id: "cert-titans",
    title: "Soft Skills – Titans Learning, Nagpur",
    issuer: "Baderia Global & Titans Learning",
    date: "2025",
    credentialId: "TITANS/CRT/TRNGY25/BGIEM/JBP/118",
    credentialUrl: "#",
    image: "/assets/cert-titans.png",
    skills: ["Pre-Placement Training", "Problem Solving", "Analytical Thinking"],
    description: "Completed 108 hours of intensive Pre-Placement and soft skills training conducted by Baderia Global Institute in collaboration with Titans Learning Nagpur."
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
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-suit-photo",
    title: "Om Prakash Dwivedi",
    caption: "Professional Portrait — Data Analyst",
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
