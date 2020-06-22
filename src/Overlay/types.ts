import * as React from 'react';
import { TransitionStatus } from 'react-transition-group/Transition';
import { BoxProps } from '../Box';

export interface OverlayProps extends BoxProps {
  children: (state: TransitionStatus) => React.ReactNode;
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
