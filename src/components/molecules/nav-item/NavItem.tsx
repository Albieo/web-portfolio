import Link from "../../atoms/link/Link";


interface NavItemProps {
  href: string;
  children: string;
}

export const NavItem = ({ href, children }: NavItemProps) => (
  <li className="nav__item">
    <Link
      href={href}
      className="nav__link"
      title={children}
    >
      {children}
    </Link>
  </li>
)
