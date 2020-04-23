import { BoxProps } from '../Box';

export interface DividerProps extends BoxProps {
  /** Orientation of the divider. */
  orientation?: 'horizontal' | 'vertical';
}
