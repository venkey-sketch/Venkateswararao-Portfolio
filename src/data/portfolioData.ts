import { 
  PersonalInfo, 
  SkillCategory, 
  ProjectItem, 
  EducationItem, 
  CertificationItem, 
  AchievementItem 
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Venkateswararao",
  fullName: "Bhattiprolu Venkateswararao",
  title: "3rd Year B.Tech CSE Student & Aspiring Software Developer",
  degree: "B.Tech – Computer Science and Engineering",
  year: "3rd Year (2024 – Present)",
  institution: "Vignan's University",
  location: "India",
  status: "Open for Software Development & Internship Opportunities",
  shortBio: "I’m a Computer Science student passionate about software development, problem solving, web technologies, and building practical projects.",
  bio: "I am a dedicated 3rd-year Computer Science & Engineering student at Vignan's University with a strong foundation in core computer science principles, object-oriented programming, data structures, algorithms, and modern web application development. I enjoy designing efficient software solutions, building full-stack and AI-assisted tools, and constantly learning new frameworks to solve real-world problems.",
  resumeUrl: "assets/resume.pdf",
  socials: {
    email: "bhattiproluvenkateswararao9@gmail.com", // [YOUR EMAIL]
    linkedin: "https://linkedin.com/in/[YOUR-LINKEDIN]", // [YOUR LINKEDIN]
    github: "https://github.com/[YOUR-GITHUB]", // [YOUR GITHUB]
    location: "India"
  },
  focusAreas: [
    "Software Development",
    "Web Development",
    "Python",
    "Data Structures & Algorithms",
    "Database Management",
    "Machine Learning",
    "Problem Solving"
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for application logic, systems, and algorithms",
    skills: [
      { name: "Python", level: "Proficient", percentage: 85, iconName: "Code", topics: ["Object-Oriented Programming", "Scripting", "Data Structures", "Automation", "Flask"] },
      { name: "Java", level: "Intermediate", percentage: 78, iconName: "Coffee", topics: ["OOP Concepts", "Collections Framework", "Core Java", "Exception Handling"] },
      { name: "C", level: "Intermediate", percentage: 75, iconName: "Cpu", topics: ["Pointers", "Memory Allocation", "Core Data Structures", "Algorithms"] }
    ]
  },
  {
    title: "Web Technologies",
    description: "Front-end and responsive web development stack",
    skills: [
      { name: "HTML5", level: "Proficient", percentage: 90, iconName: "FileCode", topics: ["Semantic Markup", "Accessibility", "SEO Best Practices", "Forms"] },
      { name: "CSS3", level: "Proficient", percentage: 85, iconName: "Palette", topics: ["Flexbox", "CSS Grid", "Responsive Design", "Transitions & Animations"] },
      { name: "JavaScript", level: "Intermediate", percentage: 80, iconName: "Sparkles", topics: ["ES6+ Features", "DOM Manipulation", "Async/Await", "Fetch API", "Event Handling"] }
    ]
  },
  {
    title: "Database Management",
    description: "Relational database design, querying, and optimization",
    skills: [
      { name: "SQL", level: "Intermediate", percentage: 82, iconName: "Database", topics: ["Complex Queries", "Joins", "Subqueries", "Aggregations", "Indexes"] },
      { name: "MySQL", level: "Intermediate", percentage: 80, iconName: "Server", topics: ["Schema Design", "CRUD Operations", "Relational Integrity", "Stored Procedures"] }
    ]
  },
  {
    title: "Computer Science Fundamentals",
    description: "Theoretical and architectural pillars of computer science",
    skills: [
      { name: "Data Structures", level: "Intermediate", percentage: 85, iconName: "Boxes", topics: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"] },
      { name: "Algorithms", level: "Intermediate", percentage: 80, iconName: "GitMerge", topics: ["Sorting", "Searching", "Recursion", "Dynamic Programming", "Time Complexity"] },
      { name: "DBMS", level: "Intermediate", percentage: 82, iconName: "HardDrive", topics: ["Normalization (1NF-BCNF)", "ACID Properties", "Transactions", "ER Modeling"] },
      { name: "Operating Systems", level: "Foundational", percentage: 75, iconName: "Layers", topics: ["Process Scheduling", "Memory Management", "Concurrency", "Deadlocks"] },
      { name: "Computer Networks", level: "Foundational", percentage: 75, iconName: "Network", topics: ["OSI & TCP/IP Models", "HTTP/HTTPS", "Routing Protocols", "DNS & Sockets"] }
    ]
  },
  {
    title: "Developer Tools",
    description: "Version control, code editors, and workflow productivity tools",
    skills: [
      { name: "Git", level: "Proficient", percentage: 85, iconName: "GitBranch", topics: ["Branching", "Merge Workflows", "Rebase", "Commit History", "Conflict Resolution"] },
      { name: "GitHub", level: "Proficient", percentage: 85, iconName: "Github", topics: ["Repository Management", "Pull Requests", "Code Reviews", "GitHub Pages"] },
      { name: "VS Code", level: "Proficient", percentage: 90, iconName: "Terminal", topics: ["Debugging", "Extensions", "Integrated Terminal", "Snippet Workflows"] }
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "ai-career-mentor",
    title: "AI Career Mentor",
    tagline: "Intelligent career pathfinder & personalized learning roadmap generator",
    description: "An AI-powered career guidance platform designed to help students explore career paths, identify skill gaps, create personalized learning roadmaps, and discover internship opportunities.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "AI API"],
    githubUrl: "https://github.com/[YOUR-GITHUB]/ai-career-mentor",
    liveUrl: "https://[PROJECT-LIVE-DEMO].com/ai-career-mentor",
    category: "ai",
    featured: true,
    highlights: [
      "Dynamic skill-gap analysis comparing user skills with industry job roles",
      "Automated personalized milestone roadmaps powered by AI API integrations",
      "Responsive interactive user interface built with modern JavaScript and Flask backend"
    ]
  },
  {
    id: "task-management-app",
    title: "Task Management Web App",
    tagline: "Clean, responsive daily productivity and workflow tracking application",
    description: "A responsive task management application that helps users organize, track, and manage daily tasks efficiently with intuitive status updates, priorities, and local persistence.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/[YOUR-GITHUB]/task-management-app",
    liveUrl: "https://[PROJECT-LIVE-DEMO].com/task-manager",
    category: "web",
    featured: true,
    highlights: [
      "Intuitive drag/click status updating (To Do, In Progress, Completed)",
      "Priority tagging, search filtering, and clean task categorization",
      "Persistent state management with resilient localStorage integration"
    ]
  },
  {
    id: "data-analytics-dashboard",
    title: "Data Analytics Dashboard",
    tagline: "Interactive visual exploratory analysis and reporting tool",
    description: "An interactive dashboard for analyzing data and presenting useful insights through charts, key performance metrics, and exploratory visualizations.",
    technologies: ["Python", "Pandas", "Matplotlib", "Excel"],
    githubUrl: "https://github.com/[YOUR-GITHUB]/data-analytics-dashboard",
    liveUrl: "https://[PROJECT-LIVE-DEMO].com/data-dashboard",
    category: "data",
    featured: true,
    highlights: [
      "Automated tabular data processing and cleaning pipeline using Pandas",
      "Custom visualization generation including distribution histograms and trend graphs",
      "Data export summary reporting compatible with standard spreadsheet formats"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Vignan's University",
    period: "2024 – Present",
    location: "Andhra Pradesh, India",
    scorePlaceholder: "[CGPA: 8.5 / 10 - Update with your CGPA]",
    description: "Currently in 3rd Year pursuing comprehensive undergraduate degree in Computer Science and Engineering. Focusing on algorithms, systems design, database management, and hands-on software development projects.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming in Java & Python",
      "Operating Systems & Process Management",
      "Computer Networks & Protocols",
      "Software Engineering & Web Technologies"
    ]
  },
  {
    degree: "Intermediate / Senior Secondary Education (10+2)",
    institution: "[YOUR JUNIOR COLLEGE / INSTITUTION NAME]",
    period: "2022 – 2024",
    location: "Andhra Pradesh, India",
    scorePlaceholder: "[Percentage / Score: E.g., 95% - Update with your score]",
    description: "Completed higher secondary education with major focus on Mathematics, Physics, and Chemistry (MPC stream), building strong analytical and quantitative foundations.",
    coursework: ["Mathematics", "Physics", "Chemistry", "Computer Fundamentals"]
  },
  {
    degree: "Secondary School Certificate (SSC / 10th Standard)",
    institution: "[YOUR HIGH SCHOOL NAME]",
    period: "2021 – 2022",
    location: "India",
    scorePlaceholder: "[GPA / Percentage: E.g., 10.0 GPA - Update with your score]",
    description: "Graduated with top academic standing, excelling in science, mathematics, and basic computer applications.",
    coursework: ["Mathematics", "Science", "Social Studies", "English"]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-python",
    title: "Python Programming Certification",
    issuer: "[ISSUING ORGANIZATION - E.g. Coursera / HackerRank / NPTEL]",
    issueDate: "[MONTH & YEAR - E.g. 2025]",
    credentialUrl: "https://[VERIFY-CERTIFICATE-URL]",
    skillsCovered: ["Python Data Structures", "OOP", "Modules & Packages", "File Handling"],
    category: "Programming"
  },
  {
    id: "cert-web",
    title: "Web Development Certification",
    issuer: "[ISSUING ORGANIZATION - E.g. Udemy / freeCodeCamp / Great Learning]",
    issueDate: "[MONTH & YEAR - E.g. 2025]",
    credentialUrl: "https://[VERIFY-CERTIFICATE-URL]",
    skillsCovered: ["HTML5", "CSS3", "JavaScript ES6+", "DOM Manipulation", "Responsive Web Design"],
    category: "Web Development"
  },
  {
    id: "cert-data",
    title: "Data Analytics with Python",
    issuer: "[ISSUING ORGANIZATION - E.g. IBM / Google / NPTEL]",
    issueDate: "[MONTH & YEAR - E.g. 2025]",
    credentialUrl: "https://[VERIFY-CERTIFICATE-URL]",
    skillsCovered: ["Data Wrangling", "Pandas", "NumPy", "Matplotlib Visualization"],
    category: "Data Science"
  },
  {
    id: "cert-ml",
    title: "Machine Learning Fundamentals",
    issuer: "[ISSUING ORGANIZATION - E.g. Coursera / DeepLearning.AI / NPTEL]",
    issueDate: "[MONTH & YEAR - E.g. 2025]",
    credentialUrl: "https://[VERIFY-CERTIFICATE-URL]",
    skillsCovered: ["Supervised Learning", "Regression & Classification", "Model Evaluation"],
    category: "Machine Learning"
  },
  {
    id: "cert-other",
    title: "Database Management & SQL Certification",
    issuer: "[ISSUING ORGANIZATION - E.g. HackerRank / Oracle / Spoken Tutorial]",
    issueDate: "[MONTH & YEAR - E.g. 2024]",
    credentialUrl: "https://[VERIFY-CERTIFICATE-URL]",
    skillsCovered: ["SQL Queries", "Schema Normalization", "Relational Databases"],
    category: "Databases"
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Algorithmic Problem Solving & Coding Practice",
    category: "Coding Practice",
    description: "Actively practicing Data Structures and Algorithms on competitive platforms (LeetCode, HackerRank, CodeChef) solving problems in Python, Java, and C.",
    dateOrMetric: "[150+ Problems Solved / Star Badge Placeholder]",
    iconName: "Code2"
  },
  {
    id: "ach-2",
    title: "Technical Competitions & Hackathons",
    category: "Competitions",
    description: "Participated in university-level coding challenges and hackathons, developing prototype solutions under timed collaborative environments.",
    dateOrMetric: "[Hackathon Participant / Finalist Placeholder]",
    iconName: "Trophy"
  },
  {
    id: "ach-3",
    title: "College Activities & Technical Clubs",
    category: "College Activities",
    description: "Active member of Vignan's University Computer Science technical clubs, participating in coding workshops, tech symposiums, and peer mentoring sessions.",
    dateOrMetric: "Active Member (2024 – Present)",
    iconName: "Users"
  },
  {
    id: "ach-4",
    title: "Full-Stack & AI Project Milestones",
    category: "Projects",
    description: "Successfully built and demonstrated academic and self-driven projects including 'AI Career Mentor' and 'Task Management Web App'.",
    dateOrMetric: "3+ Core Projects Completed",
    iconName: "FolderGit2"
  },
  {
    id: "ach-5",
    title: "Software Internship & Training Aspirations",
    category: "Internships",
    description: "Completed intensive technical coursework and practical lab assignments, preparing for upcoming summer software engineering and internship roles.",
    dateOrMetric: "[Internship / Training Certificate Placeholder]",
    iconName: "Briefcase"
  },
  {
    id: "ach-6",
    title: "Academic Performance & Department Standing",
    category: "Academic",
    description: "Consistent academic performance in Computer Science and Engineering core modules with strong lab grades and project evaluations.",
    dateOrMetric: "[Academic Merit / Grade Placeholder]",
    iconName: "GraduationCap"
  }
];
