import deepmerge from 'deepmerge';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Baseline } from './Baseline';
import { system } from './system';

export type ThemeProps = {
  theme?: Partial<typeof system>;
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
