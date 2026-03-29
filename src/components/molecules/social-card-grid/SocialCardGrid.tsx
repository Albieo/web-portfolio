import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialCard from '../social-card/SocialCard';
import './social-card-grid.scss';

const SOCIALS = [
  {
    icon: faEnvelope,
    href: 'mailto:albertmpepo@gmail.com',
    title: 'Email',
    description: 'Send me an email for inquiries, collaborations, or just to say hi.',
    buttonText: 'Send Email',
  },
  {
    icon: faGithub,
    href: 'https://github.com/albieo',
    title: 'GitHub',
    description: 'Check out my latest projects and open-source contributions.',
    buttonText: 'Visit Profile',
  },
  {
    icon: faLinkedin,
    href: 'https://linkedin.com/in/albieo/',
    title: 'LinkedIn',
    description: 'Connect with me professionally and see my career history.',
    buttonText: 'Let\'s Connect',
  },
  {
    icon: faTwitter,
    href: 'https://x.com/AlbertMpepo/',
    title: 'Twitter',
    description: 'Follow me for tech updates, personal projects and insights.',
    buttonText: 'Follow Me',
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/albieo_/',
    title: 'Instagram',
    description: 'See my photography and life beyond the code.',
    buttonText: 'See Photos',
  },
];

const SocialCardGrid = () => (
  <div className="social-card-grid">
    {SOCIALS.map((social) => (
      <SocialCard key={social.title} {...social} />
    ))}
  </div>
);

export default SocialCardGrid;
