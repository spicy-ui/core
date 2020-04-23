import * as React from 'react';
import { useField } from '../Field/Context';
import { StyledInput } from './styled';
import { InputProps } from './types';

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

export { Input };
