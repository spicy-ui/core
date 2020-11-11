import { ComponentTheme } from '../types';

const CircularProgress: ComponentTheme = {
  baseStyle: ({ fontSize }) => ({
    height: '1em',
    width: '1em',
    position: 'relative',
    fontSize,
  }),
};

const CircularProgressSvg: ComponentTheme = {
  baseStyle: () => ({}),
};

const CircularProgressCircle: ComponentTheme = {
  baseStyle: () => ({}),
};

const CircularProgressInner: ComponentTheme = {
  baseStyle: () => ({}),
};

const HorizontalProgress: ComponentTheme = {
  baseStyle: () => ({}),
};

const HorizontalIndeterminateProgressInner: ComponentTheme = {
  baseStyle: ({ isCapRound }) => ({
    borderRadius: isCapRound ? 'full' : undefined,
  }),
};

const HorizontalProgressInner: ComponentTheme = {
  baseStyle: ({ isCapRound }) => ({
    display: 'flex',
    alignItems: 'center',
    borderBottomRightRadius: isCapRound ? 'full' : undefined,
    borderTopRightRadius: isCapRound ? 'full' : undefined,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  }),
};

export const ProgressComponents = {
  CircularProgress,
  CircularProgressSvg,
  CircularProgressCircle,
  CircularProgressInner,
  HorizontalProgress,
  HorizontalIndeterminateProgressInner,
  HorizontalProgressInner,
};
