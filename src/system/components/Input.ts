import { get } from 'styled-system';
import { colorMode } from '../../util';
import { ComponentTheme, ComponentStyle } from '../types';

const outlined = (props: any): ComponentStyle => ({
  backgroundColor: colorMode('white', 'whiteAlpha.100')(props),
  borderColor: colorMode('gray.200', 'whiteAlpha.50')(props),
  boxShadow: props.isInvalid ? 'error' : 'none',
  ':hover': {
    borderColor: colorMode('gray.300', 'whiteAlpha.200')(props),
  },
});

const filled = (props: any): ComponentStyle => ({
  backgroundColor: colorMode('gray.100', 'whiteAlpha.50')(props),
  borderColor: 'transparent',
  boxShadow: props.isInvalid ? 'error' : 'none',
  ':hover': {
    backgroundColor: colorMode('gray.200', 'whiteAlpha.100')(props),
  },
});

const underlined = (props: any): ComponentStyle => ({
  padding: 0,
  border: 'none',
  borderBottom: '2px',
  // use transparentize on border color
  borderColor: props.isInvalid ? colorMode('red.500', 'red.300') : colorMode('gray.200', 'whiteAlpha.50')(props),
  borderRadius: 'none',
  ':hover': {
    borderColor: props.isInvalid ? undefined : colorMode('gray.300', 'whiteAlpha.200')(props),
  },
  ':focus': {
    boxShadow: 'none',
    borderColor: colorMode('blue.500', 'blue.300')(props),
  },
});

const unstyled = (): ComponentStyle => ({
  padding: 0,
});

export const Input: ComponentTheme = {
  baseStyle: (props: any) => ({
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: '1px',
    borderColor: 'transparent',
    borderRadius: 'sm',
    color: colorMode('gray.800', 'white')(props),
    fontWeight: 'normal',
    lineHeight: 'tight',
    outline: 'none',
    transitionProperty: get(props.theme, 'transitions.property.common'),
    transitionDuration: get(props.theme, 'transitions.duration.300'),
    transitionTimingFunction: get(props.theme, 'transitions.timing.inOut'),
    width: 'full',
    ':focus': {
      boxShadow: 'outline',
      zIndex: 1,
    },
    ':disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  }),
  variants: {
    outlined,
    filled,
    underlined,
    unstyled,
  },
  sizes: {
    xs: {
      fontSize: 'xs',
      px: 2,
      height: 6,
    },
    sm: {
      fontSize: 'sm',
      px: 3,
      height: 8,
    },
    md: {
      fontSize: 'md',
      px: 4,
      height: 10,
    },
    lg: {
      fontSize: 'lg',
      px: 6,
      height: 12,
    },
  },
};
