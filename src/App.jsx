import './App.css'
import LandingPage from './components/LandingPage.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import Background from './components/Background.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

function App() {
  return (
    <div className="app-root">
      <ScrollProgress />
      <Background />
      <LandingPage />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App

