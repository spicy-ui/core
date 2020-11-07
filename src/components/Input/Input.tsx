import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { height, HeightProps, space, SpaceProps, width, WidthProps } from 'styled-system';
import { baseStyle, size, transition, TransitionProps, transitionProps, variant } from '../../helpers';

export interface InputProps
  extends SpaceProps,
    WidthProps,
    HeightProps,
    TransitionProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  /** Indicate whether the input has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the input. */
  space?: string;
  /** Variant style of the input. */
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, ...transitionProps, 'isInvalid', 'space', 'variant']);

export const Input = styled('input').withConfig<InputProps>({ shouldForwardProp })`
  ${baseStyle('components.Input')}
  ${size('components.Input', 'space')}
  ${variant('components.Input')}
  ${width}
  ${height}
  ${space}
  ${transition}
`;

Input.defaultProps = {
  isInvalid: false,
  space: 'md',
  type: 'text',
  variant: 'outlined',
};
