import { ReactNode } from 'react'
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
    <div className="section__subtitle section__subtitle--intro infinite-scroll-wrapper">
      <div className="infinite-scroll-container">
        <span className="infinite-scroll-text">{subtitle}</span>
        <span className="infinite-scroll-text" aria-hidden="true">{subtitle}</span>
      </div>
    </div>
  </>
)

export default IntroContent
