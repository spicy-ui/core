import { ComponentTheme } from '../types';

export const Avatar: ComponentTheme = {
  baseStyle: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    fontWeight: 'medium',
    overflow: 'hidden',
    userSelect: 'none',
  }),
  sizes: {
    xs: () => ({
      width: 6,
      height: 6,
      fontSize: 'xs',
    }),
    sm: () => ({
      width: 8,
      height: 8,
      fontSize: 'sm',
    }),
    md: () => ({
      width: 10,
      height: 10,
      fontSize: 'md',
    }),
    lg: () => ({
      width: 12,
      height: 12,
      fontSize: 'lg',
    }),
    xl: () => ({
      width: 16,
      height: 16,
      fontSize: 'xl',
    }),
    '2xl': () => ({
      width: 24,
      height: 24,
      fontSize: '2xl',
    }),
    '3xl': () => ({
      width: 32,
      height: 32,
      fontSize: '3xl',
    }),
  },
};
