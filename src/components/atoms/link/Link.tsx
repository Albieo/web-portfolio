import { ReactNode, CSSProperties } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './link.scss';

const Link = ({
  href,
  className,
  children,
  title,
  download,
  style,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  title?: string;
  download?: boolean;
  style?: CSSProperties;
}) => {
  const isExternal =
    href.startsWith('http') || href.startsWith('mailto') || download || href.startsWith('tel:');

  if (isExternal) {
    return (
      <a href={href} className={className} title={title} download={download} style={style}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} className={className} title={title} style={style}>
      {children}
    </RouterLink>
  );
};

export default Link;
