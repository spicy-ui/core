import * as React from 'react';
import { CircularProgress } from './Circular';
import { HorizontalProgress } from './Horizontal';
import { ProgressProps } from './types';

export const Progress: React.FC<ProgressProps> = ({ isCircular = false, ...rest }) => {
  return isCircular ? <CircularProgress {...rest} /> : <HorizontalProgress {...rest} />;
};
