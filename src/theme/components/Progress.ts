import { CircularProgressProps } from '../../components/Progress/Circular';
import { HorizontalProgressProps } from '../../components/Progress/Horizontal';
import { ComponentThemeConfig } from '../types';

export const ProgressCircular: ComponentThemeConfig<CircularProgressProps> = {
  baseStyle: ({ size }) => ({
    height: '1em',
    width: '1em',
    position: 'relative',
    fontSize: size,
  }),
};

export const ProgressCircularSvg: ComponentThemeConfig<CircularProgressProps> = {
  baseStyle: () => ({}),
};

export const ProgressCircularShape: ComponentThemeConfig<CircularProgressProps> = {
  baseStyle: () => ({}),
};

export const ProgressCircularInner: ComponentThemeConfig<CircularProgressProps> = {
  baseStyle: () => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
};

export const ProgressHorizontal: ComponentThemeConfig<HorizontalProgressProps> = {
  baseStyle: () => ({}),
};

export const ProgressHorizontalIndeterminateInner: ComponentThemeConfig<HorizontalProgressProps> = {
  baseStyle: ({ color, isCapRound }) => ({
    height: 'full',
    bgColor: color,
    borderRadius: isCapRound ? 'full' : undefined,
    animationDuration: '1.4s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationTimingFunction: ({ transition }: any) => transition.timingFn.inOut,
  }),
};

export const ProgressHorizontalInner: ComponentThemeConfig<HorizontalProgressProps> = {
  baseStyle: ({ color, isCapRound }) => ({
    height: 'full',
    display: 'flex',
    alignItems: 'center',
    bgColor: color,
    borderBottomRightRadius: isCapRound ? 'full' : undefined,
    borderTopRightRadius: isCapRound ? 'full' : undefined,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  }),
};
