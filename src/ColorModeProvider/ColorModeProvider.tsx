import * as React from 'react';
import useDarkMode from 'use-dark-mode';
import { useTheme } from '../ThemeProvider';

export type ColorMode = 'light' | 'dark';

export interface ColorModeContextProps {
  value: boolean;
  toggle: () => void;
}

const ColorModeContext = React.createContext<ColorModeContextProps>({
  value: false,
  toggle: () => console.warn(`You've toggled the color mode, but the component is not within a ColorModeProvider.`),
});

export interface ColorModeProviderProps {
  initial?: ColorMode;
}

const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children, initial }) => {
  const { config } = useTheme();
  const { value, toggle } = useDarkMode(initial ? initial === 'dark' : config?.initialColorMode === 'dark');

  return <ColorModeContext.Provider value={{ value, toggle }}>{children}</ColorModeContext.Provider>;
};

ColorModeProvider.displayName = 'ColorModeProvider';

export { ColorModeProvider };

export const useColorMode = () => {
  const { value, toggle } = React.useContext(ColorModeContext);

  return {
    colorMode: value ? 'dark' : 'light',
    isLight: !value,
    isDark: !!value,
    toggle,
  };
};
