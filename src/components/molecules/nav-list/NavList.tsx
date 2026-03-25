import { NavItem } from "../nav-item/NavItem";
import { ThemeButton } from '../../atoms/button/ThemeButton';
import './nav-list.scss'

interface NavItem {
  href: string;
  text: string;
}

const navItems: ReadonlyArray<NavItem> = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#services", text: "My Services" },
  { href: "/Albert_Mpepo_Resume.pdf", text: "Download Resume" }
];

export const NavList = () => (
  <ul className="nav__list">
    {navItems.map((item) => (
      <NavItem key={item.href} href={item.href}>
        {item.text}
      </NavItem>
    ))}
    <li>
      <ThemeButton />
    </li>
  </ul>
);
