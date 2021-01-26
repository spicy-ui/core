import { transparentize } from 'polished';
import { ComponentThemeConfig, ComponentThemeScale } from '../types';

const ghost: ComponentThemeScale = ({ color }) => {
  switch (color) {
    case 'blueGray':
    case 'coolGray':
    case 'gray':
    case 'trueGray':
    case 'warmGray':
      return {
        color: `${color}.800`,
        _hover: { backgroundColor: ({ colors }) => transparentize(0.5, colors[color][200]) },
        _active: { backgroundColor: ({ colors }) => transparentize(0.5, colors[color][300]) },
      };
    case 'blackAlpha':
    case 'whiteAlpha':
      return {
        color: `${color}.800`,
        _hover: { backgroundColor: `${color}.200` },
        _active: { backgroundColor: `${color}.300` },
      };
    default:
      return {
        color: `${color}.500`,
        _hover: { backgroundColor: ({ colors }) => transparentize(0.5, colors[color][100]) },
        _active: { backgroundColor: ({ colors }) => transparentize(0.5, colors[color][200]) },
      };
  }
};

function isGray(color: string) {
  return ['blueGray', 'coolGray', 'gray', 'trueGray', 'warmGray'].includes(color);
}

const outlined: ComponentThemeScale = (props) => ({
  border: '2px',
  borderColor: isGray(props.color) ? `${props.color}.200` : 'currentcolor',
  ...ghost(props),
});

const filled: ComponentThemeScale = ({ color }) => {
  switch (color) {
    case 'blueGray':
    case 'coolGray':
    case 'gray':
    case 'trueGray':
    case 'warmGray':
      return {
        backgroundColor: `${color}.100`,
        color: 'gray.800',
        _hover: { backgroundColor: `${color}.200` },
        _active: { backgroundColor: `${color}.300` },
      };
    case 'blackAlpha':
    case 'whiteAlpha':
      return {
        backgroundColor: `${color}.200`,
        color: 'white',
        _hover: { backgroundColor: `${color}.300` },
        _active: { backgroundColor: `${color}.400` },
      };
    default:
      return {
        backgroundColor: `${color}.500`,
        color: `white`,
        _hover: { backgroundColor: `${color}.600` },
        _active: { backgroundColor: `${color}.700` },
      };
  }
};

const link: ComponentThemeScale = ({ color }) => ({
  p: 0,
  height: 'auto',
  lineHeight: 'normal',
  color: `${color}.500`,
  _hover: { textDecoration: 'underline' },
  _disabled: { textDecoration: 'none' },
  _active: { color: `${color}.700` },
});

const unstyled: ComponentThemeScale = {
  m: 0,
  p: 0,
  display: 'inline',
  height: 'auto',
  lineHeight: 'inherit',
  backgroundColor: 'none',
  color: 'inherit',
};

export const Button: ComponentThemeConfig = {
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  baseStyle: ({ isFullWidth }) => ({
    width: isFullWidth ? '100%' : 'auto',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    appearance: 'none',
    background: 'none',
    border: 'none',
    borderRadius: 'md',
    color: 'inherit',
    fontWeight: 'semibold',
    lineHeight: '1.2',
    outline: 'none',
    transitionProperty: ({ transitions }) => transitions.property.common,
    transitionTimingFunction: ({ transitions }) => transitions.timingFn.inOut,
    transitionDuration: ({ transitions }) => transitions.duration[300],
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    _focus: {
      boxShadow: 'outline',
      zIndex: 1,
    },
    _disabled: {
      boxShadow: 'none',
      cursor: 'not-allowed',
      opacity: 0.4,
    },
  }),
  sizes: {
    xs: () => ({
      px: 2,
      height: 6,
      minWidth: 6,
      fontSize: 'xs',
    }),
    sm: () => ({
      px: 3,
      height: 8,
      minWidth: 8,
      fontSize: 'sm',
    }),
    md: () => ({
      px: 4,
      height: 10,
      minWidth: 10,
      fontSize: 'md',
    }),
    lg: () => ({
      px: 6,
      height: 12,
      minWidth: 12,
      fontSize: 'lg',
    }),
  },
  variants: {
    filled,
    outlined,
    ghost,
    link,
    unstyled,
  },
};

export const ButtonSpinner: ComponentThemeConfig = {
  baseStyle: ({ hasText, spacing }) => ({
    display: 'flex',
    alignItems: 'center',
    position: hasText ? 'relative' : 'absolute',
    marginInlineEnd: hasText ? spacing : 0,
  }),
};
