import { ReactNode } from 'react';
import img_about from '../../../img/fullbody.jpg';
import Image from '../../atoms/image/Image';
import { useTheme } from '../../atoms/theme/ThemeContext';
import './about-me.scss';
import Subtitle from '../../atoms/subtitle/Subtitle';

const AboutMe = (): ReactNode => {
  const { theme } = useTheme();

  return (
    <section
      className={`about-me ${theme === 'light' ? 'about-me--light' : 'about-me--dark'}`}
      id="about"
    >
      <h2 className="section__title section__title--about">Who I am</h2>
      <Subtitle
        className="section__subtitle section__subtitle--about"
        text={'Software Engineer based out of Johannesburg.'}
      />
      <div className="about-me__body">
        <p>
          Hi, I’m Albert Mpepo (Albieo), a full-stack developer with a strong foundation in both
          low-level programming and modern web technologies. I began my journey in 2022 through the
          ALX Software Engineering program, where I built core skills in C, Python, and SQL. Since
          then, I’ve continued developing independently, focusing on building real-world web
          applications using React, TypeScript, Django, and related technologies.
        </p>

        <br />

        <p>
          I specialize in creating responsive, user-focused interfaces while also working across the
          stack to design and integrate APIs, backend services, and content management systems like
          Sanity.io. I enjoy turning ideas into scalable, maintainable applications and writing
          clean, efficient code that performs well across devices.
        </p>

        <br />

        <p>
          Currently, I’m contributing to <strong>CodeQuest</strong>, a collaborative development
          initiative where we build projects, refine our skills, and focus on delivering practical,
          production-ready applications. I’m also expanding my backend expertise with Java and
          Spring Boot, alongside Django REST Framework.
        </p>

        <br />

        <p>
          I’m seeking opportunities in frontend or full-stack development where I can contribute to
          meaningful projects, continue growing as an engineer, and work alongside experienced
          teams.
        </p>
      </div>

      <Image className="about-me__img" src={img_about} alt="Jane leaning against a bus" />
    </section>
  );
};
export default AboutMe;
