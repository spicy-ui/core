import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { height, HeightProps, space, SpaceProps, width, WidthProps } from 'styled-system';
import { baseStyle, size, transition, TransitionProps, transitionProps, variant } from '../../helpers';

export interface SelectNativeProps
  extends SpaceProps,
    WidthProps,
    HeightProps,
    TransitionProps,
    React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Indicate whether the input has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the select. */
  space?: string;
  /** Variant style of the select. */
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, ...transitionProps, 'isInvalid', 'space', 'variant']);

export const SelectNative = styled('select').withConfig<SelectNativeProps>({ shouldForwardProp })`
  ${baseStyle('components.SelectNative')}
  ${size('components.SelectNative', 'space')}
  ${variant('components.SelectNative')}
  ${width}
  ${height}
  ${space}
  ${transition}
`;

SelectNative.defaultProps = {
  isInvalid: false,
  space: 'md',
  variant: 'outlined',
};
