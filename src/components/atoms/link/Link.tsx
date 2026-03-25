import { ReactNode } from 'react';
import './link.scss';

const Link = ({ href, className, children, title, download }: {
  href: string;
  className?: string;
  children: ReactNode;
  title?: string;
  download?: boolean;
}) => (
  <a href={href} className={className} title={title} download={download}>
    {children}
  </a>
);

export default Link;
