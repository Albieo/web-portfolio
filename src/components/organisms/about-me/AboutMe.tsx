import { ReactNode } from "react";
import img_about from '../../../img/fullbody.jpg';
import Image from "../../atoms/image/Image";
import { useTheme } from "../../atoms/theme/ThemeContext";
import './about-me.scss';
import Subtitle from "../../atoms/subtitle/Subtitle";

const AboutMe = (): ReactNode => {
  const { theme } = useTheme();

  return (
    <section className={`about-me ${theme === 'light' ? 'about-me--light' : 'about-me--dark'}`} id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <Subtitle
        className="section__subtitle section__subtitle--about"
        text={"Software Engineer based out of Johannesburg."}
      />
      <div className="about-me__body">
        <p>
          Hey there! I’m Albert Mpepo — though most people call me Albieo. I'm a fullstack developer with a strong foundation in both low-level programming and modern web technologies. My journey started in 2022 at the ALX Software Engineering bootcamp, where I learned C, Python, and SQL. Since then, I've taken the self-taught path, diving deep into web development with HTML, CSS, JavaScript, TypeScript, React, Django, and more.
        </p>
        <br />
        <p>
          I specialize in building responsive, user-friendly interfaces and reusable UI components. I enjoy the challenge of bringing ideas to life across all devices and take pride in writing clean, scalable code. Currently, I'm working on <strong>CodeQuest</strong>, a small but growing dev initiative — where we’re creating a solid portfolio and pushing each other to learn and build better (even if we're not a formal company yet).
        </p>
        <br />
        <p>
          I'm actively learning Java and Spring Boot while mastering Django Rest Framework to strengthen my backend expertise. I'm looking for opportunities in frontend or fullstack development, ideally with Python on the backend, where I can contribute to impactful projects and grow alongside experienced teams.
        </p>
      </div>

      <Image className="about-me__img" src={img_about} alt="Jane leaning against a bus" />
    </section>
  )
}
export default AboutMe
