import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import { baseStyle, size, transition, transitionProps, TransitionProps, variant } from '../../helpers';

export interface ButtonProps extends SpaceProps, WidthProps, TransitionProps {
  /** Color of the button. Supports any key in `theme.colors`. */
  color?: string;
  /** Size of the button. */
  size?: string;
  /** Variant style of the button. */
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, ...transitionProps, 'color', 'size', 'variant']);

export const Button = styled('button').withConfig<ButtonProps>({ shouldForwardProp })`
  ${baseStyle('components.Button')}
  ${size('components.Button')}
  ${variant('components.Button')}
  ${width}
  ${space}
  ${transition}
`;

Button.defaultProps = {
  color: 'gray',
  size: 'md',
  type: 'button',
  variant: 'filled',
};
