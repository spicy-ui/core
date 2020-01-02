import deepmerge from 'deepmerge';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { system } from './system';

export type ThemeProps = {
  theme?: Partial<typeof system>;
};

const Theme: React.FC<ThemeProps> = ({ children, theme = {} }) => (
  <ThemeProvider theme={deepmerge(theme, system)}>
    <>{children}</>
  </ThemeProvider>
);

Theme.displayName = 'Theme';

export default Theme;
