import deepmerge from 'deepmerge';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Baseline } from './Baseline';
import { system } from './system';

export type ThemeProps = {
  // TODO: fix types as Partial<typeof system> doesn't allow for parial inner keys
  theme?: any;
};

const Theme: React.FC<ThemeProps> = ({ children, theme = {} }) => {
  if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    window.theme = deepmerge(system, theme);
  }

  return (
    <ThemeProvider theme={deepmerge(system, theme)}>
      <Baseline />
      <>{children}</>
    </ThemeProvider>
  );
};

Theme.displayName = 'Theme';

export default Theme;
