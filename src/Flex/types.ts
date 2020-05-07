import { BoxProps } from '../Box';

export interface FlexProps extends BoxProps {
  /** Shorthand for styled-system `alignItems` prop. */
  align?: BoxProps['alignItems'];
  /** Shorthand for styled-system `flexDirection` prop. */
  direction?: BoxProps['flexDirection'];
  /** Shorthand for styled-system `justifyContent` prop. */
  justify?: BoxProps['justifyContent'];
  /** Shorthand for styled-system `flexWrap` prop. */
  wrap?: BoxProps['flexWrap'];
}
