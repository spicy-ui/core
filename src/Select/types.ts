import { SpaceProps, WidthProps } from 'styled-system';

export type SelectSpace = 'xs' | 'sm' | 'md' | 'lg';

export type SelectVariant = 'outlined' | 'filled' | 'unstyled';

export interface SelectProps extends SpaceProps, WidthProps {
  /** If `true` the select will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Indicate whether the input has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the select. */
  space?: SelectSpace;
  /** Variant style of the select. */
  variant?: SelectVariant;
}
