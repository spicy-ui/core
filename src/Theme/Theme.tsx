import deepmerge from 'deepmerge';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const defaultTheme = {};

export type ThemeProps = {
  theme?: Partial<typeof defaultTheme>;
};

const Theme: React.FC<ThemeProps> = ({ children, theme = {} }) => (
  <ThemeProvider theme={deepmerge(theme, defaultTheme)}>
    <>{children}</>
  </ThemeProvider>
);

Theme.displayName = 'Theme';

export default Theme;
