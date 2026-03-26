import Intro from '../components/organisms/introduction/Intro'
import MyService from '../components/organisms/my-services/MyService'
import Projects from '../components/organisms/projects/Projects'
import SkillsPreview from '../components/organisms/skills-preview/SkillsPreview'
import CTA from '../components/organisms/cta/CTA'

export default function HomePage() {
  return (
    <>
      <Intro />
      <MyService />
      <SkillsPreview />
      <Projects />
      <CTA />
    </>
  )
}
