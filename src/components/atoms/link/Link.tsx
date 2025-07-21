import { ReactNode } from 'react';
import './link.scss';

const Link = ({ href, className, children, title }: {
  href: string;
  className?: string;
  children: ReactNode;
  title?: string;
}) => (
  <a href={href} className={className} title={title}>
    {children}
  </a>
);

export default Link;
