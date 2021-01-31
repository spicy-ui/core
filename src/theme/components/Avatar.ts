import { ComponentThemeConfig } from '../types';

function randomColor(string: string) {
  let hash = 0;

  for (let i = 0; i < string.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  return `hsl(${hash % 360}, 55%, 55%)`;
}

export const Avatar: ComponentThemeConfig = {
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  baseStyle: ({ name, showBorder }: any) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'medium',
    position: 'relative',
    flexShrink: 0,
    // overflow: 'hidden',
    backgroundColor: name ? randomColor(name) : 'gray.400',
    color: 'white',
    borderColor: 'white',
    borderWidth: showBorder ? '2px' : 0,
    verticalAlign: 'top',
  }),
  sizes: {
    xs: ({ theme }: any) => ({
      width: 6,
      height: 6,
      fontSize: 'xs',
      lineHeight: theme.space[6],
    }),
    sm: ({ theme }: any) => ({
      width: 8,
      height: 8,
      fontSize: 'sm',
      lineHeight: theme.space[8],
    }),
    md: ({ theme }: any) => ({
      width: 12,
      height: 12,
      fontSize: 'md',
      lineHeight: theme.space[12],
    }),
    lg: ({ theme }: any) => ({
      width: 16,
      height: 16,
      fontSize: 'lg',
      lineHeight: theme.space[16],
    }),
    xl: ({ theme }: any) => ({
      width: 24,
      height: 24,
      fontSize: 'xl',
      lineHeight: theme.space[24],
    }),
    '2xl': ({ theme }: any) => ({
      width: 32,
      height: 32,
      fontSize: '2xl',
      lineHeight: theme.space[32],
    }),
  },
  variants: {
    circle: {
      borderRadius: 'full',
    },
    rounded: ({ size }: any) => ({
      borderRadius: size,
    }),
    square: {
      borderRadius: 0,
    },
  },
};
