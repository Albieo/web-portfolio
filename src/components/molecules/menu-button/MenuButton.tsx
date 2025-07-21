import { HamburgerIcon } from "../../atoms/hamburger-icon/HamburgerIcon";

import './menu-button.scss'

interface MenuButtonProps {
  onClick: () => void;
}

export const MenuButton = ({ onClick }: MenuButtonProps) => (
  <div
    className="nav--toggle"
    onClick={onClick}
  >
    <HamburgerIcon />
  </div>
)
