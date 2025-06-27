import { ReactNode } from "react"
import './header.scss'
import Logo from "../../atoms/logo/Logo"
import { MenuButton } from "../../molecules/menu-button/MenuButton"
import { NavList } from "../../molecules/nav-list/NavList"
import { useTheme } from "../../atoms/theme/ThemeContext";

const Header = ({ toggleNav }: { toggleNav: () => void }): ReactNode => {
    const { theme } = useTheme();

    return (
        <header className={`header ${theme === 'light' ? 'header--light' : 'header--dark'}`}>
            <Logo />
            <MenuButton onClick={toggleNav} />
            <nav className={`nav ${theme === 'light' ? 'nav--light' : 'nav--dark'}`}>
                <NavList />
            </nav>
        </header>
    )
}
export default Header

