export const vanillaHTMLCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bhattiprolu Venkateswararao | B.Tech CSE Portfolio</title>
  <meta name="description" content="Personal portfolio of Bhattiprolu Venkateswararao - 3rd Year B.Tech Computer Science and Engineering Student & Aspiring Software Developer.">
  <link rel="stylesheet" href="style.css">
  <!-- Google Fonts & Font Awesome Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body class="dark-theme">
  <!-- Navigation Bar -->
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#home" class="nav-logo">
        <span class="logo-accent">&lt;</span>Venkateswararao<span class="logo-accent">/&gt;</span>
      </a>

      <div class="nav-menu" id="nav-menu">
        <ul class="nav-list">
          <li class="nav-item"><a href="#home" class="nav-link active-link">Home</a></li>
          <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
          <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
          <li class="nav-item"><a href="#education" class="nav-link">Education</a></li>
          <li class="nav-item"><a href="#certifications" class="nav-link">Certifications</a></li>
          <li class="nav-item"><a href="#achievements" class="nav-link">Achievements</a></li>
          <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <!-- Close button for mobile -->
        <div class="nav-close" id="nav-close"><i class="fa-solid fa-xmark"></i></div>
      </div>

      <div class="nav-actions">
        <!-- Theme Toggle -->
        <button id="theme-toggle" class="theme-btn" aria-label="Toggle light/dark theme">
          <i class="fa-solid fa-sun" id="theme-icon"></i>
        </button>
        <!-- Mobile Toggle -->
        <div class="nav-toggle" id="nav-toggle">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  </header>

  <main class="main">
    <!-- HERO SECTION -->
    <section class="hero section" id="home">
      <div class="hero-container container grid">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="status-dot"></span> 3rd Year B.Tech CSE • Aspiring Software Developer
          </div>
          <h1 class="hero-title">
            Hi, I'm <span class="highlight-text">Venkateswararao</span> 👋
          </h1>
          <h2 class="hero-subtitle">
            3rd Year B.Tech CSE Student & Aspiring Software Developer
          </h2>
          <p class="hero-description">
            I’m a Computer Science student passionate about software development, problem solving, web technologies, and building practical projects.
          </p>

          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">
              <i class="fa-solid fa-layer-group"></i> View My Projects
            </a>
            <a href="assets/resume.pdf" class="btn btn-secondary" target="_blank" download>
              <i class="fa-solid fa-file-arrow-down"></i> Download Resume
            </a>
            <a href="#contact" class="btn btn-outline">
              <i class="fa-solid fa-paper-plane"></i> Contact Me
            </a>
          </div>

          <div class="hero-tags">
            <span class="tech-pill"><i class="fa-brands fa-python"></i> Python</span>
            <span class="tech-pill"><i class="fa-brands fa-java"></i> Java</span>
            <span class="tech-pill"><i class="fa-brands fa-js"></i> JavaScript</span>
            <span class="tech-pill"><i class="fa-solid fa-database"></i> SQL</span>
            <span class="tech-pill"><i class="fa-solid fa-cubes"></i> DSA</span>
          </div>
        </div>

        <div class="hero-visual">
          <div class="terminal-card">
            <div class="terminal-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <span class="terminal-title">developer@portfolio:~</span>
            </div>
            <div class="terminal-body font-mono">
              <p><span class="cmd-prompt">$</span> cat profile.json</p>
              <pre><code>{
  "name": "Bhattiprolu Venkateswararao",
  "education": "B.Tech CSE (3rd Year)",
  "institution": "Vignan's University",
  "location": "India",
  "focus": ["Software Dev", "DSA", "Web"],
  "status": "Ready for Internships & Roles 🚀"
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="about section" id="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <span class="section-subtitle">Get to know more about my background and interests</span>

        <div class="about-container grid">
          <div class="about-image-wrapper">
            <div class="profile-card">
              <div class="avatar-placeholder">
                <i class="fa-solid fa-user-tie"></i>
                <span>[Your Profile Image Placeholder]</span>
              </div>
              <div class="profile-info">
                <h3>B. Venkateswararao</h3>
                <p>B.Tech CSE (3rd Year)</p>
                <div class="status-tag">🟢 Vignan's University</div>
              </div>
            </div>
          </div>

          <div class="about-data">
            <p class="about-text">
              I am a 3rd-year Computer Science and Engineering student at <strong>Vignan's University</strong>. I am enthusiastic about software engineering, building efficient algorithms, and developing responsive web applications.
            </p>

            <h3 class="about-heading">Core Areas of Interest:</h3>
            <div class="interests-grid">
              <div class="interest-item"><i class="fa-solid fa-code"></i> Software Development</div>
              <div class="interest-item"><i class="fa-solid fa-globe"></i> Web Development</div>
              <div class="interest-item"><i class="fa-brands fa-python"></i> Python</div>
              <div class="interest-item"><i class="fa-solid fa-sitemap"></i> Data Structures & Algorithms</div>
              <div class="interest-item"><i class="fa-solid fa-database"></i> Database Management</div>
              <div class="interest-item"><i class="fa-solid fa-brain"></i> Machine Learning</div>
              <div class="interest-item"><i class="fa-solid fa-lightbulb"></i> Problem Solving</div>
            </div>

            <div class="about-highlights grid">
              <div class="highlight-box">
                <span class="highlight-number">3rd</span>
                <span class="highlight-label">Year B.Tech CSE</span>
              </div>
              <div class="highlight-box">
                <span class="highlight-number">3+</span>
                <span class="highlight-label">Core Projects</span>
              </div>
              <div class="highlight-box">
                <span class="highlight-number">100%</span>
                <span class="highlight-label">Commitment & Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section class="skills section" id="skills">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <span class="section-subtitle">Categorized overview of programming languages, web technologies, databases, and CS fundamentals</span>

        <div class="skills-container grid">
          <!-- Programming -->
          <div class="skill-category-card">
            <div class="category-header">
              <i class="fa-solid fa-laptop-code"></i>
              <h3>Programming Languages</h3>
            </div>
            <div class="skill-list">
              <div class="skill-item">
                <div class="skill-info"><span>Python</span><span>Proficient</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>Java</span><span>Intermediate</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 78%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>C</span><span>Intermediate</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 75%"></div></div>
              </div>
            </div>
          </div>

          <!-- Web Development -->
          <div class="skill-category-card">
            <div class="category-header">
              <i class="fa-solid fa-palette"></i>
              <h3>Web Development</h3>
            </div>
            <div class="skill-list">
              <div class="skill-item">
                <div class="skill-info"><span>HTML5</span><span>Proficient</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>CSS3</span><span>Proficient</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>JavaScript</span><span>Intermediate</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 80%"></div></div>
              </div>
            </div>
          </div>

          <!-- Database -->
          <div class="skill-category-card">
            <div class="category-header">
              <i class="fa-solid fa-database"></i>
              <h3>Database Management</h3>
            </div>
            <div class="skill-list">
              <div class="skill-item">
                <div class="skill-info"><span>SQL</span><span>Intermediate</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 82%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>MySQL</span><span>Intermediate</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 80%"></div></div>
              </div>
            </div>
          </div>

          <!-- Computer Science -->
          <div class="skill-category-card">
            <div class="category-header">
              <i class="fa-solid fa-microchip"></i>
              <h3>CS Fundamentals</h3>
            </div>
            <div class="skill-list">
              <div class="skill-item">
                <div class="skill-info"><span>Data Structures</span><span>Intermediate</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>Algorithms</span><span>Intermediate</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 80%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>DBMS</span><span>Intermediate</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 82%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>Operating Systems</span><span>Foundational</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 75%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>Computer Networks</span><span>Foundational</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 75%"></div></div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="skill-category-card">
            <div class="category-header">
              <i class="fa-solid fa-screwdriver-wrench"></i>
              <h3>Developer Tools</h3>
            </div>
            <div class="skill-list">
              <div class="skill-item">
                <div class="skill-info"><span>Git</span><span>Proficient</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>GitHub</span><span>Proficient</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info"><span>VS Code</span><span>Proficient</span></div>
                <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section class="projects section" id="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <span class="section-subtitle">Practical applications showcasing software development and problem solving</span>

        <div class="projects-container grid">
          <!-- Project 1 -->
          <div class="project-card">
            <div class="project-img-placeholder">
              <i class="fa-solid fa-robot"></i>
              <span>[Project Image Placeholder]</span>
            </div>
            <div class="project-content">
              <div class="project-badge">AI & Web App</div>
              <h3 class="project-title">AI Career Mentor</h3>
              <p class="project-desc">
                An AI-powered career guidance platform designed to help students explore career paths, identify skill gaps, create personalized learning roadmaps, and discover internship opportunities.
              </p>
              <div class="project-tech">
                <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Python</span><span>Flask</span><span>AI API</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/[YOUR-GITHUB]" class="btn-link" target="_blank">
                  <i class="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://[PROJECT-LIVE-DEMO].com" class="btn-link btn-link-accent" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="project-card">
            <div class="project-img-placeholder">
              <i class="fa-solid fa-list-check"></i>
              <span>[Project Image Placeholder]</span>
            </div>
            <div class="project-content">
              <div class="project-badge">Productivity Web App</div>
              <h3 class="project-title">Task Management Web App</h3>
              <p class="project-desc">
                A responsive task management application that helps users organize, track, and manage daily tasks efficiently with clean state updates and prioritization.
              </p>
              <div class="project-tech">
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/[YOUR-GITHUB]" class="btn-link" target="_blank">
                  <i class="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://[PROJECT-LIVE-DEMO].com" class="btn-link btn-link-accent" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="project-card">
            <div class="project-img-placeholder">
              <i class="fa-solid fa-chart-line"></i>
              <span>[Project Image Placeholder]</span>
            </div>
            <div class="project-content">
              <div class="project-badge">Data Science & Analytics</div>
              <h3 class="project-title">Data Analytics Dashboard</h3>
              <p class="project-desc">
                An interactive dashboard for analyzing data and presenting useful insights through charts, key trend metrics, and exploratory visualizations.
              </p>
              <div class="project-tech">
                <span>Python</span><span>Pandas</span><span>Matplotlib</span><span>Excel</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/[YOUR-GITHUB]" class="btn-link" target="_blank">
                  <i class="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://[PROJECT-LIVE-DEMO].com" class="btn-link btn-link-accent" target="_blank">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION SECTION -->
    <section class="education section" id="education">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <span class="section-subtitle">Academic timeline and qualifications</span>

        <div class="timeline-container">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="timeline-date">2024 – Present (3rd Year)</span>
                <span class="timeline-tag">Undergraduate</span>
              </div>
              <h3 class="timeline-title">B.Tech – Computer Science and Engineering</h3>
              <h4 class="timeline-institution">Vignan's University</h4>
              <p class="timeline-score"><strong>Score / CGPA:</strong> [CGPA: 8.5 / 10 - Update with your CGPA]</p>
              <p class="timeline-desc">
                Engaging in core computer science curriculum covering data structures, object-oriented design, operating systems, database management systems, and web technologies.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="timeline-date">2022 – 2024</span>
                <span class="timeline-tag">Intermediate (10+2)</span>
              </div>
              <h3 class="timeline-title">Higher Secondary Education (MPC)</h3>
              <h4 class="timeline-institution">[YOUR JUNIOR COLLEGE NAME]</h4>
              <p class="timeline-score"><strong>Score:</strong> [Percentage: E.g., 95% - Update with your score]</p>
              <p class="timeline-desc">Focused on Mathematics, Physics, and Chemistry, laying strong problem-solving and analytical foundations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICATIONS SECTION -->
    <section class="certifications section" id="certifications">
      <div class="container">
        <h2 class="section-title">Certifications</h2>
        <span class="section-subtitle">Technical certifications and validated coursework</span>

        <div class="cert-grid grid">
          <!-- Python -->
          <div class="cert-card">
            <div class="cert-icon"><i class="fa-brands fa-python"></i></div>
            <h3 class="cert-name">Python Programming</h3>
            <p class="cert-issuer"><strong>Issuer:</strong> [Coursera / HackerRank / NPTEL]</p>
            <p class="cert-date"><strong>Date:</strong> [Month, Year]</p>
            <a href="https://[VERIFY-CERTIFICATE]" class="btn-cert" target="_blank">
              <i class="fa-solid fa-award"></i> View Certificate
            </a>
          </div>

          <!-- Web Dev -->
          <div class="cert-card">
            <div class="cert-icon"><i class="fa-solid fa-code"></i></div>
            <h3 class="cert-name">Web Development</h3>
            <p class="cert-issuer"><strong>Issuer:</strong> [Udemy / freeCodeCamp / Great Learning]</p>
            <p class="cert-date"><strong>Date:</strong> [Month, Year]</p>
            <a href="https://[VERIFY-CERTIFICATE]" class="btn-cert" target="_blank">
              <i class="fa-solid fa-award"></i> View Certificate
            </a>
          </div>

          <!-- Data Analytics -->
          <div class="cert-card">
            <div class="cert-icon"><i class="fa-solid fa-chart-pie"></i></div>
            <h3 class="cert-name">Data Analytics</h3>
            <p class="cert-issuer"><strong>Issuer:</strong> [IBM / Google / NPTEL]</p>
            <p class="cert-date"><strong>Date:</strong> [Month, Year]</p>
            <a href="https://[VERIFY-CERTIFICATE]" class="btn-cert" target="_blank">
              <i class="fa-solid fa-award"></i> View Certificate
            </a>
          </div>

          <!-- Machine Learning -->
          <div class="cert-card">
            <div class="cert-icon"><i class="fa-solid fa-brain"></i></div>
            <h3 class="cert-name">Machine Learning</h3>
            <p class="cert-issuer"><strong>Issuer:</strong> [Coursera / DeepLearning.AI]</p>
            <p class="cert-date"><strong>Date:</strong> [Month, Year]</p>
            <a href="https://[VERIFY-CERTIFICATE]" class="btn-cert" target="_blank">
              <i class="fa-solid fa-award"></i> View Certificate
            </a>
          </div>

          <!-- Other -->
          <div class="cert-card">
            <div class="cert-icon"><i class="fa-solid fa-database"></i></div>
            <h3 class="cert-name">SQL & Database Management</h3>
            <p class="cert-issuer"><strong>Issuer:</strong> [HackerRank / Oracle]</p>
            <p class="cert-date"><strong>Date:</strong> [Month, Year]</p>
            <a href="https://[VERIFY-CERTIFICATE]" class="btn-cert" target="_blank">
              <i class="fa-solid fa-award"></i> View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ACHIEVEMENTS SECTION -->
    <section class="achievements section" id="achievements">
      <div class="container">
        <h2 class="section-title">Achievements</h2>
        <span class="section-subtitle">Coding practice, competitions, college activities, and milestones</span>

        <div class="achievements-grid grid">
          <div class="achievement-card">
            <div class="ach-header">
              <i class="fa-solid fa-code"></i>
              <span class="ach-badge">Coding Practice</span>
            </div>
            <h3>DSA & Problem Solving</h3>
            <p>Active practice on competitive coding platforms solving problems in Python, Java, and C.</p>
            <span class="ach-meta">[150+ Problems Solved Placeholder]</span>
          </div>

          <div class="achievement-card">
            <div class="ach-header">
              <i class="fa-solid fa-trophy"></i>
              <span class="ach-badge">Competitions</span>
            </div>
            <h3>Technical Hackathons</h3>
            <p>Participated in college and national technical coding competitions and hackathon events.</p>
            <span class="ach-meta">[Hackathon Participant / Finalist Placeholder]</span>
          </div>

          <div class="achievement-card">
            <div class="ach-header">
              <i class="fa-solid fa-users"></i>
              <span class="ach-badge">College Activities</span>
            </div>
            <h3>Technical Club Member</h3>
            <p>Engaged in campus Computer Science club workshops, peer sessions, and technical symposiums.</p>
            <span class="ach-meta">Vignan's University (2024 – Present)</span>
          </div>

          <div class="achievement-card">
            <div class="ach-header">
              <i class="fa-solid fa-folder-open"></i>
              <span class="ach-badge">Projects</span>
            </div>
            <h3>Software Project Milestones</h3>
            <p>Designed and built practical web and analytical applications resolving student & productivity needs.</p>
            <span class="ach-meta">3+ Completed Applications</span>
          </div>

          <div class="achievement-card">
            <div class="ach-header">
              <i class="fa-solid fa-briefcase"></i>
              <span class="ach-badge">Internships</span>
            </div>
            <h3>Internship Readiness</h3>
            <p>Prepared with solid foundation in Data Structures, Database Management, and Web Development.</p>
            <span class="ach-meta">[Internship Training / Certificate Placeholder]</span>
          </div>

          <div class="achievement-card">
            <div class="ach-header">
              <i class="fa-solid fa-graduation-cap"></i>
              <span class="ach-badge">Academic</span>
            </div>
            <h3>Academic Excellence</h3>
            <p>Consistent academic coursework performance in Computer Science & Engineering department.</p>
            <span class="ach-meta">[Academic Merit / Grade Placeholder]</span>
          </div>
        </div>
      </div>
    </section>

    <!-- RESUME CALL TO ACTION SECTION -->
    <section class="resume-section section">
      <div class="container">
        <div class="resume-banner">
          <div class="resume-text">
            <h2>Want to know more about my experience?</h2>
            <p>Download my comprehensive resume for a detailed view of my academic coursework, technical skills, and software projects.</p>
          </div>
          <div class="resume-btn-wrap">
            <a href="assets/resume.pdf" class="btn btn-primary btn-large" download>
              <i class="fa-solid fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="contact section" id="contact">
      <div class="container">
        <h2 class="section-title">Contact Me</h2>
        <span class="section-subtitle">Get in touch for internships, project collaborations, or inquiries</span>

        <div class="contact-container grid">
          <!-- Info Column -->
          <div class="contact-info-col">
            <h3>Let's Connect & Collaborate</h3>
            <p>I am actively seeking software developer internships and entry-level opportunities. Feel free to reach out directly!</p>

            <div class="contact-cards">
              <div class="contact-item">
                <i class="fa-solid fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:bhattiproluvenkateswararao9@gmail.com">bhattiproluvenkateswararao9@gmail.com</a>
                </div>
              </div>

              <div class="contact-item">
                <i class="fa-brands fa-linkedin"></i>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/[YOUR-LINKEDIN]" target="_blank">linkedin.com/in/[YOUR-LINKEDIN]</a>
                </div>
              </div>

              <div class="contact-item">
                <i class="fa-brands fa-github"></i>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/[YOUR-GITHUB]" target="_blank">github.com/[YOUR-GITHUB]</a>
                </div>
              </div>

              <div class="contact-item">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Location</h4>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="contact-form-col">
            <form id="contact-form" class="contact-form">
              <div class="form-group">
                <label for="user_name">Your Name <span class="req">*</span></label>
                <input type="text" id="user_name" name="name" placeholder="Enter your full name" required>
              </div>

              <div class="form-group">
                <label for="user_email">Your Email <span class="req">*</span></label>
                <input type="email" id="user_email" name="email" placeholder="name@example.com" required>
              </div>

              <div class="form-group">
                <label for="user_subject">Subject <span class="req">*</span></label>
                <input type="text" id="user_subject" name="subject" placeholder="Internship Opportunity / Inquiry" required>
              </div>

              <div class="form-group">
                <label for="user_message">Message <span class="req">*</span></label>
                <textarea id="user_message" name="message" rows="5" placeholder="Hi Venkateswararao, I'd like to discuss..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block" id="submit-btn">
                <i class="fa-solid fa-paper-plane"></i> Send Message
              </button>

              <div id="form-feedback" class="form-feedback"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-brand">
        <a href="#home" class="footer-logo">B. Venkateswararao</a>
        <p>3rd Year B.Tech CSE Student • Vignan's University</p>
      </div>

      <ul class="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="footer-socials">
        <a href="https://github.com/[YOUR-GITHUB]" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="https://linkedin.com/in/[YOUR-LINKEDIN]" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
        <a href="mailto:bhattiproluvenkateswararao9@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>© 2026 Venkateswararao. All Rights Reserved.</p>
    </div>
  </footer>

  <!-- Scroll Top Button -->
  <a href="#home" class="scrollup" id="scroll-up" aria-label="Scroll to top">
    <i class="fa-solid fa-arrow-up"></i>
  </a>

  <!-- Script -->
  <script src="script.js"></script>
</body>
</html>`;

export const vanillaCSSCode = `/* =========================================
   VARIABLES & DESIGN TOKENS
   ========================================= */
:root {
  --hue: 160; /* Emerald green accent */
  --primary: hsl(var(--hue), 84%, 44%);
  --primary-hover: hsl(var(--hue), 84%, 38%);
  --primary-light: hsla(var(--hue), 84%, 44%, 0.15);
  
  /* Dark Theme (Default) */
  --bg-body: #090d16;
  --bg-surface: #0f172a;
  --bg-card: #141e33;
  --border-color: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --radius: 12px;
  --radius-sm: 8px;
  --transition: all 0.25s ease;
}

body.light-theme {
  --bg-body: #f8fafc;
  --bg-surface: #ffffff;
  --bg-card: #f1f5f9;
  --border-color: #e2e8f0;
  --text-main: #0f172a;
  --text-muted: #475569;
  --text-dim: #64748b;
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.06);
}

/* =========================================
   BASE STYLES
   ========================================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}

body {
  background-color: var(--bg-body);
  color: var(--text-main);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

h1, h2, h3, h4 {
  font-family: 'Outfit', sans-serif;
  color: var(--text-main);
  font-weight: 700;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

ul {
  list-style: none;
}

.container {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.section {
  padding: 5rem 0 3rem;
}

.section-title {
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  display: block;
  font-size: 1rem;
  color: var(--text-muted);
  text-align: center;
  margin-bottom: 3.5rem;
}

/* =========================================
   BUTTONS & ACCENTS
   ========================================= */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: var(--transition);
}

.btn-primary {
  background-color: var(--primary);
  color: #090d16;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.btn-large {
  padding: 0.9rem 2rem;
  font-size: 1.05rem;
}

.btn-block {
  width: 100%;
  justify-content: center;
}

.highlight-text {
  color: var(--primary);
}

/* =========================================
   HEADER & NAVBAR
   ========================================= */
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: hsla(222, 47%, 7%, 0.85);
  backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
}

body.light-theme .header {
  background: rgba(255, 255, 255, 0.85);
}

.nav {
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.35rem;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.03em;
}

.logo-accent {
  color: var(--primary);
}

.nav-list {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
  padding: 0.25rem 0;
}

.nav-link:hover,
.nav-link.active-link {
  color: var(--primary);
}

.nav-link.active-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary);
  border-radius: 2px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.theme-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.nav-toggle, .nav-close {
  display: none;
  font-size: 1.25rem;
  cursor: pointer;
}

/* =========================================
   HERO SECTION
   ========================================= */
.hero {
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
}

.hero-container {
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: var(--primary-light);
  border: 1px solid var(--primary);
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1.25rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: var(--primary);
  border-radius: 50%;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.15;
  margin-bottom: 0.75rem;
}

.hero-subtitle {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 540px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  padding: 0.35rem 0.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--text-muted);
}

.terminal-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-color);
}

.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.red { background: #ef4444; }
.dot.yellow { background: #eab308; }
.dot.green { background: #22c55e; }
.terminal-title { margin-left: 0.5rem; font-size: 0.8rem; color: var(--text-dim); }

.terminal-body {
  padding: 1.25rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.cmd-prompt { color: var(--primary); font-weight: 700; margin-right: 0.5rem; }

/* =========================================
   ABOUT SECTION
   ========================================= */
.about-container {
  grid-template-columns: 0.85fr 1.15fr;
  gap: 3rem;
  align-items: start;
}

.profile-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow);
}

.avatar-placeholder {
  width: 140px;
  height: 140px;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px dashed var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-muted);
}

.avatar-placeholder i { font-size: 2.5rem; color: var(--primary); }
.avatar-placeholder span { font-size: 0.65rem; padding: 0 0.5rem; }

.profile-info h3 { font-size: 1.25rem; margin-bottom: 0.25rem; }
.profile-info p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem; }
.status-tag { font-size: 0.8rem; color: var(--primary); font-weight: 600; }

.about-text { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1.5rem; }
.about-heading { font-size: 1.2rem; margin-bottom: 1rem; }

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.85rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
}

.interest-item i { color: var(--primary); }

.about-highlights {
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.highlight-box {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  text-align: center;
}

.highlight-number { display: block; font-size: 1.75rem; font-weight: 800; color: var(--primary); }
.highlight-label { font-size: 0.85rem; color: var(--text-muted); }

/* =========================================
   SKILLS SECTION
   ========================================= */
.skills-container {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.skill-category-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.skill-category-card:hover {
  border-color: var(--primary);
  transform: translateY(-3px);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.category-header i { font-size: 1.35rem; color: var(--primary); }
.category-header h3 { font-size: 1.15rem; }

.skill-list { display: flex; flex-direction: column; gap: 1rem; }

.skill-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.35rem;
}

.skill-info span:last-child {
  color: var(--text-dim);
  font-size: 0.8rem;
}

.skill-bar {
  height: 6px;
  background: var(--bg-card);
  border-radius: 999px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--primary);
  border-radius: 999px;
}

/* =========================================
   PROJECTS SECTION
   ========================================= */
.projects-container {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}

.project-img-placeholder {
  height: 180px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-dim);
}

.project-img-placeholder i { font-size: 2.5rem; color: var(--primary); }

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.project-title { font-size: 1.35rem; margin-bottom: 0.75rem; }
.project-desc { font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.25rem; flex-grow: 1; }

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.project-tech span {
  padding: 0.25rem 0.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.project-links {
  display: flex;
  gap: 1rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.btn-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
}

.btn-link:hover { color: var(--text-main); }
.btn-link-accent { color: var(--primary); }
.btn-link-accent:hover { color: var(--primary-hover); }

/* =========================================
   EDUCATION SECTION
   ========================================= */
.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-dot {
  position: absolute;
  left: -2.6rem;
  top: 0.25rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid var(--bg-body);
}

.timeline-content {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.timeline-date { font-size: 0.85rem; color: var(--primary); font-weight: 600; }
.timeline-tag { font-size: 0.75rem; background: var(--bg-card); padding: 0.2rem 0.5rem; border-radius: 4px; }
.timeline-title { font-size: 1.25rem; margin-bottom: 0.25rem; }
.timeline-institution { font-size: 1rem; color: var(--text-muted); margin-bottom: 0.75rem; }
.timeline-score { font-size: 0.9rem; color: var(--primary); margin-bottom: 0.5rem; }
.timeline-desc { font-size: 0.95rem; color: var(--text-muted); }

/* =========================================
   CERTIFICATIONS SECTION
   ========================================= */
.cert-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.cert-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.cert-card:hover {
  transform: translateY(-3px);
  border-color: var(--primary);
}

.cert-icon { font-size: 2rem; color: var(--primary); margin-bottom: 1rem; }
.cert-name { font-size: 1.15rem; margin-bottom: 0.5rem; }
.cert-issuer, .cert-date { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem; }
.btn-cert {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
}

/* =========================================
   ACHIEVEMENTS SECTION
   ========================================= */
.achievements-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.achievement-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.ach-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.ach-header i { font-size: 1.5rem; color: var(--primary); }
.ach-badge { font-size: 0.75rem; background: var(--bg-card); padding: 0.2rem 0.5rem; border-radius: 4px; color: var(--text-muted); }
.achievement-card h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
.achievement-card p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem; }
.ach-meta { font-size: 0.8rem; font-weight: 600; color: var(--primary); }

/* =========================================
   RESUME BANNER
   ========================================= */
.resume-banner {
  background: linear-gradient(135deg, var(--bg-surface), var(--bg-card));
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  box-shadow: var(--shadow);
}

.resume-text h2 { font-size: 2rem; margin-bottom: 0.5rem; }
.resume-text p { color: var(--text-muted); max-width: 600px; }

/* =========================================
   CONTACT SECTION
   ========================================= */
.contact-container {
  grid-template-columns: 0.9fr 1.1fr;
  gap: 3rem;
}

.contact-info-col h3 { font-size: 1.5rem; margin-bottom: 0.75rem; }
.contact-info-col p { color: var(--text-muted); margin-bottom: 2rem; }

.contact-cards { display: flex; flex-direction: column; gap: 1.25rem; }

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
}

.contact-item i { font-size: 1.5rem; color: var(--primary); }
.contact-item h4 { font-size: 0.85rem; color: var(--text-dim); text-transform: uppercase; }
.contact-item a, .contact-item span { font-size: 0.95rem; font-weight: 500; }
.contact-item a:hover { color: var(--primary); }

.contact-form {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
}

.form-group { margin-bottom: 1.25rem; }
.form-group label { display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.4rem; }
.req { color: #ef4444; }

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-main);
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary);
}

.form-feedback {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  display: none;
}

.form-feedback.success {
  display: block;
  background: hsla(142, 76%, 36%, 0.15);
  color: #22c55e;
  border: 1px solid #22c55e;
}

/* =========================================
   FOOTER
   ========================================= */
.footer {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.footer-logo { font-size: 1.25rem; font-weight: 800; font-family: 'Outfit', sans-serif; }
.footer-brand p { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem; }

.footer-links { display: flex; flex-wrap: wrap; gap: 1.25rem; }
.footer-links a { font-size: 0.9rem; color: var(--text-muted); }
.footer-links a:hover { color: var(--primary); }

.footer-socials { display: flex; gap: 1rem; }
.footer-socials a {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
}

.footer-socials a:hover { color: var(--primary); border-color: var(--primary); }

.footer-bottom {
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-dim);
  padding-top: 2rem;
}

/* =========================================
   SCROLL TO TOP
   ========================================= */
.scrollup {
  position: fixed;
  right: 1.5rem;
  bottom: -20%;
  background: var(--primary);
  color: #090d16;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  z-index: 90;
  transition: var(--transition);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.scrollup:hover { transform: translateY(-3px); }
.scrollup.show-scroll { bottom: 2rem; }

/* =========================================
   RESPONSIVE MEDIA QUERIES
   ========================================= */
@media screen and (max-width: 968px) {
  .hero-container,
  .about-container,
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-title { font-size: 2.5rem; }
}

@media screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: var(--bg-surface);
    border-left: 1px solid var(--border-color);
    padding: 5rem 2rem 2rem;
    transition: 0.4s ease;
    z-index: 150;
  }

  .nav-menu.show-menu { right: 0; }
  .nav-list { flex-direction: column; gap: 1.5rem; }
  .nav-toggle, .nav-close { display: block; }
  .nav-close { position: absolute; top: 1.5rem; right: 1.5rem; }
  
  .about-highlights { grid-template-columns: 1fr; }
  .resume-banner { text-align: center; justify-content: center; }
  .footer-container { flex-direction: column; text-align: center; }
}
`;

export const vanillaJSCode = `// ==========================================
// 1. MOBILE NAVIGATION TOGGLE
// ==========================================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Close menu when clicking on any nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// ==========================================
// 2. LIGHT / DARK THEME TOGGLE
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check saved theme in localStorage
const savedTheme = localStorage.getItem('selected-theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');
  themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('light-theme')) {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('selected-theme', 'light');
  } else {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('selected-theme', 'dark');
  }
});

// ==========================================
// 3. ACTIVE NAVIGATION LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 90;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

// ==========================================
// 4. SCROLL TO TOP BUTTON
// ==========================================
const scrollUp = document.getElementById('scroll-up');
function handleScrollUp() {
  if (window.scrollY >= 400) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', handleScrollUp);

// ==========================================
// 5. CONTACT FORM VALIDATION & SUBMISSION
// ==========================================
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('user_name').value.trim();
    const email = document.getElementById('user_email').value.trim();
    const subject = document.getElementById('user_subject').value.trim();
    const message = document.getElementById('user_message').value.trim();

    if (!name || !email || !subject || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Success response simulation & mailto preparation
    formFeedback.innerHTML = '<strong>Message Sent!</strong> Thank you ' + name + ', your message has been received. I will get back to you soon.';
    formFeedback.className = 'form-feedback success';
    
    // Optional: Open user mail client as backup
    const mailtoUrl = 'mailto:bhattiproluvenkateswararao9@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('From: ' + name + ' (' + email + ')\\n\\n' + message);
    
    // Reset form
    contactForm.reset();
  });
}
`;
