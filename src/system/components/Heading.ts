import { ComponentTheme } from '../types';

export const Heading: ComponentTheme = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    lineHeight: 'tightest',
  },
  variants: {
    h1: {
      fontSize: '6xl',
    },
    h2: {
      fontSize: '5xl',
    },
    h3: {
      fontSize: '4xl',
    },
    h4: {
      fontSize: '3xl',
    },
    h5: {
      fontSize: '2xl',
    },
    h6: {
      fontSize: 'xl',
    },
  },
};
