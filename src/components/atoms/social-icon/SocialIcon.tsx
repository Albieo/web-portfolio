import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Link from '../link/Link';
import './social-icon.scss';

const SocialIcon = ({ icon, href, title }: {
  icon: IconDefinition;
  href: string;
  title: string;
}) => (
  <Link href={href} className="social-list__link" title={title}>
    <FontAwesomeIcon icon={icon} />
  </Link>
);

export default SocialIcon
