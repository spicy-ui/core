import * as React from 'react';
import { SpaceProps, WidthProps } from 'styled-system';
import { useField } from '../Field/Context';
import { StyledInput } from './styled';

export type InputSpace = 'xs' | 'sm' | 'md' | 'lg';

export type InputVariant = 'outlined' | 'filled' | 'unstyled';

export interface InputProps extends SpaceProps, WidthProps {
  /** If `true` the input will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Indicate whether the input has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the input. */
  space?: InputSpace;
  /** Variant style of the input. */
  variant?: InputVariant;
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

  const props = {
    id: id || field.id,
    name: name || id || field.id,
    disabled: disabled || field.isDisabled,
    isInvalid: isInvalid || field.isInvalid,
    readOnly: readOnly || field.isReadOnly,
    required: required || field.isRequired,
  };

  return <StyledInput {...rest} {...props} />;
};

Input.defaultProps = {
  fullWidth: true,
  isInvalid: false,
  space: 'md',
  type: 'text',
  variant: 'outlined',
};

Input.displayName = 'Input';

export default Input;
