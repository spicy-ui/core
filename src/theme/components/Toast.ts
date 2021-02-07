import { ToastPlacement, ToastProviderProps } from '../../components';
import { ComponentThemeConfig } from '../types';

const getPlacement = (placement?: ToastPlacement) => {
  switch (placement) {
    case 'top-left':
      return { top: 0, left: 0 };
    case 'top-right':
      return { top: 0, right: 0 };
    case 'bottom-left':
      return { bottom: 0, left: 0 };
    case 'bottom-right':
      return { bottom: 0, right: 0 };
    default:
      return {};
  }
};

const getChildPlacement = (placement?: ToastPlacement) => {
  switch (placement) {
    case 'top-left':
    case 'top-right':
      return { mb: 4 };
    case 'bottom-left':
    case 'bottom-right':
      return { mt: 4 };
    default:
      return {};
  }
};

export const ToastContainer: ComponentThemeConfig<ToastProviderProps> = {
  baseStyle: ({ placement }) => ({
    m: 4,
    maxWidth: 80,
    minWidth: 80,
    position: 'fixed',
    ...getPlacement(placement),
    zIndex: 'toast',

    '& > *': {
      ...getChildPlacement(placement),
    },
  }),
};
