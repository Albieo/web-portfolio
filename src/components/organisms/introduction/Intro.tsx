import { ReactNode } from 'react';
import Image from '../../atoms/image/Image';
import SplashCursor from '../../atoms/splash-cursor/SplashCursor';
import IntroContent from '../../molecules/intro-content/IntroContent';
import img_intro from '../../../img/PortImage.jpg';
import { useTheme } from '../../atoms/theme/ThemeContext';
import './intro.scss';

const Intro = (): ReactNode => {
  const { theme } = useTheme();

  return (
    <section className={`intro ${theme === 'light' ? 'intro--light' : 'intro--dark'}`} id="home">
      <IntroContent
        name={'Albert 👋'}
        subtitle="Building scalable, user-focused web applications with React and modern backend technologies."
      />
      <Image className="intro__img" src={img_intro} alt="a picture of Albert Mpepo" />
      <SplashCursor />
    </section>
  );
};
export default Intro;
