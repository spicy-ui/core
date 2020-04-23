import { SpaceProps, WidthProps } from 'styled-system';

export type TextAreaSpace = 'xs' | 'sm' | 'md' | 'lg';

export type TextAreaVariant = 'outlined' | 'filled' | 'unstyled';

export interface TextAreaProps extends SpaceProps, WidthProps {
  /** If `true` the text area will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Indicate whether the textarea has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the text area. */
  space?: TextAreaSpace;
  /** Variant style of the text area. */
  variant?: TextAreaVariant;
}
