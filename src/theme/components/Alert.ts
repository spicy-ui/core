import { ComponentTheme } from '../types';

export const Alert: ComponentTheme = {
  baseStyle: () => ({}),
  sizes: {
    sm: () => ({
      p: 2,
      fontSize: 'sm',
    }),
    md: () => ({
      p: 4,
      fontSize: 'md',
    }),
    lg: () => ({
      p: 6,
      fontSize: 'lg',
    }),
  },
  variants: {
    info: () => ({
      bg: 'gray.600',
      color: 'white',
    }),
    success: () => ({
      bg: 'green.500',
      color: 'white',
    }),
    warning: () => ({
      bg: 'orange.400',
      color: 'white',
    }),
    error: () => ({
      bg: 'red.500',
      color: 'white',
    }),
  },
};
