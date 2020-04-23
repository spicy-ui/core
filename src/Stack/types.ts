import { SpaceProps } from 'styled-system';
import { FlexProps } from '../Flex';

export interface StackProps extends FlexProps {
  /** If `true` the items will be reversed.  */
  isReversed?: boolean;
  /** Orientation of the stack. */
  orientation?: 'horizontal' | 'vertical';
  /** Spacing between each item. Accepts styled-system spacing prop values. */
  spacing?: SpaceProps['m'];
}
