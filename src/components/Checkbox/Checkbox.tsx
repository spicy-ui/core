import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { HeightProps, WidthProps } from 'styled-system';
import { baseStyle, size } from '../../helpers';
import { Box, BoxProps } from '../Box';
import { Text, TextProps } from '../Text';

interface CheckboxOuterProps extends BoxProps {
  htmlFor?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const CheckboxOuter = styled(Box).withConfig<CheckboxOuterProps>({ shouldForwardProp })`
  ${baseStyle('components.CheckboxOuter')}
  ${size('components.CheckboxOuter', 'space')}
`;

interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const CheckboxInput = styled('input').withConfig<CheckboxInputProps>({ shouldForwardProp })`
  ${baseStyle('components.CheckboxInput')}
  ${size('components.CheckboxInput', 'space')}
`;

interface CheckboxLabelProps extends TextProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const CheckboxLabel = styled(Text).withConfig<CheckboxLabelProps>({ shouldForwardProp })`
  ${baseStyle('components.CheckboxLabel')}
  ${size('components.CheckboxLabel', 'space')}
`;

export interface CheckboxProps
  extends WidthProps,
    HeightProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  /** Label for the checkbox. */
  label?: string;
  /** Indicate whether the checkbox has a valid value or not. */
  isInvalid?: boolean;
  /** Color of the checkbox. */
  color?: string;
  /** Size of the checkbox. */
  space?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, name, value, label, checked, disabled, isInvalid, color, space, height, width, ...rest }, ref) => {
    const checkboxProps = { isInvalid, color, space };

    const outerProps: CheckboxOuterProps = {
      htmlFor: id,
      isDisabled: disabled,
      ...checkboxProps,
      height,
      width,
    };

    const inputProps: CheckboxInputProps = {
      id,
      name,
      value,
      checked,
      disabled,
      ...checkboxProps,
      ...rest,
    };

    const labelProps: CheckboxLabelProps = {
      isDisabled: disabled,
      ...checkboxProps,
    };

    return (
      <CheckboxOuter as="label" {...outerProps}>
        <CheckboxInput type="checkbox" {...inputProps} ref={ref} />
        {label && (
          <CheckboxLabel as="div" fontSize="inherit" {...labelProps}>
            {label}
          </CheckboxLabel>
        )}
      </CheckboxOuter>
    );
  },
);

Checkbox.defaultProps = {
  color: 'blue',
  space: 'md',
};
