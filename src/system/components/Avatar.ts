import { ComponentTheme } from '../types';

export const Avatar: ComponentTheme = {
  baseStyle: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    fontWeight: 'medium',
    overflow: 'hidden',
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
  },
};
