import deepmerge from 'deepmerge';
import * as React from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { DeepPartial } from 'utility-types';
import { system } from './system';

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);

  if (!theme) {
    throw new Error('useTheme must be used within a Theme');
  }

  return theme;
};

export interface ThemeProps {
  /** Custom theme to merge with the default theme. */
  theme?: DeepPartial<typeof system>;
}

const Theme: React.FC<ThemeProps> = ({ children, theme = {} }) => {
  const mergedTheme = React.useMemo(() => deepmerge(system, theme as Partial<typeof system>), [theme]);

  return (
    <ThemeProvider theme={mergedTheme}>
      <>{children}</>
    </ThemeProvider>
  );
};

Theme.displayName = 'Theme';

export default Theme;
