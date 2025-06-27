import { useTheme } from '../theme/ThemeContext';
import './button.scss'

export const ThemeButton = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            type='button'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`button ${theme === 'light' ? 'button--light' : 'button--dark'}`}
        >
            Theme: {theme}
        </button>
    )
}
