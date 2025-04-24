import { ReactNode } from "react"
import EmailLink from "../../molecules/email-link/EmailLink"
import SocialList from "../../molecules/social-list/SocialList"
import './footer.scss'

const Footer = (): ReactNode => (
  <footer className='footer'>
    <EmailLink />
    <SocialList />
  </footer>
)

export default Footer
