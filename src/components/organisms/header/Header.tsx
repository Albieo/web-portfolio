import { ReactNode } from "react"
import './header.scss'
import Logo from "../../atoms/logo/Logo"
import { MenuButton } from "../../molecules/menu-button/MenuButton"
import { NavList } from "../../molecules/nav-list/NavList"

const Header = ({ toggleNav }: { toggleNav: () => void }): ReactNode => (
  <header>
    <Logo />
    <MenuButton onClick={toggleNav} />
    <nav className="nav">
      <NavList />
    </nav>
  </header>
)

export default Header

