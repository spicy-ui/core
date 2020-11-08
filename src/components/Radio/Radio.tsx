import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { HeightProps, WidthProps } from 'styled-system';
import { baseStyle, size } from '../../helpers';
import { Box, BoxProps } from '../Box';
import { Text } from '../Text';

interface RadioOuterProps extends BoxProps {
  htmlFor?: string;
  isDisabled?: boolean;
  space?: string;
}

export const RadioOuter = styled(Box)<RadioOuterProps>`
  ${baseStyle('components.RadioOuter')}
  ${size('components.RadioOuter', 'space')}
`;

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
  isInvalid?: boolean;
  space?: string;
}

export const RadioInput = styled('input').withConfig<RadioInputProps>({
  shouldForwardProp,
})`
  ${baseStyle('components.RadioInput')}
  ${size('components.RadioInput', 'space')}
`;

interface RadioLabelProps {}

export const RadioLabel = styled(Text)<RadioLabelProps>`
  ${baseStyle('components.RadioLabel')}
`;

export interface RadioProps
  extends WidthProps,
    HeightProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  /** Label for the radio. */
  label?: string;
  /** Indicate whether the radio has a valid value or not. */
  isInvalid?: boolean;
  /** Color of the radio. */
  color?: string;
  /** Size of the radio. */
  space?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { id, name, value, label, disabled, isInvalid, space, color, height, width, ...rest } = props;

  const outerProps: RadioOuterProps = { htmlFor: id, isDisabled: disabled, space, height, width };
  const inputProps: RadioInputProps = { id, name, value, disabled, isInvalid, color, space, ...rest };
  const labelProps: RadioLabelProps = {};

  return (
    <RadioOuter as="label" {...outerProps}>
      <RadioInput type="checkbox" {...inputProps} ref={ref} />
      {label && (
        <RadioLabel as="div" fontSize="inherit" {...labelProps}>
          {label}
        </RadioLabel>
      )}
    </RadioOuter>
  );
});

Radio.defaultProps = {
  color: 'blue',
  space: 'md',
};
