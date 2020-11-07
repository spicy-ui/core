import { get } from 'styled-system';
import { ComponentTheme } from '../types';

export const Input: ComponentTheme = {
  baseStyle: ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    borderWidth: '0',
    borderColor: 'inherit',
    borderRadius: 'sm',
    color: 'inherit',
    fontWeight: 'normal',
    lineHeight: 'tight',
    outline: 'none',
    transitionProperty: get(theme, 'transitions.property.common'),
    transitionDuration: get(theme, 'transitions.duration.300'),
    transitionTimingFunction: get(theme, 'transitions.timing.inOut'),
    width: 'full',
    ':not(:disabled):focus': {
      boxShadow: 'outline',
      zIndex: 1,
    },
    '::placeholder': {
      color: 'gray.400',
    },
    ':disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  }),
  sizes: {
    xs: () => ({
      fontSize: 'xs',
      px: 2,
      height: 6,
    }),
    sm: () => ({
      fontSize: 'sm',
      px: 2,
      height: 8,
    }),
    md: () => ({
      fontSize: 'md',
      px: 2,
      height: 10,
    }),
    lg: () => ({
      fontSize: 'lg',
      px: 3,
      height: 12,
    }),
  },
  variants: {
    outlined: ({ isInvalid }) => ({
      backgroundColor: 'white',
      borderWidth: '1px',
      boxShadow: isInvalid ? 'error' : 'none',
      ':not(:disabled):hover': {
        borderColor: 'gray.400',
      },
      ':not(:disabled):focus': {
        borderColor: 'blue.400',
      },
    }),
    filled: ({ isInvalid }) => ({
      backgroundColor: 'gray.50',
      borderWidth: '1px',
      borderColor: 'transparent',
      boxShadow: isInvalid ? 'error' : 'none',
      ':not(:disabled):hover': {
        backgroundColor: 'gray.100',
      },
    }),
    underlined: ({ isInvalid }) => ({
      padding: 0,
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
      padding: 0,
      borderRadius: 'none',
    }),
  },
};
