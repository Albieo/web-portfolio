import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../theme/ThemeContext';
import './button.scss';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`button ${theme === 'light' ? 'button--light' : 'button--dark'}`}
      aria-label="Toggle Theme"
    >
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
    </button>
  );
};
