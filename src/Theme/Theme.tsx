import deepmerge from 'deepmerge';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DeepPartial } from 'utility-types';
import { Baseline } from './Baseline';
import { system } from './system';

export interface ThemeProps {
  theme?: DeepPartial<typeof system>;
}

const Theme: React.FC<ThemeProps> = ({ children, theme = {} }) => {
  const mergedTheme = React.useMemo(() => deepmerge(system, theme as Partial<typeof system>), [theme]);

  if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    window.theme = mergedTheme;
  }

  return (
    <ThemeProvider theme={mergedTheme}>
      <Baseline />
      <>{children}</>
    </ThemeProvider>
  );
};

Theme.displayName = 'Theme';

export default Theme;
