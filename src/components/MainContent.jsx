import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import AwardsAndAchievement from './AwardsAndAchievement.jsx'

function MainContent() {
  const projects = [
    {
      title: 'Dwell - A Smart Building Management System',
      description: `Dwell is an advanced smart building management application with the following 
      step-by-step features: ✓ Designed to enhance the living experience of residents 
      → Provides a seamless and efficient platform for residential complexes 
      ★ Offers comprehensive suite of features for residents, building owners, and security personnel 
      🔒 Ensures secure and efficient management of residential buildings 
      📱 Streamlines communication between all stakeholders 
      🏢 Implements smart technology for modern building management`,
      tags: ['Android Studio', 'Kotlin', 'Firebase'],
      imageUrl: 'Dwell.jpeg',
      liveUrl: 'https://console.firebase.google.com/project/secondary-1c1c4/overview',
      codeUrl: 'https://console.firebase.google.com/project/secondary-1c1c4/database/secondary-1c1c4-default-rtdb/data/~2F',
    },
    {
      title: 'Sentimental Analysis using Natural Language Processing',
      description: `The amount of text data generated each day is growing rapidly. 
      Social media platforms like Instagram and Facebook contribute heavily as millions of users share posts, comments, and updates. 
      Messaging apps such as WhatsApp and Telegram add to this growth through continuous personal and group conversations. 
      Online platforms like Amazon and Google also generate and store vast amounts of textual information daily. 
      Additionally, news websites publish countless articles and reports, further increasing the volume of text data..`,
      tags: ['Random Forest', 'CNN', 'RNN'],
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
      liveUrl: 'https://ieeexplore.ieee.org/document/10497429',
      codeUrl: 'https://ieeexplore.ieee.org/document/10497429',
    },
    {
      title: 'Travessence Travessence Travel + Essence; the soul of the journey -The roads we take often lead not to places, but to pieces of ourselves.',
      description: `🌿 Travessence Travel + EssenceTravessence is a beautifully designed travel website that blends aesthetics with functionality. 
      It offers users an engaging experience to explore destinations, view special picks, book curated travel packages, and stay connected through a newsletter. 
      Inspired by nature and friendship, this site reflects the soul of a journey, not just the destination.`,
      tags: ['JavaScript'],
      imageUrl: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/63481d76dbf1019a39a1b0b2/0x0.png',
      liveUrl: 'https://travessence.firebaseapp.com/',
      codeUrl: 'https://console.firebase.google.com/project/travessence/database',
    },
    {
      title: 'VisionCode ~ coding with purpose and vision (Responsive Website)',
      description: `My portfolio is built with React to ensure a fast, dynamic, and responsive user experience.
         It showcases my projects, skills, and achievements in a clean and modern interface.
         The design focuses on simplicity and accessibility, making it easy for visitors to explore my work.
         Each section is carefully structured to highlight both technical expertise and creative problem-solving.
         This portfolio reflects my journey as a full-stack developer and my passion for building impactful digital solutions.`,
      tags: ['Android Studio', 'kotlin', 'Firebase'],
      
      imageUrl: 'Dev Port.png',
      liveUrl: '#',
      codeUrl: '#',

    },
    {
      title: 'Order-Management-System-API-using-Django-_Rest_oauth2-Master ~ A Journey into the Realm of OAuth2 with Django REST Framework',
      description: `The OAuth 2.0 authorization framework enables a third-party application to obtain limited access to an HTTP service. OAuth 2.0 APIs can be used for both authentication and authorization. In this note, I want to review and document how to set up OAuth2 for a Django REST project. Using OAuth2 for JSON-based API can be challenging.`,
      tags: ['Html', 'css', 'JavaScript', 'Java', 'cloud'],
      imageUrl: 'cloud.img.png',
      liveUrl: '#',
      codeUrl: 'https://github.com/VEPARALADEVENDRA/Secure-Cloud-Storage-System',
    },
  ]

  const reveal = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main>
      <motion.section id="projects" className="section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="container">
          <motion.h2 variants={reveal}>Selected Projects</motion.h2>
          <motion.div className="grid projects-grid" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {projects.map((p) => (
              <motion.div key={p.title} variants={reveal}>
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <AwardsAndAchievement />

      <motion.section id="skills" className="section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="container">
          <motion.h2 variants={reveal}>Skills</motion.h2>
          <motion.ul className="skills-grid" variants={{ visible: { transition: { staggerChildren: 0.06 } } }}>
            {[
              { name: 'HTML', emoji: '🌐' },
              { name: 'CSS', emoji: '🎨' },
              { name: 'JavaScript', emoji: '⚡' },
              { name: 'Bootstrap', emoji: '📱' },
              { name: 'SQL', emoji: '🗄️' },
              { name: 'Kotlin', emoji: '🤖' },
              { name: 'Firebase', emoji: '🔥' },
              { name: 'Git/GitHub', emoji: '📚' },
              { name: 'React.js', emoji: '⚛️' },
              { name: 'Node.js', emoji: '🟢' },
              { name: 'Machine Learning', emoji: '🧠' },
            ].map((skill) => (
              <motion.li 
                key={skill.name} 
                className="skill-chip" 
                variants={reveal} 
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="skill-emoji">{skill.emoji}</span>
                <span className="skill-name">{skill.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      <motion.section id="experience" className="section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="container">
          <motion.h2 variants={reveal}>Experience</motion.h2>
          <motion.div className="timeline" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.article 
              className="timeline-item" 
              variants={reveal}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
            >
              <div className="timeline-header">
                <div className="timeline-icon">🏛️</div>
                <div className="timeline-content">
                  <h1>NSIC – Government Program</h1>
                  <h3>Trainee – Full Stack Developer</h3>
                  <span>Oct 2024 — Dec 2024</span>
                </div>
              </div>
              <p>
                – Skilled in developing responsive web application using HTML, CSS, JavaScript, and Node.js.
                – Building Designed interactive UI element like buttons, forms, menus and navigation.
                – Creating mockups and collaboration on frontend and backend integration.
              </p>
            </motion.article>
            <motion.article 
              className="timeline-item" 
              variants={reveal}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
            >
              <div className="timeline-header">
                <div className="timeline-icon">🏢</div>
                <div className="timeline-content">
                  <h1>VCodeZ IT Services – Company Program</h1>
                  <h3>Trainee – Advance Full Stack Developer</h3>
                  <span>June 2025 — Oct 2025</span>
                </div>
              </div>
              <p>
                – Developed responsive websites using Bootstrap for consistent, mobile friendly design.
                – Built dynamic web applications with PHP and Django. Including backend and database functionality.
                – Created interactive interface in React and cross platform apps using flutter
              </p>
            </motion.article>
            <motion.article 
              className="timeline-item" 
              variants={reveal}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
            >
              <div className="timeline-header">
                <div className="timeline-icon">🌱</div>
                <div className="timeline-content">
                  <h1>Dr. Reddy's Foundation – GROW Tech Program</h1>
                  <h3>Trainee – MEAN Full Stack Developer</h3>
                  <span>June 2025 — Present</span>
                </div>
              </div>
              <p>
                – Currently undergoing full-time intensive training in MongoDB, Express.js, Angular, and Node.js.
                – Building production-ready full-stack applications with a focus on modular architecture and responsive UI.
                – Developing real-world project features using Angular and TypeScript in collaborative sprints.
                – Gaining practical experience in responsive UI design, backend integration, and team collaboration.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="about" className="section about-section" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="container">
          <motion.div 
            className="about-content"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="about-title"
              variants={reveal}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="about-text-container"
              variants={reveal}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
              <motion.p 
                className="about-text"
                variants={reveal}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.span 
                  className="highlight-text"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#7c5cff",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  "Motivated Full Stack Developer
                </motion.span> with strong fundamentals in 
                <motion.span 
                  className="tech-highlight"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#50a2ff",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  React, Node.js, and SQL
                </motion.span>, currently training in the 
                <motion.span 
                  className="stack-highlight"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#36d399",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  MERN stack
                </motion.span>.
              </motion.p>
              
              <motion.p 
                className="about-text"
                variants={reveal}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Experienced in building 
                <motion.span 
                  className="feature-highlight"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#f59e0b",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  user-centric applications
                </motion.span> with clean UI/UX and scalable backend logic.
              </motion.p>
              
              <motion.p 
                className="about-text"
                variants={reveal}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Passionate about delivering 
                <motion.span 
                  className="passion-highlight"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#ef4444",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  impactful, maintainable code
                </motion.span> that solves real-world problems — especially in areas like 
                <motion.span 
                  className="domain-highlight"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#8b5cf6",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                   productivity tools and AI-integrated systems
                </motion.span>.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="contact-section" className="section contact-section" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="container">
          <motion.div 
            className="contact-content"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="contact-title"
              variants={reveal}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Let's Connect
            </motion.h2>
            
            <motion.div 
              className="contact-message-container"
              variants={reveal}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
              <motion.p 
                className="contact-message"
                variants={reveal}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.span 
                  className="contact-highlight"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#7c5cff",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  Ready to collaborate?
                </motion.span> I'm always excited to work on new projects and discuss opportunities.
              </motion.p>
              
              <motion.p 
                className="contact-message"
                variants={reveal}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Feel free to reach out through any of the 
                <motion.span 
                  className="contact-method-highlight"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#50a2ff",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  contact methods
                </motion.span> in the footer below.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}

export default MainContent

