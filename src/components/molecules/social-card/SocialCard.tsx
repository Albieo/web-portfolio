import { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../../atoms/link/Link';
import './social-card.scss';

interface SocialCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

const SocialCard = ({
  icon,
  title,
  description,
  href,
  buttonText,
}: SocialCardProps): ReactNode => (
  <div className="social-card">
    <div className="social-card__icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="social-card__content">
      <h3 className="social-card__title">{title}</h3>
      <p className="social-card__description">{description}</p>
      <Link href={href} className="btn" title={title}>
        {buttonText}
      </Link>
    </div>
  </div>
);

export default SocialCard;
