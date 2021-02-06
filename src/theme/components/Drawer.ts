/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { DrawerProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Drawer: ComponentThemeConfig<DrawerProps> = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: ({ anchor, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: ['top', 'bottom'].includes(anchor!) ? '100vw' : '100%',
    height: ['left', 'right'].includes(anchor!) ? '100vh' : '100%',
    maxWidth: ['top', 'bottom'].includes(anchor!) ? '100vw' : `calc(100vw - ${theme.space[12]})`,
    maxHeight: ['left', 'right'].includes(anchor!) ? '100vh' : `calc(100vh - ${theme.space[12]})`,
    backgroundColor: 'white',
    boxShadow: 'lg',
    overflow: 'auto',
    transform: `translate(0, 0)`,
  }),
  scales: {
    sizes: {
      xs: ({ anchor }) => ({
        width: ['top', 'bottom'].includes(anchor!) ? '100vw' : 'xs',
      }),
      sm: ({ anchor }) => ({
        width: ['top', 'bottom'].includes(anchor!) ? '100vw' : 'sm',
      }),
      md: ({ anchor }) => ({
        width: ['top', 'bottom'].includes(anchor!) ? '100vw' : 'md',
      }),
      lg: ({ anchor }) => ({
        width: ['top', 'bottom'].includes(anchor!) ? '100vw' : 'lg',
      }),
    },
  },
};
