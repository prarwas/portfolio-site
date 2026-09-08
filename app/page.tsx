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
            I bring structure to complexity through data, design, and collaboration.
          </h2>

          <p className="about-text">
            If I were to describe myself in 3 words I would say: organized, responsible, and structered. That shows up in both my work and everyday life.

I love using data to make sense of things; it's just how my brain works. I also get a lot of energy from bringing people together around a shared goal, and I'm always thinking about how to make products more useful and enjoyable for the people who actually use them.

Community-focused work matters a lot to me too, so I'm especially drawn to projects that feel practical, thoughtful, and meaningful.
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
        
        {/* NYPA */}
          <div className="experience-card">

            <h3>Intern - Project Management</h3>

            <p className="company">
              New York Power Authority · May 2025 – June 2025
            </p>

            <p>
              <li>Supported project managers in scoping, planning, and tracking 10+ infrastructure projects at NYPA’s generation facilities, aligning with budgets, schedules, and compliance standards</li>
              <li>Developed and maintained Excel and Procore dashboards to track 60+ milestones, identify risks, and support corrective actions, contributing to on-time deliverables</li>
              <li>Coordinated 20+ cross-functional meetings per month across engineering, operations, maintenance, procurement, and contractors to streamline communication and decision-making</li>
              <li>Monitored quality and safety documentation across 5 active construction sites, flagging 40+ areas for improvement and ensuring alignment with regulatory requirements</li>
              <li>Prepared weekly performance reports for leadership, summarizing progress on multi-million-dollar infrastructure projects</li>
            </p>

          </div>

        {/* WISE Teaching */}
          <div className="experience-card">

            <h3>Teaching Assistant</h3>

            <p className="company">
              Women In Science and Engineering Honors Program (WISE Honors) · Feb 2025 – May 2025
            </p>

            <p>
              <li>Supported instruction for a career and life design course focused on adaptability, professional development, and financial literacy</li>
              <li>Facilitated discussions on networking, outreach, and career planning in STEM fields</li>
              <li>Guided 30+ students through reflective assignments and interactive workshops on budgeting, loan repayment, and personal development</li>
              <li>Collaborated with faculty to provide feedback and ensure engaging, student-centered learning experiences</li>
            </p>

          </div>

        {/* NYSMM */}
          <div className="experience-card">

            <h3>Intern</h3>

            <p className="company">
              NYS Sustainable Materials Management Stewardship · Jan 2025 - May 2025
            </p>

            <p>
              <li>Conducted market research and data analysis to assess sustainability initiatives' impact</li>
              <li>Assisted with product lifecycle support, including requirements documentation and user insights</li>
              <li>Prepared reports and presentations using Excel and PowerPoint</li>
            </p>

          </div>

        {/* SYEP TA */}
          <div className="experience-card">

            <h3>Coding Teaching Assistant</h3>

            <p className="company">
              LaGuardia Community College - Summer Youth Employment Program (SYEP) · Jul 2024 - Aug 2025
            </p>

            <p>
              <li>Led and instructed multiple classrooms of 20+ high school students in an Introduction to Coding course</li>
              <li>Managed classroom and project activities, tracked milestones, and ensured timely task completion and attendance</li>
              <li>Pioneered a project-based learning approach to coding, focusing on Python as the primary programming language</li>
              <li>Mentored students in developing a community-focused application, demonstrating the impact of coding on local issues</li>
              <li>Designed and implemented diverse lessons featuring hands-on coding exercises, fostering student engagement with available resources and coding techniques</li>
            </p>

          </div>

        {/* SWE, Discover STEM Day */}
          <div className="experience-card">

            <h3>Event Lead, Discover STEM Day</h3>

            <p className="company">
              Society of Women Engineers · Apr 2024
            </p>

            <p>
              <li>Led cross-functional planning and execution of largest annual outreach event for 90+ Girl Scouts, coordinating 10+ STEM clubs and campus departments</li>
              <li>Managed volunteer schedules, resource allocation, and day-of logistics, adapting quickly to resolve issues like locked rooms or scheduling conflicts</li>
              <li>Delivered a successful event with positive feedback from parents and participants, increasing engagement in STEM outreach</li>
            </p>

          </div>

        {/* Broadridge Financial Solutions */}
          <div className="experience-card">

            <h3>Extern</h3>

            <p className="company">
              Broadridge Financial Solutions · Aug 2022 - May 2023
            </p>

            <p>
              <li>Selected to participate in a competitive year-long credit-bearing externship opportunity that consists of job & internship search preparation, professional development and gaining industry knowledge and reflection journals & other assignments</li>
              <li>Cooperated in a mentorship with industry professionals from Broadridge Financial Solutions</li>
              <li>Communicated with a multitude of professional individuals to learn more about career growth</li>
              <li>Facilitated through Stony Brook University Career Center’s Diversity Professional Leadership Network (DPLN)</li>
            </p>

          </div>

        {/* Tech NYC */}
          <div className="experience-card">

            <h3>Intern</h3>

            <p className="company">
              Tech:NYC Cohort - Morgan Stanley & Sprinklr · Jul 2022 - Aug 2022
            </p>

            <p>
              <li>Cooperated with industry professionals from Morgan Stanley and Sprinklr to produce team projects in a fast-paced environment about real challenges faced in their careers</li>
              <li>Designed a website that intends to help users manage their health and wellbeing by tracking their nutritional intake with the use of HTML, Javascript, CSS and APIs</li>
              <li>Explored the value of DEI talent within businesses and how tech companies can accommodate to a multitude of backgrounds in order to grow in the developing world</li>
              <li>Engaged in career-readiness workshops with various companies such as Verizon, Google, Infosys, MarketAxess, etc.</li>
              <li>Facilitated through PENCIL Inc.’s Ladders for Leaders Program</li>
            </p>

          </div>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <div className="section-content">

          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">

        {/* Photobooth Finder */}
          <div className="project-card">

            <div>

              <h3>Photobooth Finder</h3>

              <p>
                An interactive geospatial data application for discovering nearby photobooths and analyzing local photobooth availability.
                Photobooth Finder transforms a personally curated dataset of 500+ photobooth locations into a searchable, location-aware application. 
                The project combines data collection, ETL, data validation, SQL, geospatial analysis, visualization, and interactive web development to help users identify nearby photobooths and understand how availability varies by location and style.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>FastAPI</span>
                <span>MySQL</span>
                <span>Streamlit</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/prarwas/photobooth-finder" target="_blank">GitHub</a>
                <a href="https://photobooth-finder.streamlit.app/" target="_blank">View Project Demo</a>
              </div>

            </div>

          </div>
        
        {/* ISE 305 Project */}
        <div className="project-card">

            <div>

              <h3>Relational Database Design – Minecraft Game Data</h3>

              <p>
              Designed and implemented a normalized relational database in Microsoft Access using 8+ interconnected tables to model complex in-game relationships across objects, blocks, food, entities, crafting, and enchantments. 
              Wrote advanced SQL queries with INNER JOINs, nested subqueries, GROUP BY, and aggregate functions to analyze related datasets, and built forms and reports to visualize rankings and attributes while maintaining data integrity through primary/foreign keys and validation rules.
              </p>

              <div className="tech-stack">
                <span>SQL</span>
                <span>Data Modeling</span>
                <span>Relational Database Design</span>
                <span>Data Analysis</span>
                <span>Database Normalization</span>
                <span>Data Integrity</span>
              </div>

              <div className="project-links">
                <a href="/Minecraft_Game_Data_Project_Overview.pdf" target="_blank" rel="noopener noreferrer">Project Overview</a>
              </div>

            </div>

          </div>

        {/* EST 205 Project */}
        <div className="project-card">

            <div>

              <h3>SEAnima - Streaming Platform Redesign Project</h3>

              <p>
               Conducted user research through surveys and usability analysis to identify pain points and translate findings into user stories and feature requirements. 
               Performed competitive analysis against Netflix, Hulu, and Prime Video to define improved user journeys, then designed and iterated interactive Figma prototypes focused on navigation, personalization, mobile compatibility, accessibility, and retention. 
               Presented data-driven findings to stakeholders as clear, actionable product recommendations.
              </p>

              <div className="tech-stack">
                <span>User Research</span>
                <span>UX Design</span>
                <span>Figma</span>
                <span>Product Management</span>
                <span>Competitive Analysis</span>
                <span>User Stories</span>
                <span>Usability Testing</span>
              </div>

              <div className="project-links">
                <a href="/SEAnima_Project_Overview.pdf" target="_blank" rel="noopener noreferrer">Project Overview</a>
              </div>

            </div>

          </div>

        {/* Big Reuse Map */}
          <div className="project-card">

            <div>

              <h3>Service-Learning Project: Big Reuse Map</h3>

              <p>
                Along with my teammates as well the help of Big Reuse, we created an engaging interactive map covering Queens, Brooklyn, and Long Island, showcasing over 120 crucial sustainability improvement locations like donation centers and recycling hubs. 
                We utilized advanced Excel Data Management techniques and GIS expertise to craft a dynamic and user-friendly map via Google My Maps. 
                We aim to promote environmentally friendly disposal methods through the use of this map.
              </p>

              <div className="tech-stack">
                <span>GIS</span>
                <span>Excel</span>
                <span>Data Management</span>
                <span>Data Visualization</span>
                <span>Sustainability</span>
                <span>Team Collaboration</span>
              </div>

              <div className="project-links">
                <a href="/Big_Reuse_Project_Overview.pdf" target="_blank" rel="noopener noreferrer">Project Overview</a>
                <a href="https://www.google.com/maps/d/u/0/viewer?mid=1C9jDEofIcPTiD2IrzsA0-dyLqXJatoQ&ll=40.73407540037804%2C-73.55230155000001&z=10" target="_blank">View Project</a>
              </div>

            </div>

          </div>
        
        {/* Tech NYC Project */}
          <div className="project-card">

            <div>

              <h3>HealthWell: Tech:NYC Intern Project</h3>

              <p>
                Designed a website that intends to help users manage their health and wellbeing by tracking their nutritional intake. 
                Created a double search engine that serves as a recipe finder with the use of HTML, Javascript, CSS and APIs.

              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Next.js</span>
              </div>

              <div className="project-links">
                <a href="/HealthWell_Project_Overview.pdf" target="_blank" rel="noopener noreferrer">Project Overview</a>
                <a href="https://sinboxg.wixsite.com/food-tracker" target="_blank">View Project Demo</a>
              </div>

            </div>

          </div>
        
        {/* Oscar's Guide to Recycling */}
        <div className="project-card">

            <div>

              <h3>Oscar's Guide to Recycling</h3>

              <p>
              Created a project called "Oscar's Guide to Recycling" with the use of Python and the pandas library on with Google's Colab. 
              The project begins by asking the user what type of item they wish to dispose of. 
              Once that is known, the project initiates a series of questions until the user knows which bin the items goes in, if they should donate the items, or if they should resell them. 
              Essentially, Oscar's Guide to Recycling teaches people the importance of recycling as well as the many resources around them.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>Pandas</span>
                <span>Data Processing</span>
                <span>Decision Logic</span>
                <span>Interactive Applications</span>
                <span>User-Centered Design</span>
                <span>Sustainability</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/prarwas/oscar-recycle-guide" target="_blank">GitHub</a>
                <a href="https://devpost.com/software/co2-informant/" target="_blank">Details</a>
                <a href="https://colab.research.google.com/drive/1Zgaot9Yv0B4VfkDfd9fGg7fY6mwDKV3x?usp=sharing" target="_blank">View Project</a>
              </div>

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
              Bachelor of Science in Technological Systems Management
              <li>Specialization in Computer Science</li>
              <li>Women in Science and Engineering (WISE) Honors Program </li>
              <li>GPA: 3.1/4.0</li>
            </p>

            <p className="education-date">
              Graduation: 2026
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

            <a href="mailto:pbiswas.aas@gmail.com?subject=Hi%20Prarthana!%20Let's%20Connect">
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/prarthana-biswas/"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/prarwas"
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