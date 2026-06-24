import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Ganji Raju</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tag">Open to Work</p>
          <h1>Hi, I'm <span>Ganji Raju</span></h1>
          <h3>Python Developer | ReactJS Developer | SQL & MySQL</h3>
          <p>
            Computer Science graduate skilled in Python, SQL, MySQL, ReactJS,
            JavaScript, HTML, CSS, and Bootstrap. I build responsive web
            applications, clean UI designs, and user-friendly interfaces.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-card">
          <h2>Frontend Developer</h2>
          <p>ReactJS • JavaScript • HTML • CSS</p>
          <h2>Backend Skills</h2>
          <p>Python • SQL • MySQL</p>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I am a Computer Science graduate from Annamacharya Institute of
          Technology & Sciences, JNTUH. I have experience in developing
          responsive web pages, converting Figma designs into functional web
          applications, integrating APIs, and working with Git and GitHub.
          I am eager to contribute to innovative development teams and improve
          my skills in modern web technologies.
        </p>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {[
            "Python",
            "SQL",
            "MySQL",
            "ReactJS",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "REST APIs",
            "Git",
            "GitHub",
            "Responsive Design",
          ].map((skill, index) => (
            <div className="skill-card" key={index}>{skill}</div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>

        <div className="timeline-card">
          <h3>Frontend Developer</h3>
          <h4>VRITTIFY AI</h4>
          <p className="date">October 2025 - January 2026</p>
          <ul>
            <li>Developed responsive user interfaces using ReactJS, HTML, CSS, and JavaScript.</li>
            <li>Converted Figma designs into functional web applications.</li>
            <li>Built reusable components to improve development efficiency.</li>
            <li>Integrated APIs and improved user navigation experience.</li>
            <li>Collaborated using Git and GitHub for version control.</li>
          </ul>
        </div>

        <div className="timeline-card">
          <h3>Web Development Intern</h3>
          <h4>EEVOLUTION TECHNOLOGY</h4>
          <p className="date">February 2024 - May 2024</p>
          <ul>
            <li>Created responsive web pages using HTML, CSS, and JavaScript.</li>
            <li>Improved UI consistency and user experience.</li>
            <li>Worked with team members to deliver quality web solutions.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Online Depression Detection System</h3>
            <p>
              Machine learning project using Python, NLP, and SVM to analyze
              text, image, and audio inputs for depression detection.
            </p>
            <span>Python • ML • NLP • SVM</span>
          </div>

          <div className="project-card">
            <h3>Audio to Sign Language Translator</h3>
            <p>
              Web application that converts speech into sign language gestures
              to support communication accessibility.
            </p>
            <span>Python • Django • HTML • CSS • JavaScript</span>
          </div>

          <div className="project-card">
            <h3>Responsive Portfolio Website</h3>
            <p>
              Personal portfolio website showcasing skills, experience,
              projects, education, and contact details.
            </p>
            <span>ReactJS • CSS • Responsive Design</span>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>B.Tech - Computer Science and Engineering</h3>
          <p>Annamacharya Institute of Technology & Sciences, JNTUH</p>
        </div>

        <div className="education-card">
          <h3>Intermediate - MPC</h3>
          <p>Pragathi Junior College</p>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact Me</h2>
        <p>Interested in working together? Feel free to contact me.</p>

        <div className="contact-box">
          <p><strong>Email:</strong> rajunetha2004@gmail.com</p>
          <p><strong>Mobile:</strong> 8143813891</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/raju-python-developer" target="_blank">
              linkedin.com/in/raju-python-developer
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/raju8143" target="_blank">
              github.com/raju8143
            </a>
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026 Ganji Raju. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;