import * as React from 'react';
import useDarkMode from 'use-dark-mode';

const ThemeModeContext = React.createContext({
  mode: 'light',
  isLight: true,
  isDark: false,
  toggle: () => {},
});

export const useThemeMode = () => {
  const context = React.useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }

  return context;
};

const ThemeModeProvider: React.FC = ({ children }) => {
  const { value, toggle } = useDarkMode(false);

  return (
    <ThemeModeContext.Provider
      value={{
        mode: value ? 'dark' : 'light',
        isLight: !value,
        isDark: !!value,
        toggle,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

ThemeModeProvider.displayName = 'ThemeModeProvider';

export default ThemeModeProvider;
