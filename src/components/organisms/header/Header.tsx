import { ReactNode } from "react"
import logo from '../../../img/devjane.png'
import './header.scss'

const Header = ({ toggleNav }: { toggleNav: () => void }): ReactNode => (
  <header>
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <button className="nav-toggle" aria-label='toggle navigation' onClick={toggleNav}>
      <span className="hamburger"></span>
    </button>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link">Home</a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">About</a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">Projects</a>
        </li>
        <li className="nav__item">
          <a href="#services" className="nav__link">My Services</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header

