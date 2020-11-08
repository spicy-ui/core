import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { HeightProps, WidthProps } from 'styled-system';
import { baseStyle, size } from '../../helpers';
import { Box, BoxProps } from '../Box';

interface SwitchOuterProps extends BoxProps {
  htmlFor?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const SwitchOuter = styled(Box).withConfig<SwitchOuterProps>({ shouldForwardProp })`
  ${baseStyle('components.SwitchOuter')}
  ${size('components.SwitchOuter', 'space')}
`;

interface SwitchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const SwitchInput = styled('input').withConfig<SwitchInputProps>({ shouldForwardProp })`
  ${baseStyle('components.SwitchInput')}
  ${size('components.SwitchInput', 'space')}
`;

interface SwitchToggleProps extends BoxProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const SwitchToggle = styled(Box).withConfig<SwitchToggleProps>({ shouldForwardProp })`
  ${baseStyle('components.SwitchToggle')}
  ${size('components.SwitchToggle', 'space')}
`;

export interface SwitchProps
  extends WidthProps,
    HeightProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  /** Indicate whether the switch has a valid value or not. */
  isInvalid?: boolean;
  /** Color of the switch. */
  color?: string;
  /** Size of the switch. */
  space?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, name, value, checked, disabled, isInvalid, color, space, height, width, ...rest }, ref) => {
    const switchProps = { isInvalid, color, space };

    const outerProps: SwitchOuterProps = {
      htmlFor: id,
      isDisabled: disabled,
      ...switchProps,
      height,
      width,
    };

    const inputProps: SwitchInputProps = {
      id,
      name,
      value,
      checked,
      disabled,
      ...switchProps,
      ...rest,
    };

    const toggleProps: SwitchToggleProps = {
      isDisabled: disabled,
      ...switchProps,
    };

    return (
      <SwitchOuter as="label" {...outerProps}>
        <SwitchInput type="checkbox" role="switch" {...inputProps} ref={ref} />
        <SwitchToggle data-switch-checked={checked ? 'true' : 'false'} {...toggleProps} />
      </SwitchOuter>
    );
  },
);

Switch.defaultProps = {
  color: 'blue',
  space: 'md',
};
