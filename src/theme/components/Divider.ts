import { ComponentTheme } from '../types';

export const Divider: ComponentTheme = {
  baseStyle: () => ({
    border: 0,
    borderColor: 'inherit',
    color: 'gray.300',
    opacity: 0.6,
  }),
  variants: {
    horizontal: () => ({
      my: 2,
      width: 'auto',
      borderBottom: '1px solid',
    }),
    vertical: () => ({
      mx: 2,
      height: 'auto',
      borderLeft: '1px solid',
    }),
  },
};
