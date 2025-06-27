import Link from "../../atoms/link/Link";
import { useTheme } from '../../atoms/theme/ThemeContext';
import './nav-item.scss'

interface NavItemProps {
    href: string;
    children: string;
}

export const NavItem = ({ href, children }: NavItemProps) => {
    const { theme } = useTheme();

    return (
        <li className="nav__item">
            <Link
                href={href}
                className={`nav__link ${theme === 'light' ? 'nav__link--light' : 'nav__link--dark'}`}
                title={children}
            >
                {children}
            </Link>
        </li>
    )
}
