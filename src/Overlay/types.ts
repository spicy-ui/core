import * as React from 'react';
import { TransitionStatus } from 'react-transition-group/Transition';

export interface OverlayProps {
  children: (state: TransitionStatus) => React.ReactNode;
  isOpen?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
