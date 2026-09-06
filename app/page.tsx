export default function Home() {
  return (
    <main>

      {/* Navigation */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#about" className="logo">
            Prarthana
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>


      {/* Hero / About */}
      <section id="about" className="section hero">

        <div className="section-content">

          <p className="intro">Hi, I'm</p>

          <h1>Prarthana.</h1>

          <h2>
            I build technology that turns ideas and data into useful solutions.
          </h2>

          <p className="about-text">
            I'm interested in technology, data, product development,
            and solving real-world problems. My experience spans software
            development, data projects, teaching, project management,
            and leadership.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="secondary-button"
            >
              View Resume
            </a>

          </div>

        </div>

      </section>


      {/* Experience */}
      <section id="experience" className="section">

        <div className="section-content">

          <h2 className="section-title">Experience</h2>

          <div className="experience-card">

            <h3>Position Name</h3>

            <p className="company">
              Company Name · 2025 – 2026
            </p>

            <p>
              Brief explanation of what you worked on, your responsibilities,
              and the impact you made.
            </p>

          </div>


          <div className="experience-card">

            <h3>Teaching Assistant</h3>

            <p className="company">
              Organization · Summer 2026
            </p>

            <p>
              Taught introductory Python programming concepts to students
              with little or no previous programming experience.
            </p>

          </div>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <div className="section-content">

          <h2 className="section-title">Projects</h2>


          <div className="project-card">

            <div>

              <p className="project-number">01</p>

              <h3>Photobooth Finder</h3>

              <p>
                A data-driven application built to organize and explore
                hundreds of photobooth locations around the world.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>FastAPI</span>
                <span>MySQL</span>
                <span>Streamlit</span>
              </div>

              <div className="project-links">
                <a href="#">GitHub</a>
                <a href="#">View Project</a>
              </div>

            </div>

          </div>


          <div className="project-card">

            <div>

              <p className="project-number">02</p>

              <h3>Project Name</h3>

              <p>
                Short explanation of the problem, what you built,
                and your role in the project.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Next.js</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Education */}
      <section id="education" className="section">

        <div className="section-content">

          <h2 className="section-title">Education</h2>

          <div className="education-card">

            <h3>Stony Brook University</h3>

            <p>
              Bachelor of Science
            </p>

            <p className="education-date">
              Graduation: 2027
            </p>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section contact">

        <div className="section-content">

          <h2 className="section-title">Let's Connect</h2>

          <p>
            I'm always interested in opportunities involving technology,
            data, product development, and problem solving.
          </p>

          <div className="contact-links">

            <a href="mailto:youremail@email.com">
              Email
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>


      <footer>

        <p>
          Built by Prarthana using Next.js & TypeScript.
        </p>

      </footer>

    </main>
  );
}