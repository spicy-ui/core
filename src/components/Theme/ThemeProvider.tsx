import deepmerge from 'deepmerge';
import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '../../theme';
import { injectGlobalStyles } from './injectGlobalStyles';

const { GlobalStyle } = injectGlobalStyles();

export interface ThemeProps {
  /* If you want to extend the global styles set to `true` and inject them manually via `injectGlobalStyles`. */
  disableInjection?: boolean;
  /** Custom theme to be merged with the default theme. */
  theme?: any;
}

export const ThemeProvider: React.FC<ThemeProps> = ({ children, disableInjection, theme = {} }) => {
  const mergedTheme = React.useMemo(() => deepmerge(defaultTheme, theme), [theme]);

  return (
    <StyledThemeProvider theme={mergedTheme}>
      {!disableInjection && <GlobalStyle />}
      <>{children}</>
    </StyledThemeProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
