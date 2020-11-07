import { ComponentTheme } from '../types';
import { Input } from './Input';

export const TextArea: ComponentTheme = {
  ...Input,
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
      px: 2,
      py: '6px',
      height: 8,
      minHeight: 8,
    }),
    md: () => ({
      fontSize: 'md',
      px: 2,
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
  variants: {
    ...Input.variants,
    underlined: ({ isInvalid }) => ({
      px: 0,
      border: 'none',
      borderBottom: '2px',
      borderBottomColor: isInvalid ? 'red.500' : 'gray.200',
      borderRadius: 'none',
      ':not(:disabled):hover': {
        borderBottomColor: isInvalid ? undefined : 'gray.400',
      },
      ':not(:disabled):focus': {
        boxShadow: 'none',
        borderBottomColor: 'blue.400',
      },
    }),
    unstyled: () => ({
      p: 0,
      height: 'unset',
      minHeight: 'unset',
      borderRadius: 'none',
    }),
  },
};
