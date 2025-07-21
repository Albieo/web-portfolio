import { useEffect, useState } from 'react'
import Intro from './components/organisms/introduction/Intro'
import MyService from './components/organisms/my-services/MyService'
import AboutMe from './components/organisms/about-me/AboutMe'
import Projects from './components/organisms/projects/Projects'
import Footer from './components/organisms/footer/Footer'
import Header from './components/organisms/header/Header'
import './App.css'
import Cursor from './components/atoms/cursor/Cursor'
import { ThemeContext } from './components/atoms/theme/ThemeContext';

function App() {
  const [navState, setNavState] = useState<boolean>(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.body.classList.add('has-custom-cursor')
    return () => document.body.classList.remove('has-custom-cursor')
  }, [])

  const toggleNav = () => {
    setNavState(prevState => !prevState)
    console.log("clicked")
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Cursor />
      <main className={theme}>
        <Header toggleNav={toggleNav} navOpen={navState} />
        <Intro />
        <MyService />
        <AboutMe />
        <Projects />
        <Footer />
      </main>
    </ThemeContext.Provider>
  )
}

export default App
