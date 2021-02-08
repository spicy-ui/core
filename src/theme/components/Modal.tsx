import {
  ModalBodyProps,
  ModalCloseButtonProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from '../../components';
import { ComponentThemeConfig } from '../types';

export const Modal: ComponentThemeConfig<ModalProps> = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: ({ theme }) => ({
    mx: 6,
    my: 8,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxHeight: `calc(100vh - ${theme.space[16]})`,
    maxWidth: `calc(100vw - ${theme.space[12]})`,
    backgroundColor: 'white',
    borderRadius: 'sm',
    boxShadow: 'lg',
    overflow: 'auto',
    transform: 'translate(0, 0)',
  }),
  scales: {
    sizes: {
      full: ({ theme }) => ({
        width: `calc(100vw - ${theme.space[12]})`,
      }),
      '3xs': () => ({
        width: '3xs',
      }),
      '2xs': () => ({
        width: '2xs',
      }),
      xs: () => ({
        width: 'xs',
      }),
      sm: () => ({
        width: 'sm',
      }),
      md: () => ({
        width: 'md',
      }),
      lg: () => ({
        width: 'lg',
      }),
      xl: () => ({
        width: 'xl',
      }),
      '2xl': () => ({
        width: '2xl',
      }),
      '3xl': () => ({
        width: '3xl',
      }),
      '4xl': () => ({
        width: '4xl',
      }),
      '5xl': () => ({
        width: '5xl',
      }),
      '6xl': () => ({
        width: '6xl',
      }),
    },
  },
};

export const ModalCloseButton: ComponentThemeConfig<ModalCloseButtonProps> = {
  baseStyle: () => ({
    position: 'absolute',
    top: 2,
    right: 2,
  }),
};

export const ModalHeader: ComponentThemeConfig<ModalHeaderProps> = {
  baseStyle: () => ({
    py: 4,
    px: 4,
    fontSize: 'lg',
    fontWeight: 'medium',
  }),
};

export const ModalBody: ComponentThemeConfig<ModalBodyProps> = {
  baseStyle: () => ({
    py: 2,
    px: 4,
  }),
};

export const ModalFooter: ComponentThemeConfig<ModalFooterProps> = {
  baseStyle: () => ({
    py: 4,
    px: 4,
    display: 'flex',
    alignItems: 'center',
  }),
};
