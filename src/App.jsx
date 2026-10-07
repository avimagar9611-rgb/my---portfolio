import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* =========================
          Navigation
      ========================= */}
      <nav className="navbar">
        <h2 className="logo">Avinash</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* =========================
          Hero Section
      ========================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hello">Hello, I'm</p>

          <h1>Avinash</h1>

          <h2>Information Science Engineering Student</h2>

          <p className="description">
            I'm passionate about technology, software development,
            web development and building useful applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          About Section
      ========================= */}
      <section id="about" className="about-section">

        <div className="about-container">

          <div className="about-text">

            <p className="section-label">ABOUT ME</p>

            <h2>Who I Am</h2>

            <p>
              I am an Information Science Engineering student with a strong
              interest in software development and modern technologies.
            </p>

            <p>
              I enjoy learning new technologies, developing projects and
              solving real-world problems through technology.
            </p>

            <p>
              My goal is to continuously improve my technical skills and
              build practical applications that are useful and meaningful.
            </p>

          </div>


          <div className="about-card">

            <h3>🎓 Education</h3>

            <p>Information Science & Engineering</p>

            <p>Engineering Student</p>

          </div>

        </div>

      </section>


      {/* =========================
          Skills Section
      ========================= */}
      <section id="skills" className="skills-section">

        <div className="skills-container">

          <p className="section-label">MY SKILLS</p>

          <h2>Technologies I Work With</h2>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>HTML</h3>
              <p>Building structured web pages.</p>
            </div>

            <div className="skill-card">
              <h3>CSS</h3>
              <p>Creating modern and responsive designs.</p>
            </div>

            <div className="skill-card">
              <h3>JavaScript</h3>
              <p>Creating interactive web applications.</p>
            </div>

            <div className="skill-card">
              <h3>React</h3>
              <p>Building component-based applications.</p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          Projects Section
      ========================= */}
      <section id="projects" className="projects-section">

        <div className="projects-container">

          <p className="section-label">MY PROJECTS</p>

          <h2>Projects I'm Building</h2>

          <p className="projects-intro">
            I am currently building practical projects to improve my
            software development and problem-solving skills.
          </p>

          <div className="project-card">

            <h3>Personal Portfolio Website</h3>

            <p>
              A personal portfolio website built using React and Vite
              to showcase my skills, education and future projects.
            </p>

            <div className="project-tech">

              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>CSS</span>

            </div>

            <p className="project-status">
              🚧 Currently Building
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          Education Section
      ========================= */}
      <section id="education" className="education-section">

        <div className="education-container">

          <p className="section-label">MY EDUCATION</p>

          <h2>Education</h2>

          <div className="education-card">

            <div className="education-icon">
              🎓
            </div>

            <div className="education-content">

              <h3>B.E. Information Science & Engineering</h3>

              <p className="college-name">
                AMC Engineering College
              </p>

              <p>
                University: VTU
              </p>

              <p>
                Currently studying: 7th Semester
              </p>

              <p>
                Expected Graduation: 2027
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          Contact Section
      ========================= */}
      <section id="contact" className="contact-section">

        <div className="contact-container">

          <p className="section-label">CONTACT ME</p>

          <h2>Let's Connect</h2>

          <p>
            I'm always interested in learning, building projects
            and connecting with other people in technology.
          </p>

          <p className="contact-email">
            📧 avimagar9611@gmail.com
          </p>

          <a
            href="mailto:avimagar9611@gmail.com"
            className="btn primary-btn"
          >
            Send Me an Email
          </a>

        </div>

      </section>


      {/* =========================
          Footer
      ========================= */}
      <footer className="footer">

        <p>
          © 2026 Avinash. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;