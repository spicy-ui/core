import * as React from 'react';
import useDarkMode from 'use-dark-mode';

const ColorModeContext = React.createContext<{
  mode: 'light' | 'dark';
  isLight: boolean;
  isDark: boolean;
  toggle: () => void;
}>({
  mode: 'light',
  isLight: true,
  isDark: false,
  toggle: () => {
    console.warn(`[ColorMode] You've toggled the color mode, but the component is not within a ColorModeProvider.`);
  },
});

export const useColorMode = () => {
  const context = React.useContext(ColorModeContext);

  return context;
};

const ColorModeProvider: React.FC = ({ children }) => {
  const { value, toggle } = useDarkMode(false);

  return (
    <ColorModeContext.Provider
      value={{
        mode: value ? 'dark' : 'light',
        isLight: !value,
        isDark: !!value,
        toggle,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

ColorModeProvider.displayName = 'ColorModeProvider';

export default ColorModeProvider;
