import { SpaceProps, WidthProps } from 'styled-system';

export type InputSpace = 'xs' | 'sm' | 'md' | 'lg';

export type InputVariant = 'outlined' | 'filled' | 'unstyled';

export interface InputProps extends SpaceProps, WidthProps {
  /** If `true` the input will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Indicate whether the input has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the input. */
  space?: InputSpace;
  /** Variant style of the input. */
  variant?: InputVariant;
}
