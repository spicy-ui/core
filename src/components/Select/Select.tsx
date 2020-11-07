import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { height, HeightProps, space, SpaceProps, width, WidthProps } from 'styled-system';
import { baseStyle, size, transition, TransitionProps, transitionProps, variant } from '../../helpers';

export interface SelectProps
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

export const Select = styled('select').withConfig<SelectProps>({ shouldForwardProp })`
  ${baseStyle('components.Select')}
  ${size('components.Select', 'space')}
  ${variant('components.Select')}
  ${width}
  ${height}
  ${space}
  ${transition}
`;

Select.defaultProps = {
  isInvalid: false,
  space: 'md',
  variant: 'outlined',
};
