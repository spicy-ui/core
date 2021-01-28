import deepmerge from 'deepmerge';
import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '../../theme';

export interface ThemeProps {
  /** Custom theme to be merged with the default theme. */
  theme?: any;
}

export const ThemeProvider: React.FC<ThemeProps> = ({ children, theme = {} }) => {
  const mergedTheme = React.useMemo(() => deepmerge(defaultTheme, theme), [theme]);

  return (
    <StyledThemeProvider theme={mergedTheme}>
      <>{children}</>
    </StyledThemeProvider>
  );
};

ThemeProvider.defaultProps = {};

ThemeProvider.displayName = 'ThemeProvider';
