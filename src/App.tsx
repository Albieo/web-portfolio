import { useEffect, useState } from 'react'
import Intro from './components/organisms/introduction/Intro'
import MyService from './components/organisms/my-services/MyService'
import AboutMe from './components/organisms/about-me/AboutMe'
import Projects from './components/organisms/projects/Projects'
import Footer from './components/organisms/footer/Footer'
import Header from './components/organisms/header/Header'
import './App.css'
import Cursor from './components/atoms/cursor/Cursor'

function App() {
  const [navState, setNavState] = useState('')

  useEffect(() => {
    document.body.classList.add('has-custom-cursor')
    return () => document.body.classList.remove('has-custom-cursor')
  }, [])

  const toggleNav = () => {
    setNavState(prevState => prevState === '' ? 'nav-open' : '')
  }

  return (
    <div className={navState}>
      <Cursor />
      <Header toggleNav={toggleNav} />
      <Intro />
      <MyService />
      <AboutMe />
      <Projects />
      <Footer />
    </div> 
  )
}

export default App
