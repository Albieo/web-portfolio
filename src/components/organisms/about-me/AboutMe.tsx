import { ReactNode } from "react"
import jane_about from '../../../img/dev-jane-02.jpg'
import Image from "../../atoms/image/Image"
import { useTheme } from "../../atoms/theme/ThemeContext";
import './about-me.scss'
import Subtitle from "../../atoms/subtitle/Subtitle"

const AboutMe = (): ReactNode => {
    const { theme } = useTheme();

    return (
        <section className={`about-me ${theme === 'light' ? 'about-me--light' : 'about-me--dark'}`} id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <Subtitle
                className="section__subtitle section__subtitle--about"
                text={"Designer & developer based out of NYC."}
            />
            <div className="about-me__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
            </div>

            <Image className="about-me__img" src={jane_about} alt="Jane leaning against a bus" />
        </section>
    )
}
export default AboutMe
