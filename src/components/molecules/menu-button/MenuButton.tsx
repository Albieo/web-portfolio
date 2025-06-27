import { HamburgerIcon } from "../../atoms/hamburger-icon/HamburgerIcon";

interface MenuButtonProps {
    onClick: () => void;
}

export const MenuButton = ({ onClick }: MenuButtonProps) => (
    <button
        type="button"
        className="nav-toggle"
        aria-label='toggle navigation'
        onClick={onClick}
    >
        <HamburgerIcon />
    </button>
)
