import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { HeightProps, WidthProps } from 'styled-system';
import { baseStyle, size } from '../../helpers';
import { Box, BoxProps } from '../Box';
import { Text } from '../Text';

interface CheckboxOuterProps extends BoxProps {
  htmlFor?: string;
  isDisabled?: boolean;
  space?: string;
}

export const CheckboxOuter = styled(Box)<CheckboxOuterProps>`
  ${baseStyle('components.CheckboxOuter')}
  ${size('components.CheckboxOuter', 'space')}
`;

interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
  isInvalid?: boolean;
}

export const CheckboxInput = styled('input').withConfig<CheckboxInputProps>({
  shouldForwardProp,
})`
  ${baseStyle('components.CheckboxInput')}
`;

interface CheckboxLabelProps {}

export const CheckboxLabel = styled(Text)<CheckboxLabelProps>`
  ${baseStyle('components.CheckboxLabel')}
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

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { id, name, value, label, disabled, isInvalid, space, color, height, width, ...rest } = props;

  const outerProps: CheckboxOuterProps = { htmlFor: id, isDisabled: disabled, space, height, width };
  const inputProps: CheckboxInputProps = { id, name, value, disabled, isInvalid, color, ...rest };
  const labelProps: CheckboxLabelProps = {};

  return (
    <CheckboxOuter as="label" {...outerProps}>
      <CheckboxInput type="checkbox" {...inputProps} ref={ref} />
      {label && (
        <CheckboxLabel as="div" {...labelProps}>
          {label}
        </CheckboxLabel>
      )}
    </CheckboxOuter>
  );
});

Checkbox.defaultProps = {
  color: 'blue',
  space: 'md',
};
