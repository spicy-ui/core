import * as React from 'react';
import ReactJson from 'react-json-view';
import { useTheme } from 'styled-components';
import { ThemeProvider } from '..';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
};

export const DefaultTheme = () => {
  const theme = useTheme();

  return <ReactJson name="theme" src={theme} collapsed={1} sortKeys />;
};
