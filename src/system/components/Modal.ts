import { colorMode } from '../../util';
import { ComponentTheme } from '../types';

export const Modal: ComponentTheme = {
  baseStyle: (props: any) => ({
    mx: 6,
    my: 8,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxHeight: `calc(100vh - ${props.theme.space['16']})`,
    maxWidth: `calc(100vw - ${props.theme.space['12']})`,
    backgroundColor: colorMode('white', 'gray.800')(props),
    borderRadius: 'sm',
    boxShadow: 'lg',
    opacity: 0,
    overflow: 'auto',
    transform: 'translate(0, -25%)',
  }),
  sizes: {
    full: (props: any) => ({
      width: `calc(100vw - ${props.theme.space['12']})`,
    }),
    '3xs': {
      width: '3xs',
    },
    '2xs': {
      width: '2xs',
    },
    xs: {
      width: 'xs',
    },
    sm: {
      width: 'sm',
    },
    md: {
      width: 'md',
    },
    lg: {
      width: 'lg',
    },
    xl: {
      width: 'xl',
    },
    '2xl': {
      width: '2xl',
    },
    '3xl': {
      width: '3xl',
    },
    '4xl': {
      width: '4xl',
    },
    '5xl': {
      width: '5xl',
    },
    '6xl': {
      width: '6xl',
    },
  },
};
