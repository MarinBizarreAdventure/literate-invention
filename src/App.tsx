import './App.css'

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>MARIN NEGAI</h1>
        <p>Software Engineer · Machine Learning Engineer</p>
        <div className="links">
          <a href="mailto:marinnegai@gmail.com">Email</a>
          <a href="https://linkedin.com/in/marinnegai" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/MarinBizarreAdventure" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <section className="section">
        <h2>Experience</h2>
        
        <div className="experience-item">
          <div className="item-header">
            <h3>Machine Learning Engineer</h3>
            <span>Jul 2024 - Present</span>
          </div>
          <div className="item-subheader">Sigmoid · Hybrid</div>
          <ul>
            <li>Developing ML models using PyTorch and TensorFlow; building deployment APIs</li>
            <li>Mentoring junior ML engineers and contributing to R&D initiatives in generative AI</li>
            <li>Developed backend services with Golang Gin and FastAPI for model serving and data processing</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="item-header">
            <h3>Software Engineer</h3>
            <span>Jun 2024 - Feb 2026</span>
          </div>
          <div className="item-subheader">CODWER · Hybrid</div>
          <ul>
            <li>Built high-performance backend services with Python(FastAPI) and Go (Gin); designed RESTful and gRPC APIs</li>
            <li>Deployed production systems on AWS (EC2, S3, Lambda) with Docker and CI/CD pipelines</li>
            <li>Designed microservices architecture handling 10K+ daily requests with PostgreSQL and Redis</li>
            <li>Reduced API latency by 40% through caching, query optimization, and connection pooling</li>
            <li>Implemented message queues (RabbitMQ) for async processing and event-driven architecture</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="item-header">
            <h3>Software Engineer</h3>
            <span>Apr 2023 - Jun 2024</span>
          </div>
          <div className="item-subheader">NULLPROJECT-DEV · Remote</div>
          <ul>
            <li>Built backend services with Go and Python; developed REST APIs for data processing and integrations</li>
            <li>Integrated third-party APIs and implemented background workers for async tasks</li>
            <li>Designed database schemas with PostgreSQL; wrote migrations and optimized queries</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <p>Go, Python, SQL, C#/.NET</p>
          </div>
          <div className="skill-category">
            <h4>Frameworks</h4>
            <p>Gin, Echo, GORM, FastAPI, PyTorch, TensorFlow</p>
          </div>
          <div className="skill-category">
            <h4>Infrastructure</h4>
            <p>AWS, Docker, Kubernetes, CI/CD, gRPC, Microservices</p>
          </div>
          <div className="skill-category">
            <h4>Databases</h4>
            <p>PostgreSQL, Redis, MongoDB</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Leadership & Education</h2>
        <div className="education-item">
          <div className="item-header">
            <h3>President, FAF NGO</h3>
            <span>Oct 2023 - Oct 2025</span>
          </div>
          <ul>
            <li>Led a team of 5+ members, organized 5 hackathons and 3 conferences</li>
            <li>Secured partnerships with 10+ industry sponsors</li>
          </ul>
        </div>
        
        <div className="education-item">
          <div className="item-header">
            <h3>Technical University of Moldova</h3>
            <span>2022 - Present</span>
          </div>
          <div className="item-subheader">B.S. Software Engineering (Honors)</div>
        </div>
      </section>

      <footer className="section">
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          Chișinău, Moldova · Romanian, Russian, English
        </p>
      </footer>
    </div>
  )
}

export default App
