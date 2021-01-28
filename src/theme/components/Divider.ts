import { ComponentThemeConfig } from '../types';

export const Divider: ComponentThemeConfig = {
  propToScaleMap: [['orientation', 'orientations']],
  baseStyle: () => ({
    border: 0,
    borderColor: 'inherit',
    color: 'gray.300',
    opacity: 0.6,
  }),
  orientations: {
    horizontal: () => ({
      my: 3,
      width: 'auto',
      borderBottom: '1px solid',
    }),
    vertical: () => ({
      mx: 3,
      height: 'auto',
      borderLeft: '1px solid',
    }),
  },
};
