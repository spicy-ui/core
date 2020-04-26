import deepmerge from 'deepmerge';
import * as React from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { system } from './system';
import { ThemeProps } from './types';

const Theme: React.FC<ThemeProps> = ({ children, theme = {} }) => {
  const mergedTheme = React.useMemo(() => deepmerge(system, theme as Partial<typeof system>), [theme]);

  return (
    <ThemeProvider theme={mergedTheme}>
      <>{children}</>
    </ThemeProvider>
  );
};

Theme.displayName = 'Theme';

export { Theme };

export const useTheme = () => React.useContext(ThemeContext);
