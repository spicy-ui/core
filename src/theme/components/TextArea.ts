/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { TextAreaProps } from '../../components';
import { ComponentThemeConfig } from '../types';
import { Input } from './Input';

export const TextArea: ComponentThemeConfig<TextAreaProps> = {
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  baseStyle: Input.baseStyle,
  scales: {
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
      ...Input.scales!.variants,
      underlined: ({ isInvalid }) => ({
        px: 0,
        border: 'none',
        borderBottom: '2px',
        borderBottomColor: isInvalid ? 'red.500' : 'gray.300',
        borderRadius: 'none',
        _hover: {
          borderBottomColor: isInvalid ? undefined : 'gray.400',
          _disabled: { borderBottomColor: isInvalid ? 'red.500' : 'gray.300' },
        },
        _focus: {
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
  },
};
