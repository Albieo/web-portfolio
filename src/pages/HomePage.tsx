import Intro from '../components/organisms/introduction/Intro'
import MyService from '../components/organisms/my-services/MyService'
import AboutMe from '../components/organisms/about-me/AboutMe'
import Projects from '../components/organisms/projects/Projects'

export default function HomePage() {
  return (
    <>
      <Intro />
      <MyService />
      <AboutMe />
      <Projects />
    </>
  )
}
