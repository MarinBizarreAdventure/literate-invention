import { useEffect, useRef, useState } from 'react'
import './App.css'

function useTypingEffect(text: string, speed = 100) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return { displayed, done }
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

const skills = {
  Languages: ['Go', 'Python', 'SQL', 'C#/.NET'],
  Frameworks: ['Gin', 'Echo', 'GORM', 'FastAPI', 'PyTorch', 'TensorFlow'],
  Infrastructure: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'gRPC', 'Microservices'],
  Databases: ['PostgreSQL', 'Redis', 'MongoDB'],
}

function App() {
  const { displayed, done } = useTypingEffect('MARIN NEGAI', 120)

  return (
    <div className="container">
      <div className="accent-line" />

      <header className="hero">
        <h1>
          {displayed}
          <span className={`cursor ${done ? 'cursor--blink' : ''}`}>|</span>
        </h1>
        <p>Software Engineer · Machine Learning Engineer</p>
        <div className="links">
          <a className="link-hover" href="mailto:marinnegai@gmail.com">Email</a>
          <a className="link-hover" href="https://linkedin.com/in/marinnegai" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link-hover" href="https://github.com/MarinBizarreAdventure" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <RevealSection className="section">
        <h2 className="section-heading">Experience</h2>

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
      </RevealSection>

      <RevealSection className="section">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-category" key={category}>
              <h4>{category}</h4>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section">
        <h2 className="section-heading">Leadership & Education</h2>
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
      </RevealSection>

      <footer className="section">
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          Chișinău, Moldova · Romanian, Russian, English
        </p>
      </footer>
    </div>
  )
}

export default App
