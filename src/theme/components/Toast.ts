import { ComponentTheme } from '../types';

const ToastContainer: ComponentTheme = {
  baseStyle: () => ({
    m: 4,
    minWidth: '18rem',
    maxWidth: '24rem',
    width: 'full',
    position: 'fixed',
    zIndex: 'toast',
  }),
};

const ToastItem: ComponentTheme = {
  baseStyle: () => ({
    mb: 4,
    width: 'full',
    position: 'relative',
    boxShadow: 'xl',
    bg: 'white',
    opacity: 0,
  }),
};

export const ToastComponents = {
  ToastContainer,
  ToastItem,
};
