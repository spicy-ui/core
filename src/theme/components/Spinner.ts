import { ComponentThemeConfig } from '../types';

export const Spinner: ComponentThemeConfig = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: ({ thickness, trackColor, color, speed }) => ({
    display: 'inline-block',
    borderColor: 'currentcolor',
    borderStyle: 'solid',
    borderRadius: 'full',
    borderWidth: thickness,
    borderBottomColor: trackColor,
    borderLeftColor: trackColor,
    color,
    animation: ({ animationNames: { spin } }) => `${spin} ${speed} linear infinite`,
  }),
  sizes: {
    xs: {
      height: 3,
      width: 3,
    },
    sm: {
      height: 4,
      width: 4,
    },
    md: {
      height: 6,
      width: 6,
    },
    lg: {
      height: 8,
      width: 8,
    },
    xl: {
      height: 12,
      width: 12,
    },
  },
};
