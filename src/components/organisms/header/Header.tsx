import { ReactNode } from "react"
import './header.scss'
import Logo from "../../atoms/logo/Logo"
import { MenuButton } from "../../molecules/menu-button/MenuButton"
import { NavList } from "../../molecules/nav-list/NavList"
import { useTheme } from "../../atoms/theme/ThemeContext";

interface HeaderProps {
  toggleNav: () => void;
  navOpen: boolean;
}

const Header = ({ toggleNav, navOpen }: HeaderProps): ReactNode => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme === 'light' ? 'header--light' : 'header--dark'}`}>
      <Logo />
      <nav className={`nav ${theme === 'light' ? 'nav--light' : 'nav--dark'} ${navOpen ? 'nav--open' : ''}`}>
        <NavList />
      </nav>
      <MenuButton onClick={toggleNav} />
    </header>
  )
}
export default Header

