import { ReactNode } from 'react';
import Link from '../../atoms/link/Link';
import './cta.scss';
import { useTheme } from '../../atoms/theme/ThemeContext';

export default function CTA(): ReactNode {
  const { theme } = useTheme();
  
  return (
    <section className={`cta ${theme === 'dark' ? 'cta--dark' : ''}`}>
      <h2 className="section__title">Ready to work together?</h2>
      <Link href="/contact" className="btn">
        Get In Touch
      </Link>
    </section>
  );
}
