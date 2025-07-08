import { ReactNode } from 'react'
import Image from '../../atoms/image/Image'
import IntroContent from '../../molecules/intro-content/IntroContent'
import img_intro from '../../../img/PortImage.jpg'
import { useTheme } from '../../atoms/theme/ThemeContext';
import './intro.scss'

const Intro = (): ReactNode => {
    const { theme } = useTheme();

    return (
        <section className={`intro ${theme === 'light' ? 'intro--light' : 'intro--dark'}`} id="home">
            <IntroContent name={'Albert Mpepo'} subtitle="Full Stack Engineer" />
            <Image className="intro__img" src={img_intro} alt="a picture of Jane Smith smiling" />
        </section>
    )
}
export default Intro
