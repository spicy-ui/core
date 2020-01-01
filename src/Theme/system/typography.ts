import { math } from 'polished';

export const fontSizes = {
  h1: '64px',
  h2: '48px',
  h3: '32px',
  h4: '24px',
  h5: '18px',
  h6: '16px',
  lead: '20px',
  body: '16px',
  small: '12px',
};

export const fonts = {
  body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  mono: `"SFMono-Regular", Menlo, Consolas, "Liberation Mono", Courier, monospace`,
};

export const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const lineHeights = {
  normal: 'normal',
  none: '1',
  smaller: '1.25',
  base: '1.5',
};

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const typeScale = {
  h1: {
    fontSize: fontSizes.h1,
    lineHeight: math(`${fontSizes.h1} + 8px`),
  },
  h2: {
    fontSize: fontSizes.h2,
    lineHeight: math(`${fontSizes.h2} + 8px`),
  },
  h3: {
    fontSize: fontSizes.h3,
    lineHeight: math(`${fontSizes.h3} + 8px`),
  },
  h4: {
    fontSize: fontSizes.h4,
    lineHeight: math(`${fontSizes.h4} + 8px`),
  },
  h5: {
    fontSize: fontSizes.h5,
    lineHeight: math(`${fontSizes.h5} + 8px`),
  },
  h6: {
    fontSize: fontSizes.h6,
    lineHeight: math(`${fontSizes.h6} + 8px`),
  },
  lead: {
    fontSize: fontSizes.lead,
    lineHeight: math(`${fontSizes.lead} + 4px`),
  },
  body: {
    fontSize: fontSizes.body,
    lineHeight: math(`${fontSizes.body} + 8px`),
  },
  small: {
    fontSize: fontSizes.small,
    lineHeight: math(`${fontSizes.small} + 12px`),
  },
};
