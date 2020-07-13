import deepmerge from 'deepmerge';
import * as React from 'react';
import { ThemeContext, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ExtendableSystem, system } from '../system';

export interface ThemeProviderProps {
  /** Theme extensions to add to the theme. */
  theme?: ExtendableSystem;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme = {} }) => {
  const mergedTheme = React.useMemo(() => deepmerge(system, theme), [theme]);

  return (
    <StyledThemeProvider theme={mergedTheme as any}>
      <>{children}</>
    </StyledThemeProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };

export const useTheme = () => React.useContext(ThemeContext);
