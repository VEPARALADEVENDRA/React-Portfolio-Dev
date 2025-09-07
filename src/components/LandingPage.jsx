import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 * i, duration: 0.5 }
  })
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const closeNav = () => setIsNavOpen(false)

  const sectionIds = useMemo(() => (
    ['home', 'projects', 'skills', 'Intership experience', 'about', 'contact-section']
  ), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container">
          <div className="brand">
            <img
              className="brand-logo"
              src="https://img.freepik.com/premium-vector/abstract-letter-d-logo-design-creative-premium-minimal-emblem-design-template-logo_1212335-7.jpg"
              alt="Logo"
            />
            <span className="brand-name">Veparala Devendra</span>
          </div>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-controls="primary-nav"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <nav className={`nav${isNavOpen ? ' open' : ''}`} id="primary-nav">
            <a className={activeId==='home' ? 'active' : ''} href="#home" onClick={closeNav}>🏠Home</a>
            <a className={activeId==='projects' ? 'active' : ''} href="#projects" onClick={closeNav}>💻 Projects</a>
            <a className={activeId==='skills' ? 'active' : ''} href="#skills" onClick={closeNav}>💻 Skills</a>
            <a className={activeId==='experience' ? 'active' : ''} href="#experience" onClick={closeNav}>💼 Intership Experience</a>
            <a className={activeId==='about' ? 'active' : ''} href="#about" onClick={closeNav}>👤 About</a>
            <a className={activeId==='contact-section' ? 'active' : ''} href="#contact-section" onClick={closeNav}>📞 Contact</a>
            <a href="/resume/Veparala_Devendra_Resume.pdf" target="_blank" rel="noreferrer" download onClick={closeNav}>📄 Download Resume</a>

          </nav>
        </div>
      </header>

      <motion.section className="hero hero-enhanced hero-spectacular" id="home" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Floating Particles Background */}
        <div className="hero-particles">
             
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 360],
                scale: [0.5, 1.2, 0.5],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Animated Geometric Shapes */}
        <div className="hero-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              x: [0, 50, -30, 0],
              y: [0, -40, 20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1.3, 1],
              x: [0, -60, 40, 0],
              y: [0, 30, -50, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.5, 0.7, 1],
              x: [0, 30, -70, 0],
              y: [0, -60, 40, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <div className="container hero-grid">
          <motion.div 
            className="hero-left" 
            variants={containerVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 200, damping: 20 }
            }}
          >
            <motion.div 
              className="eyebrow hero-eyebrow" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                color: "#7c5cff",
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              Full‑Stack • MERN • Data Science
            </motion.div>
            <motion.h1 
              className="gradient-text hero-title hero-title-spectacular" 
              variants={itemVariants}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
                transition: { type: "spring", stiffness: 400, damping: 20 }
              }}
            >
              <motion.span
                className="title-word"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(124,92,255,0.5)",
                    "0 0 40px rgba(80,162,255,0.8)",
                    "0 0 20px rgba(54,211,153,0.5)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Building websites and applications more responsive and efficient
              </motion.span>
            </motion.h1>
            <motion.div 
              className="hero-description" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
              <motion.p 
                className="description-line"
                whileHover={{ 
                  x: 10,
                  color: "#50a2ff",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                --I build apps that are fast, simple, and easy to use.
              </motion.p>
              <motion.p 
                className="description-line"
                whileHover={{ 
                  x: 10,
                  color: "#36d399",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                --Making websites that look good and work well.
              </motion.p>
              <motion.p 
                className="description-line"
                whileHover={{ 
                  x: 10,
                  color: "#f59e0b",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                --I create apps that solve problems in a smart way.
              </motion.p>
              <motion.p 
                className="description-line"
                whileHover={{ 
                  x: 10,
                  color: "#8b5cf6",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                --Building clean, modern web apps step by step.
              </motion.p>
              <motion.p 
                className="description-line"
                whileHover={{ 
                  x: 10,
                  color: "#ef4444",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                --I design and code apps that people enjoy using.
              </motion.p>
              <motion.p 
                className="description-line"
                whileHover={{ 
                  x: 10,
                  color: "#06b6d4",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                --Turning ideas into useful, working websites.
              </motion.p>
            </motion.div>
            <motion.div 
              className="hero-cta" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
              <motion.a 
                className="btn primary hero-btn-primary" 
                href="#projects" 
                whileHover={{ 
                  y: -4, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 400 }
                }} 
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
              <motion.a 
                className="btn outline hero-btn-outline" 
                href="#contact" 
                whileHover={{ 
                  y: -4, 
                  scale: 1.05,
                  rotateY: -5,
                  transition: { type: "spring", stiffness: 400 }
                }} 
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.a>
              <motion.a 
                className="btn ghost hero-btn-ghost" 
                href="/resume/Veparala_Devendra_Resume.pdf" 
                target="_blank" 
                rel="noreferrer" 
                download 
                whileHover={{ 
                  y: -4, 
                  scale: 1.05,
                  rotateX: 5,
                  transition: { type: "spring", stiffness: 400 }
                }} 
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </motion.div>
            <motion.ul 
              className="social-list hero-social" 
              aria-label="Social links" 
              variants={containerVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
              <motion.li 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <a href="https://github.com/VEPARALADEVENDRA" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07 .9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05 .55 1.42.2 2.47.1 2.73 .64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.31.68.92.68 1.86 0 1.34-.01 2.41-.01 2.74 0 .27.18.59.69.49A10.07 10.07 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
                  </svg>
                </a>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: -360,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <a href="https://www.linkedin.com/in/veparala-devendra-41034226a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM5 8.75h3.88V21H5V8.75zm6.5 0H15v1.67h.05c.42-.8 1.46-1.67 3-1.67 3.2 0 3.79 2.1 3.79 4.84V21h-3.88v-5.43c0-1.3-.03-2.98-1.82-2.98-1.83 0-2.11 1.43-2.11 2.9V21H11.5V8.75z"/>
                  </svg>
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div 
            className="hero-right"
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            <div className="portrait hero-portrait">
              <motion.img 
                src="Dev (2).jpeg" 
                alt="Portrait" 
                className="hero-image"
                animate={{ y: [0, -6, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              />
              <motion.div 
                className="floating-badge hero-badge available-badge"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  y: -10,
                  transition: { type: "spring", stiffness: 500, damping: 15 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { type: "spring", stiffness: 600 }
                }}
              >
                <motion.span 
                  className="badge-text"
                  animate={{ 
                    color: ["#36d399", "#7c5cff", "#50a2ff", "#36d399"]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Available for work
                </motion.span>
                <motion.div 
                  className="badge-pulse"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default LandingPage