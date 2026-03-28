import { ReactNode } from 'react';
import Link from '../../atoms/link/Link';
import './cta.scss';
import { useTheme } from '../../atoms/theme/ThemeContext';

export default function CTA(): ReactNode {
  const { theme } = useTheme();

  return (
    <section className={`cta ${theme === 'dark' ? 'cta--dark' : ''}`}>
      <h2 className="section__title">Ready to work together?</h2>
      <p className={`${theme === 'dark' ? 'section__subtitle--dark' : 'section__subtitle'}`}>
        I’m currently available for freelance work and open to new opportunities. If you have a
        project that needs a creative spark, I’d love to hear about it.
      </p>
      <Link href="/contact" className="btn">
        Get In Touch
      </Link>
    </section>
  );
}
