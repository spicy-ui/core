import { SystemStyleObject } from '@styled-system/css';

const sizes = {
  sm: {
    borderRadius: 'sm',
    fontSize: 'sm',
    fontWeight: 'normal',
    lineHeight: 1.2,
    px: 8,
    height: 32,
  },
  base: {
    borderRadius: 'sm',
    fontSize: 'base',
    fontWeight: 'medium',
    lineHeight: 1.2,
    px: 12,
    height: 40,
  },
  lg: {
    borderRadius: 'sm',
    fontSize: 'lg',
    fontWeight: 'medium',
    lineHeight: 1.2,
    px: 16,
    height: 48,
  },
};

const colors = {
  gray: {
    base: 'gray.500',
    text: 'text.inverse',
  },
  red: {
    base: 'red.500',
    text: 'text.inverse',
  },
  orange: {
    base: 'orange.500',
    text: 'text.inverse',
  },
  yellow: {
    base: 'yellow.500',
    text: 'text.base',
  },
  green: {
    base: 'green.500',
    text: 'text.inverse',
  },
  teal: {
    base: 'teal.500',
    text: 'text.inverse',
  },
  blue: {
    base: 'blue.500',
    text: 'text.inverse',
  },
  cyan: {
    base: 'cyan.500',
    text: 'text.base',
  },
  purple: {
    base: 'purple.500',
    text: 'text.inverse',
  },
  pink: {
    base: 'pink.500',
    text: 'text.inverse',
  },
};

export type VariantFunc = (color: { base: string; text: string }, props: any) => SystemStyleObject;

export interface VariantFunctions {
  fill?: VariantFunc;
  outline?: VariantFunc;
  ghost?: VariantFunc;
  link?: VariantFunc;
}

const variants: VariantFunctions = {};

export const buttons = {
  sizes,
  colors,
  variants,
};
