import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled, { css } from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import { baseStyle, size, transition, TransitionProps, variant, withColorMode } from '../util';

export interface ButtonProps extends SpaceProps, WidthProps, TransitionProps {
  /** Color of the button. */
  color?: string;
  /** Size of the button. */
  size?: string;
  /** Variant style of the button. */
  variant?: string;
}

const Button = styled('button').withConfig<ButtonProps>({
  shouldForwardProp: createShouldForwardProp([
    ...props,
    'color',
    'size',
    'variant',
    'transitionProperty',
    'transitionDuration',
    'transitionTiming',
    'transitionDelay',
  ]),
})((p) =>
  css({
    ...withColorMode(baseStyle('components.Button'))(p),
    ...withColorMode(size('components.Button'))(p),
    ...width(p),
    ...space(p),
    ...transition(p),
    ...withColorMode(variant('components.Button'))(p),
  }),
);

Button.defaultProps = {
  color: 'gray',
  size: 'md',
  type: 'button',
  variant: 'filled',
};

Button.displayName = 'Button';

export { Button };
