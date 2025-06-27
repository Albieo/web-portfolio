import { createContext, useContext } from 'react';

export type ThemeContextType = {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => useContext(ThemeContext);
