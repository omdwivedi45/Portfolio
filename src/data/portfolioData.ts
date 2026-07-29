import { UserProfile, ExperienceItem, SkillCategory, Project, CertificateItem, SocialLink, MilestoneItem, GalleryItem } from "@/types";

export const USER_PROFILE: UserProfile = {
  name: "Om Prakash Dwivedi",
  title: "Data Analyst",
  heading: "Turning Data into Insights That Drive Better Decisions.",
  subtitle: "I analyze data, build interactive dashboards, and transform complex datasets into meaningful business insights using SQL, Power BI, Python, and Excel.",
  tagline: "Transforming complex datasets into actionable business intelligence & interactive dashboards.",
  statusBadge: "DATA_ANALYST // Insights Node",
  bio: [
    "I am Om Prakash Dwivedi, a Data Analyst passionate about transforming raw data into actionable business insights. I recently completed my Bachelor of Technology in Artificial Intelligence & Machine Learning and enjoy solving real-world problems through analytics, visualization, and data-driven decision making.",
    "My expertise includes SQL, Power BI, Python, Advanced Excel, Pandas, and NumPy. Through hands-on projects and industry simulations, I have developed practical experience in data cleaning, dashboard development, KPI reporting, and business intelligence.",
    "I continuously improve my skills by building real-world analytics projects and learning modern data technologies to deliver measurable business value."
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Machine Learning",
    institution: "Baderia Global Institute of Engineering and Management",
    period: "2022 – 2026"
  },
  careerObjective: "To begin my career as a Data Analyst where I can apply analytical thinking, technical expertise, and business intelligence skills to solve real-world problems while continuously learning and growing.",
  location: "Jabalpur, Madhya Pradesh, India",
  email: "dwivediomprakash450@gmail.com",
  phone: "+91 9993330294",
  github: "https://github.com/omdwivedi45",
  linkedin: "https://linkedin.com/in/omprakashdwivedi45",
  avatarUrl: "/assets/suit-photo.jpg",
  resumeUrl: "/assets/resume-placeholder.pdf",
  stats: [
    { label: "B.Tech Specialization", value: "AI & ML", subtext: "Class of 2022–2026" },
    { label: "Core Analytics Stack", value: "SQL & Power BI", subtext: "Python & Pandas Expertise" },
    { label: "Simulations & Projects", value: "10+", subtext: "Deloitte, Tata & Custom BI" },
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
    skills: ["Customer Relationship Management", "Client Communication", "Business Operations", "Sales Process"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: "BarChart3",
    description: "Core analytical methods, data wrangling, and statistical tools.",
    skills: [
      { name: "SQL", level: "Advanced", featured: true },
      { name: "Power BI", level: "Advanced", featured: true },
      { name: "Python", level: "Advanced", featured: true },
      { name: "Excel (Advanced)", level: "Expert", featured: true },
      { name: "Tableau", level: "Intermediate" },
      { name: "Pandas & NumPy", level: "Advanced", featured: true }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational and document databases for analytical query execution.",
    skills: [
      { name: "MySQL", level: "Advanced", featured: true },
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" }
    ]
  },
  {
    id: "data-viz",
    title: "Data Visualization & BI",
    icon: "PieChart",
    description: "Building interactive dashboards, executive reports, and visual data stories.",
    skills: [
      { name: "Power BI Dashboards", level: "Expert", featured: true },
      { name: "Excel Dashboards", level: "Expert", featured: true },
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
      { name: "MS Office Suite", level: "Expert", featured: true }
    ]
  }
];

export const MILESTONES: MilestoneItem[] = [
  { id: "m1", title: "B.Tech in AI & ML", icon: "🎓", category: "Education" },
  { id: "m2", title: "Deloitte Data Analytics Job Simulation", icon: "📊", category: "Forage" },
  { id: "m3", title: "Tata GenAI Data Analytics Simulation", icon: "🤖", category: "Forage" },
  { id: "m4", title: "Microsoft Power BI Certified", icon: "📈", category: "Certification" },
  { id: "m5", title: "Cisco Python Essentials", icon: "🐍", category: "Certification" },
  { id: "m6", title: "Skill Nation Power BI Masterclass", icon: "💡", category: "Workshop" },
  { id: "m7", title: "be10X AI Tools Workshop", icon: "🚀", category: "Workshop" },
  { id: "m8", title: "Titans Learning Training Program", icon: "🏅", category: "Training" }
];

export const PROJECTS: Project[] = [
  {
    id: "retail-intelligence",
    title: "Retail Intelligence Dashboard",
    category: "Business Intelligence",
    description: "A complete business intelligence solution developed using SQL, Python, Excel, and Power BI that analyzes retail sales performance, customer behavior, profit trends, and operational KPIs through interactive dashboards.",
    longDescription: "Retail Intelligence Dashboard provides an end-to-end analytical framework for retail enterprise data. Ingests transactional records via SQL, processes data cleaning with Python Pandas, computes KPIs in Excel, and delivers interactive visual storytelling in Power BI.",
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
    category: "Exploratory Data Analysis",
    description: "Comprehensive exploratory data analysis and visualization of Netflix catalog, content distributions, rating trends, and regional insights.",
    longDescription: "Analyzes the Netflix movies and TV shows dataset to identify genre popularity trends, director output, release year distributions, and global content localization.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python", "Pandas", "Power BI", "SQL"],
    role: "Data Analyst",
    year: "2026",
    featured: true,
    architectureHighlights: [
      "Data cleaning and missing value imputation using Python Pandas.",
      "Content growth trends visualization over release years.",
      "Interactive genre and country breakdown dashboards."
    ]
  },
  {
    id: "banking-customer-analytics",
    title: "Banking Customer Analytics",
    category: "Customer Intelligence",
    description: "A customer analytics project focused on customer segmentation, revenue analysis, and business performance reporting using SQL and Power BI.",
    longDescription: "Examines banking customer churn patterns, account balances, transaction volume, and credit scores to enable targeted customer retention campaigns.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200",
    tags: ["SQL", "Power BI", "Customer Segmentation"],
    role: "Data Analyst",
    year: "2026",
    featured: true,
    architectureHighlights: [
      "SQL query pipelines for customer RFM (Recency, Frequency, Monetary) grouping.",
      "Interactive Power BI dashboard detailing account churn risk scores.",
      "Executive summary reporting on revenue distribution per customer segment."
    ]
  },
  {
    id: "splitfare",
    title: "SplitFare",
    category: "Web Application",
    description: "A smart ride-sharing platform enabling users to share travel expenses through secure authentication, real-time seat availability, and location-based matching.",
    longDescription: "SplitFare optimizes commuter travel expenses by calculating per-seat costs, providing route matching, and managing shared ledger balances.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    role: "Full-Stack & Analytics Developer",
    year: "2025",
    featured: true,
    architectureHighlights: [
      "Location-based ride matching and fare optimization algorithms.",
      "Real-time seat availability updates and transaction ledger.",
      "Responsive glassmorphic UI layout built with React & Tailwind CSS."
    ]
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    category: "Power BI Analytics",
    description: "Interactive dashboard for monitoring sales, revenue, profit, customer growth, and product performance using Power BI.",
    longDescription: "Monitors cross-channel sales metrics, product category profitability, monthly revenue growth rates, and top-performing sales representatives.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["Power BI", "DAX", "Excel"],
    role: "BI Developer",
    year: "2025",
    featured: false,
    architectureHighlights: [
      "Dynamic DAX expressions for Year-over-Year (YoY) growth calculation.",
      "Interactive drill-through pages by product line and geographic region."
    ]
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    category: "Workforce Analytics",
    description: "Dashboard designed to analyze employee performance, attrition trends, department-wise statistics, and workforce insights.",
    longDescription: "Empowers HR leadership to monitor employee turnover rates, satisfaction scores, salary distributions, and department headcount metrics.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    tags: ["Power BI", "Excel", "Data Visualization"],
    role: "Data Analyst",
    year: "2025",
    featured: false,
    architectureHighlights: [
      "Employee attrition rate analysis categorized by age group and tenure.",
      "Department-wise performance vs satisfaction scatter matrix."
    ]
  },
  {
    id: "sql-business-case-studies",
    title: "SQL Business Case Studies",
    category: "Database Queries",
    description: "Collection of SQL projects involving Joins, CTEs, Window Functions, Views, Stored Procedures, and business problem-solving.",
    longDescription: "Hands-on repository of SQL scripts solving real-world business scenarios including customer churn analysis, inventory tracking, and revenue attribution.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200",
    tags: ["SQL", "MySQL", "PostgreSQL", "Window Functions"],
    role: "SQL Developer",
    year: "2025",
    featured: false,
    architectureHighlights: [
      "Advanced CTEs and window functions for running totals and rankings.",
      "Optimized query execution plans and indexing strategies."
    ]
  },
  {
    id: "python-data-analysis",
    title: "Python Data Analysis Suite",
    category: "Data Science & EDA",
    description: "Data cleaning, preprocessing, exploratory data analysis, visualization, and business reporting using Python, Pandas, and NumPy.",
    longDescription: "A comprehensive Python analytics pipeline for cleaning messy raw datasets, conducting statistical hypothesis tests, and generating automated charts.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    role: "Data Analyst",
    year: "2025",
    featured: false,
    architectureHighlights: [
      "Automated missing value handling and outlier detection scripts.",
      "Exploratory correlation matrices and distribution visualizations."
    ]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-deloitte",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "June 30th, 2026",
    credentialId: "jeq2ftdMQG5cr4oiX",
    credentialUrl: "#",
    image: "/assets/cert-deloitte.png",
    skills: ["Data Analysis", "Forensic Technology", "Data Cleaning"],
    description: "Completed practical tasks in data analysis, data manipulation, and forensic technology data investigations."
  },
  {
    id: "cert-tata",
    title: "GenAI Powered Data Analytics Simulation",
    issuer: "Tata Group (via Forage)",
    date: "June 29th, 2026",
    credentialId: "NgAco5vCCLB77DfSj",
    credentialUrl: "#",
    image: "/assets/cert-tata.png",
    skills: ["Exploratory Data Analysis", "AI Analytics", "Predictive Modeling"],
    description: "Executed practical tasks in exploratory data analysis, risk profiling, AI-driven predictive delinquency analysis, and business reporting."
  },
  {
    id: "cert-powerbi-ms",
    title: "Microsoft Power BI Certified",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "MS-PBI-2026",
    credentialUrl: "#",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000",
    skills: ["Power BI", "DAX", "Data Modeling", "Dashboard Design"],
    description: "Demonstrated professional capability in designing enterprise dashboards, DAX measures, and data modeling in Power BI."
  },
  {
    id: "cert-cisco-python",
    title: "Cisco Python Essentials",
    issuer: "Cisco Networking Academy",
    date: "2026",
    credentialId: "CISCO-PY-2026",
    credentialUrl: "#",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    skills: ["Python", "Data Structures", "Algorithms", "Object-Oriented Programming"],
    description: "Validated mastery of fundamental Python programming, data structures, and algorithmic logic."
  },
  {
    id: "cert-skill-nation",
    title: "Skill Nation Power BI Masterclass",
    issuer: "Skill Nation",
    date: "2026",
    credentialId: "SN-PBI-MC-2026",
    credentialUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    skills: ["Power BI", "Data Visualization", "Business Intelligence"],
    description: "Specialized training on advanced Power BI dashboard development, custom visualizations, and executive KPIs."
  },
  {
    id: "cert-titans",
    title: "Titans Learning Training Program",
    issuer: "Baderia Global & Titans Learning",
    date: "September 2025",
    credentialId: "TITANS/CRT/TRNGY25/BGIEM/JBP/118",
    credentialUrl: "#",
    image: "/assets/cert-titans.png",
    skills: ["Pre-Placement Training", "Problem Solving", "Analytical Thinking"],
    description: "Completed 108 hours of intensive Pre-Placement training conducted by Baderia Global Institute in collaboration with Titans Learning Nagpur."
  },
  {
    id: "cert-be10x",
    title: "be10X AI Tools Workshop",
    issuer: "be10X",
    date: "March 3rd, 2026",
    credentialId: "BE10X-AI-2026",
    credentialUrl: "#",
    image: "/assets/cert-be10x.png",
    skills: ["AI Tools", "ChatGPT", "Data Analysis with AI", "Prompt Engineering"],
    description: "Awarded for completing AI tools and ChatGPT workshop covering rapid AI presentation creation, AI data analysis in under 30 minutes, and AI debugging."
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
    caption: "Customer Relationship Management & Operations",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
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
