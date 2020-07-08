import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import { useField } from '../Field';
import { baseStyle, size, transition, TransitionProps, variant, withColorMode } from '../util';

interface StyledInputProps {
  isInvalid?: boolean;
  space?: string;
  variant?: string;
}

const StyledInput = styled('input').withConfig<StyledInputProps>({
  shouldForwardProp: createShouldForwardProp([
    ...props,
    'isInvalid',
    'space',
    'variant',
    'transitionProperty',
    'transitionDuration',
    'transitionTiming',
    'transitionDelay',
  ]),
})((p) =>
  css({
    ...withColorMode(baseStyle('components.Input'))(p),
    ...withColorMode(size('components.Input', 'space'))(p),
    ...width(p),
    ...space(p),
    ...transition(p),
    ...withColorMode(variant('components.Input'))(p),
  }),
);

export interface InputProps extends SpaceProps, WidthProps, TransitionProps {
  /** Indicate whether the input has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the input. */
  space?: string;
  /** Variant style of the input. */
  variant?: string;
}

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  id,
  name,
  disabled,
  isInvalid,
  readOnly,
  required,
  ...rest
}) => {
  const field = useField();

  const inputProps = {
    id: id || field.id,
    name: name || id || field.id,
    disabled: disabled || field.isDisabled,
    isInvalid: isInvalid || field.isInvalid,
    readOnly: readOnly || field.isReadOnly,
    required: required || field.isRequired,
  };

  return <StyledInput {...rest} {...inputProps} />;
};

Input.defaultProps = {
  isInvalid: false,
  space: 'md',
  type: 'text',
  variant: 'outlined',
};

Input.displayName = 'Input';

export { Input };
