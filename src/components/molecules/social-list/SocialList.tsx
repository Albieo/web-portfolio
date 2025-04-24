import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from '../../atoms/social-icon/SocialIcon'
import './social-list.scss'

const SocialList = () => (
  <ul className="social-list">
    <li className="social-list__item">
      <SocialIcon icon={faGithub} href="https://github.com/albieo" title="GitHub" />
    </li>
    <li className="social-list__item">
      <SocialIcon icon={faLinkedin} href="https://linkedin.com/in/albieo/" title="LinkedIn" />
    </li>
    <li className="social-list__item">
      <SocialIcon icon={faTwitter} href="https://x.com/AlbertMpepo/" title="Twitter" />
    </li>
    <li className="social-list__item">
      <SocialIcon icon={faInstagram} href="#" title="Instagram" />
    </li>
  </ul>
)

export default SocialList