import { ComponentTheme } from '../types';

export const Overlay: ComponentTheme = {
  baseStyle: () => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 'overlay',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'blackAlpha.400',
      visibility: 'hidden',
      opacity: 0,
    },
  }),
};
