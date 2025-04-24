import { ReactNode } from 'react'
import Image from '../../atoms/image/Image'
import IntroContent from '../../molecules/intro-content/IntroContent'
import jane_intro from '../../../img/dev-jane-01.jpg'
import './intro.scss'

const Intro = (): ReactNode => (
   <section className="intro" id="home">
    <IntroContent name={'Jane Smith'} subtitle="Frontend Developer" />
    <Image className="intro__img" src={jane_intro} alt="a picture of Jane Smith smiling" />
  </section>
)

export default Intro