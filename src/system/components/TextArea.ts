import { colorMode } from '../../util';
import { ComponentStyle, ComponentTheme } from '../types';
import { Input } from './Input';

const underlined = (props: any): ComponentStyle => ({
  px: 0,
  border: 'none',
  borderBottom: '2px',
  borderBottomColor: props.isInvalid
    ? colorMode('red.500', 'red.300')(props)
    : colorMode('gray.200', 'whiteAlpha.50')(props),
  borderRadius: 'none',
  ':not(:disabled):hover': {
    borderBottomColor: props.isInvalid ? undefined : colorMode('gray.300', 'whiteAlpha.200')(props),
  },
  ':not(:disabled):focus': {
    boxShadow: 'none',
    borderBottomColor: colorMode('blue.500', 'blue.300')(props),
  },
});

const unstyled = (): ComponentStyle => ({
  padding: 0,
  height: 'unset',
  minHeight: 'unset',
  borderRadius: 'none',
});

export const TextArea: ComponentTheme = {
  ...Input,
  variants: {
    ...Input.variants,
    underlined,
    unstyled,
  },
  sizes: {
    xs: () => ({
      fontSize: 'xs',
      px: 2,
      py: '3px',
      height: 6,
      minHeight: 6,
    }),
    sm: () => ({
      fontSize: 'sm',
      px: 3,
      py: '6px',
      height: 8,
      minHeight: 8,
    }),
    md: () => ({
      fontSize: 'md',
      px: 3,
      py: '9px',
      height: 10,
      minHeight: 10,
    }),
    lg: () => ({
      fontSize: 'lg',
      px: 4,
      py: 3,
      height: 12,
      minHeight: 12,
    }),
  },
};
