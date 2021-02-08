import { OverlayProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Overlay: ComponentThemeConfig<OverlayProps> = {
  baseStyle: () => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 'overlay',
    _before: {
      content: `""`,
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'blackAlpha.400',
    },
  }),
};
