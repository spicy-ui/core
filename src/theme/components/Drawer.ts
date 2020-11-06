import { ComponentTheme } from '../types';

const getTransform = (anchor: string) => {
  switch (anchor) {
    case 'top':
      return 'translate(0, -25%)';
    case 'right':
      return 'translate(25%, 0)';
    case 'bottom':
      return 'translate(0, 25%)';
    default:
      return 'translate(-25%, 0)';
  }
};

export const Drawer: ComponentTheme = {
  baseStyle: ({ anchor, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: ['top', 'bottom'].includes(anchor) ? '100vw' : '100%',
    height: ['left', 'right'].includes(anchor) ? '100vh' : '100%',
    maxWidth: ['top', 'bottom'].includes(anchor) ? '100vw' : `calc(100vw - ${theme.space['12']})`,
    maxHeight: ['left', 'right'].includes(anchor) ? '100vh' : `calc(100vh - ${theme.space['12']})`,
    backgroundColor: 'white',
    boxShadow: 'lg',
    opacity: 0,
    overflow: 'auto',
    transform: getTransform(anchor),
  }),
  sizes: {
    xs: (props) => ({
      width: ['top', 'bottom'].includes(props.anchor) ? '100vw' : 'xs',
    }),
    sm: (props) => ({
      width: ['top', 'bottom'].includes(props.anchor) ? '100vw' : 'sm',
    }),
    md: (props) => ({
      width: ['top', 'bottom'].includes(props.anchor) ? '100vw' : 'md',
    }),
    lg: (props) => ({
      width: ['top', 'bottom'].includes(props.anchor) ? '100vw' : 'lg',
    }),
  },
};
