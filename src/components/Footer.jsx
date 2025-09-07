function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-contact">
          <div className="contact-grid">
            {/* Left Column */}
            <div className="contact-column">
              <div className="contact-item">
                <a href="mailto:vdevendra746@gmail.com" target="_blank" rel="noreferrer">
                  📧 vdevendra746@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <a href="tel:+919390617881" target="_blank" rel="noreferrer">
                  📱 91+9247897027
                </a>
              </div>
              <div className="contact-item">
                <a href="https://www.linkedin.com/in/veparala-devendra-41034226a/" target="_blank" rel="noreferrer">
                  🔗 LinkedIn Profile
                </a>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="contact-column">
              <div className="contact-item">
                <a href="https://github.com/VEPARALADEVENDRA" target="_blank" rel="noreferrer">
                  💻 GitHub
                </a>
              </div>
              <div className="contact-item">
                <a href="https://ieeexplore.ieee.org/author/968720097337954" target="_blank" rel="noreferrer">
                  🔍 IEEE Xplore Profile
                </a>
              </div>
              <div className="contact-item">
                <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer">
                  🔥 Firebase Console
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="contact-item">
              <a href="/resume/Veparala_Devendra_Resume.pdf" target="_blank" rel="noreferrer" download>
                📄 Download Resume
              </a>
            </div>
            <div className="footer-copyright">
              <span>© {new Date().getFullYear()} Veparala Devendra</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

