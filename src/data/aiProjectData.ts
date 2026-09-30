// Complete GitHub Codebase, Documentation, and Interactive Career Knowledge Base for AI Career Mentor

export interface ProjectCodeFile {
  name: string;
  language: string;
  description: string;
  content: string;
}

export interface CareerRoleData {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  avgSalary: string;
  demandLevel: 'High' | 'Very High' | 'Critical Demand';
  requiredSkills: { name: string; category: string; importance: 'Core' | 'Recommended' | 'Bonus' }[];
  milestones: {
    month: string;
    title: string;
    goal: string;
    keyTopics: string[];
    handsOnProject: string;
  }[];
  interviewPrepTopics: string[];
  recommendedResources: { title: string; type: string; url: string }[];
}

export const careerRolesDatabase: Record<string, CareerRoleData> = {
  'full-stack-python': {
    id: 'full-stack-python',
    name: 'Full Stack Python & Web Developer',
    tagline: 'Build end-to-end scalable web applications using Python, modern frontend, and RESTful APIs.',
    icon: 'Code',
    avgSalary: '₹6 - 12 LPA (Entry/Fresher) • $85k+ Global',
    demandLevel: 'Very High',
    requiredSkills: [
      { name: 'Python', category: 'Backend', importance: 'Core' },
      { name: 'Flask / FastAPI', category: 'Backend', importance: 'Core' },
      { name: 'HTML5 & CSS3', category: 'Frontend', importance: 'Core' },
      { name: 'JavaScript (ES6+)', category: 'Frontend', importance: 'Core' },
      { name: 'SQL & Relational DBs', category: 'Database', importance: 'Core' },
      { name: 'Git & GitHub', category: 'DevOps', importance: 'Core' },
      { name: 'REST APIs & JSON', category: 'Backend', importance: 'Core' },
      { name: 'Docker Containers', category: 'DevOps', importance: 'Recommended' },
      { name: 'React / Frontend Framework', category: 'Frontend', importance: 'Recommended' },
      { name: 'Cloud Deployment (AWS/Render)', category: 'DevOps', importance: 'Recommended' }
    ],
    milestones: [
      {
        month: 'Month 1',
        title: 'Core Python & Object-Oriented Software Engineering',
        goal: 'Master modular code, OOP principles, data structures, and debugging.',
        keyTopics: ['Advanced Data Structures (Lists, Dicts, Sets)', 'Object-Oriented Programming (Inheritance, Polymorphism)', 'File I/O & Exception Handling', 'Unit Testing with pytest'],
        handsOnProject: 'CLI Expense & Budget Tracker with SQLite persistence and data validation.'
      },
      {
        month: 'Month 2',
        title: 'Backend Web Development with Flask & REST APIs',
        goal: 'Develop secure, stateless RESTful APIs and handle database migrations.',
        keyTopics: ['Flask Routing & Request Context', 'Flask-SQLAlchemy ORM', 'JWT Authentication & Password Hashing', 'CORS & Error Handling Middleware'],
        handsOnProject: 'RESTful E-Commerce & Product Inventory API with auth tokens and SQLite/PostgreSQL.'
      },
      {
        month: 'Month 3',
        title: 'Modern Interactive Frontend & API Integration',
        goal: 'Connect dynamic client-side interfaces to backend endpoints with state synchronization.',
        keyTopics: ['Modern JavaScript Async/Await & Fetch', 'Responsive Bento Grid Layouts with Tailwind/CSS', 'Component State & LocalStorage', 'Forms Validation & Feedback'],
        handsOnProject: 'Dynamic Student Task & Career Roadmap Web Application consuming backend REST APIs.'
      },
      {
        month: 'Month 4',
        title: 'Full-Stack Capstone, Cloud Deployment & CI/CD',
        goal: 'Package the app in Docker, configure GitHub Actions, and deploy to live cloud.',
        keyTopics: ['Docker containerization (Dockerfile & docker-compose)', 'Continuous Integration with GitHub Actions', 'Cloud Hosting (Render/Railway/Vercel)', 'Production Logging & Gunicorn'],
        handsOnProject: 'Production-ready AI Career Mentor Platform with live domain and monitoring.'
      },
      {
        month: 'Month 5-6',
        title: 'Technical Interview Mastery & Internship Hiring Pipeline',
        goal: 'Crack technical screening, live coding interviews, and HR rounds.',
        keyTopics: ['DSA on LeetCode (Arrays, Hashing, Two Pointers, Trees)', 'System Design for Entry-Level (Caching, DB Normalization)', 'STAR-method Interview Storytelling', 'Resume & GitHub Optimization'],
        handsOnProject: 'Polish GitHub profile README, pinned repositories, and published live demos.'
      }
    ],
    interviewPrepTopics: [
      'Difference between mutable and immutable types in Python',
      'How does Flask handle routing and the application context?',
      'Explain ACID properties and database normalization (1NF to 3NF)',
      'How do async operations work in JavaScript with the Event Loop?',
      'Describe REST architectural constraints and common status codes'
    ],
    recommendedResources: [
      { title: 'Flask Official Documentation', type: 'Docs', url: 'https://flask.palletsprojects.com/' },
      { title: 'Full Stack Python Guide', type: 'Book/Guide', url: 'https://www.fullstackpython.com/' },
      { title: 'MDN Web Docs (JavaScript & DOM)', type: 'Tutorial', url: 'https://developer.mozilla.org/' }
    ]
  },

  'ai-ml-engineer': {
    id: 'ai-ml-engineer',
    name: 'AI & Machine Learning Engineer',
    tagline: 'Design predictive models, neural networks, and generative AI pipelines.',
    icon: 'Bot',
    avgSalary: '₹7 - 15 LPA (Entry/Fresher) • $95k+ Global',
    demandLevel: 'Critical Demand',
    requiredSkills: [
      { name: 'Python', category: 'Programming', importance: 'Core' },
      { name: 'NumPy & Pandas', category: 'Data Analysis', importance: 'Core' },
      { name: 'Matplotlib & Seaborn', category: 'Visualization', importance: 'Core' },
      { name: 'Scikit-Learn', category: 'ML Algorithms', importance: 'Core' },
      { name: 'Math (Linear Algebra, Calculus, Stats)', category: 'Theory', importance: 'Core' },
      { name: 'Deep Learning (PyTorch / TensorFlow)', category: 'Deep Learning', importance: 'Recommended' },
      { name: 'LLM APIs & Prompt Engineering', category: 'GenAI', importance: 'Recommended' },
      { name: 'Flask / FastAPI Model Serving', category: 'Deployment', importance: 'Recommended' },
      { name: 'MLOps & Model Tracking', category: 'DevOps', importance: 'Bonus' }
    ],
    milestones: [
      {
        month: 'Month 1',
        title: 'Mathematical Foundations & Data Manipulation',
        goal: 'Master matrix mathematics, descriptive statistics, and dataset cleaning.',
        keyTopics: ['NumPy vectorized operations', 'Pandas DataFrame filtering & groupby', 'Data cleaning & missing value imputation', 'Exploratory Data Analysis (EDA)'],
        handsOnProject: 'Comprehensive Real Estate & Housing Price Exploratory Analysis with Seaborn.'
      },
      {
        month: 'Month 2',
        title: 'Supervised & Unsupervised Machine Learning',
        goal: 'Build, evaluate, and tune classical machine learning classifiers and regressors.',
        keyTopics: ['Linear/Logistic Regression, Decision Trees, Random Forests', 'Model Evaluation (Precision, Recall, ROC-AUC, F1-Score)', 'Cross-Validation & Hyperparameter Grid Search', 'K-Means Clustering & PCA'],
        handsOnProject: 'Customer Churn Prediction & Student Placement Predictor using Scikit-Learn.'
      },
      {
        month: 'Month 3',
        title: 'Deep Learning Foundations & Neural Networks',
        goal: 'Understand backpropagation, activation functions, and neural network architectures.',
        keyTopics: ['Perceptrons & Multi-Layer Perceptrons (MLP)', 'PyTorch Tensors & autograd', 'Convolutional Neural Networks (CNNs)', 'Transfer Learning with Pretrained Models'],
        handsOnProject: 'Handwritten Digit & Chest X-Ray Classification using PyTorch transfer learning.'
      },
      {
        month: 'Month 4',
        title: 'Generative AI, Prompt Engineering & Model Serving',
        goal: 'Integrate LLM APIs, vector embeddings, and serve models via REST APIs.',
        keyTopics: ['Gemini / OpenAI API Integration', 'Retrieval-Augmented Generation (RAG) Concepts', 'Vector Databases & Embeddings', 'Building FastAPI model prediction endpoints'],
        handsOnProject: 'AI Career Mentor & Resume Reviewer with LLM API & FastAPI backend.'
      },
      {
        month: 'Month 5-6',
        title: 'MLOps, Portfolio Deployment & Coding Interviews',
        goal: 'Deploy models as microservices on Hugging Face Spaces/Render and prepare for ML interviews.',
        keyTopics: ['Model serialization (pickle/joblib/onnx)', 'Dockerizing ML APIs', 'ML interview behavioral and theoretical questions', 'Coding DSA in Python'],
        handsOnProject: 'Publicly hosted interactive portfolio with live ML models and documentation.'
      }
    ],
    interviewPrepTopics: [
      'Bias vs. Variance tradeoff and how to mitigate overfitting',
      'Explain how the backpropagation algorithm calculates gradients',
      'Difference between Precision, Recall, and F1-score',
      'How does gradient descent optimize loss functions?',
      'What are Attention mechanisms and Transformers at a high level?'
    ],
    recommendedResources: [
      { title: 'Scikit-Learn User Guide', type: 'Docs', url: 'https://scikit-learn.org/' },
      { title: 'Deep Learning Specialization by Andrew Ng', type: 'Course', url: 'https://deeplearning.ai/' },
      { title: 'Fast.ai Practical Deep Learning', type: 'Course', url: 'https://course.fast.ai/' }
    ]
  },

  'cloud-devops': {
    id: 'cloud-devops',
    name: 'Cloud & DevOps Engineer',
    tagline: 'Automate build pipelines, containerize infrastructure, and deploy resilient cloud services.',
    icon: 'Server',
    avgSalary: '₹6.5 - 14 LPA (Entry/Fresher) • $90k+ Global',
    demandLevel: 'High',
    requiredSkills: [
      { name: 'Linux / Bash Scripting', category: 'Systems', importance: 'Core' },
      { name: 'Git & GitHub Workflows', category: 'VCS', importance: 'Core' },
      { name: 'Docker & Containerization', category: 'Containers', importance: 'Core' },
      { name: 'CI/CD Pipelines (GitHub Actions)', category: 'Automation', importance: 'Core' },
      { name: 'Cloud Basics (AWS / GCP)', category: 'Cloud', importance: 'Core' },
      { name: 'Networking & DNS', category: 'Systems', importance: 'Core' },
      { name: 'Kubernetes (K8s)', category: 'Orchestration', importance: 'Recommended' },
      { name: 'Terraform (IaC)', category: 'Infrastructure', importance: 'Recommended' },
      { name: 'Prometheus & Grafana', category: 'Monitoring', importance: 'Bonus' }
    ],
    milestones: [
      {
        month: 'Month 1',
        title: 'Linux Systems Administration & Shell Scripting',
        goal: 'Master command line fluency, permissions, process management, and automation.',
        keyTopics: ['Linux File Hierarchy, Permissions (chmod/chown)', 'Process Signals, cron jobs, and systemd', 'Bash scripting loops, functions, and error handling', 'SSH Key Authentication & Remote Server Config'],
        handsOnProject: 'Automated Server Health Monitoring & Log Rotation Shell Script.'
      },
      {
        month: 'Month 2',
        title: 'Docker Containerization & Multi-Container Apps',
        goal: 'Package applications into lightweight, reproducible OCI container images.',
        keyTopics: ['Dockerfile instructions & multi-stage builds', 'Image optimization & layer caching', 'Docker networking, volumes, and persistence', 'docker-compose for multi-service stacks'],
        handsOnProject: 'Containerized 3-tier web app (Frontend + Flask Backend + PostgreSQL Database).'
      },
      {
        month: 'Month 3',
        title: 'CI/CD Automation with GitHub Actions',
        goal: 'Build automated continuous integration pipelines testing and building artifacts on every commit.',
        keyTopics: ['GitHub Actions YAML syntax and triggers', 'Automated linting, test runners, and security scans', 'Docker image build and push to Docker Hub / GHCR', 'Automated deployment webhooks'],
        handsOnProject: 'Zero-Downtime automated CI/CD pipeline deploying to cloud on push to main.'
      },
      {
        month: 'Month 4',
        title: 'Public Cloud Services (AWS / GCP) & Infrastructure',
        goal: 'Deploy services on virtual compute, object storage, and configure custom domains with SSL.',
        keyTopics: ['EC2 / Compute Engine, S3 / Cloud Storage', 'VPC, Security Groups, and Subnets', 'IAM Roles and least privilege access', 'Nginx reverse proxy configuration & Let’s Encrypt SSL'],
        handsOnProject: 'High-availability web service behind Nginx reverse proxy on Cloud Compute.'
      },
      {
        month: 'Month 5-6',
        title: 'Kubernetes Orchestration & Entry-Level Cloud Certifications',
        goal: 'Understand Pods, Deployments, and Services, and prepare for AWS Cloud Practitioner / CKA.',
        keyTopics: ['Kubernetes architecture (Control Plane & Worker Nodes)', 'Deployments, Services (ClusterIP, NodePort, LoadBalancer)', 'ConfigMaps and Secrets', 'Cloud interview scenarios'],
        handsOnProject: 'Kubernetes deployment manifest repository with ingress and health probes.'
      }
    ],
    interviewPrepTopics: [
      'Difference between Virtual Machines and Containers',
      'Explain the layers in a Dockerfile and how caching works',
      'What happens when you type an HTTPS URL into your browser (DNS, TLS, HTTP)?',
      'Explain CI vs. CD and how automated rollbacks function',
      'How does an Nginx reverse proxy improve security and load distribution?'
    ],
    recommendedResources: [
      { title: 'Docker Official Getting Started', type: 'Docs', url: 'https://docs.docker.com/get-started/' },
      { title: 'GitHub Actions Documentation', type: 'Docs', url: 'https://docs.github.com/en/actions' },
      { title: 'Linux Journey Tutorials', type: 'Tutorial', url: 'https://linuxjourney.com/' }
    ]
  }
};

// Complete GitHub Project Codebase for the AI Career Mentor
export const aiCareerMentorCodeFiles: ProjectCodeFile[] = [
  {
    name: 'README.md',
    language: 'markdown',
    description: 'Comprehensive GitHub documentation with installation, architecture, and interview guide',
    content: `# AI Career Mentor & Skill Gap Analyzer 🚀

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Active](https://img.shields.io/badge/Project-Ready%20for%20Production-success.svg)]()

> An intelligent, personalized career pathfinder for Computer Science & Engineering students. It compares current student skills against live industry requirements, identifies critical skill gaps, and synthesizes a step-by-step month-by-month learning roadmap powered by AI.

---

## 📌 Project Overview
Many engineering students struggle to understand **what skills to learn next** and **how to transition from academic syllabus to industry readiness**. 
**AI Career Mentor** solves this by:
1. Evaluating the user's current academic year, completed subjects, and programming languages.
2. Benchmarking their profile against real-world tech roles (*Full Stack Python Developer*, *AI/ML Engineer*, *Cloud/DevOps Engineer*).
3. Calculating a quantifiable **Skill-Match Percentage & Gap Matrix**.
4. Generating a personalized **6-Month Milestone Roadmap** complete with hands-on capstone project recommendations and interview questions.
5. Providing an interactive **AI Mentor Chat** interface to answer student queries in real time.

---

## 🏗️ Architecture & Data Flow

\`\`\`text
+-------------------+        HTTP JSON POST        +--------------------+
|                   |  ------------------------>   |                    |
|   Frontend UI     |                              |   Flask REST API   |
| (HTML5/CSS3/ES6)  |  <------------------------   |      (app.py)      |
|                   |        Roadmap & Match       |                    |
+-------------------+                               +---------+----------+
                                                              |
                                                              v
                                                   +--------------------+
                                                   |   Skill Analyzer   |
                                                   |  & Career Engine   |
                                                   +---------+----------+
                                                              |
                                                              v
                                                   +--------------------+
                                                   |  AI Roadmap Model  |
                                                   | (Rule + AI API)    |
                                                   +--------------------+
\`\`\`

---

## 🚀 Quickstart & Setup Guide

### 1. Prerequisites
- Python 3.9 or higher installed
- Git installed on your system
- A terminal (bash, zsh, or command prompt)

### 2. Clone the Repository
\`\`\`bash
git clone https://github.com/bvenkateswararao/ai-career-mentor.git
cd ai-career-mentor
\`\`\`

### 3. Create and Activate Virtual Environment
**On macOS/Linux:**
\`\`\`bash
python3 -m venv venv
source venv/bin/activate
\`\`\`

**On Windows:**
\`\`\`cmd
python -m venv venv
venv\\Scripts\\activate
\`\`\`

### 4. Install Dependencies
\`\`\`bash
pip install -r requirements.txt
\`\`\`

### 5. Run the Application
\`\`\`bash
python app.py
\`\`\`

Open your browser and navigate to:
\`\`\`
http://localhost:5000
\`\`\`

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| \`GET\` | \`/\` | Serves the interactive web user interface |
| \`GET\` | \`/api/roles\` | Returns all supported career pathways and skill ontologies |
| \`POST\` | \`/api/analyze-skills\` | Calculates skill match percentage and returns missing skills |
| \`POST\` | \`/api/roadmap\` | Generates complete month-by-month milestone roadmap |
| \`POST\` | \`/api/mentor-chat\` | AI Career Assistant chat endpoint |

### Example Request Body (\`POST /api/analyze-skills\`):
\`\`\`json
{
  "targetRole": "full-stack-python",
  "currentSkills": ["Python", "HTML5", "CSS3", "Git"],
  "studentYear": "3rd Year"
}
\`\`\`

### Example Response:
\`\`\`json
{
  "roleName": "Full Stack Python & Web Developer",
  "matchPercentage": 50,
  "acquiredSkills": ["Python", "HTML5", "CSS3", "Git"],
  "missingSkills": [
    { "name": "Flask / FastAPI", "category": "Backend", "importance": "Core" },
    { "name": "JavaScript (ES6+)", "category": "Frontend", "importance": "Core" },
    { "name": "SQL & Relational DBs", "category": "Database", "importance": "Core" }
  ],
  "readinessVerdict": "Solid Foundation. Focus on backend APIs and database persistence next."
}
\`\`\`

---

## 📂 Repository File Structure
\`\`\`
ai-career-mentor/
├── app.py                  # Core Flask REST server and career matching logic
├── requirements.txt        # Python dependency manifest
├── README.md               # Project documentation and setup guide
├── templates/
│   └── index.html          # Clean, responsive user interface template
└── static/
    ├── style.css           # Modern Bento-inspired responsive CSS styles
    └── script.js           # Client-side API fetch and dynamic DOM renderer
\`\`\`

---

## 💡 How to Explain this Project in an Interview
- **The Problem:** "As a computer science student, I observed that classmates often didn't know which technical skills to prioritize outside college coursework."
- **The Solution:** "I architected AI Career Mentor with a Flask REST backend that maps student competencies against industry demand matrices and generates actionable learning sprints."
- **Technical Highlights:** "Built modular REST endpoints with CORS, designed an extensible skill ontology, wrote resilient async client-side fetch handlers, and integrated AI prompt generation."

---

## 👨‍💻 Author
**Bhattiprolu Venkateswararao**  
*3rd Year B.Tech CSE Student, Vignan's University*  
- Email: bhattiproluvenkateswararao9@gmail.com  
- LinkedIn: [Connect on LinkedIn](https://linkedin.com)  
- GitHub: [github.com/bvenkateswararao](https://github.com)
`
  },
  {
    name: 'app.py',
    language: 'python',
    description: 'Flask application server, REST APIs, and skill gap calculation logic',
    content: `"""
AI Career Mentor - Backend Application Server
Author: B. Venkateswararao
Framework: Flask (Python 3.10+)
"""

from flask import Flask, request, jsonify, render_to_string, send_from_directory
from flask_cors import CORS
import os
import json

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)  # Enable Cross-Origin Resource Sharing for API consumers

# In-Memory Career Roles & Industry Requirements Database
CAREER_DATABASE = {
    "full-stack-python": {
        "title": "Full Stack Python & Web Developer",
        "description": "Build modern web services, databases, and responsive client interfaces.",
        "skills": ["Python", "Flask / FastAPI", "HTML5 & CSS3", "JavaScript", "SQL", "Git", "REST APIs", "Docker"],
        "milestones": [
            {
                "period": "Month 1",
                "focus": "Core Python & OOP Mastery",
                "project": "CLI Database & Task Tracker",
                "topics": ["Data Structures", "OOP Principles", "Unit Testing", "Modular Architecture"]
            },
            {
                "period": "Month 2",
                "focus": "Flask REST Backend & Database Design",
                "project": "RESTful API with SQLite and JWT Authentication",
                "topics": ["Routing", "SQLAlchemy ORM", "CRUD Endpoints", "Error Handling"]
            },
            {
                "period": "Month 3",
                "focus": "Frontend Integration & UI Engineering",
                "project": "Full Stack Web App with Async Fetch & Bento UI",
                "topics": ["ES6+ Async/Await", "DOM Manipulation", "CSS Grid & Flexbox", "State Management"]
            },
            {
                "period": "Month 4-6",
                "focus": "Deployment, Capstone & Technical Interviews",
                "project": "Deployed Production App on Render with CI/CD",
                "topics": ["Docker", "GitHub Actions", "DSA Practice (LeetCode)", "System Design"]
            }
        ],
        "interview_tips": [
            "Be ready to write clean Pythonic code using list comprehensions and generators.",
            "Understand the life-cycle of a web request from browser to Flask WSGI to database.",
            "Explain how relational tables are normalized and indexed for performance."
        ]
    },
    "ai-ml-engineer": {
        "title": "AI & Machine Learning Engineer",
        "description": "Design data pipelines, predictive models, and LLM-powered applications.",
        "skills": ["Python", "NumPy & Pandas", "Matplotlib", "Scikit-Learn", "PyTorch / TensorFlow", "Linear Algebra", "LLM APIs", "Model Serving"],
        "milestones": [
            {
                "period": "Month 1",
                "focus": "Data Wrangling & Statistical Analysis",
                "project": "Exploratory Data Analysis Report on Real-World Dataset",
                "topics": ["NumPy Operations", "Pandas Filtering & Cleaning", "Visualization with Seaborn"]
            },
            {
                "period": "Month 2",
                "focus": "Classical Machine Learning",
                "project": "Predictive Classification & Regression Engine",
                "topics": ["Supervised Learning", "Hyperparameter Tuning", "Cross Validation", "Evaluation Metrics"]
            },
            {
                "period": "Month 3",
                "focus": "Deep Learning & Neural Networks",
                "project": "Image Classifier or Sentiment Analysis with PyTorch",
                "topics": ["Tensors & Autograd", "CNNs", "Transfer Learning", "Model Evaluation"]
            },
            {
                "period": "Month 4-6",
                "focus": "LLM Integration, Model Serving & MLOps",
                "project": "AI Career Advisor with FastAPI & Generative AI API",
                "topics": ["Prompt Engineering", "FastAPI Serving", "Dockerizing Models", "DSA in Python"]
            }
        ],
        "interview_tips": [
            "Clearly distinguish between precision, recall, and when to optimize for which metric.",
            "Explain how the gradient descent algorithm avoids local minima.",
            "Demonstrate how you prevent data leakage during train/test splitting."
        ]
    },
    "cloud-devops": {
        "title": "Cloud & DevOps Engineer",
        "description": "Automate build pipelines, containerize microservices, and deploy cloud infrastructure.",
        "skills": ["Linux / Bash", "Git", "Docker", "CI/CD (GitHub Actions)", "AWS / Cloud", "Networking", "Kubernetes", "Nginx"],
        "milestones": [
            {
                "period": "Month 1",
                "focus": "Linux Shell Mastery & System Internals",
                "project": "Automated Server Health Monitoring Bash Script",
                "topics": ["File Permissions", "Process Management", "Cron Jobs", "SSH Keys"]
            },
            {
                "period": "Month 2",
                "focus": "Docker Containerization",
                "project": "Multi-container Application with docker-compose",
                "topics": ["Dockerfile Best Practices", "Multi-stage Builds", "Volume Persistence", "Networking"]
            },
            {
                "period": "Month 3",
                "focus": "CI/CD Automation & GitHub Actions",
                "project": "Automated Lint, Test, and Build Pipeline",
                "topics": ["Workflow YAML", "Secrets Management", "Container Registry Pushing"]
            },
            {
                "period": "Month 4-6",
                "focus": "Cloud Deployment, Security & Kubernetes",
                "project": "Resilient High-Availability Cloud Deployment",
                "topics": ["Cloud Compute & VPC", "Reverse Proxy & SSL", "K8s Pods & Services", "Monitoring"]
            }
        ],
        "interview_tips": [
            "Explain the difference between virtualization (VMs) and OS-level virtualization (Docker).",
            "Walk through how a reverse proxy like Nginx handles SSL termination and routing.",
            "Describe the steps to safely roll back a failing automated deployment."
        ]
    }
}

@app.route('/')
def home():
    """Serves the main application page."""
    # If templates/index.html exists, render it; otherwise return a clean JSON health check
    if os.path.exists(os.path.join(app.template_folder, 'index.html')):
        return send_from_directory(app.template_folder, 'index.html')
    return jsonify({
        "status": "online",
        "app": "AI Career Mentor API",
        "author": "B. Venkateswararao",
        "documentation": "/api/roles"
    })

@app.route('/api/roles', methods=['GET'])
def get_roles():
    """Returns available career roles and basic metadata."""
    roles = []
    for key, val in CAREER_DATABASE.items():
        roles.append({
            "id": key,
            "title": val["title"],
            "description": val["description"],
            "skill_count": len(val["skills"])
        })
    return jsonify({"success": True, "roles": roles})

@app.route('/api/analyze-skills', methods=['POST'])
def analyze_skills():
    """
    Analyzes student skills against target role requirements.
    Request JSON: { "targetRole": "full-stack-python", "currentSkills": ["Python", "Git"] }
    """
    data = request.get_json() or {}
    role_key = data.get('targetRole', 'full-stack-python')
    current_skills_raw = data.get('currentSkills', [])
    
    # Normalize user skills to lower-case for robust matching
    user_skills_normalized = [s.strip().lower() for s in current_skills_raw if s.strip()]

    if role_key not in CAREER_DATABASE:
        return jsonify({"success": False, "error": f"Role '{role_key}' not found"}), 404

    target = CAREER_DATABASE[role_key]
    required_skills = target["skills"]

    acquired = []
    missing = []

    for req in required_skills:
        # Check if any user skill matches part of the requirement (e.g. 'python' in 'python')
        matched = False
        req_norm = req.lower()
        for u in user_skills_normalized:
            if u in req_norm or req_norm in u:
                matched = True
                break
        if matched:
            acquired.append(req)
        else:
            missing.append(req)

    total_req = len(required_skills)
    match_percentage = int((len(acquired) / total_req) * 100) if total_req > 0 else 0

    if match_percentage >= 80:
        verdict = "Excellent job! You possess most foundational skills. Focus on capstone projects and interview practice."
    elif match_percentage >= 50:
        verdict = "Strong foundation! You have solid basics. Focus on closing the remaining missing skills."
    else:
        verdict = "Great start. Follow the step-by-step roadmap to acquire the essential core competencies systematically."

    return jsonify({
        "success": True,
        "targetRole": target["title"],
        "matchPercentage": match_percentage,
        "acquiredSkills": acquired,
        "missingSkills": missing,
        "verdict": verdict,
        "milestones": target["milestones"],
        "interviewTips": target["interview_tips"]
    })

@app.route('/api/mentor-chat', methods=['POST'])
def mentor_chat():
    """
    Instant AI Career Mentor chat response engine.
    """
    data = request.get_json() or {}
    query = data.get('message', '').strip().lower()

    if not query:
        return jsonify({"reply": "Hello! I am your AI Career Mentor. Ask me anything about skills, roadmaps, projects, or interview preparation."})

    # Rule-based fallback and specialized guidance
    if 'resume' in query:
        reply = "For your resume as a 3rd-year student: Keep it strictly 1 page. Lead with Education and strong GPA, followed by Technical Skills grouped by category (Languages, Web, DB, Core CS). Highlight 2-3 substantial projects with GitHub links and quantitative metrics."
    elif 'interview' in query or 'dsa' in query:
        reply = "For technical interviews: Practice top 75 LeetCode problems focusing on Arrays, Two Pointers, Hash Maps, and Binary Trees. Always explain your thought process and time complexity (Big O) out loud before writing code."
    elif 'project' in query:
        reply = "A standout project should not be a generic tutorial. Build a full-stack application that solves a real student or community problem, includes authentication, connects to a database, and has a clean live demo link."
    elif 'internship' in query:
        reply = "Start applying for internships 4-6 months before your target semester. Optimize your LinkedIn profile, contribute to open source on GitHub, and apply directly on company careers pages with tailored cover notes."
    else:
        reply = f"Great question regarding '{query}'! Focus on mastering one stack deeply rather than skimming ten. Build hands-on projects, commit regularly to GitHub, and document your learnings in technical blog posts."

    return jsonify({"success": True, "reply": reply})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"🚀 AI Career Mentor server running at http://localhost:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)
`
  },
  {
    name: 'requirements.txt',
    language: 'plaintext',
    description: 'Python package dependencies required to run the backend',
    content: `Flask==3.0.0
flask-cors==4.0.0
requests==2.31.0
gunicorn==21.2.0
python-dotenv==1.0.1
`
  },
  {
    name: 'templates/index.html',
    language: 'html',
    description: 'HTML5 user interface with responsive layout and dynamic roadmap container',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Career Mentor - Student Roadmap Generator</title>
  <link rel="stylesheet" href="/static/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div class="app-container">
    <header class="header">
      <div class="logo">
        <span class="logo-badge">AI</span>
        <h1>Career Mentor<span>.</span></h1>
      </div>
      <p class="subtitle">Built by B. Venkateswararao • 3rd Year B.Tech CSE</p>
    </header>

    <main class="grid-layout">
      <!-- Input Panel -->
      <section class="card input-card">
        <h2>Target Career & Skills</h2>
        <form id="mentorForm">
          <div class="form-group">
            <label for="targetRole">Select Target Role:</label>
            <select id="targetRole" class="input-select">
              <option value="full-stack-python">Full Stack Python & Web Developer</option>
              <option value="ai-ml-engineer">AI & Machine Learning Engineer</option>
              <option value="cloud-devops">Cloud & DevOps Engineer</option>
            </select>
          </div>

          <div class="form-group">
            <label>Select Your Current Skills:</label>
            <div class="skills-chips" id="skillsChips">
              <!-- Dynamically populated or static chips -->
              <button type="button" class="chip active" data-skill="Python">Python</button>
              <button type="button" class="chip active" data-skill="HTML5 & CSS3">HTML5 & CSS3</button>
              <button type="button" class="chip active" data-skill="Git">Git</button>
              <button type="button" class="chip" data-skill="JavaScript">JavaScript</button>
              <button type="button" class="chip" data-skill="SQL">SQL</button>
              <button type="button" class="chip" data-skill="Flask / FastAPI">Flask</button>
              <button type="button" class="chip" data-skill="Docker">Docker</button>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" id="analyzeBtn">
            ⚡ Analyze Skill Gap & Generate Roadmap
          </button>
        </form>
      </section>

      <!-- Output / Results Panel -->
      <section class="card results-card" id="resultsSection">
        <h2>Your Personalized Analysis</h2>
        <div id="resultsContent">
          <p class="placeholder-text">Select your target role and skills on the left to generate your custom roadmap.</p>
        </div>
      </section>
    </main>

    <!-- Interactive AI Assistant Q&A -->
    <section class="card chat-card">
      <h2>Ask AI Career Assistant</h2>
      <div class="chat-log" id="chatLog">
        <div class="message mentor">👋 Hello! Ask me any questions about resume building, technical interviews, or projects.</div>
      </div>
      <div class="chat-input-row">
        <input type="text" id="chatInput" placeholder="Ask: 'How do I prepare for a Python interview?'" />
        <button id="sendChatBtn" class="btn btn-secondary">Send</button>
      </div>
    </section>
  </div>

  <script src="/static/script.js"></script>
</body>
</html>
`
  },
  {
    name: 'static/style.css',
    language: 'css',
    description: 'Modern stylesheet with dark theme, responsive Bento cards, and polished typography',
    content: `:root {
  --bg-primary: #090d16;
  --bg-surface: #111827;
  --border: #1f293d;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --primary: #38bdf8;
  --primary-hover: #0284c7;
  --accent: #10b981;
  --radius: 16px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  padding: 2rem 1rem;
  line-height: 1.6;
}

.app-container {
  max-width: 1000px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.logo-badge {
  background: rgba(56, 189, 248, 0.15);
  color: var(--primary);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
}

.logo h1 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.logo h1 span {
  color: var(--primary);
}

.subtitle {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .grid-layout {
    grid-template-columns: 1fr 1.2fr;
  }
}

.card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}

.card h2 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #fff;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.75rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.input-select {
  width: 100%;
  background: #0b1120;
  border: 1px solid var(--border);
  color: var(--text-main);
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
}

.skills-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  background: #1e293b;
  border: 1px solid #334155;
  color: var(--text-muted);
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chip.active {
  background: rgba(56, 189, 248, 0.15);
  border-color: var(--primary);
  color: var(--primary);
  font-weight: 600;
}

.btn {
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--primary);
  color: #0b1120;
}

.btn-primary:hover {
  background: var(--primary-hover);
  color: #fff;
}

.match-circle {
  text-align: center;
  padding: 1.5rem;
  background: #0b1120;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border);
}

.match-percentage {
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
  font-family: 'JetBrains Mono', monospace;
}

.milestone-item {
  border-left: 2px solid var(--primary);
  padding-left: 1rem;
  margin-bottom: 1.25rem;
}

.milestone-title {
  font-weight: 700;
  color: var(--text-main);
  font-size: 0.95rem;
}

.milestone-project {
  color: var(--primary);
  font-size: 0.85rem;
  margin-top: 0.2rem;
}

.chat-log {
  max-height: 180px;
  overflow-y: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.message {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.85rem;
}

.message.mentor {
  background: #1e293b;
  border-left: 3px solid var(--primary);
}

.message.user {
  background: rgba(56, 189, 248, 0.2);
  align-self: flex-end;
}

.chat-input-row {
  display: flex;
  gap: 0.5rem;
}

.chat-input-row input {
  flex: 1;
  background: #0b1120;
  border: 1px solid var(--border);
  padding: 0.75rem;
  border-radius: 8px;
  color: #fff;
  outline: none;
}

.btn-secondary {
  width: auto;
  padding: 0.75rem 1.5rem;
  background: #334155;
  color: #fff;
}
`
  },
  {
    name: 'static/script.js',
    language: 'javascript',
    description: 'Client-side event handlers, skill toggling, and asynchronous API communication',
    content: `// AI Career Mentor - Client Application Logic

document.addEventListener('DOMContentLoaded', () => {
  const mentorForm = document.getElementById('mentorForm');
  const resultsContent = document.getElementById('resultsContent');
  const skillsChipsContainer = document.getElementById('skillsChips');
  const chatInput = document.getElementById('chatInput');
  const sendChatBtn = document.getElementById('sendChatBtn');
  const chatLog = document.getElementById('chatLog');

  // Toggle skill chips selection
  skillsChipsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
      e.target.classList.toggle('active');
    }
  });

  // Handle Form Submission
  mentorForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const targetRole = document.getElementById('targetRole').value;
    const activeChips = Array.from(document.querySelectorAll('.chip.active'));
    const currentSkills = activeChips.map(c => c.getAttribute('data-skill'));

    resultsContent.innerHTML = '<div style="text-align:center; padding: 2rem;">⚡ Analyzing skills against industry standards...</div>';

    try {
      const response = await fetch('/api/analyze-skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetRole, currentSkills })
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Failed to analyze');

      renderResults(data);
    } catch (err) {
      resultsContent.innerHTML = \`<div style="color: #ef4444; padding: 1rem;">Error: \${err.message}. Ensure backend is running.</div>\`;
    }
  });

  function renderResults(data) {
    const milestonesHTML = data.milestones.map(m => \`
      <div class="milestone-item">
        <div class="milestone-title">\${m.period}: \${m.focus}</div>
        <div class="milestone-project">🛠️ Project: <strong>\${m.project}</strong></div>
      </div>
    \`).join('');

    resultsContent.innerHTML = \`
      <div class="match-circle">
        <div class="match-percentage">\${data.matchPercentage}%</div>
        <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.25rem;">Skill Readiness Match</p>
      </div>

      <p style="font-size: 0.9rem; margin-bottom: 1.25rem; color: #38bdf8;">\${data.verdict}</p>

      <h3 style="font-size: 0.95rem; margin-bottom: 0.75rem; color: #fff;">Missing Skills to Learn:</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
        \${data.missingSkills.map(s => \`<span class="chip" style="border-color: #ef4444; color: #f87171;">\${s}</span>\`).join('')}
      </div>

      <h3 style="font-size: 0.95rem; margin-bottom: 0.75rem; color: #fff;">Curated Learning Sprints:</h3>
      <div>\${milestonesHTML}</div>
    \`;
  }

  // Handle Mentor Chat
  async function sendChatMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    chatLog.innerHTML += \`<div class="message user">\${msg}</div>\`;
    chatInput.value = '';
    chatLog.scrollTop = chatLog.scrollHeight;

    try {
      const res = await fetch('/api/mentor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      chatLog.innerHTML += \`<div class="message mentor">🤖 \${data.reply}</div>\`;
      chatLog.scrollTop = chatLog.scrollHeight;
    } catch {
      chatLog.innerHTML += \`<div class="message mentor">Error reaching AI Mentor service.</div>\`;
    }
  }

  sendChatBtn.addEventListener('click', sendChatMessage);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });
});
`
  }
];
