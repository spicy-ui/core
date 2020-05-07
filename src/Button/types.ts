import { SpaceProps, WidthProps } from 'styled-system';

export type ButtonColor = 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonVariant = 'filled' | 'outlined' | 'ghost' | 'link';

export interface ButtonProps extends SpaceProps, WidthProps {
  /** Color of the button. */
  color?: ButtonColor;
  /** If `true` the button will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Size of the button. */
  size?: ButtonSize;
  /** Variant style of the button. */
  variant?: ButtonVariant;
}
