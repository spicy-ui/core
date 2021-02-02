import { InputProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Input: ComponentThemeConfig<InputProps> = {
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  baseStyle: () => ({
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    borderWidth: '0',
    borderColor: 'gray.300',
    borderRadius: 'sm',
    color: 'inherit',
    fontWeight: 'normal',
    lineHeight: 'tight',
    outline: 'none',
    transitionProperty: 'common',
    transitionTimingFunction: 'inOut',
    transitionDuration: '300',
    width: 'full',
    _placehoder: {
      color: 'gray.400',
    },
    _focus: {
      boxShadow: 'outline',
      zIndex: 1,
    },
    _disabled: {
      opacity: 0.7,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  }),
  scales: {
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
        _hover: {
          borderColor: 'gray.400',
          _disabled: { borderColor: 'gray.300' },
        },
        _focus: {
          borderColor: 'blue.400',
        },
      }),
      filled: ({ isInvalid }) => ({
        backgroundColor: 'gray.200',
        borderWidth: '1px',
        borderColor: 'transparent',
        boxShadow: isInvalid ? 'error' : 'none',
        _hover: {
          backgroundColor: 'gray.300',
          _disabled: { backgroundColor: 'gray.200' },
        },
      }),
      underlined: ({ isInvalid }) => ({
        p: 0,
        border: 'none',
        borderBottom: '2px',
        borderBottomColor: isInvalid ? 'red.500' : 'gray.200',
        borderRadius: 'none',
        _hover: {
          borderBottomColor: isInvalid ? undefined : 'gray.400',
          _disabled: { borderBottomColor: isInvalid ? 'red.500' : 'gray.200' },
        },
        _focus: {
          boxShadow: 'none',
          borderBottomColor: 'blue.400',
        },
      }),
      unstyled: () => ({
        p: 0,
        height: 'unset',
        borderRadius: 'none',
      }),
    },
  },
};
