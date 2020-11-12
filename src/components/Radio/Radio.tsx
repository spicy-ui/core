import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { HeightProps, WidthProps } from 'styled-system';
import { baseStyle, size } from '../../helpers';
import { Box, BoxProps } from '../Box';
import { Text, TextProps } from '../Text';

interface RadioOuterProps extends BoxProps {
  htmlFor?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const RadioOuter = styled(Box).withConfig<RadioOuterProps>({ shouldForwardProp })`
  ${baseStyle('components.RadioOuter')}
  ${size('components.RadioOuter', 'space')}
`;

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const RadioInput = styled('input').withConfig<RadioInputProps>({ shouldForwardProp })`
  ${baseStyle('components.RadioInput')}
  ${size('components.RadioInput', 'space')}
`;

interface RadioLabelProps extends TextProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  space?: string;
}

export const RadioLabel = styled(Text).withConfig<RadioLabelProps>({ shouldForwardProp })`
  ${baseStyle('components.RadioLabel')}
  ${size('components.RadioLabel', 'space')}
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

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, name, value, label, checked, disabled, isInvalid, space, color, height, width, ...rest }, ref) => {
    const radioProps = { isInvalid, color, space };

    const outerProps: RadioOuterProps = {
      htmlFor: id,
      isDisabled: disabled,
      ...radioProps,
      height,
      width,
    };

    const inputProps: RadioInputProps = {
      id,
      name,
      value,
      checked,
      disabled,
      ...radioProps,
      ...rest,
    };

    const labelProps: RadioLabelProps = {
      isDisabled: disabled,
      ...radioProps,
    };

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
  },
);

Radio.defaultProps = {
  color: 'blue',
  space: 'md',
};
