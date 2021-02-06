import * as React from 'react';
import { CircularProgress, CircularProgressProps } from './Circular';
import { HorizontalProgress, HorizontalProgressProps } from './Horizontal';

export type ProgressProps =
  | ({ isCircular: true } & CircularProgressProps)
  | ({ isCircular: false } & HorizontalProgressProps);

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ isCircular = false, ...rest }, ref) =>
  isCircular ? <CircularProgress ref={ref} {...rest} /> : <HorizontalProgress ref={ref} {...rest} />,
);

Progress.displayName = 'Progress';
