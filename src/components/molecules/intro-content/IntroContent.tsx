import { ReactNode } from 'react'
import Subtitle from '../../atoms/subtitle/Subtitle'
import './intro-content.scss'

interface IntroContentProps {
  name: string
  subtitle: string
}

const IntroContent = ({ 
  name, 
  subtitle 
}: IntroContentProps): ReactNode => (
  <>
    <h1 className="section__title section__title--intro">
      Hi, I am <strong>{name}</strong>
    </h1>
    <Subtitle className="section__subtitle section__subtitle--intro" text={subtitle} />
  </>
)

export default IntroContent