import { ComponentTheme } from '../types';

export const Text: ComponentTheme = {
  baseStyle: {
    fontFamily: 'body',
    lineHeight: 'normal',
  },
  variants: {
    lead: {
      fontSize: 'lg',
      fontWeight: 'medium',
    },
    body1: {
      fontSize: 'md',
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 'sm',
      fontWeight: 'normal',
    },
  },
};
