import { NavItem } from "../nav-item/NavItem";


const navItems = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#services", text: "My Services" }
];

export const NavList = () => (
  <ul className="nav__list">
    {navItems.map((item) => (
      <NavItem key={item.href} href={item.href}>
        {item.text}
      </NavItem>
    ))}
  </ul>
);