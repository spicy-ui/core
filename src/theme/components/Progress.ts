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
  baseStyle: () => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
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
